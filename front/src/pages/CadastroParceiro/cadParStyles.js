import styled from "styled-components";

export const Container = styled.div`
  /* Use div em vez de body para compatibilidade com styled-components */
  width: 100%;
  height: 80%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    justify-content: center;
    padding-right: 520px;
    height: 5vh;

    h4 {
      color: #04136e;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      font-style: normal;
    }
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
  }

  input {
    width: 150vw;
    max-width: 20rem;
    height: 5vh;
    border-style: groove;
    border-radius: 4px;
    padding: 0.5rem;
  }

  .detalhesSenha {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-top: 30px;
    padding-right: 410px;

    h5 {
      padding-right: 60px;
      font-weight: 700;
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

  @media (max-width: 1200px) {
    .titulo {
      width: 60%;
      padding-left: 2rem;
      h2 {
        font-size: 24px;
      }
    }

    .inputfoto {
      padding-right: 40px;
      width: 5rem;
    }

    .DadosPessoais {
      padding-right: 20rem;
    }

    .inputs {
      padding-left: 10rem;
    }

    input {
      width: 100vw;
    }

    .detalhesSenha {
      padding-right: 150px;
    }

    .buttonproximo {
      width: 20%;
    }
  }

  @media (max-width: 768px) {
    .titulo {
      width: 80%;
      padding-left: 1rem;
      h2 {
        font-size: 20px;
      }
    }

    .inputfoto {
      padding-right: 20px;
      width: 4rem;
    }

    .DadosPessoais {
      padding-right: 10rem;
    }

    .inputs {
      padding-left: 5rem;
      grid-template-columns: 1fr;
    }

    input {
      width: 90vw;
    }

    .detalhesSenha {
      padding-right: 60px;
    }

    .buttonproximo {
      width: 30%;
    }
  }

  @media (max-width: 480px) {
    .titulo {
      width: 90%;
      padding-left: 0;
      h2 {
        font-size: 18px;
      }
    }

    .inputfoto {
      padding-right: 10px;
      width: 3rem;
    }

    .DadosPessoais {
      padding-right: 5rem;
    }

    .inputs {
      padding-left: 2rem;
      grid-template-columns: 1fr;
    }

    input {
      width: 80vw;
    }

    .detalhesSenha {
      padding-right: 20px;
    }

    .buttonproximo {
      width: 40%;
    }
  }
`;
