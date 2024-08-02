import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container, Section } from "./loginStyles";

export default function TelaLogin() {
  return (
    <Container>
      <Menu />

      <Section>
        <div className="conta">
          <h2>Acesse sua conta</h2>
          <h6>Bem vindo ao GuiaTÚ</h6>
        </div>
        <div className="inputs">
          <input type="text" placeholder="Email" name="email" />
          <input type="text" placeholder="Senha" name="senha" />
          <div className="esqueciasenha">
            <h6>Esqueci minha senha</h6>
          </div>
       
        </div>
        <button id="buttonEntrar">ENTRAR</button>
        <div className="buttons">
          <button>Sou Turista</button>
          <button>Sou Guia</button>
          <button>Sou Parceiro</button>
        </div>
        <div>
          <h6>Não possui conta? Cadastre-se agora!</h6>
        </div>
      </Section>

      <Footer />
    </Container>
  );
}
