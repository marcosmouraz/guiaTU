import styled from 'styled-components' 

export const Container = styled.div`
  max-width: 100%;
  height: 140vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header{
    display: flex;
    color: #04136F;
    white-space: nowrap;
    padding-top: 15%;
  
  }
  .tituloPagina{
    display: flex;
    flex-direction: row;
    font-size: large;
  
  }
  .buttonTitulo{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 50%;
    padding-top: 20%;
    
  }
  .Frames{
    gap:2rem;
  }
  .frameUm {
    position:relative;
    display: flex;
    background-color: #E2DFDF;
    width: 950px;
    height: 240px;
    padding: 15px 25px 50px 35px;
    margin: 0 300px 0 210px; 
    /* align-items: center; */
    border-radius: 7px;
  }
  .cardCidade{
    position: relative;
  display: flex; /* Remove espaços em branco em torno da imagem */
  align-items: center;
  width:auto;
  height: 30vh;
  bottom: 10px;
  top: 4px;
  }
  .textosFrame h3 {
  display: flex;
  white-space: nowrap;
  color: #04136F;
  font-weight: bold;
  font-size: 20px;
  padding-left: 2rem;
  
  }
  .nomeGuia{
  display: flex;
  flex-direction: row;
  color:#000;
  position: relative;
  top: 10px;
  left: 5%;
  gap: 1%;
  font-size: small;
}
.nomeGuia .guia p{
  font-weight: bold;
  font-size: larger;
}
.paragrafo p{
  display: flex;

}
 
.frameDois{
  position:relative;
    display: flex;
    background-color: #E2DFDF;
    width: 950px;
    height: 240px;
    padding: 15px 25px 50px 35px;
    margin: 0 300px 0 210px; 
    border-radius: 7px;
  
  }
  .cardCidade{
    position: relative;
  display: flex; /* Remove espaços em branco em torno da imagem */
  align-items: center;
  width:auto;
  height: 30vh;
  bottom: 10px;
  top: 4px;
  }
  .textosFrame h3 {
  display: flex;
  white-space: nowrap;
  color: #04136F;
  font-weight: bold;
  font-size: 20px;
  padding-left: 2rem;
  
  }
  .nomeGuia{
  display: flex;
  flex-direction: row;
  color:#000;
  position: relative;
  top: 10px;
  left: 5%;
  gap: 1%;
  font-size: small;
}
.nomeGuia .guia p{
  font-weight: bold;
  font-size: larger;
}


`