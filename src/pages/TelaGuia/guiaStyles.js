import styled from "styled-components";

export const Container = styled.body`
  width: 100%;
  height: 180vh;
  max-width: 100%;
  margin: 0 auto;

  .titulo {
    color: #04136e;
    font-weight: 600;
    font-size: 20px;
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 6rem;
    gap: 20px;
    align-items: center;
    font-weight: 800;
    white-space: nowrap;
  }
  .nomeRota {
    font-size: 30px;
    font-weight: 200;
    color: #04136e;
  }
  .blocoUm {
    justify-content: space-around;
    display: flex;
    align-items: center;
  }
  .fotoPerfil {
    height: 17rem;
    padding-left: 4rem;
  }
  .fotoCidade {
    height: 17.5rem;
  }
  .blocoDois {
    display: flex;
    width: 77%;
    align-items: center;
    gap: 3rem;
  }
  .nomeGuia {
    color: #04136e;
    font-size: 16px;
    margin: auto;
  }
  .frase {
    color: #04136e;
    font-size: 14px;
  }
  .blocoTres {
    display: flex;
    padding-left: 7rem;
  }
  .infoGuia {
    width: 100%;
    padding-right: 20rem;
  }
  .credencial {
    text-align: center;
    font-size: 14px;
    width: 30%;
    padding-top: 10px;
    right: 5rem;
  }
  .blocoQuatro {
    display: flex;
    justify-content: space-around;
    margin-top: 3rem;
    white-space: nowrap;
    margin: 100px;
  }
  .data {
    font-size: 20px;
    color: #04136e;
  }
  .valor {
    font-size: 20px;
    color: #04136e;
  }

  .reserva {
    display: flex;
    justify-content: space-around;
    padding-bottom: 2rem;
    background-color: #9b9b9b9b;
    height: 20rem;
    width: 30%;
    border-radius: 20px;
    text-align: center;
    padding-top: 1rem;
  }
  .reserva h4 {
    font-size: 20px;
  }
`;
