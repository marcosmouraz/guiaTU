import styled from "styled-components";

export const Container = styled.section`
  max-width: 100%;
  height: 125vh;

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    color: #04136e;
    padding-top: 60px;
    width: 100%;
    padding-bottom: 60px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: calc(50% - 20px);
    box-sizing: border-box;
    margin-bottom: 20px; /* Adiciona espaço abaixo dos cards */
  }

  .card h2 {
    padding-top: 15px;
    font-size: 25px;
    white-space: normal; /* Permite quebra de linha */
  }

  .card p {
    padding-top: 10px;
    font-size: 20px;
    white-space: normal; /* Permite quebra de linha */
  }

  img {
    height: auto;
    max-width: 100%;
    padding-bottom: 40px;
  }

  #destinos {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
  }

  #destinos h1 {
    color: #04136e;
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: center;
    font-size: 35px;
  }

  .swiper-wrapper {
    display: flex;
    gap: 20px;
    justify-content: start;
    margin-bottom: 50px;
    align-items: center;
  }

  .imagensDestinos img {
    display: inline-block;
    flex: 0 0 auto;
    max-height: 200px;
  }

  .textCarrossel {
    position: relative;
    display: flex;
    top: 23rem;
    padding-right: 2rem;
    font-size: 20px;
    left: 1rem;
    color: #fff;
    font-size: 20px;
    justify-content: center;
    z-index: 1;
    color: #04136e;
  }

  .imgCarrossel {
    height: auto;
    width: 100%;
    align-items: center;
    display: flex;
    padding-top: 1.5rem;
  }

  .back {
    background-color: #efb715;
    position: absolute;
    top: 21rem;
    height: 13vh;
    border-radius: 0 0 10px 10px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    border: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: #fff;
    font-weight: 800;
    background-color: #04136e;
  }

  .swiper-pagination-bullet {
    background-color: #04136e;
  }

  /* Mídia para responsividade */
  @media (max-width: 768px) {
    .card {
      max-width: calc(50% - 20px);
    }

    .card h2 {
      font-size: 20px;
    }

    .card p {
      font-size: 16px;
    }

    #destinos h1 {
      font-size: 28px;
    }

    .textCarrossel {
      font-size: 18px;
      top: 15rem;
    }

    .imgCarrossel {
      height: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      width: 50px;
      height: 50px;
    }

    /* Ocultar carrossel e título em telas menores */
    .swiper-container,
    #destinos {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .card {
      max-width: 100%;
    }

    .card h2 {
      font-size: 18px;
    }

    .card p {
      font-size: 14px;
    }

    #destinos h1 {
      font-size: 24px;
    }

    .textCarrossel {
      font-size: 16px;
      top: 10rem;
    }

    .swiper-button-next,
    .swiper-button-prev {
      width: 40px;
      height: 40px;
    }

    .imagensDestinos {
      flex-direction: column;
      align-items: center;
      overflow-x: hidden;
      overflow-y: auto;
    }

    .imagensDestinos img {
      max-height: none;
      width: 100%;
    }

    /* Ocultar carrossel e título em telas menores */
    .swiper-container,
    #destinos {
      display: none;
    }
  }
`;
