import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container, Section } from "./loginStyles";
import { useNavigate } from "react-router-dom";


export default function TelaLogin() {
  const navigation = useNavigate()
  return (
    <>
      <Menu />
      <Section>
        <Container>
          <div className="textUm">
            <h2>Acesse sua conta</h2>
            <h6>Bem vindo ao GuiaTÚ</h6>
          </div>
          <div className="inputs">
            <input className="email" type="text" placeholder="Email" />
            <input className="senha" type="password" placeholder="Senha" />
            <a href="" className="esqueciSenha">
              Esqueci minha senha
            </a>
          </div>

          <button className="buttonEntrar">Entrar</button>

          <section className="textDois">
            <div className="linha">
              <hr />
              <h5>OU</h5>
              <hr />
            </div>
            <div className="cadastrarAgora">
              <a href="" className="cadastrar">
                <h6>
                  Não possui conta? <span>Cadastre-se agora!</span>
                </h6>
              </a>
            </div>
            <section className="buttons">
              <button
                onClick={() => navigation("/cadastroturista")}
                className="buttonPerfil"
              >
                SOU TURISTA
              </button>
              <button
                onClick={() => navigation("/cadastroguia")}
                className="buttonPerfil"
              >
                SOU GUIA
              </button>
              <button
                onClick={() => navigation("/cadastroparceiro")}
                className="buttonPerfil"
              >
                SOU PARCEIRO(A)
              </button>
            </section>
          </section>
        </Container>
      </Section>
      <Footer />
    </>
  );
}
