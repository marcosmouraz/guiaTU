import React from "react";
import "../../pages/CadastroParceiro/cadParStyles"; 

export default function CadastroEmpreendedores({ register, setTabForm }) {
  return (
    <>
      <div className="form">
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
    </>
  );
}
