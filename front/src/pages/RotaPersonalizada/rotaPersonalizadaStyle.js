import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  /* flex-direction: column; */

  .blocoFora {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 100px;
  }

  .titulo {
    color: #04136f;
    display: flex;
    padding-top: 5rem;
    justify-content: start;
    padding-left: 10rem;
    padding-bottom: 3rem;
    width: 100%;

    @media (max-width: 768px) {
      padding-left: 2rem;
      padding-top: 3rem;
      padding-bottom: 1rem;
      font-size: 1.5rem;
    }
  }

  .blocosDentro {
    display: flex;
    align-items: center;
    width: 80%;
    height: 70vh;
    justify-content: center;
    background-color: #f2f2f2;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
      flex-direction: column;
      width: 90%;
      height: auto;
      padding: 10px;
    }
  }

  .blocoleft {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 40px;
    gap: 10px;
    width: 50%;

    @media (max-width: 768px) {
      padding-left: 10px;
      width: 100%;
      align-items: center;
      text-align: center;
    }
  }

  .blocoright {
    width: 75%;
    flex-direction: column;
    align-items: center;
    display: flex;
    gap: 4rem;

    .buttonReservar {
      display: flex;
      width: 40%;

      button {
        border-radius: 10px;
        height: 6vh;
        width: 100%;
        background-color: #04136e;
        color: #fff;
        font-size: 18px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;

        @media (max-width: 768px) {
          width: 100%;
          height: 5vh;
          font-size: 16px;
        }

        &:hover {
          background-color: #f7c04a; /* Amarelo */
          color: #04136e; /* Azul */
        }
      }
    }
  }

  .blocoMapa {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 35vh;

    @media (max-width: 768px) {
      height: 25vh;
    }
  }

  #map {
    border-radius: 8px;
  }

  .formulario {
    display: flex;
    flex-direction: column;
    gap: 15px;

    input,
    select {
      width: 100%;
      height: 2rem;
      background-color: #9b9b9b9b;
      color: #04136e;
      font-size: 12px;
      font-weight: 400;
      padding: 0.5rem;
      border: 2px solid #04136e;
      border-radius: 5px;
      transition: border-color 0.3s, background-color 0.3s;

      @media (max-width: 768px) {
        height: 1.5rem;
        font-size: 10px;
      }

      &:focus {
        outline: none;
        border-color: #f7c04a; /* Amarelo */
        background-color: #fff; /* Branco para destacar o foco */
      }
    }
  }

  .form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buttonsTop {
    display: flex;
    align-items: center;
    gap: 10px;

    .adicionar {
      display: flex;
      padding: 6px;
      background-color: transparent;
      border: none;
      font-size: 20px;
      color: #04136f;
      font-weight: 700;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  .buttonsMid {
    display: flex;
    align-items: center;
    gap: 10px;

    .remover {
      display: flex;
      padding: 6px;
      background-color: transparent;
      border: none;
      font-size: 15px;
      color: #04136f;
      font-weight: 800;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }

  .selecioneData {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;
    color: #04136e;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      font-size: 12px;
      gap: 10px;
    }
  }

  .inputsReserva {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  input[type="date"],
  select {
    width: 48%;
    height: 2rem;
    background-color: #9b9b9b9b;
    color: #04136e;
    font-size: 12px;
    font-weight: 400;
    padding: 0.5rem;
    border: 2px solid #04136e;
    border-radius: 5px;
    transition: border-color 0.3s, background-color 0.3s;

    @media (max-width: 768px) {
      width: 100%;
      height: 1.5rem;
      font-size: 10px;
    }

    &:focus {
      outline: none;
      border-color: #f7c04a; /* Amarelo */
      background-color: #fff; /* Branco para destacar o foco */
    }
  }

  .valor {
    display: flex;
    padding-top: 30px;
    gap: 8px;
    align-items: center;

    h3 {
      color: #04136e;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;
