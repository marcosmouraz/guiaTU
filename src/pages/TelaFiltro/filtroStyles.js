import styled from "styled-components";

export const Container = styled.div`
  .body {
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 2.3rem;
    margin-top: 1.5rem;
  }
  .body button {
    border-radius: 12px;
    padding: 5px;
    background-color: #fff;
    color: black;
    flex-direction: row;
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: end;
    z-index: 3;
    height: 5vh;
    width: 10vw;
  }
  .body .trilhas {
    width: 14vw;
  }

  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 100;
  }
`;