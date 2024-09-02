import styled from "styled-components";

export const Container = styled.div`
  .body {
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
    white-space: nowrap;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem; /* Ajusta o espaço entre os botões no layout vertical */
    }
  }

  .body .buttonSugestao {
    padding: 0 20px 0 0;
    display: flex;
    align-items: center;
    border-radius: 28px;
    gap: 30px;
    border: 1px #afafaf solid;
    font-size: 28px;
    background-color: transparent;
    font-family: "Poppins", sans-serif;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 100%; /* Garante que os botões ocupem a largura total do contêiner */
      justify-content: center;
      padding: 10px; /* Ajusta o padding para telas menores */
    }
  }

  h3 {
    display: flex;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 100;
  }

  .buttonSugestao h3 {
    color: #04136f;
    font-size: 25px;
    font-weight: 550;
    margin-top: 55px;
    margin-left: 180px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      margin-top: 20px; /* Ajusta as margens para telas menores */
      margin-left: 0;
      text-align: center;
    }
  }
`;
