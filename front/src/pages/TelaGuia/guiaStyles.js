import styled from "styled-components";

export const Container = styled.body`
  width: 100%;
  height: 70vh;
  max-width: 100%;
  margin: 0 auto;

  .titulo {
    color: #04136e;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    width: 60%;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
  .blocoUm {
    justify-content: space-around;
    display: flex;
    height: 14rem;
    align-items: center;
  }
  .fotoPerfil {
    height: 13rem;
  }
  .fotoCidade {
    height: 13.5rem;
  }
  .nomeRota {
    position: absolute;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10.5rem;
    margin-left: 6rem;
    color: #04136e;
  }
  .nomeCidade {
    position: absolute;
    font-size: 18px;
    font-weight: 400;
    margin-top: 10.5rem;
    color: #04136e;
  }
  .blocoDois {
    display: flex;
    justify-content: space-around;
    width: 100%;
    gap: 5rem;
    align-items: center;
  }
  .nomeGuia {
    color: #04136e;
    font-size: 16px;
    margin-right: 3.5rem;
  }
  .frase {
    color: #04136e;
    font-size: 14px;
  }
  .blocoTres {
    display: flex;
    width: 35%;
    justify-content: space-around;
  }
  .credencial {
    text-align: center;
    font-size: 14px;
    margin-top: 5px;
  }
  .blocoQuatro {
    display: flex;
    justify-content: space-around;
    margin-top: 3rem;
    white-space: nowrap;
  }
  .reserva {
  }
`;
