import { Container } from "./frameRotasStyles";
import CardRecife from "../../assets/cardRecifeFrame.svg";
import PerfilGuia from "../../assets/fotoPerfilGuia.svg";
import cardOlinda from "../../assets/cardOlinda.svg";
import PerfilGuia2 from "../../assets/perfilGuia2.svg";
import LogoAzul from "../../assets/logoazul.svg"
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
            <div className="perfilum">
              <img src={PerfilGuia} alt="" className="imagemPerfil" />
            </div>
            <div className="cidade">
              <img src={CardRecife} alt="" className="imagemCidade" />
            </div>
            <div className="mid">
              <div className="rota">
                <h2>Tour pelo Recife antigo</h2>
              </div>
              <div className="infoGuia">
                <p className="nomeGuia">Rogerio Marques</p>
                <div className="avaliacao">
                  <Star
                    className="estrela"
                    size={16}
                    color="#f1f500"
                    weight="fill"
                  />

                  <p>4.2</p>
                  <p className="qntAvaliacoes">83 avaliações</p>
                </div>
              </div>
              <div className="paragrafo">
                <p>
                  Conheça a história de Recife essa cidade com a terceira rua
                  mais belas do Mundo. Conhecendo suas origens e evolução
                  enquanto exploramos as ruas dessa cidade maravilhosa.
                </p>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="detalheIcones">
              <Clock size={18} color="#636363" weight="bold" />
              <p className="infoBottom">4 Horas</p>
              <UserSound size={18} color="#363636" />
              <p className="infoBottom">Português</p>
              <FlagPennant size={18} color="#363636" />
              <p className="infoBottom">Visitas guiadas</p>
            </div>
            <div className="valor">
              <h2>R$ 100,00</h2>
            </div>
          </div>
        </div>

        {/* SEGUNDO FRAME */}

        <div
          className="frame"
          onClick={() =>
            navigation("/telaguia", {
              state: {
                value: 70,
              },
            })
          }
        >
          <div className="left">
            <div className="perfildois">
              <img src={PerfilGuia2} alt="" className="imagemPerfil" />
            </div>
            <div className="cidade">
              <img src={cardOlinda} alt="" className="imagemCidade2" />
            </div>
            <div className="mid">
              <div className="rota">
                <h2>Olinda Franciscana</h2>
              </div>
              <div className="infoGuia">
                <p className="nomeGuia">Patricia Ferreira</p>
                <div className="avaliacao">
                  <Star
                    className="estrela"
                    size={16}
                    color="#f1f500"
                    weight="fill"
                  />

                  <p>4.7</p>
                  <p className="qntAvaliacoes">275 avaliações</p>
                </div>
              </div>
              <div className="paragrafo">
                <p>
                  Conheça a historia de Olinda essa cidade linda e alegre onde
                  sedia os templos e igrejas mais antigas do Brasil, conheça
                  suas origens enquanto exploramos as ruas e igrejas dessa
                  cidade maravilhosa.
                </p>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="detalheIcones">
              <Clock size={18} color="#636363" weight="bold" />
              <p className="infoBottom">2 Horas</p>
              <UserSound size={18} color="#363636" />
              <p className="infoBottom">Português / Inglês</p>
              <FlagPennant size={18} color="#363636" />
              <p className="infoBottom">Visitas guiadas</p>
            </div>
            <div className="valor">
              <h2>R$ 70,00</h2>
            </div>
          </div>
        </div>

        {/* PERSONALIZADA */}

        <div className="titulo2">
          <h1>Personalize sua rota:</h1>
        </div>

        {/* TERCEIRO FRAME */}

        <div
          className="frame"
          onClick={() =>
            navigation("/rotapersonalizada", {
              state: {
                value: 100,
              },
            })
          }
        >
          <div className="left">
            
            <div className="cidade">
              <img src={LogoAzul} alt="" className="logoGuiaTu" />
            </div>
            <div className="mid">
              <div className="rota">
                <h2>Passeio personalizado</h2>
              </div>
              <div className="infoGuia">
                <p className="nomeGuia">Guias credênciados</p>
                <div className="avaliacao">
                  <Star
                    className="estrela"
                    size={16}
                    color="#f1f500"
                    weight="fill"
                  />

                  <p>5.0</p>
                  <p className="qntAvaliacoes">412 avaliações</p>
                </div>
              </div>
              <div className="paragrafo">
                <p>
                  Personalizar sua rota escolhendo o local de
                  partida, paradas intermediárias e o destino final.
                  Além disso, é possível visualizar o valor total do serviço de
                  forma clara e transparente, proporcionando uma experiência de
                  passeio flexível e adaptada às suas necessidades.
                </p>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="detalheIcones">
              <Clock size={18} color="#636363" weight="bold" />
              <p className="infoBottom">-- Horas</p>
              <UserSound size={18} color="#363636" />
              <p className="infoBottom">Português / Inglês</p>
              <FlagPennant size={18} color="#363636" />
              <p className="infoBottom">Visitas guiadas</p>
            </div>
            <div className="orcamento">
              <h3>Relizar Orçamento</h3>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
