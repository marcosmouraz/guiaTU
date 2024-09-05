import "../../pages/CadastroParceiro/cadParStyles";
import React, { useState, useEffect } from "react";
import { UserFocus } from "phosphor-react";


export default function CadastroEmpreendedores({ register, setTabForm }) {
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
  return (
    <section className="container-formulario-foto">
      <div className="box-titulo-formulario">
        <div className="titulo">
          <h2>
            Olá Empreendedor, <br /> realize seu cadastro...
          </h2>
        </div>
        <div className="container-cad-empreendedor1">
          <div className="formSection">
            <div className="DadosPessoais">
              <h4>Dados pessoais</h4>
            </div>
            <div className="inputs">
              <div className="inputContainer">
                <input
                  className="nome"
                  type="text"
                  placeholder="Nome"
                  {...register("nome")}
                />
                <input
                  className="data"
                  type="text"
                  placeholder="Data de nascimento"
                  {...register("data_nascimento")}
                />
                <input
                  className="pais"
                  type="text"
                  placeholder="País"
                  {...register("pais")}
                />
                <input
                  className="senha"
                  type="password"
                  placeholder="Senha"
                  {...register("senha_hash")}
                />
              </div>

              <div className="inputContainer">
                <input
                  className="sobrenome"
                  type="text"
                  placeholder="Sobrenome"
                  {...register("sobrenome")}
                />
                <input
                  className="emailf"
                  type="text"
                  placeholder="E-mail"
                  {...register("username")}
                />
                <input
                  className="estado"
                  type="text"
                  placeholder="Estado"
                  {...register("estado")}
                />
                <input
                  className="confirmeSenha"
                  type="password"
                  placeholder="Confirme sua senha"
                  {...register("confirmarsenha")}
                />
              </div>
            </div>

            <div className="detalhesSenha">
              <h5>SUA SENHA DEVE POSSUIR:</h5>
              <ul>
                <li>No mínimo 8 caracteres: </li>
                <li>Um caracter especial (ex: *, @)</li>
              </ul>
            </div>

            <div className="buttonContainer">
              <button className="buttonproximo" onClick={() => setTabForm(1)}>
                Próximo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="imagemArea">
        <section className="inputfoto">
          <p className="p">Escolha sua Foto de Perfil</p>
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
  );
}
