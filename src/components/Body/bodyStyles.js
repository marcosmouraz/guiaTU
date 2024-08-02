import styled from "styled-components";

export const Container = styled.section`
  .cards {
    display: flex;
    padding: 10px 20px; /* Corrigido o uso das vírgulas */
    gap: 40px;
    justify-content: space-around;
    color: #04136e;
    padding-top: 1vh;
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
  }

  .card h2 {
    font-size: 1.2rem;
  }

  .card p {
    font-size: 12px;
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
    padding-top: 2rem;
    padding-left: 1rem;
    font-weight: 800;
  }

  .imagensDestinos {
    display: flex; /* Usando flexbox para rolagem horizontal */
    overflow-x: scroll; /* Permite rolagem horizontal */
    white-space: nowrap; /* Impede quebra de linha dos itens */
    gap: 5px;
    padding-top: 25px;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .imagensDestinos img {
    display: inline-block; /* Para que as imagens fiquem na mesma linha */
    flex: 0 0 auto; /* Assegura que as imagens não redimensionem*/
  }
`;
