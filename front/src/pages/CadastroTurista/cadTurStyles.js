import styled from "styled-components";

export const Container = styled.body`
.all{
  width:50%;
  display:flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 20rem;
  
}
.titulo{
  font-size: 30px;
  display: flex;
  text-align: start;
  width: 60%;
  justify-content: center;
  color: #04136f;
}
.container {
  display: flex;
  justify-content: center;
  gap: 4rem;  
  font-family: Arial, sans-serif;
  margin-bottom: 2rem;
}

/* Seção do formulário */
.formSection {
  flex: 2; /* Aumenta a largura da seção do formulário */
  max-width: 600px; /* Aumenta o limite máximo de largura */
  margin-right: 20px;
  background-color: white;
  padding: 30px; /* Aumenta o padding para preencher mais espaço */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.formSection h1 {
  font-size: 28px; /* Aumenta o tamanho do título */
  color: #333;
  margin-bottom: 25px;
}

/* Estilo do formulário */
.form {
  display: flex;
  flex-direction: column;
}

.inputColumn {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

/* Estilo dos inputs */
.inputColumn input {
  padding: 12px; /* Aumenta o padding dos inputs */
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px; /* Aumenta o tamanho da fonte dos inputs */
  transition: border-color 0.3s ease;
}

/* Input em estado de erro */
.inputColumn input.error {
  border-color: #ff4d4d;
  background-color: #ffe6e6;
}

.inputColumn input:focus {
  border-color: #007bff;
  outline: none;
}

/* Estilo das mensagens de erro */
.error {
  color: #ff4d4d;
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 8px;
}

/* Botão de próxima etapa */
button {
  padding: 12px 18px; /* Aumenta o padding do botão */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px; /* Aumenta o tamanho da fonte do botão */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/* Seção de foto */
.photoSection {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inputfoto {
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.inputfoto .p {
  font-size: 18px; /* Aumenta o tamanho da fonte do texto */
  color: #333;
  margin-bottom: 15px;
}

.alterafoto {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px; /* Aumenta o tamanho da área para foto */
  height: 120px;
  border: 2px dashed #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.alterafoto:hover {
  border-color: #007bff;
}

.vetor {
  color: #636363;
  transition: color 0.3s ease;
}

.alterafoto:hover .vetor {
  color: #007bff;
}

/* Adaptação para telas menores */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .formSection {
    margin-right: 0;
    margin-bottom: 20px;
    max-width: 100%;
  }

  .photoSection {
    max-width: 100%;
    align-items: center;
  }
}`

