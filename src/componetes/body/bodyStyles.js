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
  .card h2{
    font-size: 1.2rem;
  }
  .card p{
    font-size: 12px;
  }
  img {
    height: 50vh;
  }
  #destinos h1{
    color: #04136e;
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: space-between;
    padding-top: 6vh;
    padding-left: 5vh;
    font-weight: 900;

  }
  .imagensDestinos{
    display: flex;
    justify-content: space-around;
    gap: 5px;
    align-items: center;
    padding: 10px, 20px;
    padding-top: 5vh;
    flex-flow: row nowrap;
    width: 100%;

  }
`;

