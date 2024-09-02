import { Container } from "./frameCamposStyles";
import CardCampo1 from "../../assets/cardGravata.svg";
import PerfilGuia from "../../assets/fotoPerfilGuia.svg";
import cardCampo2 from "../../assets/cardGaranhuns.svg";
import LogoAzul from "../../assets/logoazul.svg";
import { Clock, FlagPennant, Star, UserSound } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export default function FrameCampos() {
  const navigation = useNavigate();

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
              <img src={CardCampo1} alt="" className="imagemCidade" />
            </div>
            <div className="mid">
              <div className="rota">
                <h2>Charme da Serra - Gravatá</h2>
              </div>
              <div className="infoGuia">
                <p className="nomeGuia">Mário Albuquerque</p>
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
                  Descubra, essa joia de Pernambuco com charme rústico e ruas
                  encantadoras. A cidade preserva sua arquitetura colonial e
                  tradições culturais vibrantes. Com um clima ameno e festas
                  típicas, Gravatá é um destino perfeito para explorar a rica
                  herança do interior pernambucano.
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
              <h2>R$ 150,00</h2>
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
            <div className="perfil">
              <img src={PerfilGuia} alt="" className="imagemPerfil" />
            </div>
            <div className="cidade">
              <img src={cardCampo2} alt="" className="imagemCidade2" />
            </div>
            <div className="mid">
              <div className="rota">
                <h2>Garanhuns - História, Mágia e Tradição</h2>
              </div>
              <div className="infoGuia">
                <p className="nomeGuia">Mário Albuquerque</p>
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
                  Explore a cidade das flores, a Suiça Pernambucana,
                  conhecida por seu clima ameno e rica herança cultural.
                  Garanhuns destaca-se por suas praças arborizadas,
                  arquitetura histórica e festivais vibrantes, como o Festival
                  de Inverno.
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
              <h2>R$ 220,00</h2>
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
            navigation("/telaguia", {
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
                  Personalizar sua rota escolhendo o local de partida, paradas
                  intermediárias e o destino final. Além disso, é possível
                  visualizar o valor total do serviço de forma clara e
                  transparente, proporcionando uma experiência de passeio
                  flexível e adaptada às suas necessidades.
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
