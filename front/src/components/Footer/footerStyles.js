import styled from "styled-components";

export const Container = styled.section`
  background-color: #04136f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  // padding-bottom: 1rem;
  width: 100%;
  margin: 0; /* Garante que não haja margens adicionais */
`;

export const Footerlist = styled.footer`
  display: grid;
  width: 100%;
  max-width: 70.25rem;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 8rem;
  padding-bottom: 2rem;
  padding-top: 3rem;
  align-items: start;
  color: #fff;

  .bloco-footer {
    display: flex;
    flex-direction: column;
    gap: 5px;
    list-style-type: none;
  }

  .info-bloco {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 30px;
  }

  .info-bloco a {
    text-decoration: none;
    font-size: 16px;
    color: #cccccc;
  }

  .info-bloco a:hover {
    color: yellow;
  }

  .ajuda {
    display: flex;
    gap: 10px;
  }
  .app {
    display: flex;
    gap: 8px;
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
    gap: 5px;
    margin-top: 1vh;
  }

  .imgcd {
    cursor: pointer;
  }

  /* Responsividade */
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const Copyright = styled.div`
  background-color: #212020;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  height: 3.5rem; /* Ajustado para maior altura */
  box-sizing: border-box; /* Garante que o padding não aumente a altura total */
  .copyright-content {
    width: 100%;
    max-width: 70.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    height: 35px;
  }
  h6 {
    color: #ffffff;
    font-size: 14px;
  }
`;
