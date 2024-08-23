import styled from "styled-components";

export const Container = styled.body`
  /* Estilos gerais do Container */
  .container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o conteúdo horizontalmente */
    padding: 20px;
    min-height: 100vh; /* Ocupa toda a altura da viewport */
  }

  .titulo {
    text-align: center; /* Centraliza o título */
    margin-bottom: 20px;
  }

  .inputfoto {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  .p {
    font-size: 1.2em; /* Ajusta o tamanho do texto */
    margin-bottom: 10px;
  }

  .alterafoto {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .vetor {
    color: #636363;
  }

  .formSection {
    max-width: 600px; /* Define a largura máxima do formulário */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .inputColumn {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }

  .photoUpload {
    text-align: center;
  }

  input.error {
    border: 1px solid red;
  }

  .error {
    color: red;
    font-size: 0.875em;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;
