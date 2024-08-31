import { Container } from "./frameRotasStyles";
import CardRecife from "../../assets/cardRecifeFrame.svg";
import PerfilGuia from "../../assets/fotoPerfilGuia.svg";
import cardOlinda from "../../assets/cardOlinda.svg";
import PerfilGuia2 from "../../assets/perfilGuia2.svg";
import cardMuseu from "../../assets/cardMuseu.svg";
import PerfilGuia3 from "../../assets/perfilGuia3.svg";
import { Clock, FlagPennant, Star, UserSound } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export default function FrameRotas() {

  const navigation = useNavigate()


  return (
    <Container>
      <section className="frames">
        <div className="titulo">
          <h1>Rotas ofertadas por nossos guias:</h1>
        </div>
        <div
          className="frame"
          onClick={() =>
            navigation("/telaguia", {
              state: {
                value: 100,
              },
            })
          }
        >
          <div className="left">
            <div className="perfil">
              <img src={PerfilGuia} alt="" className="imagemPerfil" />
            </div>
            <div className="cidade">
              <img src={CardRecife} alt="" className="imagemCidade" />
            </div>
            <div className="mid">
              <div className="Rota">
                <h2>Tour pelo Recife antigo.</h2>
              </div>
              <div className="infoGuia">
                <p className="nomeGuia">Rogerio Marques</p>
                <Star
                  className="estrela"
                  size={16}
                  color="#f1f500"
                  weight="fill"
                />

                <p>4.2</p>
                <p className="qntAvaliacoes">83 avaliações</p>
              </div>
              <div className="paragrafo">
                <p>
                  Conheça a historia de Recife essa cidade com a terceira rua
                  mais belas do Mundo, <br /> conhecendo suas origens e evolução
                  enquanto exploramos as ruas dessa cidade maravilhosa.
                </p>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="detalheIcones">
              <Clock size={18} color="#636363" weight="bold" />
              <p className="horas">4 Horas</p>
              <UserSound size={18} color="#363636" />
              <p className="idioma">Português/Inglês</p>
              <FlagPennant size={18} color="#363636" />
              <p className="visitaGuiada">Visitas guiadas</p>
            </div>
            <div className="valor">
              <h2>R$ 100</h2>
            </div>
          </div>

          {/* <div className="textosFrame">
            <h3>Tour pelo Recife antigo.</h3>

            <div className="nomeGuia">
              <h5>Jailton Silva</h5>

              <Star
                className="estrela"
                size={16}
                color="#f1f500"
                weight="fill"
              />

              <div className="nota">
                <p>4.2</p>

                <p className="avaliacao">83 avaliações</p>
              </div>
            </div>

            <div className="paragrafo">
              <p>
                Conheça a historia de Recife essa cidade com a terceira rua mais
                belas do Mundo, <br /> conhecendo suas origens e evolução
                enquanto exploramos as ruas dessa cidade maravilhosa.
              </p>

              <div className="valor">
                <h2>R$ 100</h2>
              </div>

              <div className="detalheIcones">
                <Clock size={18} color="#636363" weight="bold" />
                <p className="horas">4 Horas</p>
                <UserSound size={18} color="#363636" />
                <p className="idioma">Português/Inglês</p>
                <FlagPennant size={18} color="#363636" />
                <p className="visitaGuiada">Visitas guiadas</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </Container>
  );
}
