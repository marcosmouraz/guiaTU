import { BackgroundContainer, Container } from "./headerStyles";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigation = useNavigate()
  return (
    <Container>

      <BackgroundContainer/>
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
        <button onClick={() => navigation("/telafiltro")}>Procurar</button>
      </section>
    </Container>
  );
}
