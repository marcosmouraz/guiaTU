import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container } from "../RotaPersonalizada/rotaPersonalizadaStyle";

export default function RotaPersonalizada() {
  return (
    <>
      <Menu />
      <Container>
        <section className="bloco">
          <div className="titulo">
            <h1>Olá Turista, personalize sua rota.</h1>
          </div>  
          <div className="inputs">
            <input type="text" placeholder="Digite seu CEP:" />
            <input type="text" placeholder="Insira sua primeira parada:" />
            <input type="text" placeholder="Insira sua segunda parada:" />
            <input type="text" placeholder="Insira seu destino final:" />
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}



