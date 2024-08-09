import styled from "styled-components";

export const Container = styled.body`
    width: 100%;
  height: 80%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .titulo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 35vh;
    padding-right: 200px;

    h2 {
      font-size: 32px;
      color: #04136e;
      overflow-wrap: break-word;
      white-space: normal;
      
    }
  }


  .inputfoto {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1rem;
    text-align: center;
    align-items: center;
    gap: 5px;
    padding-left: 500px;

    .vetor {
      border: #1e1e1e;
      background-color: aliceblue;
      border-style: groove;
      border-radius: 10px;
      transition: background-color 0.2s;
    }

    .vetor:hover {
      border-color: #04136e;
      background-color: #04136e;
    }

    .p {
      color: #04136e;
      font-size: 16px;
      font-weight: 600;
      width: 8rem;
    }
  }
  .DadosPessoais {
    display: flex;
    justify-content: center;
    padding-right: 520px;
    height: 5vh;
    
    h4 {
    color: #04136e;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
   
    }
  }

  .inputs{
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 1rem ;
   
  }
  .inputContainer{
    display: flex; 
    flex-direction: column;
    gap: 10px;

  }

  input {
    width: 150vw;
    max-width: 20rem;
    height: 5vh;
    border-style: groove;
    border-radius: 4px;
    padding: 0.5rem;

  }
  .detalhesSenha{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-top: 30px;
    padding-right: 410px;

    
    h5{
      padding-right: 60px;
      font-weight: 700;
    }
  }


  .button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  .buttonproximo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    margin: 2.5rem auto 0 auto;
    background-color: #04136e;
    color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 8px 1rem;
    text-align: center;
  

    &:hover {
      background-color: #3F58EE;
      border: none;
    }
  }
`;
