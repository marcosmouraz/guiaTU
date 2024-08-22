import { Image } from "@phosphor-icons/react";
import { Container } from "./cadParDoisStyles";

export default function CadastroEmpreendedores2({ register, setTabForm }) {
  return (
    <Container>
    
      <div className="inputs">
        <div className="inputContainer">
          <input
            className="nomeestabelecimento"
            type="text"
            placeholder="Nome Estabelecimento"
            {...register("nome_estabelecimento")}
          />
          <input
            className="cep"
            type="text"
            placeholder="CEP"
            {...register("cep")}
          />
          <input
            className="rua"
            type="text"
            placeholder="Rua"
            {...register("rua")}
          />
          <input
            className="numero"
            type="text"
            placeholder="Nº do estabelecimento"
            {...register("numero_estabelecimento")}
          />
        </div>
        <div className="inputContainer">
          <input
            className="bairro"
            type="text"
            placeholder="Bairro"
            {...register("bairro")}
          />
          <input
            className="municipio"
            type="text"
            placeholder="Municipio"
            {...register("municipio")}
          />
          <input
            className="cnpj"
            type="text"
            placeholder="CNPJ"
            {...register("cnpj")}
          />
          <input
            className="numerotelefone"
            type="text"
            placeholder="(DDD)+telefone "
            {...register("telefone")}
          />
        </div>
      </div>

      <div className="inputFoto">
        <h5> Adicione fotos do seu estabelecimento, produto ou serviço: </h5>
      </div>

      <div className="imagem">
        <div className="alterafoto">
          <a href="">
            <Image className="vetor" size={90} color="#5a5858" weight="light" />
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
        <button type="submit" className="buttonCadastrar">
          Finalizar Cadastro
        </button>
        <button onClick={() => setTabForm(0)} type="submit" className="voltar">
          Voltar
        </button>
      </div>
    </Container>
  );
}
