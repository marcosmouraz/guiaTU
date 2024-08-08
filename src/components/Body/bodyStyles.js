import styled from "styled-components";

export const Container = styled.section`
  .cards {
    display: flex;
    padding: 10px 20px; /* Corrigido o uso das vírgulas */
    gap: 80px;
    justify-content: space-around;
    color: #04136e;
    flex-direction: row;
    padding-top: 65px;
    padding-bottom: 65px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 auto; /* Centraliza o bloco horizontalmente */
    max-width: 1200px; /* Define uma largura máxima para o conteúdo */
  }

  .container {
    margin: 0 auto; /* Centraliza o bloco horizontalmente */
    max-width: 1200px; /* Define uma largura máxima para o conteúdo */
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
    font-size: 14px;
    white-space: nowrap;
  }

  img {
    height: 43vh;
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
    gap: 5px;
    padding-top: 25px;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 25px;
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
`;
