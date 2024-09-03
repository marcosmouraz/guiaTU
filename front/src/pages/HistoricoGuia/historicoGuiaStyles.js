import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: "Outfit", system-ui;

  .titulopagina {
    display: flex;
    color: #04136f;
    font-size: 25px;
    width: 50%;
    justify-content: center;
    margin-top: 2rem;
  }
  .blocos {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .blocoLeft {
    display: flex;
    flex-direction: column;
    width: 60%;
    align-items: center;
    margin-left: 5rem;
    gap: 1rem;
  }
  .buttonPasseios {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 50px;
    font-family: "Outfit", system-ui;
    margin-bottom: 1rem;
    white-space: nowrap;
    a {
      text-decoration: none;
      color: #04136f;
      padding: 10px 20px;
      border-radius: 5px;
      transition: background-color 0.3s, color 0.3s;
    }

    a:visited {
      color: #04136f;
    }

    .activeButton {
      background-color: #f1f500;
      color: #04136f;
    }
  }

  .Frame1,
  .Frame2 {
    display: flex;
    background-color: #e2dfdf;
    border-radius: 7px;
    gap: 20px;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    align-items: center;
    height: 25vh;
    border: solid 2px #04136f; /* Borda azul padrão */
    transition: border 0.3s;
  }

  .selectedFrame {
    border-color: #f1f500; /* Borda amarela quando selecionado */
  }

  .textosFrame {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: start;
  }
  .titulo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      white-space: nowrap;
      color: #04136f;
    }
    p {
      font-size: 14px;
    }
  }
  .infoGuia {
    display: flex;
    gap: 10px;
    .paragrafo {
      width: 50%;
    }
  }
  .cardCidade {
    display: flex;
    align-items: center;
    img {
      height: 15vh;
    }
  }
  .status {
    display: flex;
    align-items: end;
    justify-content: end;
    width: 100%;
    color: green;
    padding-left: 10px;
    height: 20px;
  }
  .blocoRight {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
  }
  .tituloRight {
    display: flex;
    width: 70%;
    padding-bottom: 10px;
    color: #fff;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background-color: #04136f;
    justify-content: center;
    padding-top: 10px;
  }
  .FrameRight {
    display: flex;
    background-color: #e2dfdf;
    border-radius: 7px;
    padding: 5px;
    height: 80vh;
    width: 70%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .chatUm,
  .chatSelecionado {
    display: flex;
    align-items: center;
    height: 12vh;
    border-radius: 90px;
    width: 95%;
    gap: 10px;
    cursor: pointer;
    border: solid 2px transparent;
    transition: border 0.3s;
  }

  .selectedChat {
    border-color: #f1f500;
  }

  .fotoUm {
    img {
      height: 11vh;
      margin-top: 4px;
    }
  }
  .infoTurista {
    gap: 8px;
    display: flex;
    width: 100%;
    justify-content: start;
    flex-direction: column;
  }
  .nomeTurista {
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
  }
  .data {
    font-size: 12px;
  }
  .qntPessoas {
    font-size: 12px;
  }
  .final {
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    gap: 10px;
  }
  .iconChat {
    padding-top: 8px;
    img {
      height: 2rem;
    }
  }
  .cancelar {
    font-size: 12px;
    a {
      text-decoration: none;
      color: #04136f;
    }

    a:visited {
      color: red;
    }
  }
  .status-desativado {
    color: red;
  }
`;
