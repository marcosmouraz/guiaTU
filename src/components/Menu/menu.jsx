import LogoMenu from "../../assets/logo guia tu menu.png";
import { Container } from "./menuStyles";
import { CaretDown, Info, ShoppingCart, User } from "@phosphor-icons/react";

export default function Menu() {
  return (
    <Container>
      <div className="menu">
        <div className="logo">
          <img src={LogoMenu} alt="logoMenu" />
        </div>

        <nav className="menu-desktop">
          <ul>
            <li>
              <a className="textmenu" href="idiomas">
                Idiomas
              </a>
            </li>
            <li>
              <button href="">
                <CaretDown size={20} color="#fafafa" />
              </button>
            </li>
            <li>
              <a className="textmenu" href="cifrao">
                R$
              </a>
            </li>
            <li>
              <button href="">
                <CaretDown size={20} color="#fafafa" />
              </button>
            </li>
            <li>
              <button href="">
                <User size={20} color="#fafafa" />
              </button>
            </li>
            <li>
              <button href="">
                <Info size={20} color="#fafafa" />
              </button>
            </li>
            <li>
              <button href="">
                <ShoppingCart size={20} color="#fafafa" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
