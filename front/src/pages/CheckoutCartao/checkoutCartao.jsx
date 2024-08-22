import React, { useState } from "react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import {
  Container,
  FormTitle,
  FormField,
  Label,
  Input,
  Button,
  CardContainer,
  Card,
  CardFront,
  CardBack,
  CardDetails,
  CardDetail,
  Modal,
  ModalContent,
  ModalButton,
  FormWrapper,
  CardWrapper,
} from "./checkoutCartaoStyles"; // Importando os componentes estilizados

const CheckoutCartao = () => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limitar o campo CVV a 3 dígitos
    if (name === "cvv" && value.length > 3) return;

    // Formatação do campo expirationDate
    if (name === "expirationDate") {
      // Remover caracteres não numéricos
      const cleanedValue = value.replace(/\D/g, "");
      // Formatar como MM/AA
      const formattedValue = cleanedValue
        .slice(0, 2)
        .concat(
          cleanedValue.slice(2, 4).length > 0
            ? `/${cleanedValue.slice(2, 4)}`
            : ""
        );
      setFormData({ ...formData, [name]: formattedValue });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar a lógica de envio do formulário aqui
    console.log("Form data submitted:", formData);
    setModalVisible(true);
  };

  // Função para ocultar os dígitos do número do cartão, exibindo apenas os últimos 3 dígitos
  const formatCardNumber = (number) => {
    return number.length > 3
      ? "*".repeat(number.length - 3) + number.slice(-3)
      : number;
  };

  const closeModal = () => setModalVisible(false);

  return (
    <>
      <Menu />
      <Container>
        <FormWrapper>
          <FormTitle>Cadastrar um novo cartão:</FormTitle>
          <form onSubmit={handleSubmit}>
            <FormField>
              <Label htmlFor="name">Nome do cartão:</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField>
              <Label htmlFor="cardNumber">Número do cartão:</Label>
              <Input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                maxLength="19" // Limita a entrada a 16 dígitos, incluindo espaços
              />
            </FormField>
            <FormField>
              <Label htmlFor="expirationDate">Data de Validade (MM/AA)</Label>
              <Input
                type="text"
                id="expirationDate"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                required
                maxLength="5" // Limita a entrada a "MM/AA"
              />
            </FormField>
            <FormField>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                maxLength="3" // Limita o CVV a 3 dígitos
              />
            </FormField>
            <Button type="submit">Cadastrar agora.</Button>
          </form>
        </FormWrapper>
        <CardWrapper>
          <CardContainer>
            <Card className={formData.cvv ? "flipped" : ""}>
              <CardFront>
                <img src="/card-placeholder.png" alt="Cartão de Crédito" />
                <CardDetails>
                  <CardDetail className="card-number">
                    {formatCardNumber(formData.cardNumber)}
                  </CardDetail>
                  <CardDetail className="card-name">{formData.name}</CardDetail>
                  <CardDetail className="card-expiration">
                    {formData.expirationDate}
                  </CardDetail>
                </CardDetails>
              </CardFront>
              <CardBack>
                <CardDetails>
                  <CardDetail className="card-cvv">{formData.cvv}</CardDetail>
                </CardDetails>
              </CardBack>
            </Card>
          </CardContainer>
        </CardWrapper>
      </Container>
      <Footer />

      {/* Modal de Confirmação */}
      {modalVisible && (
        <Modal>
          <ModalContent>
            <h3>Cartão Cadastrado com Sucesso!</h3>
            <ModalButton onClick={closeModal}>Fechar</ModalButton>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default CheckoutCartao;
