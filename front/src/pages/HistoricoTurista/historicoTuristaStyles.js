import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  .titulopagina {
    display: flex;
    color: #04136f;
    font-size: 25px;
    width: 90%;
    justify-content: center;
    margin-top: 4rem;
  }
  .blocos {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }
  .bloco {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    margin-left: 5rem;
  }
  .linha{
    width: 100%;
  }
  .buttonPasseios {
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-top: 50px;
    font-family: "Poppins", sans-serif;
  }
  .Frame {
    display: flex;
    background-color: #e2dfdf;
    border-radius: 7px;
    gap: 20px;
    padding: 10px;
  }
  .cardCidade {
    display: flex; /* Remove espaços em branco em torno da imagem */
    align-items: center;
    height: 25vh;
  }
  .blocoRight {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
  }
  .frameRight {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .Frame2 {
    display: flex;
    background-color: #e2dfdf;
    border-radius: 7px;
    gap: 20px;
    padding: 10px;
    height: 80vh;
  }
`;
