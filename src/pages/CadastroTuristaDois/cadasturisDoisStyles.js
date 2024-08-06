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

  @media (max-width: 2327px) {
    .titulo {
      width: 90%;
      padding-left: 24rem;
    }

    .inputUm input {
      max-width: 18rem;
    }

    .buttonFinalizar {
      width: 25%;
    }

    .inputscheckum,
    .inputtext {
      width: 60%;
    }
  }

  @media (max-width: 1600px) {
    .titulo {
      width: 85%;
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
  @media (max-width: 1366px) {
    .titulo {
      width: 90%;
    }

    .inputUm input {
      max-width: 20rem;
    }

    .buttonFinalizar {
      width: 30%;
    }

    .inputscheckum,
    .inputtext {
      width: 46.5%;
    }
  }

  @media (max-width: 1200px) {
    .titulo {
      width: 90%;
    }

    .inputUm input {
      max-width: 14rem;
    }

    .buttonFinalizar {
      width: 35%;
    }

    .inputscheckum,
    .inputtext {
      width: 80%;
    }
  }

  @media (max-width: 992px) {
    .titulo {
      width: 95%;
    }

    .inputUm input {
      max-width: 12rem;
    }

    .buttonFinalizar {
      width: 40%;
    }

    .inputscheckum,
    .inputtext {
      width: 85%;
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
