import styled, { keyframes } from "styled-components";


const flipCard = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`;


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  font-family: "Outfit", system-ui;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80.2vh;
`;

export const FormWrapper = styled.div`
  background-color: transparent;
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 75%;
  border-radius: 8px;
  border: 2px solid #04136e;
  height: 90%;
  align-items: center;
  justify-content: space-between;

  form {
    width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;

    form {
      width: 100%;
      margin-top: 20px;
    }
  }
`;

export const CardWrapper = styled.div`
  flex: 1;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const FormField = styled.div`
  margin-bottom: 15px;
`;

export const FormCont = styled.div`
  display: flex;
  justify-content: space-between;

  .bloco {
    width: 46%;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .bloco {
      width: 100%;
      margin-bottom: 15px;
    }
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CardContainer = styled.div`
  perspective: 1000px;
  margin-top: 20px;
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  transform-style: preserve-3d;
  transition: transform 0.6s;

  &.flipped {
    animation: ${flipCard} 0.6s forwards;
  }
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  border-radius: 8px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardDetails = styled.div`
  position: absolute;
  top: 25%;
  left: 5%;
  width: 95%;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  font-family: "Arial", sans-serif;
`;

export const CardDetail = styled.div`
  font-size: 20px;

  &.card-number {
    font-size: 18px;
    margin-bottom: 10px;
  }

  &.card-name {
    margin-bottom: 10px;
  }

  &.card-expiration {
    font-size: 14px;
  }

  &.card-cvv {
    font-size: 18px;
    margin-top: 100px;
    display: flex;
    padding: 0 30px;
    justify-content: end;
  }
`;

// Estilos do modal
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-in;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 500px;
  width: 100%;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;
