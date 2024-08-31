import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;

  .titulo {
    display: flex;
    justify-content: center;
    padding-top: 150px;
    padding-bottom: 30px;
    width: 62%;
    white-space: nowrap;
    h1 {
      font-size: 30px;
      color: blue;
      
    }
  }
  .frames {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 65%;
    gap: 20px;
    max-width: 100%;
    height: 50vh;
    
  }
  .frame {
    display: flex;
    background-color: #e2dfdf;
    flex-direction: column;
    height: 30vh;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    padding: 10 auto;
    cursor: pointer;
  }
  .left {
    display: flex;
    gap: 10px;
    padding-left: 10px;
  }
  .perfil {
    position: absolute;
    padding-left: 138px;
    padding-top: 8px;
  }
  .imagemCidade {
    height: 26vh;
  }
  .mid {
    display: flex;
    flex-direction: column;
    gap: 25px;
    .infoGuia {
      display: flex;
      gap: 10px;
    }
    .nomeGuia {
      font-weight: 600;
      padding-right: 8px;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    width: 98%;
    .detalheIcones {
      flex-direction: row;
      display: flex;
      gap: 10px;
    }
  }
`;
