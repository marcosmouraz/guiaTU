import styled from "styled-components";

export const ContainerEmpre2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-family: "Outfit", system-ui;

  .container-formulario-foto {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .box-titulo-formulario {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-top: 60px;
    padding-bottom: 20px;
  }

  .titulo-form-dois {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    h2 {
      font-size: 30px;
      display: flex;
      color: #04136f;
      white-space: nowrap;
    }
  }
  .titulo {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    h2 {
      font-size: 30px;
      display: flex;
      color: #04136f;
      white-space: nowrap;
    }
  }
  .formSection {
    flex: 2; /* Aumenta a largura da seção do formulário */
    max-width: 600px; /* Aumenta o limite máximo de largura */
    background-color: white;
    padding: 30px; /* Aumenta o padding para preencher mais espaço */
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    width: 530px;
    padding-bottom: 41px;
    margin-bottom: 18px;
  }

  .formSection h1 {
    font-size: 28px; /* Aumenta o tamanho do título */
    color: #333;
  }
  .dados-comerciais {
    display: flex;
    justify-content: start;

    h4 {
      color: rgba(0, 0, 0, 0.6);
      font-weight: bolder;
      font-size: 20px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .inputs {
    display: flex;
    padding-bottom: 50px;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 20px;
  }

  input {
    width: 100%; /* Ajusta a largura para 100% do container pai */
    max-width: 30rem;
    height: 5vh;
    border-style: groove;
    border-radius: 4px;
    padding: 0.5rem;
    font-family: "Outfit", system-ui;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 18px; /* Aumenta o tamanho da fonte dos inputs */
    transition: border-color 0.3s ease;
  }

  /* Seção de foto */
  .imagens {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    background-color: yellow;

    .foto-perfil {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      .p {
        margin-bottom: 10px;
        font-size: 18px;
        color: #333;
      }

      .alterafoto {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px dashed #ccc;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        cursor: pointer;

        .vetor {
          color: #636363;
        }
      }
    }
  }

  .alterafoto:hover {
    border-color: #007bff;
  }

  .vetor {
    color: #636363;
    transition: color 0.3s ease;
  }

  .alterafoto:hover .vetor {
    color: #007bff;
  }

  /* .checkContainer {
    display: grid;
    flex-direction: column;
    align-items: center;
    gap: 5px; 
    justify-content: center;
  }
  .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  } */
  /* .inputscheckum {
    display: flex;
    gap: 10px;
    align-items: center; 
  } */

  /* .ContentC input[type="checkbox"] {
    width: 16px; 
    height: 16px; 
  } */
  /* .checkbox {
    display: flex;
    align-items: center;
  } */
  /* .custom-checkbox {
    font-size: 14px; 
    gap: 50%;
  } */

  /* .inputtext {
    padding-right: 110px;
    padding-bottom: 2rem;
    font-size: 12px; 
  } */

  /* .inputs {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 1rem;
  } */

  /* .inputContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
  } */

  /* .inputContainer input {
    width: 150vw;
    max-width: 20rem;
    height: 5vh;
    border-style: groove;
    border-radius: 4px;
    padding: 0.5rem;
  } */

  .buttonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0;
  }

  .buttonCadastrar {
    font-size: 18px;
    white-space: nowrap;
    width: 25vh;
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #04136e;
    color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 8px 1rem;
    text-align: center;

    &:hover {
      background-color: #3f58ee;
      border: none;
    }
  }

  .voltar {
    font-size: 16px;
    white-space: nowrap;
    width: 20vh; /* Ajuste conforme necessário */
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #cccccc; /* Ajuste a cor de fundo conforme necessário */
    color: #04136e;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 8px 1rem;
    text-align: center;

    &:hover {
      background-color: #999999; /* Ajuste a cor de fundo ao passar o mouse conforme necessário */
    }
  }
`;
