import { useForm } from "react-hook-form";
import CadastroEmpreendedor1 from "./cadEmpreendedor1";
import CadastroEmpreendedor2 from "./cadEmpreendedor2";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

export default function FormEmpreendedor({ tabForm, setTabForm }) {
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const [day, month, year] = data.data_nascimento.split("/");
    const formattedDate = new Date(`${year}-${month}-${day}`);
    console.log(formattedDate);

    await api
      .post("/empreendedor/create", {
        nome: data.nome,
        sobrenome: data.sobrenome,
        data_nascimento: formattedDate,
        username: data.username,
        pais: data.pais,
        estado: data.estado,
        senha_hash: data.senha_hash,
        nome_estabelecimento: data.nome_estabelecimento,
        cep: data.cep,
        rua: data.rua,
        numero_estabelecimento: data.numero_estabelecimento,
        bairro: data.bairro,
        municipio: data.municipio,
        cnpj: data.cnpj,
        telefone: data.telefone,
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
    <>
      ;
      <form onSubmit={handleSubmit(onSubmit)}>
        {tabForm === 0 ? (
          <CadastroEmpreendedor1
            register={register}
            setTabForm={setTabForm}
            setValue={setValue}
            errors={errors}
          />
        ) : (
          <CadastroEmpreendedor2
            register={register}
            setTabForm={setTabForm}
            setValue={setValue}
            errors={errors}
          />
        )}
      </form>
    </>
  );
}


