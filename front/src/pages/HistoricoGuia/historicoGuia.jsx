import { Star } from "@phosphor-icons/react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container } from "./historicoGuiaStyles";
import CardRecife from "../../assets/cardRecifeFrame.svg";
import Museu from "../../assets/brennand.svg";
import PerfilUm from "../../assets/perfil_menu.svg"
import PerfilDois from "../../assets/perfilTurista1.svg";
import PerfilTres from "../../assets/perfilTurista2.svg";
import PerfilQuatro from "../../assets/perfilTurista3.svg";
import PerfilCinco from "../../assets/perfilTurista4.svg";
import Chat from "../../assets/vetorChat.svg";

export default function HistoricoGuia() {
  return (
    <>
      <Menu />
      <Container>
        <div className="titulopagina">
          <h2>Gerênciador de passeios</h2>
        </div>

        <div className="blocos">
          <div className="blocoLeft">
            <div className="buttonPasseios">
              <a href="">
                <h3 className="solicitacoes" onClick={1}>
                  Solicitações de Passeios
                </h3>
              </a>
              <a href="">
                <h3 className="ativos" onClick={1}>
                  Passeios Ativos
                </h3>
              </a>
              <a href="">
                <h3 className="encerrados" onClick={1}>
                  Passeios Encerrados
                </h3>
              </a>
            </div>
            {/* FRAME 01 /////////////////////////////// */}
            <section className="Frame1">
              <div className="cardCidade">
                <img src={CardRecife} alt="" className="imagem-fundo" />
              </div>

              <div className="textosFrame">
                <div className="titulo">
                  <h3>Tour pelo Recife antigo.</h3>
                  <p>Editar</p>
                </div>

                <div className="infoGuia">
                  <Star
                    className="estrela"
                    size={16}
                    color="#f1f500"
                    weight="fill"
                  />
                  <p className="nota">4.2</p>
                  <p className="avaliacao">83 avaliações</p>
                </div>

                <div className="paragrafo">
                  <p>
                    Conheça a historia de Recife essa cidade com a terceira rua
                    mais belas do Mundo, conhecendo suas origens e evolução
                    enquanto exploramos as ruas dessa cidade maravilhosa.
                  </p>
                </div>
              </div>
            </section>

            {/* FRAME 02 /////////////////////////////// */}
            <section className="Frame2">
              <div className="cardCidade">
                <img src={Museu} alt="" className="imagem-fundo" />
              </div>

              <div className="textosFrame">
                <div className="titulo">
                  <h3>Int. Ricardo Brennand.</h3>
                  <p>Editar</p>
                </div>

                <div className="infoGuia">
                  <Star
                    className="estrela"
                    size={16}
                    color="#f1f500"
                    weight="fill"
                  />
                  <p className="nota">4.2</p>
                  <p className="avaliacao">83 avaliações</p>
                </div>

                <div className="paragrafo">
                  <p>
                    Conheça o maior acervo de artes da América do Sul do
                    instituto Brennand .
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="blocoRight">
            <div className="tituloRight">
              <h3>Turistas Confirmados:</h3>
            </div>
            <section className="FrameRight">
              {/* TURISTA 01 /////////////////////////////////////////////// */}
              <div className="chatSelecionado">
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
                  <div className="cancelar">
                    <a href="">
                      <p>Cancelar</p>
                    </a>
                  </div>
                </div>
              </div>

              {/* TURISTA 02 //////////////////////////////////////////////////////// */}
              <div className="chatUm">
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
                    <p>01 pessoas</p>
                  </div>
                </div>
                <div className="final">
                  <div className="iconChat">
                    <img src={Chat} alt="" />
                  </div>
                  <div className="cancelar">
                    <a href="">
                      <p>Cancelar</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* TURISTA 03 ///////////////////////////////////////////////////////// */}
              <div className="chatUm">
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
                  <div className="cancelar">
                    <a href="">
                      <p>Cancelar</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* TURISTA 04 /////////////////////////////////////////////////////////////////// */}
              <div className="chatUm">
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
                  <div className="cancelar">
                    <a href="">
                      <p>Cancelar</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* TURISTA 05 //////////////////////////////////////////////////////////////////// */}
              <div className="chatUm">
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
                  <div className="cancelar">
                    <a href="">
                      <p>Cancelar</p>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
