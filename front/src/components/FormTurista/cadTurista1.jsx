import { useForm } from "react-hook-form";

export default function CadastroTurista1({ setTabForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleNextClick = async () => {
    const isValidForm = await trigger();
    if (isValidForm) {
      setTabForm(1);
    }
  };

  return (
    <div className="container">
      <div className="formSection">
        <h1>Cadastro do Turista</h1> {/* Adiciona um título */}
        <form className="form">
          <div className="inputColumn">
            <input
              className={`nome ${errors.nome ? "error" : ""}`}
              type="text"
              placeholder="Nome"
              {...register("nome", { required: "Nome é obrigatório" })}
            />
            {errors.nome && (
              <span className="error">{errors.nome.message}</span>
            )}

            <input
              className={`sobrenome ${errors.sobrenome ? "error" : ""}`}
              type="text"
              placeholder="Sobrenome"
              {...register("sobrenome", {
                required: "Sobrenome é obrigatório",
              })}
            />
            {errors.sobrenome && (
              <span className="error">{errors.sobrenome.message}</span>
            )}

            <input
              className={`dataNascimento ${
                errors.data_nascimento ? "error" : ""
              }`}
              type="text"
              placeholder="Data de Nascimento"
              {...register("data_nascimento", {
                required: "Data de nascimento é obrigatória",
              })}
            />
            {errors.data_nascimento && (
              <span className="error">{errors.data_nascimento.message}</span>
            )}
          </div>

          <div className="inputColumn">
            <input
              className={`Cpf ${errors.cpf ? "error" : ""}`}
              type="text"
              placeholder="CPF"
              {...register("cpf", { required: "CPF é obrigatório" })}
            />
            {errors.cpf && <span className="error">{errors.cpf.message}</span>}

            <input
              className={`Pais ${errors.pais ? "error" : ""}`}
              type="text"
              placeholder="País"
              {...register("pais", { required: "País é obrigatório" })}
            />
            {errors.pais && (
              <span className="error">{errors.pais.message}</span>
            )}

            <input
              className={`estado ${errors.estado ? "error" : ""}`}
              type="text"
              placeholder="Estado"
              {...register("estado", { required: "Estado é obrigatório" })}
            />
            {errors.estado && (
              <span className="error">{errors.estado.message}</span>
            )}

            <button type="button" onClick={handleNextClick}>
              Próximo
            </button>
          </div>
        </form>
      </div>

      <div className="photoSection">
        <div className="photoWrapper">
          <img
            src="path/to/default-avatar.png"
            alt="Avatar"
            className="avatar"
          />
          <div className="photoUpload">
            <p>Escolha sua foto</p>
            {/* Adicione o componente de upload de foto aqui */}
          </div>
        </div>
      </div>
    </div>
  );
}
