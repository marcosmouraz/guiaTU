import styled from "styled-components";
export const Container = styled.div`
  > .menu {
    background-color: #04136f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh 10%;
    /* position: fixed; */
    width: 100vw;
    z-index: 2;
  }

  .dropbtn {
    background-color: #fff;
    color: #04136f;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    font-size: 18px;
    border-radius: 4px;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: #04136f;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #f1f1f1;
    color: #04136f;
    border-radius: 4px;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
    color: #04136f;
  }
  .dropdown-content2 {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 128px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    font-size: 18px;
    border-radius: 4px;
  }

  /* Links inside the dropdown */
  .dropdown-content2 a {
    color: #04136f;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius: 4px;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content2 a:hover {
    background-color: #f1f1f1;
    color: #04136f;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content2 {
    display: block;
    color: #04136f;
  }
  .dropdownUser {
    padding-right: 10px;
  }
  .dropdown-content3 {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 140px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    font-size: 18px;
    border-radius: 4px;
  }

  /* Links inside the dropdown */
  .dropdown-content3 a {
    color: #04136f;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius: 4px;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content3 a:hover {
    background-color: #f1f1f1;
    color: #04136f;
    border-radius: 4px;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content3 {
    display: block;
    color: #04136f;
  }

  .dropdown-content4 {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 140px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 3;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    width: 300px;
    height: 75vh;
    right: -150px;
    top: 25px;
  }

  /* Links inside the dropdown */
  .dropdown-content4 a {
    color: #04136f;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius: 4px;
  }
  .contAzul {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #04136f;
    padding: 20px;
    gap: 60px;
    
  }
  .textos {
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    gap: 40px;
  }
  .fotoPerfil {
    display: flex;
    height: 10vh;
  }
  .contLinks {
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: start;
  }
  .logout {
    margin-top: 25px;
  }
  /* Change color of dropdown links on hover */
  .dropdown-content4 a:hover {
    background-color: #f1f1f1;
    color: #04136f;
    border-radius: 4px;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content4 {
    display: block;
    color: #04136f;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #fff;
    color: #04136f;
    border-radius: 4px;
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
    text-decoration: none;
  }

  .menu .logo img {
    height: 38px;
  }
`;
