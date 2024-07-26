import styled from "styled-components";
export const Container = styled.section`
  > h1 {
    font-size: 450%;
    position: absolute;
    top: 30%; /* Ajuste a posição conforme necessário */
    left: 50%;
    transform: translate(-50%, -50%);
    color: white; /* Cor do texto */
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    z-index: 1; /* Garante que o texto apareça sobre a imagem */
  }
  > img {
    width: 100%;
    height: 45vh;
  }
  > .inputs #destino {
    padding: 20px;
    border-radius: 8px;
    font-size: 20px;
  }
  > .inputs #data {
    padding: 20px;
    border-radius: 8px;
    font-size: 20px;
  }
  > .inputs #nPessoas {
    padding: 20px;
    border-radius: 8px;
    font-size: 20px;
  }
  > .inputs button {
    padding: 20px;
    width: 12%;
    background-color: #04136e;
    border-radius: 8px;
    color: #fff;
    font-size: 20px;
  }
  > .inputs {
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 1; /* Garante que o texto apareça sobre a imagem */
    position: absolute;
    z-index: 1; /* Garante que o texto apareça sobre a imagem */
    top: 50%; /* Ajuste a posição conforme necessário */
    left: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
