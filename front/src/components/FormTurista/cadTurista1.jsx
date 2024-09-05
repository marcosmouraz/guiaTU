import React, { useState, useEffect } from "react";
import { UserFocus } from "phosphor-react";

import { useForm, Controller } from "react-hook-form";

export default function CadastroTurista1({ setTabForm }) {
  const [image, setImage] = useState(null);
  const { register, handleSubmit, control, formState: { errors }, setValue } = useForm();

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

  const formatDate = (value) => {
    if (!value) return "";
    return value
      .replace(/\D/g, "") // Remove tudo que não for dígito
      .replace(/^(\d{2})(\d)/, "$1/$2") // Adiciona '/'
      .replace(/(\d{2})(\d)/, "$1/$2") // Adiciona '/'
      .substring(0, 10); // Limita o comprimento
  };

  const handleBlurDate = (e) => {
    setValue("data_nascimento", formatDate(e.target.value));
  };

  const onSubmit = (data) => {
    console.log(data);
    // Adicione a lógica para o envio do formulário
  };

  return (
    <section className="container-formulario-foto">
      <div className="box-titulo-formulario">
      <div className="titulo">
        <h2>
          Olá Turista, <br />
          realize seu cadastro...
        </h2>
      </div>
      <div className="container-cad-turista1">
        <div className="formSection">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="inputColumn">
              <input
                className={`nome`}
                type="text"
                placeholder="Nome"
                {...register("nome", { required: "Nome é obrigatório" })}
              />
              {errors.nome && <p className="error">{errors.nome.message}</p>}

              <input
                className={`sobrenome`}
                type="text"
                placeholder="Sobrenome"
                {...register("sobrenome", {
                  required: "Sobrenome é obrigatório",
                })}
              />
              {errors.sobrenome && (
                <p className="error">{errors.sobrenome.message}</p>
              )}

              <input
                className={`genero`}
                type="text"
                placeholder="Gênero"
                {...register("genero", { required: "Gênero é obrigatório" })}
              />
              {errors.genero && (
                <p className="error">{errors.genero.message}</p>
              )}

              <input
                className={`dataNascimento`}
                type="text"
                placeholder="Data de Nascimento"
                {...register("data_nascimento", {
                  required: "Data de nascimento é obrigatória",
                  pattern: {
                    value: /^\d{2}\/\d{2}\/\d{4}$/,
                    message: "Data de nascimento inválida",
                  },
                })}
                onBlur={handleBlurDate}
              />
              {errors.data_nascimento && (
                <p className="error">{errors.data_nascimento.message}</p>
              )}
            </div>

            <div className="inputColumn">
              <input
                className={`Cpf`}
                type="text"
                placeholder="CPF"
                {...register("cpf", {
                  required: "CPF é obrigatório",
                  pattern: {
                    value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                    message: "CPF inválido",
                  },
                })}
              />
              {errors.cpf && <p className="error">{errors.cpf.message}</p>}

              <input
                className={`Pais`}
                type="text"
                placeholder="País"
                {...register("pais", { required: "País é obrigatório" })}
              />
              {errors.pais && <p className="error">{errors.pais.message}</p>}

              <input
                className={`estado`}
                type="text"
                placeholder="Estado"
                {...register("estado", { required: "Estado é obrigatório" })}
              />
              {errors.estado && (
                <p className="error">{errors.estado.message}</p>
              )}

              <button type="button" onClick={() => setTabForm(1)}>
                Próximo
              </button>
            </div>
          </form>
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
