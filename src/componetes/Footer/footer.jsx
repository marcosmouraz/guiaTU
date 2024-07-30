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
        <ul className="bloco-1-footer">
          <h4>GuiaTÚ</h4>
          <div className="info-bloco-1">
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
        </ul>

        <ul className="bloco-2-footer">
          <h4>Inspiração</h4>
          <div className="info-bloco-2">
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
        </ul>

        <ul className="bloco-3-footer">
          <h4>Trabalhe Conosco</h4>
          <div className="info-bloco-3">
            <li>
              <a href="">Parcerias</a>
            </li>

            <li>
              <a href="">Torne-se nosso parceiro</a>
            </li>
          </div>
        </ul>

        <ul className="bloco-4-footer">
          <h4>Ajuda</h4>
          <div className="info-bloco-4">
            <div className="ajuda">
              <img src={Atendente} alt="" />
              <li>
                <h5>Entrar em contato com o guiaTÚ</h5>
                <p>(81)X XXX - XXXX</p>
              </li>
            </div>
          </div>
        </ul>


        <ul className="bloco-5-footer">
          <h4>Baixe nosso APP</h4>
          <div className="info-bloco-5">
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
        </ul>

        <ul className="redesSociais">
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
        </ul>

        <ul>
          <h4>Formas de pagamento</h4>
          <div className="imgfp">
            <img src={Americanex} alt="" />
            <img src={Googlepay} alt="" />
            <img src={Master} alt="" />
            <img src={Visacar} alt="" />
            <img src={Applepay} alt="" />
          </div>
        </ul>

        <a className="imgcd">
          <img src={Cadastur} alt="" />
        </a>
      </Footerlist>

      <Copyright>
        <img src={Logo} alt="" />
        <h6>Politica de privacidade-Cookies-LGPD</h6>
      </Copyright>
    </Container>
  );
}
