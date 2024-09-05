import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserFocus } from "@phosphor-icons/react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container } from "./cadGuiaStyles";
import { useForm } from "react-hook-form";
import { api } from "../../service/api";
import RosaDireita from "../../assets/rosaFrameUm.svg";

export default function CadastroGuia() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

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
      
      setIsSuccessModalOpen(true); // Abre o modal de sucesso
      setTimeout(() => navigate("/"), 2000); // Redireciona após 2 segundos
    } catch (error) {
      if (error.response && error.response.data) {
        const { status, message } = error.response.data;
        if (status === 409) {
          alert(
            message ||
              "Usuário já existe. Tente novamente com um e-mail diferente."
          );
        } else if (status === 422) {
          alert(message || "Erro ao realizar o cadastro. Tente novamente.");
        } else {
          alert("Erro ao realizar o cadastro. Tente novamente.");
        }
      } else {
        alert("Erro de rede ou servidor. Tente novamente.");
      }
    }
  };

  const isCheckboxChecked = watch("acceptTerms", false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeSuccessModal = () => setIsSuccessModalOpen(false);

  return (
    <>
      <Menu />
      <Container>
        <div className="ondas">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffd700"
              fillOpacity="1"
              d="M0,64L40,58.7C80,53,160,43,240,53.3C320,64,400,96,480,122.7C560,149,640,171,720,197.3C800,224,880,256,960,272C1040,288,1120,288,1200,266.7C1280,245,1360,203,1400,181.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>{" "}
        </div>

        <div className="container-formulario-foto">
          <div className="box-titulo-formulario">
            <div className="titulo">
              <h2>
                Olá, Guia <br />
                Cadastre sua conta.
              </h2>
            </div>

            <div className="main-content">
              <div className="inputArea">
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
                        Aceito{" "}
                        <span onClick={openModal} className="privacy-policy-link">
                          política de privacidade
                        </span>{" "}
                        e{" "}
                        <span>condições gerais</span>{" "}
                      </label>
                    </div>

                    {errors.acceptTerms && (
                      <p className="error-text">{errors.acceptTerms.message}</p>
                    )}

                    <label className="inputtext">
                      Este site está protegido por reCAPTCHA e se aplicam à{" "}
                      <span onClick={openModal} className="privacy-policy-link">
                        política de privacidade
                      </span>{" "}
                      e aos <br />{" "}
                      <span>termos e serviços do Google</span>.
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
            </div>
          </div>        
          <div className="imagemArea">
            <section className="inputfoto">
              <p className="p">Escolha sua Foto de Perfil</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="fileInput"
              />
              <label htmlFor="fileInput" className="alterafoto">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Imagem selecionada"
                    className="selectedImage"
                  />
                ) : (
                  <UserFocus className="vetor" size={90} color="#636363" />
                )}
              </label>
            </section>
          </div>
        </div>       

        <img src={RosaDireita} alt="" className="rosaventos-direita" />

        {/* Modal de Política de Privacidade */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>X</button>
              <h2>Política de Privacidade</h2>
              <p>
                Este é um texto genérico de política de privacidade. 
                Aqui você pode fornecer informações sobre como os dados do usuário são coletados, 
                utilizados e protegidos. Certifique-se de personalizar com base nas necessidades 
                da sua aplicação e nas leis aplicáveis.
              </p>
            </div>
          </div>
        )}

        {/* Modal de Sucesso do Cadastro */}
        {isSuccessModalOpen && (
          <div className="modal-overlay" onClick={closeSuccessModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeSuccessModal}>X</button>
              <h2>Cadastro Bem-sucedido</h2>
              <p>Seu cadastro foi realizado com sucesso!</p>
            </div>
          </div>
        )}
      </Container>

      <Footer />
    </>
  );
}
