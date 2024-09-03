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
  height: 140vh;
  max-width: 100%;
  margin: 0 auto;
  font-family: "Outfit", system-ui;

  .titulo {
    display: flex;
    color: #04136e;
    font-size: 18px;
    width: 70%;
    margin-top: 7rem;
    gap: 8px;
    justify-content: center;
  }

  .paragrafo {
    margin-top: 10px;
    display: flex;
    font-size: 14px;
    font-weight: 200;
    width: 65%;
    justify-content: center;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: center; /* Centraliza o conteúdo da seção .header */
    position: relative;
  }

  .opcoes {
    display: flex;
    margin-top: 4rem;
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
    align-items: flex-start; /* Alinha os elementos à esquerda */
    margin-left: 15rem;
  }

  .radioLabel {
    display: flex;
    align-items: center; /* Alinha o rádio e o label no centro verticalmente */
    margin-top: 50px;
  }

  .radioLabel input[type="radio"] {
    margin-right: 8px; /* Espaçamento entre o botão de rádio e o label */
  }

  .cartaoUtilizado {
    margin-left: 24px; /* Indenta o texto para alinhar com o label */
    margin-top: 8px; /* Espaçamento entre o label e o texto do cartão */
  }

  .opcoes input[type="radio"] {
    margin-right: 10px; /* Espaçamento entre o botão de rádio e o label */
  }

  .pix input[type="radio"] {
    margin-right: 10px;
  }
  .novoCartao {
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
    }
  }
  .novoCartao input:hover {
    background-color: yellow; /* Cor de fundo quando o mouse passa sobre o botão (amarelo escuro) */
    color: #04136e; /* Cor da fonte quando o mouse passa sobre o botão (azul) */
  }
  .linhas {
    margin-top: 20px; /* Espaço acima da linha, se necessário */
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
    justify-content: center; /* Centraliza o conteúdo da seção .header */
  }
  .textos {
    width: 43%;
    h2 {
      font-size: 20px;
      font-weight: 600;
    }
    p {
      font-size: 12px;
    }
  }
  .lock {
    display: flex;
    align-items: center;
    gap: 4px;
    padding-top: 10px;
  }
  .footer {
    width: 100%;
    display: flex;
    justify-content: center; /* Centraliza o conteúdo da seção .header */
  }
  .concluir {
    padding-top: 3rem;
    width: 100%;
    display: flex;
    justify-content: center;

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
      width: 20%;
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
  img{
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
