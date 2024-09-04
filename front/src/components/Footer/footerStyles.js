import styled from "styled-components";

export const Container = styled.section`
  background-color: #04136f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem; /* Reduzido o padding superior */
  width: 100%;
  margin: 0;
  font-family: "Outfit", system-ui;
`;

export const Footerlist = styled.footer`
  display: grid;
  width: 100%;
  max-width: 60rem; /* Reduzido o max-width */
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem 2rem; /* Reduzido o gap entre as colunas */
  padding: 1rem 0.5rem; /* Reduzido o padding */
  align-items: start;
  color: #fff;

  .bloco-guiatu,
  .bloco-inspiracao,
  .bloco-conosco,
  .bloco-footer,
  .redesSociais,
  .pagamentos,
  .logoCadastur {
    display: flex;
    flex-direction: column;
    gap: 3px; /* Reduzido o gap */
    list-style-type: none;
  }

  .info-bloco {
    display: flex;
    flex-direction: column;
    gap: 3px; /* Reduzido o gap */
    padding-bottom: 15px; /* Reduzido o padding inferior */
  }

  .info-bloco a {
    text-decoration: none;
    font-size: 14px; /* Reduzido o tamanho da fonte */
    color: #cccccc;
  }

  .info-bloco a:hover {
    color: yellow;
  }

  .ajuda {
    display: flex;
    gap: 8px; /* Reduzido o gap */
  }

  .app {
    display: flex;
    gap: 6px; /* Reduzido o gap */
    color: #fff;
    list-style-type: none;
    text-decoration: none;
  }

  .app:hover {
    color: yellow;
  }

  .imgsg,
  .imgfp {
    display: flex;
    flex-direction: row;
    gap: 4px; /* Reduzido o gap */
    margin-top: 0.5vh; /* Reduzido o margin-top */
  }

  .imgcd {
    cursor: pointer;
  }

  /* Responsividade */
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  @media screen and (max-width: 767px) {
    .bloco-footer,
    .pagamentos,
    .logoCadastur {
      display: none;
    }

    .bloco-guiatu,
    .bloco-inspiracao,
    .bloco-conosco,
    .redesSociais {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-bottom: 10px;
      text-align: center;
    }

    .info-bloco {
      padding-bottom: 5px;
    }
  }

  @media screen and (max-width: 457px) {
    .info-bloco a {
      font-size: 10px; /* Reduzido o tamanho da fonte */
    }

    .ajuda h5,
    .app p,
    .info-bloco h4 {
      font-size: 10px; /* Reduzido ainda mais o tamanho das fontes nos itens de ajuda e aplicativos */
    }
  }
`;

export const Copyright = styled.div`
  background-color: #212020;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0; /* Reduzido o padding vertical */
  height: 2.5rem; /* Reduzido a altura */
  box-sizing: border-box;

  .copyright-content {
    width: 100%;
    max-width: 60rem; /* Reduzido o max-width */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    height: 25px; /* Reduzido o tamanho da imagem */
  }

  h6 {
    color: #ffffff;
    font-size: 10px; /* Reduzido o tamanho da fonte */
  }
`;
