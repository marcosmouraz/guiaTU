import { useState } from "react";
import { useForm } from "react-hook-form";
import  CadastroTurista1  from "./cadTurista1";
import  CadastroTurista2  from "./cadTurista2";
import { api } from "../../service/api";

export default function FormTurista() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const [day, month, year] = data.data_nascimento.split("/");
    const formattedDate = new Date(`${year}-${month}-${day}`)
    console.log(formattedDate);
    
    await api
      .post("/turista/create", {
        nome: data.nome,
        sobrenome: data.sobrenome,
        data_nascimento: formattedDate,
        cpf: data.cpf,
        pais: data.pais,
        estado: data.estado,
        username: data.username,
        senha_hash: data.senha_hash,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigation("/telafiltro");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const [tabForm, setTabForm] = useState(1);
  const [username, setUsername] = useState("");
  const [senha_hash, setSenha_hash] = useState("");

  async function handleCadastro() {
    
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {tabForm === 0 ? (
          <CadastroTurista1 register={register} setTabForm={setTabForm} />
        ) : (
          <CadastroTurista2 register={register} setTabForm={setTabForm} />
        )}

      </form>
    </>
  );
}
