import styled from "styled-components";

import Background from "../../assets/wallpaperlogin.svg";

export const Container = styled.body`
  width: 100%;
  height: 100vh;

  .conta h2 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 130px;
    color: #04136e;
    text-shadow: 2px 2px 4px #1e1e1e;
  }

  .conta h6 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 145px;
    color: black;
    font-weight: 200;
  }
  .inputs {
    background-color: transparent;
    position: relative;
    display: grid;
    justify-content: center;
    align-items: center;
    top: 170px;
    width: 100%;
    box-sizing: border-box;
    gap:10px;

  }
 .esqueciasenha h6{
  padding-left: 60px;
  font-weight: 200;

 }
`;
export const Section = styled.section`
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;
