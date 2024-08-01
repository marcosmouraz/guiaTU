import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100vw;
  height: 70vh; /* Ajuste a altura conforme necessário */
  overflow: hidden;

  > h1 {
    font-size: 80px;
    position: absolute;
    top: 95%; /* Ajuste a posição conforme necessário */
    left: 50%;
    transform: translate(-50%, -50%);
    color: white; /* Cor do texto */
    padding: 10px;
    border-radius: 5px;
    height: 100%;
    text-align: center;
    z-index: 1; /* Garante que o texto apareça sobre a imagem */
    font-family: "Poppins", sans-serif;
    max-width: 90%; /* Garante que o título não fique muito largo */
    white-space: nowrap; /* Impede a quebra de linha no título */
    overflow: hidden;
    text-overflow: ellipsis; /* Adiciona reticências se o texto for muito longo */
  }

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que a imagem cubra a área sem distorção */
    z-index: -1; /* Coloca a imagem atrás do conteúdo */
  }

  > .inputs {
    position: absolute;
    top: 91%; /* Ajuste a posição conforme necessário */
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    max-width: 1200px; /* Ajuste o max-width conforme necessário */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    z-index: 3;
    /* flex-wrap: wrap; Permite que os itens se movam para a linha seguinte em telas menores */
    padding: 0 10px;
  }

  > .inputs input,
  > .inputs button {
    padding: 15px;
    border-radius: 8px;
    font-size: 16px;
    border: none;
    max-width: 100%; /* Garante que os elementos não ultrapassem o max-width do container */
  }

  > .inputs #destino,
  > .inputs #data,
  > .inputs #nPessoas {
    width: calc(30% - 10px); /* Ajuste a largura conforme necessário */
  }

  > .inputs button {
    width: calc(30% - 10px); /* Ajuste a largura conforme necessário */
    background-color: #04136e;
    color: #fff;
    font-size: 16px;
  }

  @media screen and (max-width: 1300px) {
    > h1 {
      font-size: 45px;
    }

    > .inputs #destino,
    > .inputs #data,
    > .inputs #nPessoas,
    > .inputs button {
      width: calc(40% - 10px); /* Ajuste a largura para telas menores */
    }
  }

  @media screen and (max-width: 768px) {
    height: 50vh; /* Ajusta a altura para telas menores */
  }
  > h1 {
    font-size: 70px;
  }

  > .inputs {
    top: 91%;
  }

  > .inputs #destino,
  > .inputs #data,
  > .inputs #nPessoas,
  > .inputs button {
    width: calc(45% - 10px);
  }
`;
