import Menu from "../../components/Menu/menu";
import { Container } from "./cadasturisDoisStyles.js";
import Linha from "../../assets/vetorLinha.svg";
import Google from "../../assets/iconGoogle.svg";
import Facebook from "../../assets/iconFacebook.svg";
import Apple from "../../assets/iconApple.svg";
import Footer from "../../components/Footer/footer";

export default function CadastroTuristaDois() {
  return (
    <>
      <Menu />

      <Container>
        <div className="titulo">
          <h2>
            Olá, Turista estamos <br />
            concluindo seu cadastro...
          </h2>
        </div>

        <div className="inputUm">
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="  (xx) x xxxx-xxxx" />
        </div>

        <div className="inputUm">
          <input type="text" placeholder="Senha" />
          <input type="text" placeholder="Confirme sua senha" />
        </div>

        <div className="checkContainer">
          <div className="inputscheckum">
            <input type="checkbox" name="" id="" />
            <label class="custom-checkbox">
              Quero receber as últimas novidades da Guiatú e as melhores dicas
              para minhas próximas visitas guiadas{" "}
            </label>
          </div>

          <div className="inputscheckum">
            <input type="checkbox" name="" id="" />
            <label class="custom-checkbox">
              Aceito <a href="">politica de privacidade</a>  e <a href="">condições gerais</a>{" "}
            </label>
          </div>

          <label className="inputtext">
            Este site está protegido por reCAPTCHA e se aplicam à <a href="">politica de
            privacidade</a> e aos <br /> <a href="">termos e serviços do google</a>.
          </label>
        </div>

        <div className="buttonContainer">
          <button className="buttonFinalizar">Finalizar Cadastro</button>
        </div>
      </Container>

      <Footer />
    </>
  );
}
