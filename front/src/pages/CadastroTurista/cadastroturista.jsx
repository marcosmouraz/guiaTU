import { UserFocus } from "@phosphor-icons/react";
import Menu from "../../components/Menu/menu";
import { Container } from "./cadTurStyles";
import Linha from "../../assets/vetorLinha.svg";
import Google from "../../assets/iconGoogle.svg"
import Facebook from "../../assets/iconFacebook.svg"
import Apple from "../../assets/iconApple.svg"
import Footer from "../../components/Footer/footer";
import { useState } from "react";

export default function CadastroTurista() {

  const [username, setUsername] = useState("");
  const [senha_hash, setSenha_hash] = useState("");

    async function handleCadastro(){
      await api
        .post("/turista/login", {
          username: username,
          senha_hash: senha_hash,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          navigation("/telafiltro");
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    }

  return (
    <>
    <Menu/>
    <Container>
      

      <div className="titulo">
        <h2>Olá Turista, realize seu cadastro...</h2>
      </div>

      <section className="inputfoto">
        <p className="p">Escolha sua Foto de Perfil</p>
        <a href="">
          <div className="alterafoto">
            <UserFocus className="vetor" size={90} color="#636363" />
          </div>
        </a>
      </section>

      <div className="inputnome">
        <input className="nome" type="text" placeholder="Nome" />
        <input className="sobrenome" type="text" placeholder="Sobrenome" />
      </div>
      <div className="inputDataCpf">
        <input
          className="dataNascimento"
          type="text"
          placeholder="Data de Nascimento"
        />
        <input className="Cpf" type="text" placeholder="CPF" />
      </div>
      <div className="inputsInfos">
        <input className="Pais" type="text" placeholder="Pais" />
        <input className="estado" type="text" placeholder="Estado" />
      </div>
      <a href="/cadastroturistadois">
        <div className="buttonProximo">Próximo</div>
      </a>

      <section className="linha">
        <img src={Linha} alt="" />
        <h5>OU</h5>
        <img src={Linha} alt="" />
      </section>

      <section className="sociais">
        <a href="">
          <img src={Google} alt="" />
        </a>
        <a href="">
          <img src={Facebook} alt="" />
        </a>
        <a href="">
          <img src={Apple} alt="" />
        </a>
      </section>
      <Footer />
    </Container>
    </>
  );
}
