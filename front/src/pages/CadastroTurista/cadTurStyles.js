import styled from "styled-components";

export const Container = styled.body`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .container-formulario-foto {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .box-titulo-formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .titulo {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    h2 {
      font-size: 30px;
      display: flex;
      color: #04136f;
      white-space: nowrap;
    }
  }

  /* Seção do formulário */
  .formSection {
    flex: 2; /* Aumenta a largura da seção do formulário */
    max-width: 600px; /* Aumenta o limite máximo de largura */
    margin-right: 20px;
    background-color: white;
    padding: 30px; /* Aumenta o padding para preencher mais espaço */
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 530px;
  }

  .formSection h1 {
    font-size: 28px; /* Aumenta o tamanho do título */
    color: #333;
    margin-bottom: 25px;
  }

  /* Estilo do formulário */
  .form {
    display: flex;
    flex-direction: column;
  }

  .inputColumn {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  /* Estilo dos inputs */
  .inputColumn input {
    padding: 12px; /* Aumenta o padding dos inputs */
    margin-bottom: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 18px; /* Aumenta o tamanho da fonte dos inputs */
    transition: border-color 0.3s ease;
  }

  /* Input em estado de erro */
  .inputColumn input.error {
    border-color: #ff4d4d;
    background-color: #ffe6e6;
  }

  .inputColumn input:focus {
    border-color: #007bff;
    outline: none;
  }

  /* Estilo das mensagens de erro */
  .error {
    color: #ff4d4d;
    font-size: 14px;
    margin-top: -8px;
    margin-bottom: 8px;
  }

  /* Botão de próxima etapa */
  button {
    padding: 12px 18px; /* Aumenta o padding do botão */
    background-color: #04136f;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 18px; /* Aumenta o tamanho da fonte do botão */
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  /* Seção de foto */
  .imagemArea {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;

    .inputfoto {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 300px;

      .p {
        margin-bottom: 10px;
        font-size: 18px;
        color: #333;
      }

      .alterafoto {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px dashed #ccc;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        cursor: pointer;

        .vetor {
          color: #636363;
        }
      }
    }
  }

  .alterafoto:hover {
    border-color: #007bff;
  }

  .vetor {
    color: #636363;
    transition: color 0.3s ease;
  }

  .alterafoto:hover .vetor {
    color: #007bff;
  }

  /* Adaptação para telas menores */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    .formSection {
      margin-right: 0;
      margin-bottom: 20px;
      max-width: 100%;
    }

    .imagemArea {
      max-width: 100%;
      align-items: center;
    }
  }
  .ondas {
    background-color: #fff;
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
  }
  .rosaventos-direita {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .rosaventos-esquerda {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  /* //////////////////////////////////// */

  /* CSS */
  .alterafoto {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; /* Ajuste conforme necessário */
    height: 100%; /* Ajuste conforme necessário */
    border: 2px solid #ddd; /* Borda opcional */
    border-radius: 8px; /* Bordas arredondadas opcionais */
    overflow: hidden; /* Garante que a imagem não saia do contêiner */
    background-color: #f0f0f0; /* Cor de fundo opcional */
  }

  .alterafoto img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta a imagem para cobrir o contêiner sem distorção */
  }

  .inputFoto {
    display: none; /* Esconde o input file */
  }
  /* ///////////////////////////////////////////////////////// */


`;

