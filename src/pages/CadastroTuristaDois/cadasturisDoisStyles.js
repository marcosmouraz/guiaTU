import styled from "styled-components";

export const Container = styled.body`
  width: 100%;
  height: 70vh;
  max-width: 100%;

  .titulo {
    color: #04136e;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
    width: 71%;
  }
  .inputUm {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 10px 0;
  }

  .inputUm input {
    width: 20rem;
  }

  .buttonContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .buttonFinalizar {
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 2rem;
    background-color: #3f58ee;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
    border: none;
    text-align: center;
    display: flex;
  }

  .checkContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
  }

  .inputscheckum {
    font-size: 13px;
    display: flex;
    gap: 1rem;
    width: 50%;
  }

  .inputtext {
    font-size: 13px;
    width: 50%;
    font-weight: lighter;
  }
`;
