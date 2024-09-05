import { useForm } from "react-hook-form";
import  CadastroTurista1  from "./cadTurista1";
import  CadastroTurista2  from "./cadTurista2";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

export default function FormTurista({tabForm, setTabForm}) {

  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    
    const [day, month, year] = data.data_nascimento.split("/");
    const formattedDate = new Date(`${year}-${month}-${day}`)
    console.log(formattedDate);


    await api
      .post("/turista/create", {
        nome: data.nome,
        sobrenome: data.sobrenome,
        data_nascimento: formattedDate,
        genero:data.genero,
        cpf: data.cpf,
        pais: data.pais,
        estado: data.estado,
        username: data.username,
        senha_hash: data.senha_hash,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        window.alert("Cadastro realizado com sucesso!");
        navigation("/telafiltro");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };


 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {tabForm === 0 ? (
        <CadastroTurista1
          register={register}
          setTabForm={setTabForm}
          errors={errors}
        />
      ) : (
        <CadastroTurista2
          register={register}
          setTabForm={setTabForm}
          errors={errors}
        />
      )}
    </form>
  );
}
