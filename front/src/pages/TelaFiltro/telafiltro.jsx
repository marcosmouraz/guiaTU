
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
import FrameCampos from "../../components/FrameCampos/framecampos";
import { useState } from "react";

export default function TelaFiltro() {

  const navigation = useNavigate();

   const [Tab, setTab] = useState(0);
  
  return (
    <>
      <Menu />
      <Header />
      <Container>
        <div className="body">
          <button
            className="buttonSugestao"
            onClick={() => setTab(1)
            }
          >
            <img src={vetorCampos} alt="vetorcampo" />
            Campos
          </button>
          <button
            className="buttonSugestao"
            onClick={() => setTab(2)
              
            }
          >
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
          <button className="buttonSugestao" onClick={() => setTab(0)
              
            }>
            <img src={vetorUrbanas} alt="vetorUrbanas" />
            Urbanas
          </button>
        </div>

        {Tab === 0 && <FrameRotas />}
        {Tab === 1 && <FrameCampos />}
        

        <Footer />
      </Container>
    </>
  );
}
