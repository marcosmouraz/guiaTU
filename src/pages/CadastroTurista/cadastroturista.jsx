import Menu from "../../components/Menu/menu";
import { Container } from "./cadTurStyles";

export default function CadastroTurista() {
  return (
    <Container>
      <Menu />

      <div className="titulo">
        <h2>Olá Turista, realize seu cadastro...</h2>
      </div>

      <div className="inputEmail">
        <input className="email" type="text" placeholder="Email" />
      </div>
      <div className="inputSenhas">
        <input className="senha" type="text" placeholder="Senha" />
        <input
          className="confirme"
          type="text"
          placeholder="Confirme a senha"
        />
      </div>
      <div className="inputsInfos">
        <input className="telefone" type="text" placeholder="DDD + Telefone" />
        <input className="idade" type="text" placeholder="Idade"
        />
      </div>
    </Container>
  );
}
