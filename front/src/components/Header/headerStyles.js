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
    background-image: url(${Imagem1});
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
  height: 90vh;
  overflow: hidden;

  > h1 {
    font-size: 50px; /* Tamanho de fonte ajustado */
    position: absolute;
    top: 50%; /* Posicionamento mais centralizado */
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    z-index: 1;
    font-family: "Poppins", sans-serif;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > .inputs {
    position: absolute;
    top: 91%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    max-width: 1200px;
    display: flex;
    justify-content: center;
    gap: 10px;
    z-index: 3;
    padding: 0 10px;
  }

  > .inputs select,
  > .inputs input,
  > .inputs button {
    padding: 15px;
    border-radius: 8px;
    font-size: 16px;
    border: none;
    max-width: 100%;
  }

  > .inputs select,
  > .inputs #data,
  > .inputs #nPessoas {
    width: calc(30% - 10px);
  }

  > .inputs button {
    width: calc(30% - 10px);
    background-color: #04136e;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  @media screen and (max-width: 1300px) {
    > .inputs select,
    > .inputs #data,
    > .inputs #nPessoas,
    > .inputs button {
      width: calc(40% - 10px);
    }
  }

  @media screen and (max-width: 768px) {
    height: 50vh;

    > .inputs select,
    > .inputs #data,
    > .inputs #nPessoas,
    > .inputs button {
      width: calc(45% - 10px);
    }
  }
`;
