import Imagem from "../../assets/bannerSlogan.png";
import { Container } from "./headerStyles";

export default function Header() {
  return (
    <Container>
      <img src={Imagem} alt="" />
      <h1>Sua liberdade de explorar</h1>
      <section className="inputs">
        <input
          id="destino"
          type="text"
          placeholder="Para onde"
          name="destino"
        />
        <input id="data" type="text" placeholder="Escolha a data" name="data" />
        <input
          id="nPessoas"
          type="number"
          placeholder="Num. de Pessoas"
          name="nPessoas"
        />
        <button>Procurar</button>
      </section>
    </Container>
  );
}
