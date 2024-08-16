import { UserFocus } from "@phosphor-icons/react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container } from "./cadGuiaStyles";



export default function CadastroGuia() {
  return (
   <>
    <Menu />
    <Container>
    

      
      <div className="titulo">
        <h2>Olá, Guia <br />Cadastre sua conta. </h2>
      </div>

      <section className="inputfoto">
        <p className="p">Escolha sua Foto de Perfil</p>
        <a href="">
          <div className="alterafoto">
            <UserFocus className="vetor" size={90} color="#636363" />
          </div>
        </a>
      </section>

      <div className="DadosPessoais">
        <h4>Dados pessoais</h4>
      </div>

      <div className="inputUm">
        <input  className="nome" type="text" placeholder="Nome"/>
        <input className="sobrenome"  type="text" placeholder="Sobrenome"/>
        <input className="dataNascimento"  type="text" placeholder="Data de nascimento"/>
        <input className="cpf" type="text" placeholder="CPF"/>
        <input className="pais" type="text" placeholder="País"/>
        <input className="estado" type="text" placeholder="Estado"/>
        <input className="credencial" type="text" placeholder="Credencial"/>
        <input className="email" type="text" placeholder="E-mail"/>
        <input className="senha" type="text" placeholder="Senha"/>
      <input className="confirmeSenha"  type="text" placeholder="Confirme sua senha"/>
      </div>

      <div className="checkbox">
          <div className="ContentC">
          <input type="checkbox" name="" id="" />
            <label className="custom-checkbox">
              Aceito <a href="">politica de privacidade</a>  e <a href="">condições gerais</a>{" "}
            </label>
            </div>

          <label className="inputtext">
            Este site está protegido por reCAPTCHA e se aplicam à <a href="">politica de
            privacidade</a> e aos <br /> <a href="">termos e serviços do google</a>.
          </label>
      </div>

      <div className="buttonContainer">
          <button className="buttonFinalizar">Cadastrar</button>
        </div>
        
      

    </Container>
    <Footer />
  </>
  )
}