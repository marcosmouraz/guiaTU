import styled from "styled-components";

export const Container = styled.body`
  width: 100%;
  height: 70vh;
  max-width: 100%;

  .titulo {
    color: #04136e;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 0;
    width: 100%;
    padding-left: 1rem;

    h2 {
      font-size: 30px;
    }
  }

  .inputUm {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 10px 0;
    width: 100%;
    padding-left: 1rem;
  }

  .inputUm input {
    width: 100%;
    max-width: 20rem;
    height: 5vh;
    border-style: groove;
    border-radius: 4px;
    padding: 1rem;
  }

  .buttonContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .buttonFinalizar {
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 5vh;
    background-color: #04136e;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
    border: none;
    text-align: center;
    display: flex;
  }

  .checkContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
  }

  .inputscheckum {
    font-size: 13px;
    display: flex;
    gap: 1rem;
    width: 50%;
  }

  .inputtext {
    font-size: 13px;
    width: 50%;
    font-weight: lighter;
  }

  @media (max-width: 2172px) {
    .titulo {
      width: 100%;
      padding-left: 33rem;
    }

    .inputUm input {
      max-width: 18rem;
    }

    .buttonFinalizar {
      width: 25%;
      margin-top: 2rem;
    }

    .checkContainer,
    .inputscheckum,
    .inputtext {
      width: 100%;
      padding-left: 16.5rem;
    }
  }

  @media (max-width: 1929px) {
    .titulo {
      width: 100%;
      padding-left: 42rem;
    }

    .inputUm input {
      max-width: 18rem;
      justify-content: center;
    }

    .buttonFinalizar {
      width: 25%;
      margin-top: 2rem;
      justify-content: center;
    }

    .checkContainer,
    .inputscheckum,
    .inputtext {
      width: 80%;
      padding-left: 17rem;
    }
  }

  @media (max-width: 1600px) {
    .titulo {
      width: 70%;
      padding-left: 3rem;
    }

    .inputUm input {
      max-width: 16rem;
    }

    .buttonFinalizar {
      width: 30%;
    }

    .inputscheckum,
    .inputtext {
      width: 70%;
    }
  }

  @media (max-width: 1318px) {
    .titulo {
      width: 100%;
      padding-left: 26rem;
    }

    .inputUm input {
      max-width: 15rem;
    }

    .buttonFinalizar {
      width: 35%;
      justify-content: center;
    }

    .checkContainer {
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }
  }

  @media (max-width: 992px) {
    .titulo {
      width: 100%;

    }

    .inputUm input {
      max-width: 12rem;
    }

    .buttonFinalizar {
      width: 40%;
    }

    .checkContainer,
    .inputscheckum,
    .inputtext {
      gap: 10px;
      width: 100%;
      padding-left:9.5rem;
    }

  }

  @media (max-width: 768px) {
    .titulo {
      width: 100%;
    }

    .inputUm input {
      max-width: 10rem;
    }

    .buttonFinalizar {
      width: 50%;
    }

    .inputscheckum,
    .inputtext {
      width: 90%;
    }
  }

  @media (max-width: 576px) {
    .inputUm {
      flex-direction: column;
      align-items: flex-start;
    }

    .inputUm input {
      max-width: 100%;
    }

    .buttonFinalizar {
      width: 60%;
    }

    .inputscheckum,
    .inputtext {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .titulo h2 {
      font-size: 24px;
    }

    .inputUm input {
      max-width: 100%;
    }

    .buttonFinalizar {
      width: 70%;
    }
  }
`;
