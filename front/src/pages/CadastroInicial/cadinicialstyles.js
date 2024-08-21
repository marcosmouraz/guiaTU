import styled from "styled-components";
import Background from "../../assets/cadinicial.svg"

// export const Section = styled.section`
//   background-image: url(${Background});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   max-width: 100%;
//   height: 140vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 10px 0;
// `;

export const Container = styled.body`
background-image: url(${Background});
width: 100%;
height: 130vh;
max-width: 100%;
margin: 0 auto;

.titulo {
    display: flex;
    align-items: center;
    justify-content: center;
    /* overflow-wrap: break-word; */
    width: 50%;
    height: 15rem;
    margin: 0 auto;
    padding-left: rem;

    h2 {
      font-size: 32px;
      color: #04136e;
    }
  }
  .buttons{
      background-color: #04136e;
      color: #fff;
      border-radius: 8px;
      height: 3rem;
      width: 12rem;
      font-size: 17px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.2s;
      border: none;
    }
    .buttonPerfil:hover {
      color: #fff;
      background-color: #0f2ff0;
      border-style: solid;
      border-color: #04136e;
    }

    







`
