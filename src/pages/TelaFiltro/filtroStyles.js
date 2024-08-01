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
    border-radius: 20px;
    padding:10px;
    background-color: #fff;
    color: black;
    flex-direction: row;
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: end;
    z-index: 3;
    height: 7vh;
    width: 10vw;
  }
  .body .trilhas {
    width: 14vw;
  
  }

  h3 {
    display: flex;;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 100;
  }

.titulodestinos h3 {
  color: #04136f;
  font-size: 25px;
  font-weight: 550;
  margin-top: 40px;
}



`;