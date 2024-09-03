import styled from "styled-components";

import Background from "../../assets/terminalmaritimo.svg";

export const Section = styled.section`
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 100%;
  height: 140vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const Container = styled.div`
  max-width: 100%;
  font-family: "Outfit", system-ui;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  height: 80vh;
  width: 50rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  backdrop-filter: blur(5px);

  .textUm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .textUm h2 {
    color: #d9d9d9;
    font-size: 40px;
    font-family: "Outfit", system-ui;
  }

  .textUm h6 {
    color: #fff;
    font-weight: 300;
    font-family: "Outfit", system-ui;

    font-size: 17px;
  }

  .inputs {
    background-color: transparent;
    color: #000;
    gap: 10px;
    display: flex;
    flex-direction: column;
  }

  .email,
  .senha {
    background-color: #fff;
    opacity: 70%;
    border-style: groove;
    height: 3rem;
    border-radius: 8px;
    padding: 1rem;
    border-color: #5f6368;
  }

  .email::placeholder,
  .senha::placeholder {
    color: #5f6368;
    font-weight: 500;
  }

  .email.error,
  .senha.error {
    border-color: #ff4d4d;
  }

  .esqueciSenha {
    display: flex;
    justify-content: end;
    text-decoration: none;
    color: #fff;
    font-weight: lighter;
    font-size: 11px;
    text-align: right;
    font-family: "Outfit", system-ui;

    width: 30rem;
    padding-right: 2%;
    align-self: flex-end;
  }

  .radios {
    display: flex;
    flex-direction: row;
    gap: 6rem;
    color: #d9d9d9;
    width: 100%;
    justify-content: center;
  }

  .linha {
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .linha h5 {
    color: #d9d9d9;
    font-size: medium;
  }

  .linha hr {
    width: 8rem;
    border-color: #fff;
  }

  .tituloRadio {
    display: flex;
    justify-content: start;
    width: 60%;
    color: #d9d9d9;
  }

  .radioTu {
    display: flex;
    gap: 10px;
  }

  .radioGui {
    display: flex;
    gap: 10px;
  }

  .radioEmp {
    display: flex;
    gap: 10px;
  }

  .buttonEntrar {
    padding: 10px 10px;
    width: 100%;
    max-width: 30rem;
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

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .cadastrarAgora {
    margin: 20px 0;
  }

  .cadastrarAgora h6 {
    font-weight: 200;
    font-size: larger;
    font-weight: 100;
    font-size: 18px;
    color: #fff;
  }

  .cadastrarAgora h6 span {
    color: #ffe30e;
  }

  .cadastrar {
    text-decoration: none;
    color: inherit;
    color: #000;
    padding-bottom: 300px;
  }

  .error {
    color: #ff4d4d;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
  }
`;
