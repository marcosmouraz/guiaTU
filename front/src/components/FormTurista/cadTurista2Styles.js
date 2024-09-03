import styled from "styled-components";

export const ContainerFormTab2 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Outfit", system-ui;

  .formDois {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin-bottom: 2rem;
  }

  .formsection {
    flex: 2; /* Aumenta a largura da seção do formulário */
    max-width: 600px; /* Aumenta o limite máximo de largura */
    margin-right: 20px;
    background-color: white;
    padding: 30px; /* Aumenta o padding para preencher mais espaço */
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  .formsection h1 {
    font-size: 20px; /* Aumenta o tamanho do título */
    color: #333;
    margin-bottom: 25px;
    font-family: "Outfit", system-ui;
  }

  /* Estilo do formulário */
  .inputUm {
    display: flex;
    flex-direction: column;
    font-family: "Outfit", system-ui;
  }

  .inputUm {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    font-family: "Outfit", system-ui;
  }

  /* Estilo dos inputs */
  .inputUm input {
    padding: 12px; /* Aumenta o padding dos inputs */
    margin-bottom: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 18px; /* Aumenta o tamanho da fonte dos inputs */
    transition: border-color 0.3s ease;
  }

  /* Input em estado de erro */
  .inputUm input.error {
    border-color: #ff4d4d;
    background-color: #ffe6e6;
  }

  .inputUm input:focus {
    border-color: #007bff;
    outline: none;
  }

  /* Estilo das mensagens de erro */
  .error {
    color: #ff4d4d;
    font-size: 14px;
    margin-top: -8px;
    margin-bottom: 8px;
  }
  .checkContainer {
    display: grid;
    flex-direction: column;
    align-items: center;
    gap: 5px; /* Reduzido para compactar o espaço */
    justify-content: center;
  }
  .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .inputscheckum {
    display: flex;
    gap: 10px;
    align-items: center; /* Alinhado verticalmente */
  }

  .ContentC input[type="checkbox"] {
    width: 16px; /* Ajustado para um tamanho menor */
    height: 16px; /* Ajustado para um tamanho menor */
  }
  .checkbox {
    display: flex;
    align-items: center;
  }
  .custom-checkbox {
    font-size: 14px; /* Ajustado para um tamanho menor */
    gap: 50%;
  }

  .inputtext {
    padding-right: 110px;
    padding-bottom: 2rem;
    font-size: 12px; /* Ajustado para um tamanho menor */
  }

  .inputs {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: rem;
  }

  /* Botão de próxima etapa */
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 18px; /* Aumenta o tamanho da fonte do botão */
    cursor: pointer;
    transition: background-color 0.3s ease;
    gap: 3rem;
    padding: 5%;
  }

  button:hover {
    background-color: #0056b3;
    gap: 50%;
  }
`;
