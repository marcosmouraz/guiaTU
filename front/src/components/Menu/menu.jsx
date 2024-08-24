import { useNavigate } from "react-router-dom";
import LogoMenu from "../../assets/logo guia tu menu.png";
import { Container } from "./menuStyles";
import { CaretDown, Info, ShoppingCart, User } from "@phosphor-icons/react";
import FotoPerfil from "../../assets/perfil_menu.svg"

export default function Menu() {

  const token = localStorage.getItem('token')


  const navigate = useNavigate()

  function handleLogout(){
    localStorage.removeItem('token')
    navigate('/telalogin')
  }

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
            {token ? (
              <li className="dropdownContainer">
                <div className="dropdown">
                  <button href="">
                    <User size={20} color="#fafafa" />
                  </button>
                  <div className="dropdown-content4">
                    <div className="contAzul">
                      <div className="textos">
                        <h1>Meu perfil</h1>
                        <p>Olá, Karen</p>
                      </div>
                      <div className="fotoPerfil">
                        <img src={FotoPerfil} alt="" />
                      </div>
                    </div>

                    <div className="linha">
                      <hr />
                    </div>
                    <div className="contLinks">
                      <a href="">
                        <p>Pagamentos</p>
                      </a>
                      <a href="">
                        <p>Histórico de passeios</p>
                      </a>
                      <a href="">
                        <p>Favoritos</p>
                      </a>
                      <a href="">
                        <p>Suporte</p>
                      </a>
                      <a href="">
                        <p>Configurações</p>
                      </a>
                      <a href="">
                        <p>Seja nosso parceiro</p>
                      </a>
                      <a className="logout" onClick={() => handleLogout()}>
                        Sair
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ) : (
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
            )}
            <li>
              <button href="">
                <Info size={20} color="#fafafa" />
              </button>
            </li>
            <li>
              <a href="/telapagamento">
                <button href="">
                  <ShoppingCart size={20} color="#fafafa" />
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </Container>
  );
}
