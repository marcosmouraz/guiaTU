import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  justify-content: space-between;

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
    gap: 30px;
    padding-top: 20px;
    color: #04136f;
    font-size: 20px;
  }

  .descricao p {
    padding-top: 30px;
    color: #04136f;
  }

  .descricao p span {
    font-weight: bolder;
  }

  .itinerario {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
  }

  .itinerarioContent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    max-width: 1000px; /* Ajuste conforme necessário */
    justify-content: space-between;
  }

  .parteUm {
    width: 50%;
    padding-right: 2rem;
  }

  .pUm {
    padding-top: 1rem;
    z-index: 1;
  }

  .pUm p span {
    font-weight: bold;
  }

  .img {
    width: 50%;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      height: auto;
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
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: center;
    width: 100%;
  }

  .detalhes {
    display: flex;
    flex-direction: column;
  }
`;
