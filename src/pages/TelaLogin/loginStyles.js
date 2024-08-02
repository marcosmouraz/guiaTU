import styled from "styled-components";

import Background from "../../assets/wallpaperlogin.svg";

export const Container = styled.body`
  width: 100%;
  height: 100vh;

  .conta h2 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 8.5rem;
    color: #04136e;
    text-shadow: 2px 2px 4px #1e1e1e;
    font-size: 30px;
  }

  .conta h6 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 9.5rem;
    color: black;
    font-weight: 200;
    font-size: 15px;

  }
  .inputs {
    background-color: transparent;
    position: relative;
    display: grid;
    justify-content: baseline;
    align-items: center;
    top: 10.6rem;
    width: 25%;
    box-sizing: border-box;
    gap: 0.8rem;
    transform: translate(37vw, 0.5vh);
    color: #000;
    .email {
      background-color: #5f6368;
      opacity: 50%;
      color: #04136e;
      border-color: #5f6368;
      border-style: groove;
      height: 2rem;
      border-radius: 8px;
    }
    .email::placeholder {
      color: #fff;
      font-weight: 500;
    }
    .senha {
      background-color: #5f6368;
      opacity: 50%;
      color: #04136e;
      border-color: #5f6368;
      border-style: groove;
      height: 2rem;
      border-radius: 8px;
    }
    .senha::placeholder {
      color: #fff;
      font-weight: 500;
    }
  }
  .esqueciasenha {
    padding: 5px 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    transform: translate(45.2vw, 0.5vh);
    position: relative;
  }
  .esqueciasenha h6 {
    position: relative;
    font-weight: 200;
    padding-top: 11rem;
  }
  .clickEsqueci {
    text-decoration: none;
    color: inherit;
    color: #000;
  }
  .buttonEntrar {
    position: relative;
    justify-content: center;
    align-items: center;
    top: 1rem;
    width: 25%;
    background-color: #04136e;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
    transform: translate(37vw, 0.5vh);
    border: none;
    text-align: center;
    display: flex;
    padding: 8px 6rem;
  }
  .buttonEntrar:hover {
    color: #04136e;
    background-color: #fff;
    border-style: groove;
    border-color: #04136e;
  }
  .linha {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    top: 3rem;
    margin-bottom: 1rem;
  }
  .linha h5 {
    font-weight: 500;
    color: #636363;
  }
  .linha img {
    width: 14%;
    color: #636363;
  }
  .buttons {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 4.9rem;
    gap: 4rem;
    padding: 0.5rem 3rem 0.5rem 3rem;
    max-width: 1200px;
    transition: background-color 0.2s;
    transform: translate(37vw, 0.5vh);
    width: 25%;

    #turista {
      background-color: #04136e;
      color: #fff;
      border-radius: 8px;
      height: 2rem;
      width: 12rem;
      font-size: 17px;
      font-weight: bold;
      cursor: pointer;
      border: none;
    }
    #turista:hover {
      color: #04136e;
      background-color: #fff;
      border-style: groove;
      border-color: #04136e;
    }
    #guia {
      background-color: #04136e;
      color: #fff;
      border-radius: 8px;
      height: 2rem;
      width: 12rem;
      font-size: 17px;
      font-weight: bold;
      cursor: pointer;
      border: none;
    }
    #guia:hover {
      color: #04136e;
      background-color: #fff;
      border-style: groove;
      border-color: #04136e;
    }
    #parceiro {
      background-color: #04136e;
      color: #fff;
      border-radius: 8px;
      height: 2rem;
      width: 12rem;
      font-size: 17px;
      font-weight: bold;
      cursor: pointer;
      border: none;
    }
    #parceiro:hover {
      color: #04136e;
      background-color: #fff;
      border-style: groove;
      border-color: #04136e;
    }
  }
  .cadastrarAgora h6 {
    position: relative;
    display: flex;
    top: 4rem;
    align-items: center;
    justify-content: center;
    font-weight: 200;
    font-size: larger;
    flex-direction: row;
    font-weight: 100;
    font-size: 18px;
  }
  .cadastrar {
    text-decoration: none;
    color: inherit;
    color: #000;
  }
`;
export const Section = styled.section`
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;
