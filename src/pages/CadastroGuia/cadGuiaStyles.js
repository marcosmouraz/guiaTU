import styled from "styled-components";

export const Container = styled.body`
  width: 100%;
  height: 80%;
  max-width: 100%;
  margin: 0 auto;

  .titulo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 35vh;
    margin: 0 auto;
    padding-left: 5rem;

    h2 {
      font-size: 32px;
      color: #04136e;
    }
  }

  .DadosPessoais {
    display: flex;
    justify-content: center;
    padding-right: 36rem;
    height: 5vh;

    h4 {
      color: #04136e;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      font-style: normal;
    }
  }

  .inputfoto {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 7rem;
    padding-bottom: 1rem;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    gap: 5px;
    padding-right: 80px;

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
    }
  }
  .inputUm {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding-left: 20rem;
  }
  .inputUm input {
    width: 150vw;
    max-width: 20rem;
    height: 5vh;
    border-style: groove;
    border-radius: 4px;
    padding: 1rem;
  }
  .checkbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .ContentC {
    width: 53%;
    display: flex;
    gap: 10px;
    align-items: start;
  }
  .inputtext {
    padding-right: 110px;
  }
  .buttonContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  .buttonFinalizar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    margin: 2.5rem auto 0 auto;
    background-color: #3f58ee;
    color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 8px 1rem;
    text-align: center;

    &:hover {
      background-color: #04136e;
      border: none;
    }
  }

  @media (max-width: 2327px) {
    .titulo {
      width: 60%;
      padding-right: 43rem;
    }

    .inputfoto {
      width: 43rem;
      padding-left: 36rem;
    }

    .inputUm,
    .inputDois {
      width: 60%;
      padding-bottom: 20px;
    }

    .buttonProximo {
      width: 20%;
    }

    .linha {
      width: 70rem;
    }

    .titulo h2 {
      font-size: 30px;
    }
  }

  @media (max-width: 1600px) {
    .titulo {
      width: 65%;
    }

    .inputfoto {
      width: 4.5rem;
    }

    .inputUm .inputDois {
      width: 65%;
    }

    .buttonProximo {
      width: 22%;
    }

    .linha {
      width: 65rem;
    }

    .titulo h2 {
      font-size: 28px;
    }
  }

  @media (max-width: 1200px) {
    .titulo {
      width: 75%;
    }

    .inputfoto {
      width: 4rem;
    }

    .inputUm .inputDois {
      width: 70%;
    }

    .buttonProximo {
      width: 25%;
    }

    .linha {
      width: 60rem;
    }

    .titulo h2 {
      font-size: 26px;
    }
  }

  @media (max-width: 992px) {
    .titulo {
      width: 80%;
    }

    .inputfoto {
      width: 3.5rem;
    }

    .inputUm,
    .inputDois {
      width: 75%;
    }

    .buttonProximo {
      width: 30%;
    }

    .linha {
      width: 55rem;
    }

    .titulo h2 {
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    .titulo {
      width: 90%;
    }

    .inputfoto {
      width: 3rem;
    }

    .inputUm,
    .inputDois {
      width: 85%;
    }

    .buttonProximo {
      width: 35%;
    }

    .linha {
      width: 50rem;
    }

    .titulo h2 {
      font-size: 22px;
    }
  }

  @media (max-width: 576px) {
    .titulo {
      width: 100%;
      padding-left: 0;
      justify-content: center;
    }

    .inputfoto {
      width: 2.5rem;
    }

    .inputUm,
    .inputDois {
      width: 90%;
    }

    .buttonProximo {
      width: 50%;
    }

    .linha {
      width: 40rem;
    }

    .titulo h2 {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .titulo {
      width: 100%;
      padding-left: 0;
    }

    .inputfoto {
      width: 2rem;
    }

    .inputUm,
    .inputDois {
      width: 100%;
    }

    .buttonProximo {
      width: 60%;
    }

    .linha {
      width: 35rem;
    }

    .titulo h2 {
      font-size: 18px;
    }
  }
`;
