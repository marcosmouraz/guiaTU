
import Header from "../../components/Header/header";
import Menu from "../../components/Menu/menu";
import Footer from '../../components/Footer/footer'
import { Container } from "./filtroStyles";
import vetorCampos from "../../assets/vetorCampos.svg";
import vetorPraia from "../../assets/vetorPraias.svg";
import vetorMuseus from "../../assets/vetorMuseus.svg";
import vetorTrilhas from "../../assets/vetorTrilhas.svg";
import vetorUrbanas from "../../assets/vetorUrbanas.svg";
import FrameRotas from "../../components/FrameRotas/framerotas";
import { useNavigate } from "react-router-dom";

export default function TelaFiltro() {

  const navigation = useNavigate();
  
  return (
    <>
      <Menu />
      <Header />
      <Container>
        <div className="body">
          <button
            className="buttonSugestao"
            onClick={() =>
              navigation("/telacampos", {
                state: {
                  value: 100,
                },
              })
            }
          >
            <img src={vetorCampos} alt="vetorcampo" />
            Campos
          </button>
          <button className="buttonSugestao">
            <img src={vetorPraia} alt="vetorpraia" />
            Praias
          </button>
          <button className="buttonSugestao">
            <img src={vetorMuseus} alt="vetorMuseus" />
            Museus
          </button>
          <button className="buttonSugestao">
            <img src={vetorTrilhas} alt="vetorTrilhas" />
            Trilhas e Cachoeiras
          </button>
          <button className="buttonSugestao">
            <img src={vetorUrbanas} alt="vetorUrbanas" />
            Urbanas
          </button>
        </div>

        <FrameRotas />
        <Footer />
      </Container>
    </>
  );
}
