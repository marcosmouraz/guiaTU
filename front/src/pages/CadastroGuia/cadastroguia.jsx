import { UserFocus } from "@phosphor-icons/react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container } from "./cadGuiaStyles";
import { useForm } from "react-hook-form";
import { api } from "../../service/api";

export default function CadastroGuia() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const [day, month, year] = data.data_nascimento.split("/");
    const formattedDate = new Date(`${year}-${month}-${day}`);
    console.log(formattedDate);

    await api
      .post("/guia/create", {
        nome: data.nome,
        sobrenome: data.sobrenome,
        data_nascimento: formattedDate,
        cpf: data.cpf,
        pais: data.pais,
        estado: data.estado,
        username: data.username,
        senha_hash: data.senha_hash,
        credencial: data.credencial,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigation("/telafiltro");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <>
      <Menu />
      <Container>
        <div className="titulo">
          <h2>
            Olá, Guia <br />
            Cadastre sua conta.{" "}
          </h2>
        </div>

        <section className="inputfoto">
          <p className="p">Escolha sua Foto de Perfil</p>
          <a href="">
            <div className="alterafoto">
              <UserFocus className="vetor" size={90} color="#636363" />
            </div>
          </a>
        </section>

        <div className="DadosPessoais">
          <h4>Dados pessoais</h4>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputUm">
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
            <input
              className="dataNascimento"
              type="text"
              placeholder="Data de nascimento"
              {...register("data_nascimento")}
            />
            <input
              className="cpf"
              type="text"
              placeholder="CPF"
              {...register("cpf")}
            />
            <input
              className="pais"
              type="text"
              placeholder="País"
              {...register("pais")}
            />
            <input
              className="estado"
              type="text"
              placeholder="Estado"
              {...register("estado")}
            />
            <input
              className="credencial"
              type="text"
              placeholder="Credencial"
              {...register("credencial")}
            />
            <input
              className="email"
              type="text"
              placeholder="E-mail"
              {...register("username")}
            />
            <input
              className="senha"
              type="password"
              placeholder="Senha"
              {...register("senha_hash")}
            />
            <input
              className="confirmeSenha"
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirmeSenha")}
            />
          </div>

          <div className="checkbox">
            <div className="ContentC">
              <input type="checkbox" name="" id="" />
              <label className="custom-checkbox">
                Aceito <a href="">politica de privacidade</a> e{" "}
                <a href="">condições gerais</a>{" "}
              </label>
            </div>

            <label className="inputtext">
              Este site está protegido por reCAPTCHA e se aplicam à{" "}
              <a href="">politica de privacidade</a> e aos <br />{" "}
              <a href="">termos e serviços do google</a>.
            </label>
          </div>

          <div className="buttonContainer">
            <button type="submit" className="buttonFinalizar">Cadastrar</button>
          </div>
        </form>
      </Container>
      <Footer />
    </>
  );
}