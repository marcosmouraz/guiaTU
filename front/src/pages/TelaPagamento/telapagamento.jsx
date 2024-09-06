import { CreditCard, Money, LockKey, PixLogo } from "@phosphor-icons/react";
import Menu from "../../components/Menu/menu";
import { Container, Modal, ModalContent, ModalButton } from "./pagamentoStyles";
import Footer from "../../components/Footer/footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Qrcod from "../../assets/qrcode.svg";

export default function TelaPagamento() {
  const handleRedirect = () => {
    window.location.href = "/checkoutcartao";
  };
  const handleRedirect2 = () => {
    window.location.href = "/";
  };

  const location = useLocation();
  const { valor } = location.state || {};

  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => setModalVisible(false);

  const handleSubmit = () => {
    setModalVisible(true);
  };

  // OUTRO MODAL //////////////////////////

  const [modalPix, setModalPix] = useState(false);

  const closeModalPix = () => setModalPix(false);

  const handleSubmitPix = () => {
    console.log("Pix");
    setModalPix(true);
  };

  return (
    <>
      <Menu />
      <Container>
        <div className="ondas">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffd700"
              fill-opacity="1"
              d="M0,288L80,250.7C160,213,320,139,480,128C640,117,800,171,960,208C1120,245,1280,267,1360,277.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="container-titulo-checkbox-botaoconluir">
          <section className="titulo-checkbox-botaopagar">
            <div className="titulo-paragrafo">
              <h2 className="titulo">Formas de pagamento</h2>

              <div className="paragrafo">
                <p>Selecione uma forma de pagamento</p>
              </div>
            </div>
            <div className="header">
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
                </div>

                <div className="dinheiro">
                  <input type="radio" name="pagamento" id="dinheiro" />
                  <label htmlFor="dinheiro">Dinheiro</label>
                  <Money size={19} />
                </div>

                <div className="cartao">
                  <input type="radio" name="pagamento" id="cartao" />
                  <label htmlFor="cartao">Crédito / Débito </label>
                  <CreditCard />
                </div>
              </div>

              <div className="cartaoSalvo">
                <div className="radioLabel">
                  <input type="radio" name="pagamento" id="cartaoSalvo" />
                  <label htmlFor="cartaoSalvo">Cartão Salvos</label>
                </div>

                <div className="cartaoUtilizado">
                  <p>Cartão Crédito Master</p>
                  <p className="numerocartao"> **** **** **** 497</p>
                </div>
              </div>

              <div className="botao-cart">
                <div className="novoCartao">
                  <input
                    type="button"
                    value="+ Cadastrar um novo cartão"
                    onClick={handleRedirect}
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="linhas">
            <hr />
          </div>
          <section className="body">
            <div className="textos">
              <h2 className="valor">Valor total a pagar:</h2>

              <h2 className="cifrao">R$ {valor}</h2>
            </div>
            <div className="lock">
              <LockKey></LockKey>
              <p>
                Esta transação esta segura com uma encriptação ponta-a-ponta
              </p>
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
        </div>
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
