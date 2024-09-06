import styled from "styled-components";

export const Container = styled.div`
  > .menu {
    background-color: #04136f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh 10%;
    font-family: "Outfit", system-ui;
    z-index: 2;
  }

  .menu-toggle {
    display: none; /* Ocultar o botão de menu hamburguer por padrão */
    font-size: 32px;
    cursor: pointer;
    color: #fff;
    background: none;
    border: none;
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

  /* O container <div> - necessário para posicionar o conteúdo do dropdown */
  .dropdown {
    position: relative;
    display: inline-block;
    font-family: "Outfit", system-ui;
  }

  /* Conteúdo do Dropdown (Oculto por padrão) */
  .dropdown-content,
  .dropdown-content2,
  .dropdown-content3,
  .dropdown-content4 {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    font-size: 18px;
    border-radius: 4px;
    font-family: "Outfit", system-ui;
  }

  .dropdown-content {
    min-width: 160px;
  }

  .dropdown-content2 {
    min-width: 128px;
  }

  .dropdown-content3,
  .dropdown-content4 {
    min-width: 140px;
  }

  .dropdown-content4 {
    cursor: pointer;
    width: 300px;
    height: 75vh;
    right: -150px;
    top: 25px;
  }

  /* Links dentro do dropdown */
  .dropdown-content a,
  .dropdown-content2 a,
  .dropdown-content3 a,
  .dropdown-content4 a {
    color: #04136f;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius: 4px;
  }

  /* Alterar a cor dos links do dropdown ao passar o mouse */
  .dropdown-content a:hover,
  .dropdown-content2 a:hover,
  .dropdown-content3 a:hover,
  .dropdown-content4 a:hover {
    background-color: #f1f1f1;
    color: #04136f;
  }

  /* Mostrar o menu dropdown ao passar o mouse */
  .dropdown:hover .dropdown-content,
  .dropdown:hover .dropdown-content2,
  .dropdown:hover .dropdown-content3,
  .dropdown:hover .dropdown-content4 {
    display: block;
    color: #04136f;
  }

  .dropdownUser {
    padding-right: 10px;
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

  /* Alterar a cor do botão do dropdown quando o conteúdo do dropdown está visível */
  .dropdown:hover .dropbtn {
    background-color: #fff;
    font-family: "Outfit", system-ui;
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
    font-family: "Outfit", system-ui;
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

  /* Responsividade */
  @media (max-width: 1024px) {
    .menu-desktop {
      display: none; /* Ocultar o menu desktop em telas menores */
    }

    .menu-toggle {
      display: block; /* Mostrar o botão de menu hamburguer em telas menores */
    }
  }

  @media (max-width: 768px) {
    .menu-desktop.active {
      display: block; /* Mostrar o menu quando o botão de menu hamburguer é clicado */
      position: absolute;
      top: 60px; /* Ajuste conforme necessário */
      left: 0;
      width: 100%;
      background-color: #04136f;
      padding: 10px;
      z-index: 10;
    }

    .menu-desktop ul {
      display: block;
      text-align: center;
      padding: 0;
    }

    .menu-desktop li {
      margin: 10px 0; /* Ajustar o espaçamento dos itens do menu em telas menores */
    }

    .dropdown-content,
    .dropdown-content2,
    .dropdown-content3,
    .dropdown-content4 {
      position: static; /* Ajustar o posicionamento do dropdown para telas menores */
    }
  }
`;
