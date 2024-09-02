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
    font-family: "Poppins", sans-serif;
    font-size: large;
    font-size: 1.2rem;
    a {
      text-decoration: none; /* Remove o sublinhado */
      color: #04136f; /* Usa a cor do texto ao redor ou defina uma cor específica */
    }

  .Reservas{
    color: #fbbc04;
  }
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

  .infoGuia{
    display: flex;
    gap:10px;
    padding-top:20px ;
  }
  .rodapeframe{
    display: flex;
  
       
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
    /* width: 80%;  */
  }

.textos{
  display: flex;
  flex-direction: column;
  gap: 23vh;
  /* text-align: end; */
  
}

.textos p{
  color: red;

}
.right{
  display: flex;
  /* margin-left: 2rem; */
  padding-right: 15px;

}

.frame2 {
    background-color: #e2dfdf;
    display: flex;
    width: 50%;
    height: 28vh;
    border-radius: 10px;
    margin-top: 2rem;
  }

.elementos{
  display: flex;
  flex-direction: column;
  gap: 18vh;

}

.right2{
  display: flex;
  /* margin-left: 2rem; */
  padding-left: 22rem;

}

.estrelas{
  display: flex;
  padding-top: 1.5rem;
  padding-left: 10px;
}
 


  
`;
