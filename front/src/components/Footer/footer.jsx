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
        <div className="bloco-guiatu">
          <h4>GuiaTÚ</h4>
          <div className="info-bloco">
            <li>
              <a href="">Quem somos</a>
            </li>
            <li>
              <a href="">Imprensa</a>
            </li>
            <li>
              <a href="">Sustentabilidade</a>
            </li>
          </div>
        </div>

        <div className="bloco-inspiracao">
          <h4>Inspiração</h4>
          <div className="info-bloco">
            <li>
              <a href="">Destinos</a>
            </li>
            <li>
              <a href="">Pernambuco</a>
            </li>
            <li>
              <a href="">Guias Nativos</a>
            </li>
          </div>
        </div>

        <div className="bloco-conosco">
          <h4>Trabalhe Conosco</h4>
          <div className="info-bloco">
            <li>
              <a href="">Parcerias</a>
            </li>
            <li>
              <a href="">Torne-se nosso parceiro</a>
            </li>
          </div>
        </div>

        <div className="bloco-footer">
          <h4>Ajuda</h4>
          <div className="info-bloco">
            <div className="ajuda">
              <img src={Atendente} alt="" />
              <li>
                <h5>Entrar em contato com o guiaTÚ</h5>
                <p>(81)X XXX - XXXX</p>
              </li>
            </div>
          </div>
        </div>

        <div className="bloco-footer">
          <h4>Baixe nosso APP</h4>
          <div className="info-bloco">
            <a href="">
              <li className="app">
                <AppleLogo size={22} color="#b8b7b7" weight="fill" />
                <p>IOS APP</p>
              </li>
            </a>
            <a href="">
              <li className="app">
                <AndroidLogo size={22} color="#b8b7b7" weight="fill" />
                <p>Android APP</p>
              </li>
            </a>
          </div>
        </div>

        <div className="redesSociais">
          <h4>Siga-nos</h4>
          <div className="imgsg">
            <a href="">
              <img src={Facebook} alt="" />
            </a>
            <a href="">
              <img src={Instagram} alt="" />
            </a>
            <a href="">
              <img src={Linkedin} alt="" />
            </a>
            <a href="">
              <img src={Twitter} alt="" />
            </a>
          </div>
        </div>

        <div className="pagamentos">
          <h4>Formas de pagamento</h4>
          <div className="imgfp">
            <img src={Americanex} alt="" />
            <img src={Googlepay} alt="" />
            <img src={Master} alt="" />
            <img src={Visacar} alt="" />
            <img src={Applepay} alt="" />
          </div>
        </div>

        <div className="logoCadastur">
          <a className="imgcd">
            <img src={Cadastur} alt="" />
          </a>
        </div>
      </Footerlist>

      <Copyright>
        <div className="copyright-content">
          <img src={Logo} alt="" />
          <h6>Política de privacidade-Cookies-LGPD</h6>
        </div>
      </Copyright>
    </Container>
  );
}
