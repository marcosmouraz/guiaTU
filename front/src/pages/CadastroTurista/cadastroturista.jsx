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
        <div className="titulo">
          <h2>Olá Turista, realize seu cadastro...</h2>
        </div>

        <section className="inputfoto">
          <p className="p">Escolha sua Foto de Perfil</p>
          <a href="">
            <div className="alterafoto">
              <UserFocus className="vetor" size={90} color="#636363" />
            </div>
          </a>
        </section>

          <FormTurista/>
        <Footer />
      </Container>
    </>
  );
}
