import React, { useState } from "react";
import { ContainerFormTab2 } from "./cadTurista2Styles";

export default function CadastroTurista2({ errors, register, setTabForm }) {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ContainerFormTab2>
      <div className="titulo-form-dois">
        <h2>
          Olá Turista, <br />
          Estamos concluindo seu cadastro ...
        </h2>
      </div>
      <div className="formDois">
        <div className="formsection">
          <div className="inputUm">
            <input type="text" placeholder="E-mail" {...register("username")} />
            <input
              type="text"
              placeholder="DDD + Telefone"
              {...register("telefone")}
            />
          </div>

          <div className="inputUm">
            <input
              type="password"
              placeholder="Senha"
              {...register("senha_hash")}
            />
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
                Aceito{" "}
                <span onClick={handleModal} className="clickable-span">
                  política de privacidade
                </span>{" "}
                e <span>condições gerais</span>{" "}
              </label>
            </div>

            <label className="inputtext">
              Este site está protegido por reCAPTCHA e se aplicam à{" "}
              <span className="clickable-span" onClick={handleModal}>
                política de privacidade
              </span>{" "}
              e aos <br /> <span>termos e serviços do google</span>.
            </label>
          </div>

          <div className="buttons">
            <button
              onClick={() => setTabForm(0)}
              type="submit"
              className="voltar"
            >
              Voltar
            </button>
            <button type="submit" className="enviar">
              Cadastrar
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModal}>
              &times;
            </span>
            <h2>Política de Privacidade</h2>
            <p>
              Aqui está o texto genérico da política de privacidade. Ele explica
              como suas informações pessoais são coletadas, usadas e protegidas
              durante o uso deste site.
            </p>
            <button onClick={handleModal}>Fechar</button>
          </div>
        </div>
      )}
    </ContainerFormTab2>
  );
}
