import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

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
    font-family: "Poppins", sans-serif;
    margin-bottom: 1rem;
    white-space: nowrap;
    a {
      text-decoration: none; /* Remove o sublinhado */
      color: #04136f; /* Usa a cor do texto ao redor ou defina uma cor específica */
    }

    a:visited {
      color: #04136f; /* Mantém a cor dos links visitados igual à dos não visitados */
    }
  }
  .ativos {
    color: #fbbc04;
  }

  .Frame1 {
    display: flex;
    background-color: #e2dfdf;
    border-radius: 7px;
    gap: 20px;
    width: 100%;
    padding: 10px;
    border: #fbbc04 solid;
    cursor: pointer;
    align-items: center;
    height: 25vh;
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
    display: flex; /* Remove espaços em branco em torno da imagem */
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
  .Frame2 {
    display: flex;
    background-color: #e2dfdf;
    border-radius: 7px;
    gap: 20px;
    padding: 10px;
    border: #04136f solid;
    cursor: pointer;
    align-items: center;
    height: 25vh;
    width: 100%;
  }
  .blocoRight {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
  }
  .tituloRight {
    display: flex;
    width: 65%;
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
    width: 65%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .chatUm {
    display: flex;
    align-items: center;
    height: 12vh;
    border-radius: 90px;
    border: #04136f solid;
    width: 95%;
    gap: 8px;
    cursor: pointer;
  }
  .chatSelecionado {
    display: flex;
    align-items: center;
    height: 12vh;
    border-radius: 90px;
    border: #fbbc04 solid;
    width: 95%;
    gap: 8px;
    cursor: pointer;
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
      text-decoration: none; /* Remove o sublinhado */
      color: #04136f; /* Usa a cor do texto ao redor ou defina uma cor específica */
    }

    a:visited {
      color: red; /* Mantém a cor dos links visitados igual à dos não visitados */
    }
  }
`;
