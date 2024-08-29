import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;

  .titulopagina {
    color: #04136f;
    display: flex;
    margin-top: 20px;
    width: 50%;

  }

  .subtitulo {
    color: #04136f;
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
    width: 50%;
    font-size: large;
    font-size: 1.5rem;
  }
  .frame {
    background-color: #e2dfdf;
    display: flex;
    width: 50%;
    height: 28vh;
    border-radius: 10px;
    margin-top: 2rem;
  }
  .cardcidade{
    padding:10px  ;
  }
  .imgguia {
    display: flex;
    position: absolute;
    margin-top: 0.5rem;
    margin-left: 9rem;
  }
  .rodapeframe{
    
   
  }
  .titulo{
    color: #04136f;
    display: flex;
    margin-top: 2rem;
    font-size: 20px;

  }

  .paragrafo {
    display: flex;
    margin-top: 1rem;
    font-size: 20px;
    width: 80%;
  }

.textos{
  display: flex;
  flex-direction: column;
  gap: 23vh;
  text-align: end;
  margin-left: 2rem;
  
}
.right{
  display: flex;
  margin-left: 2rem;

}
  
`;
