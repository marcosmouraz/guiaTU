import Header from "../../components/Header/header";
import Menu from "../../components/Menu/menu";
import Footer from "../../components/Footer/footer";
import { Container } from "./camposStyles";
import FrameCampos from "../../components/FrameCampos/framecampos";
import vetorCampos from "../../assets/vetorCampos.svg";
import vetorPraia from "../../assets/vetorPraias.svg";
import vetorMuseus from "../../assets/vetorMuseus.svg";
import vetorTrilhas from "../../assets/vetorTrilhas.svg";
import vetorUrbanas from "../../assets/vetorUrbanas.svg";


export default function TelaCampos() {

  return (
    <>
      <Menu />
      <Header />
      <Container>
        <div className="body">
          <button className="buttonSugestao">
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

        <FrameCampos />
        <Footer />
      </Container>
    </>
  );
}
