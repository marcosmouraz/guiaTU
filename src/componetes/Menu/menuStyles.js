import styled from "styled-components";
export const Container = styled.div`
  > .menu {
    background-color: #04136f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh 10%;
  }

  .menu .menu-desktop ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu li button {
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    transition: 0.2s;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  nav a:hover {
    color: yellow;
    transform: scale(1.05);
  }

  .menu li {
    margin-left: 20px;
  }

  .textmenu {
    color: #fff;
  }

  .menu .logo img {
    height: 38px;
  }
`;
