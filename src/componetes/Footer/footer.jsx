import { Container, Copyright, Footerlist } from "./footerStyles";
import Atendente from "../../assets/Vectoratendimento.svg";
import { AndroidLogo, AppleLogo } from "@phosphor-icons/react";
import Americanex from "../../assets/American.svg";
import Googlepay from "../../assets/google.svg";
import Master from "../../assets/masterard.svg";
import Visacar from "../../assets/visa.svg";
import Applepay from "../../assets/apple.svg";
import Cadastur from "../../assets/logoCadastur.svg";
import Logo from "../../assets/logo guia tu menu.png";
import Facebook from "../../assets/logos_facebook.svg";
import Instagram from "../../assets/icons_instagram.svg";
import Linkedin from "../../assets/icons_linkedin.svg";
import Twitter from "../../assets/Xvector.svg";

export default function Footer() {
  return (
    <Container>
      <Footerlist>
        <ul>
          <h5>GuiaTÚ</h5>
          <li>
            <a href="" class>
              Quem somos
            </a>
          </li>

          <li>
            <a href="">Imprensa</a>
          </li>

          <li>
            <a href="">Sustentabilidade</a>
          </li>
        </ul>

        <ul>
          <h5>Inspiração</h5>
          <li>
            <a href="">Destinos</a>
          </li>

          <li>
            <a href="">Pernambuco</a>
          </li>

          <li>
            <a href="">Guias Nativos</a>
          </li>
        </ul>

        <ul>
          <h5>Trabalhe Conosco</h5>
          <li>
            <a href="">Parcerias</a>
          </li>

          <li>
            <a href="">Torne-se nosso parceiro</a>
          </li>
        </ul>

        <ul>
          <h5>Ajuda</h5>
          <li className="ajuda">
            <img src={Atendente} alt="" />
            <div>
              <h5>Entrar em contato com o guiaTÚ</h5>
              <p>(81)X XXX - XXXX</p>
            </div>
          </li>
        </ul>

        <ul></ul>

        <ul>
          <h5>Baixe nosso APP </h5>

          <li className="app">
            <AppleLogo size={22} color="#b8b7b7" weight="fill" />
            <p>IOS APP</p>
          </li>
          <li className="app">
            <AndroidLogo size={22} color="#b8b7b7" weight="fill" />
            <p>Android APP</p>
          </li>
        </ul>

        <ul>
          <h5>Formas de pagamento</h5>
          <div className="imgfp">
            <img src={Americanex} alt="" />
            <img src={Googlepay} alt="" />
            <img src={Master} alt="" />
            <img src={Visacar} alt="" />
            <img src={Applepay} alt="" />
          </div>
        </ul>

        <ul className="redesSociais">
          <h5>Siga-nos</h5>
          <div className="imgsg">
            <img src={Facebook} alt="" />

            <img src={Instagram} alt="" />

            <img src={Linkedin} alt="" />

            <img src={Twitter} alt="" />
          </div>
        </ul>
        <div className="imgcd" >
          <img src={Cadastur} alt="" />
        </div>
      </Footerlist>

      <Copyright>
        <img src={Logo} alt="" />
        <h6>Politica de privacidade-Cookies-LGPD</h6>
      </Copyright>
    </Container>
  );
}
