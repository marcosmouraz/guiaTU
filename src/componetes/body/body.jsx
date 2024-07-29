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
import Bomjesus from "../../assets/bomjesus.svg";

export default function Body() {
  return (
    <Container>
      <section className="cards">
        <div className="card">
          <MapPinArea size={42} color="#04136f" />
          <h2>Presença ampla</h2>
          <p>+ de 5 cidades incluindo interior</p>
        </div>
        <div className="card">
          <UserCircleCheck size={42} color="#04136f" />
          <h2>Guias locais</h2>
          <p>+ de 100 guias credenciados parceiros</p>
        </div>
        <div className="card">
          <CalendarCheck size={42} color="#04136f" />
          <h2>Cancelamento gratuito</h2>
          <p>Até 10 dias antes do passeio</p>
        </div>
        <div className="card">
          <ShieldCheck size={42} color="#04136f" />
          <h2>Segurança e suporte</h2>
          <p>Privacidade e Comunicação</p>
        </div>
      </section>

      <div id="destinos">
        <h1>Destinos mais procurados</h1>
      </div>

      <section className="imagensDestinos">
        <img src={Campo} alt="cardCampo" />

        <img src={Noronha} alt="cardNoronha" />

        <img src={Brenand} alt="cardBrenand" />

        <img src={Bonito} alt="cardBonito" />

        <img src={Olinda} alt="cardOlinda" />
      </section>
    </Container>
  );
}
