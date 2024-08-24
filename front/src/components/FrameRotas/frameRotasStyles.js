import styled from "styled-components";
export const Container = styled.div`
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;


  .frame {
    position:relative;
    display: flex;
    background-color: #E2DFDF;
    width: 1100px;
    height: 230px;
    padding: 15px 25px 50px 1px;
    margin: 0 300px 0 210px; 
    /* align-items: center; */
    border-radius: 7px;

  }

.imagem-fundo {
  position: relative;
  display: flex; /* Remove espaços em branco em torno da imagem */
  align-items: center;
  width:auto;
  height: 25vh;
  bottom: 20px;
  top: px;
}

.imagem-sobreposta {
  display: flex;
  position: absolute;
  height: 50px; /* Mantém a proporção da imagem sobreposta */
  top: 5px;
  left: 200px;

}
.textosFrame h3 {
  white-space: nowrap;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  width: 200px;
  position: absolute;
  top: 30px;
  left: 25%; 
  color: #04136F;
  font-weight: bold;
  font-size: 20px;
}
.nomeGuia{
  color:#000;
  position: relative;
  top: 60px;
  left: 5%;
}
 .estrela{
  position: absolute;
  top: 0px;
  left: 15%;
  box-shadow: 3px 2px 2px #000 ;
  border-radius: 8px;
  background-color: transparent;
}
.nota{
  position: absolute;
  top: 0px;
  left: 18%;
  font-size: 12px;
  color: #636363; 
}
.avaliacao{
  position: relative;
  top: -14px;
  left: 40%;
  font-size: 12px;
  color: #636363;

}

.paragrafo {
  top: 80px;
  position: relative;
  left: 5%;
  font-size: 17px;
}
.valor{
color: #04136F;
position: relative;
left: 86%;
top: 32px;

}
.detalheIcones{
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: row;
  font-size: 11px;
  max-width: 100%;
  gap: 20px;
  left: 20px;
  bottom: -30px;
}
`
