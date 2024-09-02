import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: auto; */
  justify-content: space-between;
  font-family: "Outfit", sans-serif;

  .frameTextoRota {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .paragrafo {
    display: flex;
    flex-direction: row;
    gap: 7%;
    padding-top: 5%;
    color: #04136f;
    font-weight: lighter;
  }

  .tituloPagina {
    padding-top: 3%;
    font-size: 30px;
    font-weight: 900;
    color: #04136f;
    width: 100%;
    text-align: left;
    margin-bottom: 1rem;
  }

  .infoRoteiro {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .ava {
    display: flex;
    flex-direction: row;
    gap: 30px;
    color: #04136f;
    padding-top: 10px;

    .nota {
      font-weight: bolder;
    }
  }

  .descritivoDesc {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    padding-top: 20px;
    color: #04136f;
    font-size: 20px;

    hr {
      border: #04136f 1px solid;
      border-radius: 20px;
      height: 20px; /* Define a altura da linha */
    }
  }

  .descricao p {
    padding-top: 30px;
    color: #04136f;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .itinerario {
    width: 50%;
    display: flex;
  }

  .titulo h4 {
    display: flex;
    justify-content: baseline;
    color: #04136f;
    font-size: 2rem;
  }

  .itinerarioContent {
    display: flex;
    justify-content: center;
    color: #04136f;
  }

  .parteUm {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 50%;
  }

  .pUm {
    padding-top: 1rem;
    z-index: 1;
  }

  .pUm p span {
    font-weight: bold;
  }

  .imgs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding-top: 3rem;
    padding-bottom: 3rem;

    .bomjesus {
      height: 40vh;
    }

    .marcozero {
      height: 40vh;
    }
  }

  .paragrafos {
    width: 50%;
    display: flex;
    flex-direction: column;
    color: #04136f;
    gap: 15px;
    padding-bottom: 3%;
  }

  .paragrafos p span {
    font-weight: bold;
  }

  .tituloDetalhes {
    width: 50%;
    font-size: 170%;
    color: #04136f;
    padding-bottom: 1%;
  }

  .Infos {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    padding-bottom: 5rem;
    width: 50%;
    color: #04136f;
  }

  .detalhes {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* Media Queries */
  @media (max-width: 1200px) {
    .frameTextoRota,
    .itinerario,
    .parteUm,
    .paragrafos,
    .tituloDetalhes,
    .Infos {
      width: 80%;
    }

    .tituloPagina {
      font-size: 24px;
    }

    .descritivoDesc {
      font-size: 18px;
    }

    .imgs .bomjesus,
    .imgs .marcozero {
      height: 30vh;
    }
  }

  @media (max-width: 900px) {
    .frameTextoRota,
    .itinerario,
    .parteUm,
    .paragrafos,
    .tituloDetalhes,
    .Infos {
      width: 90%;
    }

    .tituloPagina {
      font-size: 20px;
    }

    .descritivoDesc {
      font-size: 16px;
    }

    .imgs .bomjesus,
    .imgs .marcozero {
      height: 25vh;
    }
  }

  @media (max-width: 600px) {
    .frameTextoRota,
    .itinerario,
    .parteUm,
    .paragrafos,
    .tituloDetalhes,
    .Infos {
      width: 100%;
    }

    .tituloPagina {
      font-size: 18px;
    }

    .descritivoDesc {
      font-size: 14px;
      flex-direction: column;
    }

    .imgs {
      flex-direction: column;
      gap: 1rem;
    }

    .imgs .bomjesus,
    .imgs .marcozero {
      height: 20vh;
    }
  }
`;
