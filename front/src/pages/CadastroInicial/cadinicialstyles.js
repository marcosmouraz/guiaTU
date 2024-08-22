import styled from "styled-components";
import Background from "../../assets/cadinicial.svg";

export const Container = styled.div`
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 140vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  @media (max-width: 768px) {
    height: 100vh;
  }

  @media (max-width: 480px) {
    height: 80vh;
  }
`;

export const Section = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  height: 85vh;
  width: 65rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  backdrop-filter: blur(2px);

  .blocoPrincipal {
    display: flex;
    text-align: center;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
  .bloco1 {
    width: 10%;
    h2 {
      font-size: 50px;
      color: #fff;
      text-align: left; /* Alinhando o texto à esquerda */
    }
    .blocoRight {
      display: flex;
    }
  }
  .bloco2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
  .cadastre {
    gap: 10px;
    display: flex;
    color: #fff;
    flex-direction: column;
    text-align: center;
    h1 {
      font-size: 50px;
    }
  }
  .buttons {
    display: flex;
    flex-direction: column;
    width: 60%;
    align-items: center;
    gap: 2rem;
    button {
      background-color: darkblue;
      border: 2px solid yellow;
      border-radius: 4px;
      height: 3rem;
      width: 15rem;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s ease, border-color 0.3s ease,
        color 0.3s ease;

      /* Efeito de hover */
      &:hover {
        background-color: blue;
        border-color: orange;
        color: lightgrey;
      }

      /* Efeito de focus (quando clicado) */
      &:focus {
        outline: none;
        border-color: orange;
      }

      /* Efeito de active (quando clicado) */
      &:active {
        background-color: navy;
        border-color: red;
      }
    }
  }
`;
