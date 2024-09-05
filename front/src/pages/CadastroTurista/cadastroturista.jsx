import Menu from "../../components/Menu/menu";
import { Container } from "./cadTurStyles";
import Footer from "../../components/Footer/footer";
import FormTurista from "../../components/FormTurista";
import RosaDireita from "../../assets/rosaFrameUm.svg";
import { useState } from "react";
import RosaEsquerda from "../../assets/rosaFrameDois.svg";

export default function CadastroTurista() {

  const [tabForm, setTabForm] = useState(0);

  return (
    <>
      <Menu />
      <Container>
        <div className="ondas">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffd700"
              fill-opacity="1"
              d="M0,160L48,149.3C96,139,192,117,288,106.7C384,96,480,96,576,122.7C672,149,768,203,864,224C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        <FormTurista tabForm={tabForm} setTabForm={setTabForm} />
        {tabForm === 0 ? (
          <img src={RosaDireita} alt="" className="rosaventos-direita" />
        ) : (
          <img src={RosaEsquerda} alt="" className="rosaventos-esquerda" />
        )}
      </Container>
      <Footer />
    </>
  );
}
