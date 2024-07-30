import styled from "styled-components";
export const Container = styled.section`
  .cards {
    display: flex;
    padding: 10px, 20px;
    gap: 40px;
    justify-content: space-around;
    color: #04136e;
    padding-top: 1vh;
    font-family: Arial, Helvetica, sans-serif;
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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 5px;
    align-items: center;
    /* padding: 10px, 20px; */
    padding-top: 25px;
    flex-flow: row nowrap;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media screen and (max-width: 800px) {
    .imagensDestinos {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
