import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 115vh;
  flex-direction: column;
  align-items: center;
  font-family: "Outfit", system-ui;

  .titulopagina {
    color: #04136f;
    display: flex;
    padding-top: 50px;
    width: 50%;
  }

  .subtitulo {
    display: flex;
    justify-content: space-between;
    padding-top: 8rem;
    width: 50%;
    font-size: 20px;

    a,
    button {
      text-decoration: none;
      color: #04136f;
      background: none;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      border-radius: 5px;
      font-size: 20px;
      font-family: "Outfit", system-ui;
      font-weight: 700;
    }

    a:hover,
    button:hover {
      background-color: #f1f500;
      color: #04136f;
    }

    button.active,
    a.active {
      background-color: #f1f500;
      color: #04136f;
    }
  }

  .frame {
    background-color: #e2dfdf;
    display: flex;
    width: 85%;
    height: 40vh;
    border-radius: 10px;
    padding-top: 1rem;
    position: relative;
  }

  .cardcidade {
    padding: 10px;
  }

  .imgguia {
    display: flex;
    position: absolute;
    padding-left: 7rem;
    padding-top: 20px;
  }

  .infoGuia {
    display: flex;
    gap: 10px;
    padding-top: 20px;
  }

  .rodapeframe {
    display: flex;
  }

  .titulo {
    color: #04136f;
    display: flex;
    margin-top: 2rem;
    font-size: 20px;
  }

  .paragrafo {
    display: flex;
    margin-top: 1rem;
    font-size: 20px;
  }

  .textos {
    display: flex;
    flex-direction: column;
    gap: 23vh;
  }

  .textos {
    display: flex;
    align-items: center;
    p {
      color: red;
    }
  }
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .center {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-bottom: 80px;
  }
  .right {
    display: flex;
    padding-right: 15px;
  }
  .frame2 {
    background-color: #e2dfdf;
    justify-content: center;
    display: flex;
    width: 70%;
    height: 40vh;
    border-radius: 10px;
    align-items: center;
    position: relative;
  }

  .imgTurista {
    img {
      height: 75px;
    }
  }

  .elementos {
    display: flex;
    flex-direction: column;
    gap: 18vh;
    padding-left: 15rem;
    align-items: center;
  }

  .estrelas {
    display: flex;
    gap: 5px;
    padding-top: 1.5rem;
    padding-left: 10px;
    cursor: pointer;
  }

  .estrelas svg {
    color: transparent;
    stroke: #000;
    stroke-width: 2px;
    transition: fill 0.3s ease, stroke 0.3s ease;
  }

  .estrelas svg.active {
    fill: #f1f500;
    stroke: #000;
  }
`;
