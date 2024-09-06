import { useState } from "react";
import { Star } from "@phosphor-icons/react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container } from "./historicoGuiaStyles";
import CardRecife from "../../assets/cardRecifeFrame.svg";
import Museu from "../../assets/brennand.svg";
import PerfilUm from "../../assets/perfil_menu.svg";
import PerfilDois from "../../assets/perfilTurista1.svg";
import PerfilTres from "../../assets/perfilTurista2.svg";
import PerfilQuatro from "../../assets/perfilTurista3.svg";
import PerfilCinco from "../../assets/perfilTurista4.svg";
import Chat from "../../assets/vetorChat.svg";

export default function HistoricoGuia() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedFrame, setSelectedFrame] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);

  const getFrameContent = () => {
    switch (selectedSection) {
      case "ativos":
        return {
          frame1: {
            title: "Tour pelo Recife antigo.",
            description:
              "Conheça a historia de Recife essa cidade com a terceira rua mais belas do Mundo, conhecendo suas origens e evolução enquanto exploramos as ruas dessa cidade maravilhosa.",
            image: CardRecife,
            status: "Ativo",
          },
          frame2: {
            title: "Int. Ricardo Brennand.",
            description:
              "Conheça o maior acervo de artes da América do Sul do instituto Brennand.",
            image: Museu,
            status: "Ativo",
          },
        };
      case "encerrados":
        return {
          frame1: {
            title: "Passeio Encerrado 1",
            description: "Descrição do passeio encerrado 1.",
            image: CardRecife,
            status: "Desativado",
          },
          frame2: {
            title: "Passeio Encerrado 2",
            description: "Descrição do passeio encerrado 2.",
            image: Museu,
            status: "Desativado",
          },
        };
      case "solicitacoes":
        return {
          frame1: {
            title: "Solicitação 1",
            description: "Descrição da solicitação 1.",
            image: CardRecife,
          },
          frame2: {
            title: "Solicitação 2",
            description: "Descrição da solicitação 2.",
            image: Museu,
          },
        };
      default:
        return {
          frame1: null,
          frame2: null,
        };
    }
  };

  const { frame1, frame2 } = getFrameContent();

  return (
    <>
      <Menu />
      <Container>
        <div className="titulopagina">
          <h2>Gerenciador de passeios</h2>
        </div>
        <div className="blocos">

          <div className="blocoLeft">
            <div className="buttonPasseios">
              <a
                href="#"
                className={
                  selectedSection === "solicitacoes" ? "activeButton" : ""
                }
                onClick={() => setSelectedSection("solicitacoes")}
              >
                <h3 className="solicitacoes">Solicitações de Passeios</h3>
              </a>
              <a
                href="#"
                className={selectedSection === "ativos" ? "activeButton" : ""}
                onClick={() => setSelectedSection("ativos")}
              >
                <h3 className="ativos">Passeios Ativos</h3>
              </a>
              <a
                href="#"
                className={
                  selectedSection === "encerrados" ? "activeButton" : ""
                }
                onClick={() => setSelectedSection("encerrados")}
              >
                <h3 className="encerrados">Passeios Encerrados</h3>
              </a>
            </div>

            {/* FRAME 01 */}
            {frame1 && (
              <section
                className={`Frame1 ${
                  selectedFrame === 1 ? "selectedFrame" : ""
                }`}
                onClick={() => setSelectedFrame(1)}
              >
                <div className="cardCidade">
                  <img src={frame1.image} alt="" className="imagem-fundo" />
                </div>

                <div className="textosFrame">
                  <div className="titulo">
                    <h3>{frame1.title}</h3>
                    {selectedSection === "solicitacoes" ? (
                      <p>Aceitar / Cancelar</p>
                    ) : (
                      <p>Editar</p>
                    )}
                  </div>

                  <div className="infoGuia">
                    {selectedSection === "ativos" ||
                    selectedSection === "encerrados" ? (
                      <>
                        <Star
                          className="estrela"
                          size={16}
                          color="#f1f500"
                          weight="fill"
                        />
                        <p className="nota">4.2</p>
                        <p className="avaliacao">83 avaliações</p>
                      </>
                    ) : null}
                  </div>

                  <div className="paragrafo">
                    <p>{frame1.description}</p>
                  </div>
                  {selectedSection !== "solicitacoes" && (
                    <div
                      className={`status ${
                        frame1.status === "Desativado"
                          ? "status-desativado"
                          : ""
                      }`}
                    >
                      <h3>{frame1.status}</h3>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* FRAME 02 */}
            {frame2 && (
              <section
                className={`Frame2 ${
                  selectedFrame === 2 ? "selectedFrame" : ""
                }`}
                onClick={() => setSelectedFrame(2)}
              >
                <div className="cardCidade">
                  <img src={frame2.image} alt="" className="imagem-fundo" />
                </div>

                <div className="textosFrame">
                  <div className="titulo">
                    <h3>{frame2.title}</h3>
                    {selectedSection === "solicitacoes" ? (
                      <p>Aceitar / Cancelar</p>
                    ) : (
                      <p>Editar</p>
                    )}
                  </div>

                  <div className="infoGuia">
                    {selectedSection === "ativos" ||
                    selectedSection === "encerrados" ? (
                      <>
                        <Star
                          className="estrela"
                          size={16}
                          color="#f1f500"
                          weight="fill"
                        />
                        <p className="nota">4.2</p>
                        <p className="avaliacao">83 avaliações</p>
                      </>
                    ) : null}
                  </div>

                  <div className="paragrafo">
                    <p>{frame2.description}</p>
                  </div>
                  {selectedSection !== "solicitacoes" && (
                    <div
                      className={`status ${
                        frame2.status === "Desativado"
                          ? "status-desativado"
                          : ""
                      }`}
                    >
                      <h3>{frame2.status}</h3>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>

          <div className="blocoRight">
            <div className="tituloRight">
              <h3>Turistas Confirmados:</h3>
            </div>
            <section className="FrameRight">
              {/* TURISTA 01 */}
              <div
                className={`chatSelecionado ${
                  selectedChat === 1 ? "selectedChat" : ""
                }`}
                onClick={() => setSelectedChat(1)}
              >
                <div className="frameFoto">
                  <div className="fotoUm">
                    <img src={PerfilUm} alt="" className="imagem-fundo" />
                  </div>
                </div>

                <div className="infoTurista">
                  <div className="nomeTurista">
                    <p>Karen Albuquerque</p>
                  </div>
                  <div className="data">
                    <p>25/08/2024</p>
                  </div>
                  <div className="qntPessoas">
                    <p>02 pessoas</p>
                  </div>
                </div>
                <div className="final">
                  <div className="iconChat">
                    <img src={Chat} alt="" />
                  </div>
                </div>
              </div>

              {/* TURISTA 02 */}
              <div
                className={`chatUm ${selectedChat === 2 ? "selectedChat" : ""}`}
                onClick={() => setSelectedChat(2)}
              >
                <div className="frameFoto">
                  <div className="fotoUm">
                    <img src={PerfilDois} alt="" className="imagem-fundo" />
                  </div>
                </div>

                <div className="infoTurista">
                  <div className="nomeTurista">
                    <p>Marcos Moura</p>
                  </div>
                  <div className="data">
                    <p>02/08/2024</p>
                  </div>
                  <div className="qntPessoas">
                    <p>01 pessoa</p>
                  </div>
                </div>
                <div className="final">
                  <div className="iconChat">
                    <img src={Chat} alt="" />
                  </div>
                </div>
              </div>

              {/* TURISTA 03 */}
              <div
                className={`chatUm ${selectedChat === 3 ? "selectedChat" : ""}`}
                onClick={() => setSelectedChat(3)}
              >
                <div className="frameFoto">
                  <div className="fotoUm">
                    <img src={PerfilTres} alt="" className="imagem-fundo" />
                  </div>
                </div>

                <div className="infoTurista">
                  <div className="nomeTurista">
                    <p>Saulo Botelho</p>
                  </div>
                  <div className="data">
                    <p>07/09/2024</p>
                  </div>
                  <div className="qntPessoas">
                    <p>03 pessoas</p>
                  </div>
                </div>
                <div className="final">
                  <div className="iconChat">
                    <img src={Chat} alt="" />
                  </div>
                </div>
              </div>

              {/* TURISTA 04 */}
              <div
                className={`chatUm ${selectedChat === 4 ? "selectedChat" : ""}`}
                onClick={() => setSelectedChat(4)}
              >
                <div className="frameFoto">
                  <div className="fotoUm">
                    <img src={PerfilQuatro} alt="" className="imagem-fundo" />
                  </div>
                </div>

                <div className="infoTurista">
                  <div className="nomeTurista">
                    <p>Heloisa Morais</p>
                  </div>
                  <div className="data">
                    <p>02/10/2024</p>
                  </div>
                  <div className="qntPessoas">
                    <p>02 pessoas</p>
                  </div>
                </div>
                <div className="final">
                  <div className="iconChat">
                    <img src={Chat} alt="" />
                  </div>
                </div>
              </div>

              {/* TURISTA 05 */}
              <div
                className={`chatUm ${selectedChat === 5 ? "selectedChat" : ""}`}
                onClick={() => setSelectedChat(5)}
              >
                <div className="frameFoto">
                  <div className="fotoUm">
                    <img src={PerfilCinco} alt="" className="imagem-fundo" />
                  </div>
                </div>

                <div className="infoTurista">
                  <div className="nomeTurista">
                    <p>Marcelo Castro</p>
                  </div>
                  <div className="data">
                    <p>31/08/2024</p>
                  </div>
                  <div className="qntPessoas">
                    <p>04 pessoas</p>
                  </div>
                </div>
                <div className="final">
                  <div className="iconChat">
                    <img src={Chat} alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
}

