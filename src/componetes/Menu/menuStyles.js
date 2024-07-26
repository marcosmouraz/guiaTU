import styled from "styled-components";
export const Container = styled.div`
  > .menu {
    background-color: #04136f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 10%;
  }

  .menu .menu-desktop ul {
    list-style-type: none;
  }

  .menu li a {
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    transition: 0.2s;
  }

  nav a:hover {
    color: white;
    transform: scale(1.05);
  }

  .menu li {
    display: inline-block;
    margin-left: 20px;
  }

  .menu .logo img {
    height: 55px;
    
  }
`;
