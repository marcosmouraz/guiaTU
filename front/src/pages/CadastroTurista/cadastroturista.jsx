import { UserFocus } from "@phosphor-icons/react";
import Menu from "../../components/Menu/menu";
import { Container } from "./cadTurStyles";
import Linha from "../../assets/vetorLinha.svg";
import Google from "../../assets/iconGoogle.svg";
import Facebook from "../../assets/iconFacebook.svg";
import Apple from "../../assets/iconApple.svg";
import Footer from "../../components/Footer/footer";
import { useState } from "react";
import { useForm } from "react-hook-form";

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

        <section className="linha">
          <img src={Linha} alt="" />
          <h5>OU</h5>
          <img src={Linha} alt="" />
        </section>

        <section className="sociais">
          <a href="">
            <img src={Google} alt="" />
          </a>
          <a href="">
            <img src={Facebook} alt="" />
          </a>
          <a href="">
            <img src={Apple} alt="" />
          </a>
        </section>
        <Footer />
      </Container>
    </>
  );
}
