import styled from "styled-components";

export const Container = styled.div`
  /* Use div em vez de body para compatibilidade com styled-components */
  width: 100%;
  height: 136vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Outfit", system-ui;

  .titulo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 35vh;
    padding-right: 200px;

    h2 {
      font-size: 32px;
      color: #04136e;
      overflow-wrap: break-word;
      white-space: normal;
    }
  }

  .inputfoto {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1rem;
    text-align: center;
    align-items: center;
    gap: 5px;
    padding-left: 500px;

    .vetor {
      border: #1e1e1e;
      background-color: aliceblue;
      border-style: groove;
      border-radius: 10px;
      transition: background-color 0.2s;
    }

    .vetor:hover {
      border-color: #04136e;
      background-color: #04136e;
    }

    .p {
      color: #04136e;
      font-size: 16px;
      font-weight: 600;
      width: 8rem;
    }
  }

  .DadosPessoais {
    display: flex;
    justify-content: start;

    h4 {
      color: rgba(0, 0, 0, 0.6);
      font-family: "Poppins", sans-serif;
      font-weight: bolder;
      font-size: 20px;
    }
  }

  .form {
    height: 98%;
    width: 100%;
    margin-right: 20%;
    background-color: white;
    padding: 30px; /* Aumenta o padding para preencher mais espaço */
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    font-family: "Outfit", system-ui;
  }

  .inputs {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 1rem;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 6%;
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

  .detalhesSenha {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    padding-bottom: 20px;
    padding-top: 30px;
   

    h5 {
      font-weight: 700;
    }

    ul {
      font-weight: normal;
      font-size: 13px;
      color: #1e1e1e;
      padding-left: 3%;
    }
  }

  .buttonContainer {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 2rem; /* Ajuste o valor conforme necessário */
  }

  .buttonproximo {
    background-color: #04136e;
    color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 10px 2rem; /* Ajuste o padding conforme necessário */
    text-align: center;
    font-size: 16px; /* Ajuste o tamanho da fonte conforme necessário */

    &:hover {
      background-color: #3f58ee;
    }
  }

  /* Media Queries para telas menores */
  @media (max-width: 1200px) {
    .titulo {
      width: 70%;
      padding-right: 100px;
    }

    .inputfoto {
      padding-left: 300px;
    }

    .form {
      width: 650px;
    }
  }

  @media (max-width: 992px) {
    .titulo {
      width: 90%;
      padding-right: 50px;
    }

    .inputfoto {
      padding-left: 150px;
    }

    .form {
      width: 100%;
      padding: 20px;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    .titulo {
      width: 100%;
      padding-right: 0;
      height: auto;
      text-align: center;
    }

    .inputfoto {
      padding-left: 0;
    }

    .form {
      width: 100%;
      padding: 15px;
    }

    .detalhesSenha {
      padding-right: 0;
      h5 {
        padding-right: 0;
      }
    }

    input {
      max-width: 100%;
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    .titulo h2 {
      font-size: 24px;
    }

    .inputfoto .p {
      font-size: 14px;
      width: auto;
    }

    .buttonproximo {
      font-size: 14px;
      padding: 8px 1.5rem;
    }
  }
`;
