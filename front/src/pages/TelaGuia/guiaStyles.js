import styled from "styled-components";

export const Container = styled.body`
  width: 100%;
  height: 160vh;
  max-width: 100%;
  font-family: "Outfit", sans-serif;

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

  .header {
    display: flex;
    justify-content: center;
    gap: 13rem;
    align-items: center;
  }
  
  .blocoGuia {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: #04136e;
    h2 {
      color: #04136e;
    }
    .estrela{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10%;  
  }
  }

  .blocoMapa {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  #map {
    border-radius: 8px;
  }

  .blocoUm {
    display: flex;
    align-items: center;
  }

  .fotoPerfil {
    height: 17rem;
  }

  .nomeGuia {
    color: #04136e;
    font-size: 16px;
  }

  .frase {
    color: #04136e;
    font-size: 14px;
    margin-top: 1rem;
  }

  .infoGuia {
    width: 100%;
    padding-right: 20rem;
  }

  .credencial {
    text-align: center;
    font-size: 14px;
    padding-top: 10px;
    right: 5rem;
    color: #636363;
  }

  .body {
    display: flex;
    justify-content: center;
    gap: 7rem;
    align-items: center;
    margin-top: 5rem;
  }

  .infoRota {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    margin-right: 2rem;
    height: 50vh;
    
  }

  .data {
    font-size: 20px;
    color: #04136e;
  

  }
  .inicioPartida{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    padding-left: 5%;
  }
  .horario {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    /* gap: 5%; */
    color: #04136f;
    font-weight: bolder;
  }

  .linhas {
    border: #04136f 1px solid;
    border-radius: 20px;
    width: 1px;
    height: 2.5rem;
    background-color: black;
    flex-direction: column;
    display: flex;
  }

  .buttonInfo {
    button {
      background-color: #04136e;
      color: #fff;
      width: 100%;
      height: 3rem;
      border-radius: 4px;
      padding: 10px;
      font-size: 18px;
      cursor: pointer;
      white-space: nowrap;
    }
  }

  .infoValores {
    display: flex;
  }

  .valor {
    font-size: 20px;
    color: #04136e;
    white-space: nowrap;
    margin-bottom: 12.5rem;
    span {
      color: #000;
      font-weight: 300;
    }
    gap: 5px;
  }

  .inclusos {
    font-size: 14px;
    color: #636363;
    margin-top: 1rem;
  }

  .reserva {
    display: flex;
    background-color: #9b9b9b9b;
    height: 20rem;
    width: 30%;
    border-color: #04136e;
    border-radius: 20px;
    text-align: start;
    padding: 1rem;
    flex-direction: column;
    justify-content: flex-start;
  }

  .textoReserva {
    margin-bottom: 1rem;
    color: #04136e;
    h4 {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .selecioneData {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;
    color: #04136e;
    margin-bottom: 0.5rem;
  }

  .inputsReserva {
    display: flex;
    justify-content: space-between;
    width: 100%;
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
  }

  input[type="date"]:focus,
  select:focus {
    outline: none;
    border-color: yellow;
  }

  .buttonReservar {
    display: flex;
    width: 100%;
    margin-top: 1rem;
    a {
      width: 100%;
    }
    button {
      width: 100%;
      height: 2.5rem;
      background-color: #04136e;
      color: #fff;
      font-size: 20px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
    }
  }

  .buttonWhats {
    display: flex;
    width: 100%;
    margin-top: 1rem;
    a {
      width: 100%;
    }
    button {
      width: 100%;
      height: 2.5rem;
      background-color: #9b9b9b9b;
      color: green;
      font-size: 20px;
      border-radius: 4px;
      border-color: green;
      border-style: solid;
      cursor: pointer;
    }
  }
  .cancelamento{
    margin-top: 1rem;
  }

  /* Responsividade para telas ultra-wide */
  @media (min-width: 1900px) {
    .blocoDois {
      width: 85%;
      gap: 4rem;
    }
    .blocoTres {
      padding-left: 10rem;
    }
    .infoGuia {
      padding-right: 25rem;
    }
  }

  /* Responsividade para tablets */
  @media (max-width: 1024px) {
    .blocoUm {
      flex-direction: column;
    }
    .fotoPerfil,
    .fotoCidade {
      height: 14rem;
      padding-left: 0;
    }
    .blocoDois {
      width: 90%;
      flex-direction: column;
      gap: 1.5rem;
    }
    .blocoTres {
      padding-left: 3rem;
    }
    .infoGuia {
      padding-right: 5rem;
    }
    .blocoQuatro {
      flex-direction: column;
      margin: 50px 0;
    }
    .reserva {
      width: 80%;
      height: 15rem;
    }
  }

  /* Responsividade para dispositivos móveis */
  @media (max-width: 768px) {
    .titulo {
      font-size: 18px;
      margin-top: 2rem;
      margin-bottom: 3rem;
    }
    .nomeRota {
      font-size: 24px;
    }
    .fotoPerfil,
    .fotoCidade {
      height: 12rem;
    }
    .blocoDois {
      width: 100%;
      gap: 1rem;
    }
    .blocoTres {
      flex-direction: column;
      padding-left: 0;
    }
    .infoGuia {
      padding-right: 0;
    }
    .credencial {
      width: 100%;
    }
    .blocoQuatro {
      flex-direction: column;
      margin: 50px 0;
    }
    .reserva {
      width: 90%;
      height: 12rem;
    }
    .reserva h4 {
      font-size: 18px;
    }
  }
`;
