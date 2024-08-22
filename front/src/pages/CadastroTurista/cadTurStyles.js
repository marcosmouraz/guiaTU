import styled from "styled-components";

export const Container = styled.body`
  width: 100%;
  height: 70vh;
  max-width: 100%;
  margin: 0 auto;

  .titulo {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-wrap: break-word;
    width: 50%;
    height: 18rem;
    margin: 0 auto;
    padding-left: 1rem;

    h2 {
      font-size: 32px;
      color: #04136e;
    }
  }

  .inputfoto {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 7rem;
    padding-bottom: 2rem;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    gap: 5px;
    top: -2.5rem;

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

  /* .inputnome,
  .inputDataCpf,
  .inputsInfos {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 50%;
    margin: 0 auto;
    padding-left: 1rem;

    .nome,
    .sobrenome,
    .dataNascimento,
    .Cpf,
    .Pais,
    .estado {
      width: 100%;
      height: 5vh;
      border-style: groove;
      border-radius: 4px;
      padding: 1rem;
    }
  }

  .buttonProximo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    margin: 2.5rem auto 0 auto;
    background-color: #04136e;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 8px 1rem;
    text-align: center;

    &:hover {
      background-color: #1e1e1e;
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

    .inputnome,
    .inputDataCpf,
    .inputsInfos {
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
  } */

  @media (max-width: 1600px) {
    .titulo {
      width: 65%;
    }

    .inputfoto {
      width: 4.5rem;
    }

    .inputnome,
    .inputDataCpf,
    .inputsInfos {
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

    .inputnome,
    .inputDataCpf,
    .inputsInfos {
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

    .inputnome,
    .inputDataCpf,
    .inputsInfos {
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

    .inputnome,
    .inputDataCpf,
    .inputsInfos {
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

    .inputnome,
    .inputDataCpf,
    .inputsInfos {
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

    .inputnome,
    .inputDataCpf,
    .inputsInfos {
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
