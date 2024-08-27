import { useNavigate } from "react-router-dom";
import LogoMenu from "../../assets/logo guia tu menu.png";
import { Container } from "./menuStyles";
import { CaretDown, Info, ShoppingCart, User } from "@phosphor-icons/react";
import FotoPerfil from "../../assets/perfil_menu.svg"
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { api } from "../../service/api";

export default function Menu() {
  const [ userId, setUserId ] = useState(null)
  const [userType, setUserType] = useState(null)
  const [user, setUser] = useState({})
  const token = localStorage.getItem("token");


  useEffect(() => {
    const fetchUserId = async () => {
    const token = localStorage.getItem('token')

      if(token) {
        try {
        const decodedToken = jwtDecode(token);
        const id = decodedToken.id
        const type = decodedToken.type
        
        setUserType(type)
        setUserId(id)
        } catch (error) {
          console.error(error);
          
        }
      }
    }

    fetchUserId()
  }, [])
  
  useEffect(() => {
    
    if(userId){
      console.log(userType);
      
      const fetchUserData = async () => {
        
        try {
          if(userType === "turista") {
            const response = await api.get(`/turista/${userId}`);
            setUser(response.data.turista);
          } else if (userType === "guia") {
            const response = await api.get(`/guia/${userId}`);
            setUser(response.data.guia);
          } else if (userType === "empreendedor") {
            const response = await api.get(`/empreendedor/${userId}`);
            setUser(response.data.empreendedor);
          } else {
            return console.log("Erro ao logar");
            
          }
            
        } catch (error) {
          console.error(error);
          
        }
      }

      setTimeout(() => {
        fetchUserData()
      }, 2000)
    }
  },[userId])

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
              <>
                {userType === "guia" ? (
                  <li className="dropdownContainer">
                    <div className="dropdown">
                      <button href="">
                        <User size={20} color="#fafafa" />
                      </button>
                      <div className="dropdown-content4">
                        <div className="contAzul">
                          <div className="textos">
                            <h1>Meu perfil</h1>
                            <p>Olá, {user.nome}</p>
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
                            <p>Histórico de passeios</p>
                          </a>
                          <a href="">
                            <p>Suporte</p>
                          </a>
                          <a href="">
                            <p>Configurações</p>
                          </a>
                          <a className="logout" onClick={() => handleLogout()}>
                            Sair
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  //ate aqui é guia
                ) : (
                  //daqui pra baixo é turista
                  <li className="dropdownContainer">
                    <div className="dropdown">
                      <button>
                        <User size={20} color="#fafafa" />
                      </button>
                      <div className="dropdown-content4">
                        <div className="contAzul">
                          <div className="textos">
                            <h1>Meu perfil</h1>
                            <p>Olá, {user.nome}</p>
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
                )}
              </>
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
