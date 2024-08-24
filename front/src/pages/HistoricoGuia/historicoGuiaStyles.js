import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .titulopagina {
    color: #04136f;
    font-size: 25px;
    padding-top: 50px;
  }
  .buttonTitulo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
    gap: 250px;
    font-family: "Poppins", sans-serif;
    margin-right: 400px;
  }
  .Frame {
    display: flex;
    background-color: #e2dfdf;
    width: 950px;
    height: 240px;
    /* padding: 15px 25px 50px 35px; */
    margin: 0 300px 0 210px;
    /* align-items: center; */
    border-radius: 7px;
  }
  .cardCidade {
    display: flex; /* Remove espaços em branco em torno da imagem */
    align-items: center;
    height:25vh;
  }
`;
