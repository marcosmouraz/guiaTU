import { CreditCard, Money,LockKey, PixLogo } from "@phosphor-icons/react";
import Menu from "../../components/Menu/menu";
import { Container } from "./pagamentoStyles";
import Footer from "../../components/Footer/footer";

export default function TelaPagamento() {
  const handleRedirect = () => {
    window.location.href = "/checkoutcartao";
  };
  const handleRedirect2 = () => {
    window.location.href = "/";
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
              <input type="radio" name="pagamento" id="pix" />
              <label htmlFor="pix">Pix</label>
              <PixLogo />
              <div className="cartaoSalvo">
                <div className="radioLabel">
                  <input type="radio" name="cartaoSalvo" id="cartaoSalvo" />
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
            <h2>R$ 200,00</h2>
          </div>
        </section>
        <section className="footer">
          <div className="concluir">
            <input type="button" value="Concluir pagamento" onClick={handleRedirect2} />
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}
