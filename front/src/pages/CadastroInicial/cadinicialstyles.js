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
  font-family: "Outfit", system-ui;
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
  box-sizing: border-box; /* Inclui padding e border no tamanho total */

  .blocoPrincipal {
    display: flex;
    text-align: center;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap; /* Permite que os itens quebrem a linha se necessário */
  }

  .bloco1 {
    width: 10%;
    h2 {
      font-family: "Outfit", system-ui;
      font-size: 50px;
      color: #fff;
      text-align: left;
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
    align-items: center; /* Centraliza o conteúdo no eixo horizontal */

    h1 {
      font-family: "Outfit", system-ui;
      font-size: 50px;
      text-align: center; /* Centraliza o texto */
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    width: 100%; /* Garante que os botões não saiam do background */
    align-items: center;
    gap: 2rem;
    font-family: "Outfit", system-ui;
    box-sizing: border-box; /* Inclui padding e border no tamanho total */

    button {
      background-color: darkblue;
      border: 2px solid yellow;
      border-radius: 4px;
      height: 3rem;
      width: 15rem;
      color: #fff;
      font-family: "Outfit", system-ui;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s ease, border-color 0.3s ease,
        color 0.3s ease;

      &:hover {
        background-color: blue;
        border-color: orange;
        color: lightgrey;
      }

      &:focus {
        outline: none;
        border-color: orange;
      }

      &:active {
        background-color: navy;
        border-color: red;
      }
    }
  }

  /* Estilos para tablets */
  @media (max-width: 1024px) {
    width: 80%;
    height: 70vh;

    .cadastre {
      h1 {
        font-size: 40px;
      }
    }
  }

  /* Estilos para telas menores (celulares) */
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 20px; /* Adiciona padding para evitar que o conteúdo encoste nas bordas */

    .blocoPrincipal {
      flex-direction: column;
      gap: 20px;
    }

    .bloco1 {
      width: 100%;
      h2 {
        font-size: 40px;
      }
    }

    .cadastre {
      h1 {
        font-size: 30px; /* Reduz o tamanho do título em celulares */
      }
    }

    .buttons {
      width: 100%; /* Garante que os botões fiquem dentro do background */
      padding: 0 10px; /* Adiciona padding para evitar que os botões saiam do background */
    }
  }

  @media (max-width: 457px) {
    .cadastre {
      h1 {
        font-size: 25px; /* Reduz ainda mais o tamanho do título */
      }
    }
  }
`;
