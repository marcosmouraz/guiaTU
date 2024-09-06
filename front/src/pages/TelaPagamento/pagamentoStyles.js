import styled, { keyframes } from "styled-components";

// Animação para girar o cartão
const flipCard = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`;

export const Container = styled.body`
  width: 100%;
  height: 100vh;
  font-family: "Outfit", system-ui;
  position: relative;

  .ondas {
    background-color: #fff;
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
  }
  .container-titulo-checkbox-botaoconluir {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin: 0 auto;
  }

  .titulo-checkbox-botaopagar {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-top: 20px;
  }

  .titulo-paragrafo {
    display: flex;
    flex-direction: column;
    color: #04136e;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding-bottom: 6%;
  }
  .titulo {
    display: flex;
    color: #04136e;
    font-size: 30px;
    padding-top: 4rem;
    gap: 10px;
    text-align: center;
  }
  .paragrafo {
    display: flex;
    font-size: 16px;
    font-weight: 200;
    text-align: center;
  }

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza o conteúdo da seção .header */
    gap: 20px;
    max-width: 600px; /* Aumenta o limite máximo de largura */
    margin-right: 20px;
    background-color: #f4f1f1;
    padding: 30px; /* Aumenta o padding para preencher mais espaço */
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    width: 530px;
  }

  .opcoes {
    display: flex;
    margin-top: 20%;
    flex-direction: column; /* Organiza as opções em uma coluna */
    gap: 25px; /* Espaço entre as opções */
    width: 50%;
  }
  .pix,
  .cartaoSalvo,
  .cartao,
  .dinheiro {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .cartaoSalvo {
    display: flex;
    flex-direction: column; /* Coloca o label e o texto do cartão em colunas */
    align-items: flex-start;
    gap: 5px;
  }

  .radioLabel {
    display: flex;
    align-items: center; /* Alinha o rádio e o label no centro verticalmente */
  }

  .radioLabel input[type="radio"] {
    margin-right: 8px; /* Espaçamento entre o botão de rádio e o label */
  }

  .cartaoUtilizado {
    margin-left: 24px; /* Indenta o texto para alinhar com o label */
    margin-top: 3px; /* Espaçamento entre o label e o texto do cartão */
    .numerocartao {
      position: relative;
      top: 6px;
      left: 10px;
      font-size: 12px;
    }
  }

  .opcoes input[type="radio"] {
    margin-right: 10px; /* Espaçamento entre o botão de rádio e o label */
  }

  .pix input[type="radio"] {
    margin-right: 10px;
  }
  .botao-cart {
    display: flex;
    justify-content: center;
    padding-top: 10%;
  }
  .novoCartao input {
    background-color: #04136e;
    color: #fff;
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .novoCartao input:hover {
    background-color: yellow; /* Cor de fundo quando o mouse passa sobre o botão (amarelo escuro) */
    color: #04136e; /* Cor da fonte quando o mouse passa sobre o botão (azul) */
  }
  .linhas {
    margin-bottom: 20px; /* Espaço abaixo da linha, se necessário */
    width: 100%; /* Certifique-se de que a linha ocupa toda a largura disponível */
  }

  .linhas hr {
    border: 1px solid #ccc; /* Cor e espessura da linha */
    margin: 0; /* Remover margens padrão do hr */
  }

  .body {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza o conteúdo da seção .header */
    position: relative;
  }
  .textos {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20%;
    width: 100%;
    h2 {
      font-size: 20px;
      font-weight: 600;
    }
    .cifrao {
      color: #04136e;
      font-size: large;
      font-weight: bolder;
      position: relative;
      right: 50px;
    }
  }
  .lock {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    position: relative;
    right: 6%;
    gap: 5px;
    p {
      display: flex;
      text-align: center;
      font-size: 10px;
      gap: 5px;
    }
  }
  .footer {
    width: 100%;
    display: flex;
    justify-content: center; /* Centraliza o conteúdo da seção .header */
  }
  .concluir {
    padding-top: 3rem;
    width: 30%;
    display: flex;
    justify-content: center;
    background-color: #04136e;
    color: #fff;
    padding: 10px;
    /* font-weight: 600; */
    border-radius: 4px;
    border: none;

    input {
      background-color: #04136e;
      color: #fff;
      padding: 10px;
      font-size: 14px;
      font-weight: 600;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
      width: 100%;
    }
  }
`;
// Animação para o modal
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
// Estilos do modal
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-in;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 500px;
  width: 100%;
  img {
    height: 45vh;
  }
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;
