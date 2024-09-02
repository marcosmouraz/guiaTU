import { Image } from "@phosphor-icons/react";
import { Container } from "./cadParDoisStyles";


export default function CadastroEmpreendedores2({ register, setTabForm }) {

  // //////////////////////////////////////////////////////
const checkCEP = (e) => {
  const cep = e.target.value.replace(/\D/g, "");
  console.log(cep);
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // register({ name: 'address', value: data.logradouro });
      setValue("rua", data.rua);
      setValue("bairro", data.bairro);
      setValue("municipio", data.municipio);
      setValue("estado", data.estado);
      setFocus("numero_estabelecimento");
    });
};
// ///////////////////////////////////////////////////////////

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
              onBlur={checkCEP}
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
            Aceito <a href="">política de privacidade</a> e{" "}
            <a href="">condições gerais</a>{" "}
          </label>
        </div>

        <label className="inputtext">
          Este site está protegido por reCAPTCHA e se aplicam à{" "}
          <a href="">política de privacidade</a> e aos <br />{" "}
          <a href="">termos e serviços do Google</a>.
        </label>
      </div>

      <div className="buttonContainer">
        <button onClick={() => setTabForm(0)} className="voltar">
          Voltar
        </button>
        <button type="submit" className="buttonCadastrar">
          Finalizar Cadastro
        </button>
      </div>
    </Container>
  );
}
