import { Container } from "./footerStyles";
import Atendente from "../../assets/Vectoratendimento.svg"
import { AndroidLogo, AppleLogo} from "@phosphor-icons/react";
import Americanex from "../../assets/American.svg"
import Googlepay from "../../assets/google.svg"
import Master from "../../assets/masterard.svg"
import Visacar from "../../assets/visa.svg"
import Applepay from "../../assets/apple.svg"
import Cadastur from "../../assets/logoCadastur.svg"
import Recpatcha from "../../assets/recptcha.svg"
import Logo from "../../assets/logo guia tu menu.png"
import Facebook from "../../assets/logos_facebook.svg"
import Instagram from "../../assets/icons_instagram.svg"
import Linkedin from "../../assets/icons_linkedin.svg"
import Twitter from "../../assets/Xvector.svg"

export default function Footer(){
  return(

      <Container>
       <section className="footer-list">
        <ul>
          <h3>guiaTÚ</h3>
          <li>
          <a href="" class>Quem somos</a>
          </li>

          <li>
            <a href="">Imprensa</a>
          </li>

          <li>
            <a href="">Sustentabilidade</a>
          </li>
        </ul>

        <ul>
          <h3>Inspiração</h3>
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
          <h3>Trabaho conosco</h3>
          <li>
            <a href="">Parcerias</a>
          </li>

          <li>
            <a href="">Torne-se nosso parceiro</a>
          </li>

        </ul>

        <ul>
          <h3>Ajuda</h3>
          <li>
            <img src={Atendente} alt="" />
            <h3>Entrar em contato com o guiaTÚ</h3>
            <p>(81)X XXX - XXXX</p>
          </li>
        </ul>

        <ul>
          <h3>Baixe nosso APP </h3>
          <AppleLogo size={22} color="#b8b7b7" weight="fill" />
          <li>
            <p>IOS APP</p>
          </li>

          <AndroidLogo size={22} color="#b8b7b7" weight="fill" />
          <p>Android APP</p>

        </ul>

        <ul>
          <h3>Formas de pagamento</h3>
            <img src={Americanex} alt="" />
            <img src={Googlepay} alt="" />
            <img src={Master} alt="" />
            <img src={Visacar} alt="" />
            <img src={Applepay} alt="" />
        </ul>

        <ul className="redesSociais" >
          <h3>Siga-nos</h3>

         <img src={Facebook} alt="" />

         <img src={Instagram} alt="" />
         
         <img src={Linkedin} alt="" />

         <img src={Twitter} alt="" />

        </ul>

        <ul>

        <img src={Recpatcha} alt="" />

        </ul>

        <img src={Cadastur} alt="" />

        <div className="barralogo">

        <img src={Logo} alt="" />
        <h6>Politica de privacidade-Cookies-LGPD</h6>
        </div>

       </section>
      </Container>
  )
}