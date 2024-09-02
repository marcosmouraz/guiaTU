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
          <a href="Reservas">
            <h3 className="Reservas">Reservas de Passeios</h3>
          </a>
          <a href="">
            <h3 className="Encerrados">Passeios Encerrados</h3>
          </a>
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

            <div className="infoGuia">
              <p>Patricia Ferreira</p>
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

        <div className="frame2">
          <div className="left">
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

            <div className="infoGuia">
              <p>Patricia Ferreira</p>
              <Star
                className="estrela"
                size={16}
                color="#f1f500"
                weight="fill"
              />
              <p className="nota">4.2</p>
              <p className="avaliacao">83 avaliações</p>
            </div>

            <div className="estrelas">
              <Star size={32} weight="thin" />
              <Star size={32} weight="thin" />
              <Star size={32} weight="thin" />
              <Star size={32} weight="thin" />
              <Star size={32} weight="thin" />
            </div>
          </div>

          <div className="right2">
            <div className="elementos">
              <div className="imgguia2">
                <img src={PerfilGuia2} alt="" className="perfilguia" />
              </div>
              <h3>R$200,00</h3>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

