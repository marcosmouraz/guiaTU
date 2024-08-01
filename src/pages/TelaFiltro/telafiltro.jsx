/* eslint-disable react/jsx-no-undef */
import Header from "../../componetes/Header/header";
import Menu from "../../componetes/Menu/menu";
import { Container } from "./filtroStyles";

export default function TelaFiltro() {
  return (
    <Container>
      <Menu />
      <Header/>
      <div className="body">
        <button className="campos">
          <h3>Campos</h3>
        </button>
        <button className="praias">
          <h3>Praias</h3>
        </button>
        <button className="museus">
          <h3>Museus</h3>
        </button>
        <button className="trilhas">
          <h3>Trilhas e Cachoeiras</h3>
        </button>
        <button className="Urbanas">
          <h3>Urbanas</h3>
        </button>
      </div>
    </Container>
  );
}
