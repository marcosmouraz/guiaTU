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

  .inputfoto {
    position: relative;
    display: flex;
    justify-content: end;
    flex-direction: column;
    width: 7rem;
    padding-bottom: 2rem;
    margin-left: 45rem;
    text-align: center;
    align-items: center;
    gap: 5px;
    top: -3.9rem;
    .vetor {
      border: #1e1e1e;
      background-color: aliceblue;
      border-style: groove;
      border-radius: 10px;
    }
    .vetor:hover {
      border-style: groove;
      border-color: #04136e;
      background-color: #04136e;
    }
  }
  .inputfoto .p {
    color: #04136e;
    font-size: 16px;
    font-weight: 600;
  }
  .inputnome {
    display: flex;
    position: relative;
    flex-direction: row;
    gap: 10px;
    width: 50%;
    left: 16rem;
    padding-left: 4rem;
    top: -2.9rem;

    .nome {
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
  .buttonProximo {
    position: relative;
    justify-content: center;
    align-items: center;
    top: 2.5rem;
    width: 15%;
    background-color: #04136e;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
    transform: translate(39.7vw, 0.5vh);
    border: none;
    text-align: center;
    display: flex;
    padding: 8px 5rem;
  }

  .buttonProximo:hover {
    color: #fff;
    background-color: #1e1e1e;
    border-style: groove;
    border-color: #fff;
    border: none;
  }
  .linha {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    top: 4.5rem;
    margin-bottom: 2rem;
    width: 75rem;
    padding-bottom: 2rem;
    padding-left: 6rem;
  }
  .linha h5 {
    font-weight: 600;
    color: #000;
  }
  .linha img {
    width: 20%;
    color: black;
  }
  .sociais {
    display: flex;
    gap: 45px;
    justify-content: center;
    padding-top: 2.5rem;
    padding-right: 3rem;
    padding-bottom: 3rem;
    align-items: center;
  }
`;