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

  .bloco-1-footer,
  .bloco-2-footer,
  .bloco-3-footer,
  .bloco-4-footer {
    display: flex;
    flex-direction: column;
    gap: 5px;
    list-style-type: none;
  }

  .info-bloco-1,
  .info-bloco-2,
  .info-bloco-3,
  .info-bloco-4 {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 30px;
  }

  .info-bloco-1 a,
  .info-bloco-2 a,
  .info-bloco-3 a,
  .info-bloco-4 li {
    text-decoration: none;
    font-size: 16px;
    color: #cccccc;
  }

  .info-bloco-1 a:hover,
  .info-bloco-2 a:hover,
  .info-bloco-3 a:hover,
  .info-bloco-4 li:hover {
    color: yellow;
  }

  .ajuda {
    display: flex;
    gap: 10px;
  }

  .app {
    display: flex;
    gap: 10px;
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
  }`;
