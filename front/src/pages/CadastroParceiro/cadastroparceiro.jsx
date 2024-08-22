import Menu from "../../components/Menu/menu";
import Footer from "../../components/Footer/footer";
import { UserFocus } from "@phosphor-icons/react";
import {Container} from "../../pages/CadastroParceiro/cadParStyles"

import FormEmpreendedor from "../../components/FormEmpreendedores";

export default function CadastroParceiro() {
  return (
    <>
      <Menu />
      <Container>
        <div className="titulo">
          <h2>
            Olá, Empreendedor <br /> Cadastre seu estabelecimento.{" "}
          </h2>
        </div>

        <div className="inputfoto">
          <p className="p">Escolha sua Foto de Perfil</p>
          <a href="">
            <div className="alterafoto">
              <UserFocus className="vetor" size={90} color="#636363" />
            </div>
          </a>
        </div>
        
        <FormEmpreendedor/>

        
      </Container>
      <Footer />
    </>
  );
}
