import styled from "styled-components";

export const Container = styled.div`
  /* Use div em vez de body para compatibilidade com styled-components */
  width: 100%;
  height: 80%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .titulo {
    display: flex;
    align-items: center;
    width: 51%;
    height: 35vh;

    h2 {
      font-size: 32px;
      color: #04136e;
      overflow-wrap: break-word;
    }
  }

  .inputFoto {
    display: grid;
    padding: 15px 0;
    padding-bottom: 1rem;
    align-items: center;
    gap: 5px;
    width: 51%;
    flex-direction: column;
    h5 {
      font-weight: 200;
    }
  }

  .imagem {
    padding-left: 10rem;
  }

  .alterafoto {
    border: #1e1e1e;
    background-color: aliceblue;
    border-style: groove;
    border-radius: 10px;
    transition: background-color 0.2s;
  }

  .alterafoto:hover {
    border-color: #04136e;
    background-color: #04136e;
  }

  .DadosEstabelecimento {
    display: flex;
    height: 5vh;
    width: 51%;

    h4 {
      color: #04136e;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      font-style: normal;
    }
  }

  .checkbox {
    display: grid;
    flex-direction: column;
    align-items: center;
    gap: 5px; /* Reduzido para compactar o espaço */
    justify-content: center;
    width: 62%;
    padding-left: 3.5rem;
    padding-top: 1rem;
  }

  .ContentC {
    width: auto; /* Ajustado para que o conteúdo se ajuste */
    display: flex;
    gap: 10px;
    align-items: center; /* Alinhado verticalmente */
  }

  .ContentC input[type="checkbox"] {
    width: 16px; /* Ajustado para um tamanho menor */
    height: 16px; /* Ajustado para um tamanho menor */
  }

  .custom-checkbox {
    font-size: 14px; /* Ajustado para um tamanho menor */
    margin: 0; /* Remover margem para compactar */
  }

  .inputtext {
    padding-right: 110px;
    padding-bottom: 2rem;
    font-size: 12px; /* Ajustado para um tamanho menor */
  }

  .inputs {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 1rem;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .inputContainer input {
    width: 150vw;
    max-width: 20rem;
    height: 5vh;
    border-style: groove;
    border-radius: 4px;
    padding: 0.5rem;
  }

  .buttonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0; /* Ajuste conforme necessário */
  }

  .buttonCadastrar {
    font-size: 18px;
    white-space: nowrap;
    width: 25vh;
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #04136e;
    color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 8px 1rem;
    text-align: center;

    &:hover {
      background-color: #3f58ee;
      border: none;
    }
  }

  .voltar {
    font-size: 16px;
    white-space: nowrap;
    width: 20vh; /* Ajuste conforme necessário */
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #cccccc; /* Ajuste a cor de fundo conforme necessário */
    color: #000;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 8px 1rem;
    text-align: center;

    &:hover {
      background-color: #999999; /* Ajuste a cor de fundo ao passar o mouse conforme necessário */
    }
  }
  
`;
