import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  /* background-color: red; */
  .container-formulario-foto {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .box-titulo-formulario{
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

  .main-content {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
  }

  .inputArea {
    width: 50%;
    display: flex;
    flex-direction: column;
    font-family: "Outfit", system-ui;
    flex: 2;
    max-width: 600px;
    margin-right: 20px;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  
    form {
      display: flex;
      flex-direction: column;
      width: 100%;

      .inputContainer {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        width: 100%;

        .inputLeft,
        .inputRight {
          display: flex;
          flex-direction: column;
          width: 50%;

          input {
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
            width: 100%;
            box-sizing: border-box;
          }

          .error {
            border-color: red;
            background-color: #ffe6e6;
          }
        }
      }

      .checkbox {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 20px;
        width: 100%;

        .ContentC {
          display: flex;
          align-items: center;
          margin-bottom: 10px;

          input {
            margin-right: 10px;
          }

          .custom-checkbox {
            font-size: 14px;
            color: #333;

            a {
              color: #007bff;
              text-decoration: none;
            }
          }
        }

        .inputtext {
          font-size: 12px;
          color: #777;

          a {
            color: #007bff;
            text-decoration: none;
          }
        }
      }

      .buttonContainer {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        width: 100%;

        .buttonFinalizar {
          padding: 10px 20px;
          background-color: #04136f;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: #218838;
          }

          &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }
        }
      }
    }
  }

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
      padding-bottom: 215px;

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
  @media (max-width: 768px) {
    .main-content {
      flex-direction: column;
      align-items: center;
    }

    .inputArea,
    .imagemArea {
      width: 100%;
    }

    .inputContainer {
      flex-direction: column;

      .inputLeft,
      .inputRight {
        width: 100%;
      }
    }
  }
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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 500px;
  width: 90%;

  p {
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
  /* //////////////////////////////////// */
  .fotoPreview {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta a imagem para caber no contêiner */
  }
  
  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: red;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.privacy-policy-link {
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
}

  
`;
