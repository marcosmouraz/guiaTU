import { Star } from "@phosphor-icons/react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container } from "./historicoTuristaStyles";
import CardRecife from "../../assets/cardRecifeFrame.svg";
import PerfilGuia2 from "../../assets/perfilGuia2.svg";
import Museu from "../../assets/brennand.svg";

export default function HistoricoTurista() {
  return (
    <>
      <Menu />
      <Container>
        <div className="titulopagina">
          <h1>Gerênciador de passeios:</h1>
        </div>

        <div className="subtitulo">
          <h3>Reservas de Passeios</h3>
          <h3>Passeios Encerrados</h3>
        </div>

        <div className="frame">

          <div className="left">
            <div className="imgguia">
              <img src={PerfilGuia2} alt="" className="perfilguia" />
            </div>
            <div className="cardcidade">
              <img src={CardRecife} alt="" className="imagemfundo" />
            </div>
            <div className="rodapeframe">
              <p>2 pessoas, 25/09 ás 14PM</p>
            </div>
          </div>

          <div className=" center">
            <div className="titulo">
              <h3>Tour pelo Recife Antigo</h3>
            </div>

            <div className="paragrafo">
              <p>
                Conheça a historia de Recife essa cidade com a terceira rua mais
                belas do Mundo, conhecendo suas origens e evolução enquanto
                exploramos as ruas dessa cidade maravilhosa.
              </p>
            </div>
          </div>

          <div className="right">
            <div className="textos">
              <p>Cancelar</p>
              <h3>R$200,00</h3>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
