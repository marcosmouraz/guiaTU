import { Container } from "./bodyStyles";
import {
  CalendarCheck,
  MapPinArea,
  ShieldCheck,
  UserCircleCheck,
} from "@phosphor-icons/react";
import Bonito from "../../assets/bonitope.svg";
import Brenand from "../../assets/brenand.svg";
import Campo from "../../assets/campo.svg";
import Noronha from "../../assets/noronha.svg";
import Olinda from "../../assets/olindacard.svg";

export default function Body() {
  return (
    <Container>
      <section className="cards">
        <div className="card">
          <MapPinArea size={70} color="#04136f" />
          <h2>Presença ampla</h2>
          <p>+ de 5 cidades incluindo interior</p>
        </div>
        <div className="card">
          <UserCircleCheck size={70} color="#04136f" />
          <h2>Guias locais</h2>
          <p>+ de 100 guias credenciados parceiros</p>
        </div>
        <div className="card">
          <CalendarCheck size={70} color="#04136f" />
          <h2>Cancelamento gratuito</h2>
          <p>Até 10 dias antes do passeio</p>
        </div>
        <div className="card">
          <ShieldCheck size={70} color="#04136f" />
          <h2>Segurança e suporte</h2>
          <p>Privacidade e Comunicação</p>
        </div>
      </section>

      <section className="container">
        <div id="destinos">
          <h1>Destinos mais procurados</h1>
        </div>

        <section className="imagensDestinos">
          <div className="imgUm">
            <img src={Campo} alt="cardCampo" />
            <h2 className="gravata">Gravatá - PE</h2>
          </div>
          <div className="imgDois">
            <img src={Noronha} alt="cardNoronha" />
            <h2 className="fernando">Fernando de Noronha - PE</h2>
          </div>
          <div className="imgTres">
            <img src={Brenand} alt="cardBrenand" />
            <h2 className="brennand">I. Ricardo Brennand - PE</h2>
          </div>
          <div className="imgQuatro">
            <img src={Bonito} alt="cardBonito" />
            <h2 className="bonito">Bonito - PE</h2>
          </div>
          <div className="imgCinco">
            <img src={Olinda} alt="cardOlinda" />
            <h2 className="olinda">Olinda - PE</h2>
          </div>
        </section>
      </section>
    </Container>
  );
}
