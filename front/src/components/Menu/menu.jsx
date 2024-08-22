import LogoMenu from "../../assets/logo guia tu menu.png";
import { Container } from "./menuStyles";
import { CaretDown, Info, ShoppingCart, User } from "@phosphor-icons/react";


export default function Menu() {
  return (
    <Container>
      <section className="menu">
        <div className="logo">
          <img src={LogoMenu} alt="logoMenu" />
        </div>

        <nav className="menu-desktop">
          <ul>
            <li className="dropdownContainer">
              <div className="dropdown">
                <button className="dropbtn">
                  Idiomas <CaretDown size={20} color="#fafafa" />
                </button>
                <div className="dropdown-content">
                  <a href="#">Português / BR</a>
                  <a href="#">Inglês / EN</a>
                </div>
              </div>
            </li>

            <li className="dropdownContainer">
              <div className="dropdown">
                <button className="dropbtn">
                  R$ <CaretDown size={20} color="#fafafa" />
                </button>
                <div className="dropdown-content2">
                  <a href="#">Real / BRL</a>
                  <a href="#">Dólar / USD</a>
                  <a href="#">Euro / EUR</a>
                </div>
              </div>
            </li>

            <li className="dropdownContainer">
              <div className="dropdown">
                <button href="">
                  <User size={20} color="#fafafa" />
                </button>
                <div className="dropdown-content3">
                  <a href="/telalogin">Entrar</a>
                  <a href="/cadastroinicial">Cadastre-se</a>
                </div>
              </div>
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
      </section>
    </Container>
  );
}
