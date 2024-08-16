import styled from "styled-components"



export const Container = styled.body`
  width: 100%;
  height: 80%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  justify-content: space-between;

.frameTextoRota{
  width: 50%;
}

.paragrafo{
  display: flex;
  flex-direction: row;
  gap: 7%;
  padding-top: 5%;
  color: #04136F;
  font-weight: lighter;
}
.tituloPagina{
  padding-top: 3%;
  font-size: 30px;
  font-weight: 900;
  color: #04136F;

} 
  .ava{
    display: flex;
    flex-direction: row;
    gap: 30px;
    color: #04136F;
    padding-top: 10px;
  
  .nota{
    font-weight: bolder;
  }
    
  }

  .descritivoDesc{
    display: flex;
    flex-direction: row;
    gap: 30px;
    padding-top: 20px;
    color: #04136F;
    font-size: 20px;
  }

  .descricao p{
   padding-top: 30px;
   color: #04136F;
    
  }
  .descricao p span{
    font-weight: bolder;
  }

  .itinerario{
    color: #04136F;
    width: 50%;
   z-index: -1;
  }

  h4{
    font-size: 30px;
    padding-top: 5rem;

  }
  .parteUm{
    width: 50%;
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    
  }
  .pUm{
    padding-top: 1rem;
  } 

  .pUm p span{
    font-weight: bold;
   }

  .img{
    padding-left: 23rem;
   position: relative;
   top: -10rem;
   z-index: -1;
  }
  .paragrafos{
    width: 50%;
    display: flex;
    flex-direction: column;
    color: #04136F;
    gap: 15px;
    padding-bottom: 3%;
  }
  .paragrafos p span{
    font-weight: bold;
  }
  
  .tituloDetalhes{
    width: 50%;
    font-size: 170%;
    color: #04136F;
    padding-bottom: 1%;

  }
  .Detalhes{
    display: flex;
    flex-direction: column;
    width: 50%;
    color: #04136F;

    
  }
  .detalhes{
    
  }
  .detalhes p{
    margin: 0;
  }

` 