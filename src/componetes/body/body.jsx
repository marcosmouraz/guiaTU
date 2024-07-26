import PingoLocal from "../../assets/vetorLocal.svg";
import Usuarios from "../../assets/vetorUsuarios.svg";
import Calendario from "../../assets/calendarioHeader.svg";
import Seguranca from "../../assets/vetorEscudo.svg";
import { Container } from "./bodyStyles";

export default function Body() {
  return (
    <Container>
      <section className="cards">
        <div className="card">
          <img src={PingoLocal} alt="" />
          <h2>Presença ampla</h2>
          <p>+ de 5 cidades incluindo interior</p>
        </div>
        <div className="card">
          <img src={Usuarios} alt="" />
          <h2>Guias locais</h2>
          <p>+ de 100 guias credenciados parceiros</p>
        </div>
        <div className="card">
          <img src={Calendario} alt="" />
          <h2>Cancelamento gratuito</h2>
          <p>Até 10 dias antes do passeio</p>
        </div>
        <div className="card">
          <img src={Seguranca} alt="" />
          <h2>Segurança e suporte</h2>
          <p>Privacidade e Comunicação</p>
        </div>
      </section>
    </Container>
  );
}
