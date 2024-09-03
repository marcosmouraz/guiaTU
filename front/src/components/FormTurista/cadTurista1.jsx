// import { useForm } from "react-hook-form";
import { UserFocus } from "phosphor-react";

export default function CadastroTurista1({ register ,setTabForm }) {
  
  return (

      
    <div className="container">
      <div className="formSection">
        <h1>Preencha os campos abaixo:</h1>
        <form className="form">
          <div className="inputColumn">
            <input
              className={`nome `}
              type="text"
              placeholder="Nome"
              {...register("nome", { required: "Nome é obrigatório" })}
            />
            
            <input
              className={`sobrenome `}
              type="text"
              placeholder="Sobrenome"
              {...register("sobrenome", {
                required: "Sobrenome é obrigatório",
              })}
            />
            
            <input
              className={`genero `}
              type="text"
              placeholder="Genero"
              {...register("Genero", {
                required: "Genero é obrigatório",
              })}
            />

            <input
              className={`dataNascimento`}
              type="text"
              placeholder="Data de Nascimento"
              {...register("data_nascimento", {
                required: "Data de nascimento é obrigatória",
              })}
            />
            
          </div>

          <div className="inputColumn">
            <input
              className={`Cpf `}
              type="text"
              placeholder="CPF"
              {...register("cpf", { required: "CPF é obrigatório" })}
            />
           <input
              className={`cep `}
              type="text"
              placeholder="CEP"
              {...register("CEP", {
                required: "CEP é obrigatório",
              })}
            />

            <input
              className={`Pais `}
              type="text"
              placeholder="País"
              {...register("pais", { required: "País é obrigatório" })}
            />
           

            <input
              className={`estado `}
              type="text"
              placeholder="Estado"
              {...register("estado", { required: "Estado é obrigatório" })}
            />
            

            <button type="button" onClick={() => setTabForm(1)}>
              Próximo
            </button>
          </div>
        </form>
      </div>

      <div className="photoSection">
        <section className="inputfoto">
          <p className="p">Escolha sua Foto de Perfil</p>
          <a href="#">
            <div className="alterafoto">
              <UserFocus className="vetor" size={90} color="#636363" />
            </div>
          </a>
        </section>
      </div>
    </div>
  );
}
