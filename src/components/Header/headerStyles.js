import styled, { keyframes } from "styled-components";
import Imagem1 from "../../assets/marcozero.svg";
import Imagem2 from "../../assets/altodase.svg";
import Imagem3 from "../../assets/parqescultura.svg";
import Imagem4 from "../../assets/saobentoolinda.svg";
import Imagem5 from "../../assets/ruadosol.svg";
import Imagem6 from "../../assets/misericordia.svg";
import Imagem7 from "../../assets/marcozero.svg";
const backgroundChange = keyframes`
  0% {
    background-image: url(${Imagem1}); /* ou URL externa */
  }
  16.67% {
    background-image: url(${Imagem2});
  }
  33.33% {
    background-image: url(${Imagem3});
  }
  50% {
    background-image: url(${Imagem4});
  }
  66.67% {
    background-image: url(${Imagem5});
  }
  83.33% {
    background-image: url(${Imagem6});
  }
  100% {
    background-image: url(${Imagem7});
  }
`;
  export const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    animation: ${backgroundChange} 60s infinite;
  `;
export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 70vh; /* Ajuste a altura conforme necessário */
  overflow: hidden;

  > h1 {
    font-size: 400px;
    position: absolute;
    top: 89%; /* Ajuste a posição conforme necessário */
    left: 50%;
    transform: translate(-50%, -50%);
    color: white; /* Cor do texto */
    padding: 10px;
    border-radius: 5px;
    height: 100%;
    text-align: center;
    z-index: 1; /* Garante que o texto apareça sobre a imagem */
    font-family: "Poppins", sans-serif;
    max-width: 100%;
    white-space: nowrap; /* Impede a quebra de linha no título */
    overflow: hidden;
    text-overflow: ellipsis; /* Adiciona reticências se o texto for muito longo */
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
    cursor: pointer
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
