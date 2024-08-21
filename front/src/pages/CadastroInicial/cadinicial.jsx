import Menu from "../../components/Menu/menu";
import Footer from "../../components/Footer/footer";
import { Container } from "./cadinicialstyles";

export default function cadinicial() {
  return (
    <>
      <Menu />
      <Container>
        <div className="titulo">
          <h2>Olá, selecione seu perfil e realize seu cadastro!</h2>
        </div>
        <section className="buttons">
              <button className="buttonPerfil"> SOU TURISTA </button>
              <button className="buttonPerfil"> SOU GUIA  </button>
              <button className="buttonPerfil" > SOU PARCEIRO(A) </button>
            </section>
        {/* <div className="button">
          <button>SOU TURISTA</button>
          <button>SOU GUIA</button>
          <button>SOU PARCEIRO</button>
        </div> */}
      </Container>
      <Footer />
    </>
  );
}
