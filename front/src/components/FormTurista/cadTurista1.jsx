import "../../pages/CadastroTurista/cadTurStyles"

export default function CadastroTurista1({register, setTabForm}) {
  
  return (
    <>
          <div className="inputnome">
            <input
              className="nome"
              type="text"
              placeholder="Nome"
              {...register("nome")}
            />
            <input
              className="sobrenome"
              type="text"
              placeholder="Sobrenome"
              {...register("sobrenome")}
            />
          </div>
          <div className="inputDataCpf">
            <input
              className="dataNascimento"
              type="text"
              placeholder="Data de Nascimento"
              {...register("data_nascimento")}
            />
            <input
              className="Cpf"
              type="text"
              placeholder="CPF"
              {...register("cpf")}
            />
          </div>
          <div className="inputsInfos">
            <input
              className="Pais"
              type="text"
              placeholder="Pais"
              {...register("pais")}
            />
            <input
              className="estado"
              type="text"
              placeholder="Estado"
              {...register("estado")}
            />
            <button onClick={() => setTabForm(1)} >Próximo</button>
          </div>
       
    </>
  );
}
