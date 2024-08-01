import { Container } from "./frameRotasStyles";
import CardRecife from '../../assets/cardRecifeFrame.svg'
import PerfilGuia from '../../assets/fotoPerfilGuia.svg'

export default function FrameRotas(){
  return (
    <Container>
      <section className="frame">
        <div className="tituloFrame">
          <h3>Tour pelo Recife antigo.</h3>
          <div className="cardCidade">
            <img src={CardRecife} alt="" />
          </div>
          <div className="perfilGuia">
            <img src={PerfilGuia} alt="" />
          </div>
        </div>
      </section>
    </Container>
  );
}