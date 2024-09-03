import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 150vh;
  flex-direction: column;
  align-items: center;

  .titulo {
    display: flex;
    justify-content: center;
    padding-top: 40rem;
    padding-bottom: 10px;
    width: 60%;
    white-space: nowrap;

    h1 {
      font-size: 30px;
      color: #04136f;
    }
  }

  .frames {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 65%;
    gap: 20px;
    height: 50vh;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  .frame {
    display: flex;
    background-color: #e2dfdf;
    flex-direction: column;
    height: 36vh;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    padding: 10px;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      height: auto;
    }
  }

  .left {
    display: flex;
    gap: 10px;
    padding: 10px;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .perfilum {
    position: absolute;
    padding-left: 7.5rem;
    padding-top: 8px;

    @media (max-width: 768px) {
      position: static;
      padding-left: 0;
    }
  }
  .perfildois {
    position: absolute;
    padding-left: 8rem;
    padding-top: 8px;

    @media (max-width: 768px) {
      position: static;
      padding-left: 0;
    }
  }
  .imagemCidade {
    height: 25vh;
    display: flex;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }

  .imagemCidade2 {
    height: 24vh;
    display: flex;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
  .cidade{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logoGuiaTu {
    height: 12.5vh;
    display: flex;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }

  .mid {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;

    @media (max-width: 768px) {
      gap: 15px;
    }

    .infoGuia {
      display: flex;
      gap: 10px;
    }

    .nomeGuia {
      font-weight: 600;
      padding-right: 8px;
    }

    .paragrafo {
      display: flex;
      width: 90%;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    .rota {
      h2 {
        color: #04136f;
        font-size: 25px;
      }
    }
  }

  .avaliacao {
    display: flex;
    gap: 10px;
    font-size: 14px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    width: 97%;
    padding-bottom: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 15px;
      align-items: center;
    }

    .detalheIcones {
      display: flex;
      flex-direction: row;
      gap: 10px;

      @media (max-width: 768px) {
        justify-content: center;
      }

      .infoBottom {
        font-size: 14px;
      }
    }

    .valor {
      color: #04136f;
      h2 {
        font-weight: 600;
      }

      @media (max-width: 768px) {
        text-align: center;
      }
    }
  }

  .titulo2 {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    width: 37%;
    white-space: nowrap;

    h1 {
      font-size: 30px;
      color: #04136f;
    }

    @media (max-width: 768px) {
      width: 80%;
    }
  }
  .orcamento {
    color: #fff;
    background-color: #04136f;
    border-radius: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
    width: 21%;
  }
`;
