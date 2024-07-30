import styled from "styled-components";

export const Container = styled.section`
  background-color: #04136f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem ;
  height: 20rem;
  text-decoration: none;
  max-width: 100%;
  
`;
export const Footerlist = styled.footer`
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 70.25rem;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 8rem;
  padding-bottom: 2rem;
  padding-top: 3rem;
  align-items: center;

  .bloco-1-footer {
    display: flex;
    gap: 10px;
    flex-direction: column;
    /* font-size: 14px; */
    list-style-type: none;
  }
  .bloco-1-footer .info-bloco-1 {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 30px;
    text-decoration: none;
  }
  .bloco-1-footer .info-bloco-1 a {
    text-decoration: none;
    font-size: 16px;
    color: #cccccc;
  }
  .bloco-1-footer .info-bloco-1 a:hover {
    color: yellow;
  }
  .bloco-2-footer {
    display: flex;
    gap: 10px;
    flex-direction: column;
    /* font-size: 14px; */
    list-style-type: none;
  }
  .bloco-2-footer .info-bloco-2 {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 30px;
    text-decoration: none;
  }
  .bloco-2-footer .info-bloco-2 a {
    text-decoration: none;
    font-size: 16px;
    color: #cccccc;
  }
  .bloco-2-footer .info-bloco-2 a:hover {
    color: yellow;
  }
  .bloco-3-footer {
    display: flex;
    gap: 10px;
    flex-direction: column;
    /* font-size: 14px; */
    list-style-type: none;
  }
  .bloco-3-footer .info-bloco-3 {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 30px;
    text-decoration: none;
  }
  .bloco-3-footer .info-bloco-3 a {
    text-decoration: none;
    font-size: 16px;
    color: #cccccc;
  }
  .bloco-3-footer .info-bloco-3 a:hover {
    color: yellow;
  }
  .bloco-4-footer {
    display: flex;
    flex-direction: initial;
    gap: 10px;
    flex-direction: column;
    /* font-size: 14px; */
    list-style-type: none;
  }
  .bloco-4-footer .info-bloco-4 {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 30px;
    text-decoration: none;
  }
  .bloco-4-footer .info-bloco-4 li {
    text-decoration: none;
    flex-direction: column;
    font-size: 16px;
    color: #cccccc;
  }
  .bloco-4-footer .info-bloco-4 li:hover {
    color: yellow;
  }
  > .bloco-4-footer .info-bloco-4 .ajuda {
    display: flex;
    gap: 10px;
  }
  .bloco-4-footer {
    display: flex;
    /* flex-direction: initial; */
    gap: 10px;
    flex-direction: column;
    /* font-size: 14px; */
    list-style-type: none;
  }
  .bloco-4-footer .info-bloco-4 {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 30px;
    text-decoration: none;
  }
  .bloco-4-footer .info-bloco-4 li {
    text-decoration: none;
    flex-direction: column;
    font-size: 16px;
    color: #cccccc;
  }
  .bloco-4-footer .info-bloco-4 li:hover {
    color: yellow;
  }
  > .bloco-4-footer .info-bloco-4 .ajuda {
    display: flex;
    gap: 10px;
  }
    > ul .app {
    display: flex;
    gap: 10px;
  }
  > ul li {
    /* text-decoration: none; */
    list-style-type: none;
  }

  > ul .imgsg {
    display: flex;
    padding-right: 1rem;
    flex-direction: row;
    gap: 5px;
    margin-top: 1vh;
  }

  > ul .imgfp {
    display: flex;
    margin-top: 1vh;
    /* padding-right: 10px; */
    flex-direction: row;
    gap: 5px;
  }
  .imgcd{
    cursor: pointer;
  }
`;

export const Copyright = styled.div`
  background-color: #212020;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 15%;
  height: 2rem;
  img {
    height: 35px;
  }
`;
