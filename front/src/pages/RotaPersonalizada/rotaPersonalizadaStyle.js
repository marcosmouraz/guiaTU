import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  /* flex-direction: column; */

  .blocos {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }
  .blocoleft {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .titulo {
    color: #04136f;
    display: flex;
    padding-top: 5rem;
    justify-content: start;
    padding-left: 10rem;
    padding-bottom: 3rem;
    width: 100%;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 1rem;
    /* border-style: groove; */
  }
  .button {
    display: flex;
    justify-content: center;
    padding-top: 2rem;
  }
`;
