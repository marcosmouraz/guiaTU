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
  .header {
    display: flex;
    justify-content: center;
    gap: 10rem;
    align-items: center;
  }
  .blocoGuia {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:0.5rem;
    h2 {
      color: #04136e;
    }
  }
  .blocoMapa {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .blocoUm {
    /* justify-content: space-around; */
    display: flex;
    align-items: center;
  }

  .fotoPerfil {
    height: 17rem;
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
    /* margin: auto; */
  }

  .frase {
    color: #04136e;
    font-size: 14px;
    margin-top: 1rem;
  }

  .blocoTres {
    display: flex;
    padding-left: 7rem;
    margin-top: 1.5rem;
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
    background-color: #9b9b9b9b;
    height: 20rem;
    width: 30%;
    border-color: #04136e;
    border-radius: 20px;
    text-align: start;
    padding: 1rem;
    flex-direction: column; /* Garante que as divs fiquem em coluna (uma abaixo da outra) */
    justify-content: flex-start; /* Alinha os elementos ao topo do container */
  }

  .textoReserva {
    margin-bottom: 1rem; /* Adiciona espaço entre o texto e os inputs */
    color: #04136e;
    h4 {
      font-size: 20px;
      font-weight: 600;
    }
  }
  .selecioneData {
    display: flex; /* Define que os h4 dentro desta div fiquem lado a lado */
    justify-content: space-between; /* Distribui espaço uniformemente entre os h4 */
    width: 100%; /* Ajusta a largura para ocupar todo o espaço do container */
    font-size: 14px;
    color: #04136e;
    margin-bottom: 0.5rem;
  }

  .inputsReserva {
    display: flex;
    justify-content: space-between; /* Mantém os inputs lado a lado */
    width: 100%;
  }

  input[type="date"],
  select {
    width: 48%;
    height: 2rem; /* Ajusta a largura para que os inputs caibam lado a lado */
    background-color: #9b9b9b9b;
    color: #04136e;
    font-size: 12px;
    font-weight: 400;
    padding: 0.5rem; /* Adiciona espaçamento interno */
    border-radius: 4px;
    border: 2px solid #04136e; /* Define uma borda de 2px de espessura, cor preta */
    border-radius: 5px; /* Adiciona cantos arredondados */
  }
  input[type="date"]:focus,
  select:focus {
    outline: none; /* Remove o outline padrão */
    border-color: yellow; /* Altera a cor da borda ao focar no campo */
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
