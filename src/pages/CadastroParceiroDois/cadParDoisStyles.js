import styled from "styled-components";

export const Container = styled.body`
  width: 100%;
  height: 80%;
  max-width: 100%;
  margin: 0 auto;

  .titulo {
    color: #04136e;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-wrap: break-word;
    width: 40%;
    height: 35vh;
    margin: 0 auto;
    padding-left: 1rem;
  }

  .DadosEstabelecimento h4 {
    font-size: 1.2rem;
    color: #04136e;
  }

  .Inputs {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding-left: 20rem;
  }
  .Inputs input {
    width: 150vw;
    max-width: 20rem;
    height: 5vh;
    border-style: groove;
    border-radius: 4px;
    padding: 1rem;
  }

  .checkbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }


.ButtonCadastrar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  margin: 2.5rem auto 0 auto;
  background-color: #3f58ee;
  color: #fff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: 8px 1rem;
  text-align: center;

  &:hover {
    background-color: #04136e;
    border: none;
  }
}
`;
