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
  font-weight: lighter;
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
   
  }

  .Titulo{
    font-size: 30px;
    padding-top: 50px;

  }
  .parteUm{
    width: 50%;
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    
  }
  .pUm{
    
  } 

  .img{
    padding-left: 23rem;
   position: relative;
   top: -10rem;
  }
  
` 