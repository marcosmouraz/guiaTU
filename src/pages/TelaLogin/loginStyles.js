import styled from "styled-components";

import Background from "../../assets/terminalmaritimo.svg";

export const Section = styled.section`
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.body`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  height: 500px;
  width: 700px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;

  .textUm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .textUm h2 {
    color: #04136e;
    text-shadow: 2px 2px 4px #d9d9d9;
    font-size: 40px;
  }
  .textUm h6 {
    color: #fff;
    font-weight: 300;
    font-size: 17px;
  }
  .inputs {
    background-color: transparent;
    color: #000;
    gap: 10px;
    display: flex;
    flex-direction: column;
  }
  .email {
    background-color: #fff;
    opacity: 70%;
    border-color: #5f6368;
    border-style: groove;
    height: 3rem;
    width: 30rem;
    border-radius: 8px;
    padding: 1rem;
  }
  .email::placeholder {
    color: #5f6368;
    font-weight: 500;
  }
  .senha {
    background-color: #fff;
    opacity: 70%;
    border-color: #5f6368;
    border-style: groove;
    height: 3rem;
    border-radius: 8px;
    padding: 1rem;
  }
  .senha::placeholder {
    color: #5f6368;
    font-weight: 500;
  }
  .esqueciSenha {
    text-decoration: none;
    color: #fff;
    font-weight: 100;
    font-size: 15px;
  }
  .buttonEntrar {
    padding: 10px 10px;
    width: 68%;
    background-color: #04136e;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
    border: none;
    color: #fff;
    text-align: center;
    font-size: 17px;
    font-weight: 700;
  }
  .buttonEntrar:hover {
    color: #fff;
    background-color: #0f2ff0;
    border-style: solid;
    border-color: #04136e;
    border: none;
  }

  .textDois {
    font-weight: 700;
    color: #fff;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .linha {
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .linha hr {
    width: 220px;
    border-color: #fff;
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .buttonPerfil {
      background-color: #04136e;
      color: #fff;
      border-radius: 8px;
      height: 3rem;
      width: 12rem;
      font-size: 17px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.2s;
      border: none;
    }
    .buttonPerfil:hover {
      color: #fff;
      background-color: #0f2ff0;
      border-style: solid;
      border-color: #04136e;
    }
  }
  .cadastrarAgora {
    margin: 20px 0;
  }
  .cadastrarAgora h6 {
    font-weight: 200;
    font-size: larger;
    font-weight: 100;
    font-size: 18px;
    color: yellow;
  }
  .cadastrarAgora h6 span {
    color: #fff;
  }
  .cadastrar {
    text-decoration: none;
    color: inherit;
    color: #000;
    padding-bottom: 300px;
  }
`;

