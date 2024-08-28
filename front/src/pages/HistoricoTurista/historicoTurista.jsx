import { Star } from "@phosphor-icons/react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container } from "./historicoTuristaStyles";
import CardRecife from "../../assets/cardRecifeFrame.svg";
import Museu from "../../assets/brennand.svg";

export default function HistoricoTurista() {
  return (
    <>
      <Menu />
      <Container>
        <div className="titulopagina">
          <h2>Historico de passeios</h2>
        </div>

        <div className="blocos">
          <div className="bloco">
            <div className="buttonPasseios">
              <a href="">
                <h3 className="ativos" onClick={1}>
                  Reserva de passeios
                </h3>
              </a>
              <a href="">
                <h3 className="encerrados" onClick={1}>
                  Passeios Encerrados
                </h3>
              </a>
            </div>
            <div className="linha">
              <hr />
            </div>
            <section className="Frame">
              <div className="cardCidade">
                <img src={CardRecife} alt="" className="imagem-fundo" />
              </div>

              <div className="textosFrame">
                <h3>Tour pelo Recife antigo.</h3>

                <div className="nomeGuia">
                  <p>Rogerio Marques</p>

                  <Star
                    className="estrela"
                    size={16}
                    color="#f1f500"
                    weight="fill"
                  />

                  <p className="nota">4.2</p>

                  <p className="avaliacao">83 avaliações</p>
                  <div></div>
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

            <section className="Frame">
              <div className="cardCidade">
                <img src={Museu} alt="" className="imagem-fundo" />
              </div>

              <div className="textosFrame">
                <h3>Conheça Int. Ricardo Brennand.</h3>

                <div className="nomeGuia">
                  <p className="guia">Rogerio Marques</p>

                  <div className="nota">
                    <p>4.2</p>

                    <Star
                      className="estrela"
                      size={16}
                      color="#f1f500"
                      weight="fill"
                    />

                    <p className="avaliacao">83 avaliações</p>
                  </div>
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
        </div>
      </Container>
      <Footer />
    </>
  );
}
