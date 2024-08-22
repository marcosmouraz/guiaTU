import { Link } from "react-router-dom";
import Menu from "../../components/Menu/menu";
import Footer from "../../components/Footer/footer";
import { Container, Section } from "./cadinicialstyles";

export default function CadInicial() {
  return (
    <>
      <Menu />
      <Container>
        <Section>
          <section className="blocoPrincipal">
            <div className="bloco1">
              <h2>Bem vindo(a) ao GuiaTÚ!</h2>
            </div>
            <div className="bloco2">
              <div className="cadastre">
                <h1>Cadastre-se</h1>
                <p>Escolha seu perfil nas opções abaixo.</p>
              </div>
              <div className="buttons">
                <Link to="/cadastroguia">
                  <button type="button">SOU GUIA</button>
                </Link>
                <Link to="/cadastroturista">
                  <button type="button">SOU TURISTA</button>
                </Link>
                <Link to="/cadastroparceiro">
                  <button type="button">SOU EMPREENDEDOR</button>
                </Link>
              </div>
            </div>
          </section>
        </Section>
      </Container>
      <Footer />
    </>
  );
}
