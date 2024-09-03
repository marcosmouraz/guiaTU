import React, { useState } from "react";
import { UserFocus } from "@phosphor-icons/react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container, ModalOverlay, ModalContent } from "./cadGuiaStyles";
import { useForm } from "react-hook-form";
import { api } from "../../service/api";
import RosaVentos from "../../assets/rosaVentos.svg"

export default function CadastroGuia() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const onSubmit = async (data) => {
    const [day, month, year] = data.data_nascimento.split("/");
    const formattedDate = new Date(`${year}-${month}-${day}`);

    try {
      const response = await api.post("/guia/create", {
        nome: data.nome,
        sobrenome: data.sobrenome,
        data_nascimento: formattedDate,
        cpf: data.cpf,
        pais: data.pais,
        estado: data.estado,
        username: data.username,
        senha_hash: data.senha_hash,
        credencial: data.credencial,
      });
      localStorage.setItem("token", response.data.token);
      setModalMessage("Cadastro realizado com sucesso!");
      setShowModal(true);
    } catch (error) {
      setModalMessage("Erro ao realizar o cadastro. Tente novamente.");
      setShowModal(true);
    }
  };

  const isCheckboxChecked = watch("acceptTerms", false);

  return (
    <>
      <Menu />
      <Container>
        <div className="titulo">
          <h2>
            Olá, Guia <br />
            Cadastre sua conta.
          </h2>
        </div>

        <div className="main-content">
          <div className="inputArea">
            <section className="DadosPessoais">
              <h4>Dados pessoais</h4>
            </section>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="inputContainer">
                <div className="inputLeft">
                  <input
                    className={`nome ${errors.nome ? "error" : ""}`}
                    type="text"
                    placeholder="Nome"
                    {...register("nome", { required: "Nome é obrigatório" })}
                  />
                  <input
                    className={`sobrenome ${errors.sobrenome ? "error" : ""}`}
                    type="text"
                    placeholder="Sobrenome"
                    {...register("sobrenome", {
                      required: "Sobrenome é obrigatório",
                    })}
                  />
                  <input
                    className={`dataNascimento ${
                      errors.data_nascimento ? "error" : ""
                    }`}
                    type="text"
                    placeholder="Data de nascimento"
                    {...register("data_nascimento", {
                      required: "Data de nascimento é obrigatória",
                    })}
                  />
                  <input
                    className={`cpf ${errors.cpf ? "error" : ""}`}
                    type="text"
                    placeholder="CPF"
                    {...register("cpf", { required: "CPF é obrigatório" })}
                  />
                  <input
                    className={`pais ${errors.pais ? "error" : ""}`}
                    type="text"
                    placeholder="País"
                    {...register("pais", { required: "País é obrigatório" })}
                  />
                </div>
                <div className="inputRight">
                  <input
                    className={`estado ${errors.estado ? "error" : ""}`}
                    type="text"
                    placeholder="Estado"
                    {...register("estado", {
                      required: "Estado é obrigatório",
                    })}
                  />
                  <input
                    className={`credencial ${errors.credencial ? "error" : ""}`}
                    type="text"
                    placeholder="Credencial"
                    {...register("credencial", {
                      required: "Credencial é obrigatória",
                    })}
                  />
                  <input
                    className={`email ${errors.username ? "error" : ""}`}
                    type="text"
                    placeholder="E-mail"
                    {...register("username", {
                      required: "E-mail é obrigatório",
                    })}
                  />
                  <input
                    className={`senha ${errors.senha_hash ? "error" : ""}`}
                    type="password"
                    placeholder="Senha"
                    {...register("senha_hash", {
                      required: "Senha é obrigatória",
                    })}
                  />
                  <input
                    className={`confirmeSenha ${
                      errors.confirmeSenha ? "error" : ""
                    }`}
                    type="password"
                    placeholder="Confirme sua senha"
                    {...register("confirmeSenha", {
                      required: "Confirme sua senha é obrigatória",
                      validate: (value) =>
                        value === watch("senha_hash") ||
                        "As senhas não correspondem",
                    })}
                  />
                </div>
              </div>

              <div className="checkbox">
                <div className="ContentC">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    {...register("acceptTerms", {
                      required: "Você deve aceitar os termos e condições",
                    })}
                  />
                  <label className="custom-checkbox">
                    Aceito <a href="">política de privacidade</a> e{" "}
                    <a href="">condições gerais</a>{" "}
                  </label>
                </div>

                <label className="inputtext">
                  Este site está protegido por reCAPTCHA e se aplicam à{" "}
                  <a href="">política de privacidade</a> e aos <br />{" "}
                  <a href="">termos e serviços do Google</a>.
                </label>
              </div>

              <div className="buttonContainer">
                <button
                  type="submit"
                  className="buttonFinalizar"
                  disabled={!isCheckboxChecked}
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>

          <div className="imagemArea">
            <section className="inputfoto">
              <p className="p">Escolha sua Foto de Perfil</p>
              <a href="">
                <div className="alterafoto">
                  <UserFocus className="vetor" size={90} color="#636363" />
                </div>
              </a>
            </section>
            <div className="rosa">
              <img src={RosaVentos} alt="" className="rosaventos" />
            </div>
          </div>
        </div>

        {showModal && (
          <ModalOverlay>
            <ModalContent>
              <p>{modalMessage}</p>
              <button onClick={() => setShowModal(false)}>Fechar</button>
            </ModalContent>
          </ModalOverlay>
        )}
        <div className="ondas">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffd700"
              fill-opacity="1"
              d="M0,64L40,58.7C80,53,160,43,240,53.3C320,64,400,96,480,122.7C560,149,640,171,720,197.3C800,224,880,256,960,272C1040,288,1120,288,1200,266.7C1280,245,1360,203,1400,181.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>{" "}
        </div>
      </Container>

      <Footer />
    </>
  );
}
