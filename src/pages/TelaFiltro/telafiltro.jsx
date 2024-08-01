/* eslint-disable react/jsx-no-undef */
import Header from "../../componetes/Header/header";
import Menu from "../../componetes/Menu/menu";
import { Container } from "./filtroStyles";
import vetorCampos from "../../assets/vetorCampos.svg";
import vetorPraia from "../../assets/vetorPraias.svg";
import vetorMuseus from "../../assets/vetorMuseus.svg";
import vetorTrilhas from "../../assets/vetorTrilhas.svg";
import vetorUrbanas from "../../assets/vetorUrbanas.svg";

export default function TelaFiltro() {
  return (
    <Container>
      <Menu />
      <Header />
      <div className="body">
        <button className="campos">
          <img src={vetorCampos} alt="vetorcampo" />
          <h3>Campos</h3>
        </button>
        <button className="praias">
          <img src={vetorPraia} alt="vetorpraia" />
          <h3>Praias</h3>
        </button>
        <button className="museus">
          <img src={vetorMuseus} alt="vetorMuseus" />
          <h3>Museus</h3>
        </button>
        <button className="trilhas">
          <img src={vetorTrilhas} alt="vetorTrilhas" />
          <h3>Trilhas e Cachoeiras</h3>
        </button>
        <button className="Urbanas">
          <img src={vetorUrbanas} alt="vetorUrbanas" />
          <h3>Urbanas</h3>
        </button>
      </div>
      <div className="titulodestinos">
        <h3>Rotas ofertadas por nossos Guias:</h3>
      </div>
      <section className="framePasseio">
        <img src="" alt="" />


      </section>
    </Container>
  );
}
