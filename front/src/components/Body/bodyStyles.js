import styled from "styled-components";

export const Container = styled.section`
  max-width: 100%;

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    color: #04136e;
    padding-top: 60px;
    padding-bottom: 60px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .container {
    margin: 0 auto; /* Centraliza o bloco horizontalmente */
    padding: 0 20px; /* Adiciona padding lateral para evitar overflow */
  }

  .card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .card h2 {
    padding-top: 15px;
    font-size: 25px;
    white-space: nowrap;
  }

  .card p {
    padding-top: 10px;
    font-size: 20px;
    white-space: nowrap;
  }

  img {
    height: 50vh;
    padding-bottom: 40px;
    justify-content: center;
  }

  #destinos h1 {
    color: #04136e;
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    padding-left: 1rem;
    font-size: 35px;
    
  }
  
  .imagensDestinos {
    display: flex; /* Usando flexbox para rolagem horizontal */
    overflow-x: scroll; /* Permite rolagem horizontal */
    white-space: nowrap; /* Impede quebra de linha dos itens */
    padding-top: 25px;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 25px;
  }

  .swiper-wrapper {
    display: flex;
    gap: 20px;
    
  }
  .imagensDestinos img {
    display: inline-block; /* Para que as imagens fiquem na mesma linha */
    flex: 0 0 auto; /* Assegura que as imagens não redimensionem*/
  }
  .imagensDestinos .gravata {
    font-size: 30px;
    padding-left: 10px;
    color: #fff;
    text-shadow: 2px 2px 4px #212020;
    font-family: Arial, Helvetica, sans-serif;
    white-space: nowrap;
  }
  .imagensDestinos h2 {
    font-size: 15px;
  }
  .textCarrossel {
    position: absolute;
    top: 30rem;
    font-size: 30px;
    left: 2rem;
    color: #fff;
    text-shadow: 2px 2px 0 #000;
  }
  .imgCarrossel {
    height: 40rem;
    width: 28rem;
  }
  .swiper-button-next,
  .swiper-button-prev {
    border: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    color: #fff;
    font-weight: 800;
    background-color: #04136e;
  }

  .swiper-pagination-bullet {
    background-color: #04136e;
  }
`;
