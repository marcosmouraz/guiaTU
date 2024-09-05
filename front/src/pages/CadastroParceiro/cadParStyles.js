import styled from "styled-components";

export const ContainerEmpre1 = styled.body`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "Outfit", system-ui;
  background-color: #636363;

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
    padding-top: 60px;
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
  .formSection {
    flex: 2; /* Aumenta a largura da seção do formulário */
    max-width: 600px; /* Aumenta o limite máximo de largura */
    background-color: white;
    padding: 30px; /* Aumenta o padding para preencher mais espaço */
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    width: 530px;
    padding-bottom: 41px;
    margin-bottom: 18px;
  }

  .formSection h1 {
    font-size: 28px; /* Aumenta o tamanho do título */
    color: #333;
  }
  .DadosPessoais {
    display: flex;
    justify-content: start;

    h4 {
      color: rgba(0, 0, 0, 0.6);
      font-weight: bolder;
      font-size: 20px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .inputs {
    display: flex;
    padding-bottom: 50px;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 20px;
  }

  input {
    width: 100%; /* Ajusta a largura para 100% do container pai */
    max-width: 30rem;
    height: 5vh;
    border-style: groove;
    border-radius: 4px;
    padding: 0.5rem;
    font-family: "Outfit", system-ui;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 18px; /* Aumenta o tamanho da fonte dos inputs */
    transition: border-color 0.3s ease;
  }

  .detalhesSenha {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;

    h5 {
      font-weight: 500;
    }

    ul {
      font-weight: normal;
      font-size: 13px;
      color: #1e1e1e;
      padding-left: 20px;
    }
  }

  .buttonContainer {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 2rem; /* Ajuste o valor conforme necessário */
  }

  .buttonproximo {
    background-color: #04136e;
    color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.2s;
    padding: 10px 2rem;
    text-align: center;
    font-size: 16px;

    &:hover {
      background-color: #3f58ee;
    }
  }
  /* //////////////////////// */

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
      padding-bottom: 210px;

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
`;
