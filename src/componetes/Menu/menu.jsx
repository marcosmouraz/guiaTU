import LogoMenu from "../../assets/logo guia tu menu.png";
import "./menu.js";

export default function Menu() {
  return (
    <>
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
              <a href="">Moeda</a>
            </li>
            <li>
              <a href="">Pefil</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
