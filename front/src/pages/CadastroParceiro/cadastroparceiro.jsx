import Menu from "../../components/Menu/menu";
import Footer from "../../components/Footer/footer";
import { UserFocus } from "@phosphor-icons/react";
import {Container} from "../../pages/CadastroParceiro/cadParStyles"

export default function CadastroParceiro() {
  return (
    <>
      <Menu />
      <Container>
        <div className="titulo">
          <h2>
            Olá, Empreendedor <br /> Cadastre seu estabelecimento.{" "}
          </h2>
        </div>

        <div className="inputfoto">
          <p className="p">Escolha sua Foto de Perfil</p>
          <a href="">
            <div className="alterafoto">
              <UserFocus className="vetor" size={90} color="#636363" />
            </div>
          </a>
        </div>

        <div className="DadosPessoais">
          <h4>Dados pessoais</h4>
        </div>

        <div className="inputs">
          <div className="inputContainer">
            <input className="nome" type="text" placeholder="Nome" />
            <input
              className="data"
              type="text"
              placeholder="Data de nascimento"
            />
            <input className="pais" type="text" placeholder="País" />
            <input className="senha" type="password" placeholder="Senha" />
          </div>

          <div className="inputContainer">
            <input className="sobrenome" type="text" placeholder="Sobrenome" />
            <input className="emailf" type="text" placeholder="E-mail" />
            <input className="estado" type="text" placeholder="Estado" />
            <input
              className="confirmeSenha"
              type="password"
              placeholder="Confirme sua senha"
            />
          </div>
        </div>

        <div className="detalhesSenha">
          <h5>SUA SENHA DEVE POSSUIR:</h5>
          <ul>
            <li>No mínimo 8 caracteres: </li>
            <li>Um caracter especial(ex:*,@)</li>
          </ul>
        </div>

        <div className="button">
          <a href="/cadastroparceirodois">
            <button className="buttonproximo">Proximo</button>
          </a>
        </div>
      </Container>
      <Footer />
    </>
  );
}
