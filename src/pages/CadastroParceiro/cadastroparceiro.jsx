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
          <h2>Olá, Empreendedor Cadastre seu estabelecimento: </h2>
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
        <input className="nome" type="text" placeholder="Nome"/>
        <input className="sobrenome"  type="text" placeholder="Sobrenome"/>
        <input className="data"  type="text" placeholder="Data de nascimento"/>
        <input className="emailf" type="text" placeholder="E-mail"/>
        <input className="pais" type="text" placeholder="País"/>
        <input className="estado" type="text" placeholder="Estado"/>
        <input className="senha" type="text" placeholder="Senha"/>
      <input className="confirmeSenha"  type="text" placeholder="Confirme sua senha"/>
      </div>

      <div className="detalhesSenha">
        <h5>Sua senha deve possuir:</h5>
        <ul>
          <li>No mínimo 8 caracteres: </li>
          <li>Um caracter especial(ex:*,@)</li>
          <li>Pelo menos um número</li>
        </ul>
      </div>
      
      <div className="">
          <button className="buttonproximo">Proximo</button>
      </div>
      </Container>
      <Footer />
    </>
  );
}
