import styled from "styled-components";


export const Container = styled.body`
  width: 100%;
  height: 100vh;
  max-width: 100%;

  .titulo {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 20rem;
    overflow-wrap: break-word;
    width: 25%;
    height: 30vh;
  }
  .titulo h2 {
    font-size: 30px;
    color: #04136e;
  }


  .inputfoto{
    display: flex;
    justify-content: end;
    flex-direction: column;
    width: 65rem;
    padding-bottom: 8rem;
    margin-left: 1rem;

  }

  
  .inputnome {
    display: flex;
    position: relative;
    /* justify-content: center; */
    flex-direction: row;
    gap: 10px;
    width: 50%;
    left: 16rem;
    padding-left: 4rem;
    top: -2.9rem;

    .nome{
      width: 100%;
      height: 5vh;
      border-style: groove;
      border-radius: 4px;
      padding: 1rem;
    }
    .sobrenome {
      width: 100%;
      height: 5vh;
      border-style: groove;
      border-radius: 4px;
      padding: 1rem;
    }
  }
  .inputDataCpf {
    display: flex;
    position: relative;
    /* justify-content: center; */
    flex-direction: row;
    gap: 10px;
    width: 50%;
    left: 16rem;
    padding-left: 4rem;
    top: -1.5rem;
    
    .dataNascimento {
      width: 100%;
      height: 5vh;
      border-style: groove;
      border-radius: 4px;
      padding: 1rem;
      /* margin-right: 1rem; */
    }
    .Cpf {
      width: 100%;
      height: 5vh;
      border-style: groove;
      border-radius: 4px;
      padding: 1rem;
      /* margin-left: 1rem; */
    }
  }
  .inputsInfos {
    display: flex;
    position: relative;
    /* justify-content: center; */
    flex-direction: row;
    gap: 10px;
    width: 50%;
    left: 16rem;
    padding-left: 4rem;

    .Pais {
      width: 100%;
      height: 5vh;
      border-style: groove;
      border-radius: 4px;
      padding: 1rem;
      /* margin-right: 1rem; */
    }
    .estado {
      width: 100%;
      height: 5vh;
      border-style: groove;
      border-radius: 4px;
      padding: 1rem;
      /* margin-left: 1rem; */
    }
  }
`;