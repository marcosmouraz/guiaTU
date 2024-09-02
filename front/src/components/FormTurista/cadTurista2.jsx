import {ContainerFormTab2} from "./cadTurista2Styles";

export default function CadastroTurista2({register, setTabForm}) {
  
  return (
    <ContainerFormTab2>

      <div className="formDois">
        <div className="formsection">
          <h1>Estamos concluindo seu Cadastro ..</h1>
      <div className="inputUm">
        <input type="text" placeholder="E-mail" {...register("username")} />
        <input
          type="text"
          placeholder="DDD + Telefone"
          {...register("telefone")}
        />
      </div>

      <div className="inputUm">
        <input type="password" placeholder="Senha" {...register("senha_hash")} />
        <input
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmarsenha")}
        />
      </div>

      <div className="checkContainer">
        <div className="inputscheckum">
          <input type="checkbox" name="" id="" />
          <label className="custom-checkbox">
            Quero receber as últimas novidades da Guiatú e as melhores dicas
            para minhas próximas visitas guiadas{" "}
          </label>
        </div>

        <div className="inputscheckum">
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

      <div className="buttons">
        <button onClick={() => setTabForm(0)} type="submit" className="voltar">
          Voltar
        </button>
        <button type="submit" className="enviar">
          Enviar
        </button>
      </div>
      </div>
      </div>
    </ContainerFormTab2>
  );
}
