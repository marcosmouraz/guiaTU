import { CreditCard, Money,LockKey, PixLogo } from "@phosphor-icons/react";
import Menu from "../../components/Menu/menu";
import { Container, Modal, ModalContent, ModalButton } from "./pagamentoStyles";
import Footer from "../../components/Footer/footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Qrcod from "../../assets/qrcode.svg"


export default function TelaPagamento() {
  const handleRedirect = () => {
    window.location.href = "/checkoutcartao";
  };
  const handleRedirect2 = () => {
    window.location.href = "/";
  };


  const location = useLocation()
  const { valor } = location.state || {}

const [modalVisible, setModalVisible] = useState(false);
  
const closeModal = () => setModalVisible(false);

const handleSubmit = () => {
  setModalVisible(true);
};

// OUTRO MODAL //////////////////////////

const [modalPix, setModalPix] = useState(false);

const closeModalPix = () => setModalPix(false);

const handleSubmitPix = () => {
  console.log("Pix")
  setModalPix(true);
};

  return (
    <>
      <Menu />
      <Container>
        <div className="titulo">
          <h2>Formas de pagamento</h2>
        </div>
        <div className="paragrafo">
          <p>Selecione uma forma de pagamento</p>
        </div>
        <section className="header">
          <div className="opcoes">
            <div className="pix">
              <input
                type="radio"
                name="pagamento"
                id="pix"
                onClick={handleSubmitPix}
              />
              <label htmlFor="pix">Pix</label>
              <PixLogo />
              <div className="cartaoSalvo">
                <div className="radioLabel">
                  <input type="radio" name="pagamento" id="cartaoSalvo" />
                  <label htmlFor="cartaoSalvo">Utilizar Cartão Salvo</label>
                </div>
                <div className="cartaoUtilizado">
                  <p>Cartão Crédito Master</p>
                </div>
              </div>
            </div>
            <div className="cartao">
              <input type="radio" name="pagamento" id="cartao" />
              <label htmlFor="cartao">Crédito / Débito / Pré-pago</label>
              <CreditCard />
            </div>
            <div className="dinheiro">
              <input type="radio" name="pagamento" id="dinheiro" />
              <label htmlFor="dinheiro">Dinheiro</label>
              <Money size={19} />
            </div>
            <div className="novoCartao">
              <input
                type="button"
                value="+ Cadastrar um novo cartão"
                onClick={handleRedirect}
              />
            </div>
          </div>
        </section>
        <div className="linhas">
          <hr />
        </div>
        <section className="body">
          <div className="textos">
            <h2>Valor total a pagar:</h2>
            <div className="lock">
              <LockKey></LockKey>
              <p>
                Esta transação esta segura com uma encriptação ponta-a-ponta
              </p>
            </div>
          </div>
          <div className="valor">
            <h2>R$ {valor}</h2>
          </div>
        </section>
        <section className="footer">
          <div className="concluir">
            <input
              type="button"
              value="Concluir pagamento"
              onClick={handleSubmit}
            />
          </div>
        </section>
      </Container>
      <Footer />

      {modalVisible && (
        <Modal>
          <ModalContent>
            <h3>Pagamento realizado com sucesso!</h3>
            <ModalButton onClick={closeModal}>Fechar</ModalButton>
          </ModalContent>
        </Modal>
      )}

      {/* OUTRO MODAL /////////// */}

      {modalPix && (
        <Modal>
          <ModalContent>
            <h3>Escanei o QR COD</h3>
            <div className="qrcod">
              <img src={Qrcod} alt="" />
            </div>
            <ModalButton onClick={closeModalPix}>Fechar</ModalButton>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
