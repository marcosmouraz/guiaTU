import { Image } from "@phosphor-icons/react";
import { UserFocus } from "phosphor-react";
import React, { useState } from "react";
import { ContainerEmpre2 } from "./cadParDoisStyles";

export default function CadastroEmpreendedores2({ register, setTabForm, setValue }) {

  // //////////////////////////////////////////////////////
const checkCEP = (e) => {
  const cep = e.target.value.replace(/\D/g, "");
  console.log(cep);
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setValue("rua", data.logradouro);
      setValue("bairro", data.bairro);
      setValue("municipio", data.localidade);
      setValue("pais", "Brasil");
      setValue("estado", data.estado);
    });
};
// //////////////////////////////////////////////////////////
const [image, setImage] = useState(null);

const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
};
// //////////////////////////////////////////////////////////
const [showModal, setShowModal] = useState(false);

const handleModal = () => {
  setShowModal(!showModal);
};

  return (
    <ContainerEmpre2>
      <div className="titulo-form-dois">
        <h2>
          Olá Empreendedor, <br /> Cadastre seu negocio...
        </h2>
      </div>
      <section className="container-form-foto">
        <div className="formDois">
          <div className="formSection">
            <div className="dados-comerciais">
              <h4>Dados comerciais</h4>
            </div>
            <div className="inputs">
              <div className="inputContainer">
                <input
                  className="nome-estabelecimento"
                  type="text"
                  placeholder="Nome Estabelecimento"
                  {...register("nome_estabelecimento")}
                />
                <input
                  className="cep"
                  type="text"
                  placeholder="CEP"
                  {...register("cep")}
                  onBlur={(e) => checkCEP(e)}
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

            <div className="buttonContainer">
              <button onClick={() => setTabForm(0)} className="voltar">
                Voltar
              </button>
              <button type="submit" className="buttonCadastrar">
                Finalizar Cadastro
              </button>
            </div>
          </div>
        </div>
        <div className="imagens">
          <section className="foto-perfil">
            <p className="p">Adicione uma foto de Perfil</p>
            <label htmlFor="fotoPerfil" className="alterafoto">
              {image ? (
                <img src={image} alt="Foto de Perfil" />
              ) : (
                <UserFocus className="vetor" size={90} color="#636363" />
              )}
              <input
                type="file"
                id="fotoPerfil"
                name="fotoPerfil"
                accept="image/*"
                className="inputFoto"
                onChange={handleImageChange}
              />
            </label>
          </section>
          <section className="foto-estabelecimento">
          <p className="p">Adicione foto do seu negocio</p>
          <label htmlFor="fotoPerfil" className="alterafoto">
            {image ? (
              <img src={image} alt="Foto de Perfil" />
            ) : (
              <UserFocus className="vetor" size={90} color="#636363" />
            )}
            <input
              type="file"
              id="fotoPerfil"
              name="fotoPerfil"
              accept="image/*"
              className="inputFoto"
              onChange={handleImageChange}
            />
          </label>
        </section>
        </div>
      </section>
    </ContainerEmpre2>
  );
}
