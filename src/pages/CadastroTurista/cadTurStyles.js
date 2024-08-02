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
  .inputEmail {
    display: grid;
    width: 70%;
    padding-left: 20rem;
    height: 12vh;
    gap: 1rem;

    .email {
      border-radius: 4px;
      padding: 10px;
      border-style: groove;
      align-items: baseline;
      height: 5vh;
    }
  }
  .inputSenhas {
    display: flex;
    position: relative;
    /* justify-content: center; */
    flex-direction: row;
    gap: 10px;
    width: 50%;
    left: 16rem;
    padding-left: 4rem;
    top: -1.5rem;
    
    .senha {
      width: 100%;
      height: 5vh;
      border-style: groove;
      border-radius: 4px;
      padding: 1rem;
      /* margin-right: 1rem; */
    }
    .confirme {
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

    .telefone {
      width: 100%;
      height: 5vh;
      border-style: groove;
      border-radius: 4px;
      padding: 1rem;
      /* margin-right: 1rem; */
    }
    .idade {
      width: 100%;
      height: 5vh;
      border-style: groove;
      border-radius: 4px;
      padding: 1rem;
      /* margin-left: 1rem; */
    }
  }
`;