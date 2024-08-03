import Menu from "../../components/Menu/menu";
import { Container } from "../CadastroTurista/cadTurStyles";
import Linha from "../../assets/vetorLinha.svg";
import Google from "../../assets/iconGoogle.svg"
import Facebook from "../../assets/iconFacebook.svg"
import Apple from "../../assets/iconApple.svg"
import Footer from "../../components/Footer/footer";

export default function CadastroTuristaDois() {
  return (
    <Container>
      <Menu />

      <div className="titulo">
        <h2>Olá, Turista estamos concluindo seu cadastro...</h2>
      </div>

      <div className="inputUm">
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="  (xx) x xxxx-xxxx" />
      </div>

      <div className="inputDois">
        <input type="text" placeholder="Senha" />
        <input type="text" placeholder="Confirme sua senha" />
      </div>

      <div className="inputscheck">
        <input type="checkbox" name="" id="" />
        <label class="custom-checkbox">
          Quero receber as últimas novidades da Guiatú e as melhores dicas para
          minhas próximas visitas guiadas{" "}
        </label>

        <input type="checkbox" name="" id="" />
        <label class="custom-checkbox">
          Aceito politica de privacidade e condições gerais{" "}
        </label>
        <p>
          Este site está protegido por reCAPTCHA e se aplicam à politica de
          privacidade e aos termos de serviços do Google.
        </p>
      </div>

      <a href="">
        <div className="buttonFinalizar">Finalizar Cadastro</div>
      </a>

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

      <div className="esqueceusuasenha">
        <p>Esqueceu sua senha? 
        Clique aqui.</p>
      </div>

      <Footer />
    </Container>
  );
}
