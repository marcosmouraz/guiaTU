import styled from "styled-components";

export const Container = styled.section`
  background-color: #04136f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  height: 250px;
  text-decoration: none;
`;
export const Footerlist = styled.footer`
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 56.25rem;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px 100px;
  padding-bottom: 15px;
  padding-top: 30px;

  > ul .ajuda {
    display: flex;
    gap: 10px;
  }
  > ul .app {
    display: flex;
    gap: 10px;
  }

  > ul li {
    /* font-size: 10px; */
    text-decoration: none;
    list-style-type: none;
  }

  > ul .imgsg {
    display: flex;
    padding-right:10 ;
    flex-direction: row;
    gap: 5px;
  }

  > ul .imgfp {
    display: flex;
    padding-right:10 ;
    flex-direction: row;
    gap: 5px;
  }
`;

export const Copyright = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  img {
    width: 3rem;
  }
`;
