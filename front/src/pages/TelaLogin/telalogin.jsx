import { useState } from "react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container, Section } from "./loginStyles";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";

export default function TelaLogin() {
  const [turista, setTurista] = useState("");
  const [username, setUsername] = useState("");
  const [senha_hash, setSenha_hash] = useState("");
  const [error, setError] = useState(""); // Para armazenar mensagens de erro

  const navigation = useNavigate();

  async function handleLogin() {
    // Verificar se todos os campos estão preenchidos
    if (!username || !senha_hash || !turista) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    // Resetar mensagem de erro
    setError("");

    try {
      let response;
      if (turista === "turista") {
        response = await api.post("/turista/login", { username, senha_hash });
      } else if (turista === "guia") {
        response = await api.post("/guia/login", { username, senha_hash });
      } else if (turista === "empreendedor") {
        response = await api.post("/empreendedor/login", {
          username,
          senha_hash,
        });
      } else {
        setError("Selecione um perfil.");
        return;
      }

      localStorage.setItem("token", response.data.token);
      navigation("/telafiltro");
    } catch (error) {
      // Tratar erro de login
      setError(
        error.response?.data?.message ||
          "Ocorreu um erro ao tentar fazer login."
      );
    }
  }

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
            <input
              className="email"
              type="text"
              placeholder="Email"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="senha"
              type="password"
              placeholder="Senha"
              onChange={(e) => setSenha_hash(e.target.value)}
            />
            <a href="" className="esqueciSenha">
              Esqueci minha senha
            </a>
          </div>
          <div className="linha">
            <hr />
            <h5>Selecione seu perfil</h5>
            <hr />
          </div>
          <div className="radios">
            <div className="radioTu">
              <input
                type="radio"
                name="perfil"
                id="turista"
                onChange={() => setTurista("turista")}
              />
              <label htmlFor="turista">Turista</label>
            </div>
            <div className="radioGui">
              <input
                type="radio"
                name="perfil"
                id="guia"
                onChange={() => setTurista("guia")}
              />
              <label htmlFor="guia">Guia</label>
            </div>
            <div className="radioEmp">
              <input
                type="radio"
                name="perfil"
                id="empreendedor"
                onChange={() => setTurista("empreendedor")}
              />
              <label htmlFor="empreendedor">Empreendedor</label>
            </div>
          </div>
          {error && <div className="error">{error}</div>}{" "}
          {/* Exibir mensagem de erro */}
          <button className="buttonEntrar" onClick={handleLogin}>
            Entrar
          </button>
          <section className="textDois">
            <div className="cadastrarAgora">
              <a href="/cadastroinicial" className="cadastrar">
                <h6>
                  Não possui conta? <span>Cadastre-se</span> agora!
                </h6>
              </a>
            </div>
          </section>
        </Container>
      </Section>
      <Footer />
    </>
  );
}
