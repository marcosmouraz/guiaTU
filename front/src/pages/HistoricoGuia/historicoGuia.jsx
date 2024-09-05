import { useState } from "react";
import { Star } from "@phosphor-icons/react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container } from "./historicoGuiaStyles";
import PerfilUm from "../../assets/perfil_menu.svg";
import PerfilDois from "../../assets/perfilTurista1.svg";
import PerfilTres from "../../assets/perfilTurista2.svg";
import PerfilQuatro from "../../assets/perfilTurista3.svg";
import PerfilCinco from "../../assets/perfilTurista4.svg";
import Chat from "../../assets/vetorChat.svg";
import FrameSolicitacoes from "../../components/FrameSolicitacoes/frameSolicitacoes";

export default function HistoricoGuia() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <>
      <Menu />
      <Container>
        <FrameSolicitacoes />

        <div className="titulopagina">
          <h2>Gerenciador de passeios</h2>
        </div>

        <div className="blocoRight">
          <div className="tituloRight">
            <h3>Turistas Confirmados:</h3>
          </div>
          <section className="FrameRight">
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
        <Footer />
      </Container>
    </>
  );
}
