import { useEffect, useState } from "react";
import { BackgroundContainer, Container } from "./headerStyles";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigation = useNavigate();
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    const loadCidades = async () => {
      try {
        const response = await fetch(
          `https://brasilapi.com.br/api/ibge/municipios/v1/pe`
        );
        const dados = await response.json();
        setCidades(dados);
      } catch (error) {
        console.error("Erro ao carregar as cidades", error);
      }
    };
    loadCidades();
  }, []);

  return (
    <Container>
      <BackgroundContainer />
      <h1>Sua liberdade de explorar</h1>

      <section className="inputs">
        <select name="city" id="city" placeholder="Cidade">
          <option value="0">Selecione a cidade</option>
          {cidades.map((city) => (
            <option key={city.id} value={city.id}>
              {city.nome}
            </option>
          ))}
        </select>

        <input id="data" type="date" placeholder="Escolha a data" name="data" />
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
