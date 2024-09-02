import { UserFocus } from "@phosphor-icons/react";
import Menu from "../../components/Menu/menu";
import { Container } from "./cadTurStyles";
import Footer from "../../components/Footer/footer";


import FormTurista from "../../components/FormTurista";

export default function CadastroTurista() {

  return (
    <>
      <Menu />
      <Container>
        <section className="all">
          <div className="titulo">
            <h2>Olá Turista, <br />realize seu cadastro...</h2>
          </div>
        </section>

        <FormTurista />
        <Footer />
      </Container>
    </>
  );
}
