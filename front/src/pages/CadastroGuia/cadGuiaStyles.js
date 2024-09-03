import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 110vh;

  .titulo {
    margin-bottom: 80px;
    margin-top: 30px;
    text-align: start;
    display: flex;
    width: 80%;

    h2 {
      font-size: 30px;
      color: #04136F;
      font-weight: 700;
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
    flex: 2; /* Aumenta a largura da seção do formulário */
    max-width: 600px; /* Aumenta o limite máximo de largura */
    margin-right: 20px;
    background-color: white;
    padding: 30px; /* Aumenta o padding para preencher mais espaço */
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    
    .DadosPessoais {
      margin-bottom: 20px;

      h4 {
        font-size: 20px;
        color: #333;
      }
    }

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
          background-color: #04136F;
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
    width: 40%;

    .inputfoto {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

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
  .ondas{
    background-color: #fff;
    width: 100%;
    position: absolute;
    z-index: -1;
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
`;
