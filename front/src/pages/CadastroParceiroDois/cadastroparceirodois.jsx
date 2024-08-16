import { Image } from "@phosphor-icons/react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import {Container} from "../../pages/CadastroParceiroDois/cadParDoisStyles"


 export default function CadastroParceiroDois() {
  return (
    <>
      <Menu />

      <Container>
        <div className="titulo">
          <h2>
            Olá, Parceiro(a)
            <br />
            finalize seu cadastro.{" "}
          </h2>
        </div>

        <div className="DadosEstabelecimento">
          <h4>Dados Estabelecimento</h4>
        </div>

        <div className="inputs">
          <div className="inputContainer">
            <input
              className="nomeestabelecimento"
              type="text"
              placeholder="Nome Estabelecimento"
            />
            <input className="cep" type="text" placeholder="CEP" />
            <input className="rua" type="text" placeholder="Rua" />
            <input
              className="numero"
              type="text"
              placeholder="Nº do estabelecimento"
            />
          </div>
          <div className="inputContainer">
            <input className="bairro" type="text" placeholder="Bairro" />
            <input className="municipio" type="text" placeholder="Municipio" />
            <input className="cnpj" type="text" placeholder="CNPJ" />
            <input
              className="numerotelefone"
              type="text"
              placeholder="(DDD)+telefone "
            />
          </div>
        </div>

        <div className="inputFoto">
          <h5> Adicione fotos do seu estabelecimento, produto ou serviço: </h5>
        </div>

        <div className="imagem">
          <div className="alterafoto">
            <a href="">
              <Image
                className="vetor"
                size={90}
                color="#5a5858"
                weight="light"
              />
            </a>
          </div>
        </div>

        <div className="checkbox">
          <div className="ContentC">
            <input type="checkbox" name="" id="" />
            <label className="custom-checkbox">
              Aceito <a href="">politica de privacidade</a> e{" "}
              <a href="">condições gerais</a>{" "}
            </label>
          </div>

          <label className="inputtext">
            Este site está protegido por reCAPTCHA e se aplicam à{" "}
            <a href="">politica de privacidade</a> e aos <br />{" "}
            <a href="">termos e serviços do google</a>.
          </label>
        </div>

        <div className="ButtonCadastrar">
          <button className="buttonCadastrar">Finalizar Cadastro</button>
        </div>
      </Container>

      <Footer />
    </>
  );
}