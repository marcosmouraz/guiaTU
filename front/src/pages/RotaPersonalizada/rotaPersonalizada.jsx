import React, { useState, useRef, useEffect } from "react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container } from "../RotaPersonalizada/rotaPersonalizadaStyle";
import { useForm, useFieldArray } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import styled from "styled-components";

export default function RotaPersonalizada() {
  const mapRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { value } = location.state || {};

  const [valorTotal, setValorTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [pessoas, setPessoas] = useState(1);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      partida: "",
      destino: "",
      inputs: [{ value: "" }],
      calendario: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "inputs",
  });

  const onFormSubmit = (data) => {
    if (
      !data.partida ||
      !data.destino ||
      !data.calendario ||
      !data.inputs.length
    ) {
      setModalMessage("Por favor, preencha todos os campos!");
      setShowModal(true);
      return;
    }

    const partida = 50;
    const paradas = 50 * data.inputs.length;
    const destino = 50;

    const valorTotal = partida + paradas + destino;
    setValorTotal(valorTotal);
    setModalMessage("Reserva efetuada com sucesso!");
    setShowModal(true);
  };

  useEffect(() => {
    const marcoZero = [-8.0645, -34.8711];
    const mercadoCultura = [-8.0539, -34.8823];

    if (mapRef.current === null) {
      const map = L.map("map").setView(marcoZero, 14);
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const routingControl = L.Routing.control({
        waypoints: [L.latLng(marcoZero), L.latLng(mercadoCultura)],
        routeWhileDragging: true,
      }).addTo(map);

      // Remove routing instructions and controls after the map and routing control are initialized
      setTimeout(() => {
        const routingAlt = document.querySelector(".leaflet-routing-alt");
        const routingContainer = document.querySelector(
          ".leaflet-routing-container"
        );

        if (routingAlt) {
          routingAlt.remove();
        }

        if (routingContainer) {
          routingContainer.remove();
        }
      }, 1000); // Delay to ensure that the elements are added to the DOM
    }

    return () => {
      if (mapRef.current !== null) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const handleChange = (event) => {
    setPessoas(Number(event.target.value));
  };

  const onRouteSubmit = async (data) => {
    try {
      const response = await api.post("/rotaTur/create", {
        partida: data.partida,
        paradaUm: data.paradaUm,
        paradaDois: data.paradaDois,
        destino: data.destino,
        valor: data.valor,
        turista_id: data.turista_id, // Supondo que o turista_id seja enviado do front-end
      });

      alert("Rota turística cadastrada com sucesso!");
      navigate("/"); // Redireciona para a página inicial
    } catch (error) {
      if (error.response && error.response.data) {
        const { status, message } = error.response.data;
        if (status === 409) {
          alert(
            message ||
              "Erro: Rota já existe ou dados duplicados. Tente novamente."
          );
        } else if (status === 422) {
          alert(message || "Erro de validação. Verifique os dados.");
        } else {
          alert("Erro ao realizar o cadastro. Tente novamente.");
        }
      } else {
        alert("Erro de rede ou servidor. Tente novamente.");
      }
    }
  };

  return (
    <>
      <Menu />
      <Container>
        <section className="blocoFora">
          <div className="titulo">
            <h1>Olá Turista, personalize sua rota:</h1>
          </div>
          <div className="blocosDentro">
            <div className="blocoleft">
              <div className="formulario">
                <div className="buttonsTop">
                  <input
                    {...register("partida", { required: "Campo obrigatório" })}
                    placeholder={"Partida"}
                  />
                  {errors.partida && (
                    <ErrorText>{errors.partida.message}</ErrorText>
                  )}
                  <button
                    className="adicionar"
                    type="button"
                    onClick={() => append({ value: "" })}
                  >
                    +
                  </button>
                </div>
                {fields.map((field, index) => (
                  <div className="buttons" key={field.id}>
                    <div className="buttonsMid">
                      <input
                        {...register(`inputs.${index}.value`, {
                          required: "Campo obrigatório",
                        })}
                        placeholder={`Parada ${index + 1}`}
                      />
                      <button
                        className="remover"
                        type="button"
                        onClick={() => remove(index)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
                <input
                  {...register("destino", { required: "Campo obrigatório" })}
                  placeholder={"Destino"}
                />
                {errors.destino && (
                  <ErrorText>{errors.destino.message}</ErrorText>
                )}
                <div className="selecioneData">
                  <h4>Selecione a data</h4>
                  <h4>Qnt. Pessoas</h4>
                </div>
                <div className="inputsReserva">
                  <input
                    type="date"
                    name="calendario"
                    id="data"
                    {...register("calendario", {
                      required: "Campo obrigatório",
                    })}
                  />
                  {errors.calendario && (
                    <ErrorText>{errors.calendario.message}</ErrorText>
                  )}
                  <select
                    name="qntPessoas"
                    id="qntPessoas"
                    value={pessoas}
                    onChange={handleChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div className="valor">
                <h3>Preço:</h3>
                <p>R$</p>
                {valorTotal}
              </div>
              <div className="textoButton">
                <div className="inclusos">
                  <p>Inclusos:</p>
                </div>
                <div className="guia">
                  <p>- Guia de Turismo (CADASTRUR)</p>
                </div>
              </div>
            </div>

            <div className="blocoright">
              <div className="blocoMapa">
                <div id="map" style={{ height: "350px", width: "100%" }}></div>
              </div>
              <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="buttonReservar">
                  <button type="submit">Reserve agora!</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Container>

      {showModal && (
        <ModalOverlay>
          <ModalContainer>
            <p>{modalMessage}</p>
            <CloseButton
              onClick={() => {
                setShowModal(false);
                navigate("/historicoturista");
              }}
            >
              Fechar
            </CloseButton>
          </ModalContainer>
        </ModalOverlay>
      )}

      <Footer />
    </>
  );
}

const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin: 0.5rem 0;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Ensures modal is on top */
`;

const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
  text-align: center;
  z-index: 1001; /* Ensures modal content is on top of overlay */
`;

const CloseButton = styled.button`
  background: #04136e;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background: #e3a83f;
    color: #04136e;
  }
`;
