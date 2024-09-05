import Menu from "../../components/Menu/menu";
import Footer from "../../components/Footer/footer";
import { UserFocus } from "@phosphor-icons/react";
import FormEmpreendedor from "../../components/FormEmpreendedores";
import RosaDireita from "../../assets/rosaFrameUm.svg";
import { useState } from "react";
import RosaEsquerda from "../../assets/rosaFrameDois.svg";
import { ContainerEmpre1 } from "./cadParStyles";

export default function CadastroParceiro() {

   const [tabForm, setTabForm] = useState(0);

  return (
    <>
      <Menu />
      <ContainerEmpre1>
        <div className="ondas">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffd700"
              fill-opacity="1"
              d="M0,256L48,218.7C96,181,192,107,288,90.7C384,75,480,117,576,133.3C672,149,768,139,864,128C960,117,1056,107,1152,106.7C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        <FormEmpreendedor tabForm={tabForm} setTabForm={setTabForm} />
        {tabForm === 0 ? (
          <img src={RosaDireita} alt="" className="rosaventos-direita" />
        ) : (
          <img src={RosaEsquerda} alt="" className="rosaventos-esquerda" />
        )}
      </ContainerEmpre1>
      <Footer />
    </>
  );
}
