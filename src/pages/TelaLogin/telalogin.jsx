import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container, Section } from "./loginStyles";
import Linha from "../../assets/vetorLinha.svg"

export default function TelaLogin() {
  return (
    <Container>
      <Menu />

      <Section>
        <section className="frame">
          <div className="conta">
            <h2>Acesse sua conta</h2>
            <h6>Bem vindo ao GuiaTÚ</h6>
          </div>
          <section className="inputs">
            <input className="email" type="text" placeholder="Email" />
            <input className="senha" type="text" placeholder="Senha" />
          </section>
          <div className="esqueciasenha">
            <a href="" className="clickEsqueci">
              <h6>Esqueci minha senha</h6>
            </a>
          </div>

          <a href="">
            <button className="buttonEntrar">Entrar</button>
          </a>

          <section className="linha">
            <img src={Linha} alt="" />
            <h5>OU</h5>
            <img src={Linha} alt="" />
          </section>

          <div className="cadastrarAgora">
            <a href="" className="cadastrar">
              <h6>
                Não possui conta? <span className="span">Cadastre-se agora!</span>
              </h6>
            </a>
          </div>

          <section className="buttons">
            <a href="">
              <button id="turista">SOU TURISTA</button>
            </a>
            <a href="">
              <button id="guia">SOU GUIA</button>
            </a>
            <a href="">
              <button id="parceiro">SOU PARCEIRO(A)</button>
            </a>
          </section>
        </section>
      </Section>

      <Footer />
    </Container>
  );
}
