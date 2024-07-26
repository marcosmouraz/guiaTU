import LogoMenu from "../../assets/logo guia tu menu.png";
import IconeBoneco from "../../assets/vetorUsers.svg"
import BotaoAjuda from "../../assets/ajudaMenu.png"
import CarrinhoCompras from "../../assets/carrinhoCompras.png"
import { Container } from "./menuStyles";
import VetorFiltro from "../../assets/vetorFiltro.png"

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
              <a href="">Idiomas</a>
            </li>
            <li>
              <button href="">
                <img src={VetorFiltro} alt="filtro idioma" />
              </button>
            </li>
            <li>
              <a href="">R$</a>
            </li>
            <li>
              <button href="">
                <img src={VetorFiltro} alt="filtro idioma" />
              </button>
            </li>
            <li>
              <button href="">
                <img src={IconeBoneco} alt="boneco" />
              </button>
            </li>
            <li>
              <button href="">
                <img src={BotaoAjuda} alt="ajuda" />
              </button>
            </li>
            <li>
              <button href="">
                <img src={CarrinhoCompras} alt="carrinho de compras" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
