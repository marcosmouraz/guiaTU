import { UserFocus } from "@phosphor-icons/react";
import Menu from "../../components/Menu/menu";
import { Container } from "./cadTurStyles";

export default function CadastroTurista() {
  return (
    <Container>
      <Menu />

      <div className="titulo">
        <h2>Olá Turista, realize seu cadastro...</h2>
      </div>
      
      <div className="inputfoto">
        <p className="p">
          Escolha sua foto de perfil
        </p> 
      <UserFocus className="alteraFoto" size={90} color="#636363" />
      </div>

      <div className="inputnome">
        <input className="nome" type="text" placeholder="Nome" />
        <input className="sobrenome" type="text" placeholder="Sobrenome" />
      </div>
      <div className="inputDataCpf">
       
        <input
          className="dataNascimento"
          type="text"
          placeholder="Data de Nascimento"
        />
        <input className="Cpf" type="text" placeholder="CPF"/>
      </div>
      <div className="inputsInfos">
        <input className="Pais" type="text" placeholder="Pais" />
        <input className="estado" type="text" placeholder="Estado"
        />
      </div>
    </Container>
  );
}
