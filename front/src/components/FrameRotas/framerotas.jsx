import { Container } from "./frameRotasStyles";
import CardRecife from "../../assets/cardRecifeFrame.svg";
import PerfilGuia from "../../assets/fotoPerfilGuia.svg";
import cardOlinda from "../../assets/cardOlinda.svg";
import PerfilGuia2 from "../../assets/perfilGuia2.svg";
import cardMuseu from "../../assets/cardMuseu.svg";
import PerfilGuia3 from "../../assets/perfilGuia3.svg";
import { Clock, FlagPennant, Star, UserSound } from "@phosphor-icons/react";

export default function FrameRotas() {
  return (
    <Container>
      <section className="frame">
        <div className="cardCidade">
          <img src={CardRecife} alt="" className="imagem-fundo" />
          <img src={PerfilGuia} alt="" className="imagem-sobreposta" />
        </div>

        <div className="textosFrame">
          <h3>Tour pelo Recife antigo.</h3>

          <div className="nomeGuia">
            <h5>Jailton Silva</h5>

            <Star className="estrela" size={16} color="#f1f500" weight="fill" />

            <div className="nota">
              <p>4.2</p>

              <p className="avaliacao">83 avaliações</p>
            </div>
          </div>

          <div className="paragrafo">
            <p>
              Conheça a historia de Recife essa cidade com a terceira rua mais
              belas do Mundo, conhecendo suas origens e evolução enquanto
              exploramos as ruas dessa cidade maravilhosa.
            </p>

            <div className="valor">
              <h2>R$ 98</h2>
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
        </div>
      </section>

      <section className="frame">
        <div className="cardCidade">
          <img src={cardOlinda} alt="" className="imagem-fundo" />
          <img src={PerfilGuia2} alt="" className="imagem-sobreposta" />
        </div>

        <div className="textosFrame">
          <h3>Olinda Franciscana.</h3>

          <div className="nomeGuia">
            <h5>Patricia Ferreira</h5>

            <Star className="estrela" size={12} color="#f1f500" weight="fill" />

            <div className="nota">
              <p>4.7</p>

              <p className="avaliacao">164 avaliações</p>
            </div>
          </div>

          <div className="paragrafo">
            <p>
              Conheça a historia de Olinda essa cidade linda e alegre onde sedia
              os templos e igrejas mais antigas do Brasil, conheça suas origens
              enquanto exploramos as ruas e igrejas dessa cidade maravilhosa.
            </p>

            <div className="valor">
              <h2>R$ 98</h2>
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
        </div>
      </section>

      <section className="frame">
        <div className="cardCidade">
          <img src={cardMuseu} alt="" className="imagem-fundo" />
          <img src={PerfilGuia3} alt="" className="imagem-sobreposta" />
        </div>

        <div className="textosFrame">
          <h3>Tour pelos museus Recife e Olinda.</h3>

          <div className="nomeGuia">
            <h5>João Pedro</h5>

            <Star className="estrela" size={12} color="#f1f500" weight="fill" />

            <div className="nota">
              <p>4.8</p>

              <p className="avaliacao">350 avaliações</p>
            </div>
          </div>

          <div className="paragrafo">
            <p>
              Conheça a historia de Recife, Olinda e até parte da história da
              história Judaica, conhecendo suas origens e evolução enquanto
              exploramos as ruas das cidades irmães maravilhosas. 
            </p>

            <div className="valor">
              <h2>R$ 150</h2>
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
        </div>
      </section>
    </Container>
  );
}
