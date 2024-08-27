import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  .titulopagina {
    display: flex;
    color: #04136f;
    font-size: 25px;
    width: 50%;
    justify-content: center;
    margin-top: 2rem;
  }
  .blocos{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height:100vh;
  }
  .blocoLeft {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    margin-left: 5rem;
    
  }
  .buttonPasseios {
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-top: 50px;
    font-family: "Poppins", sans-serif;
    margin-bottom: 1rem;
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
  .Frame2{
    display: flex;
    background-color: #e2dfdf;
    border-radius: 7px;
    gap: 20px;
    padding: 10px;
    height: 80vh;
  }
`;
