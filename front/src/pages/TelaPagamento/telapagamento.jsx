import { CreditCard, LockKey, PixLogo } from "@phosphor-icons/react"
import Menu from "../../components/Menu/menu"
import { Container } from "./pagamentoStyles"
import Footer from "../../components/Footer/footer"

export default function TelaPagamento() {
  return (
    <>
      <Menu />
      <Container>
        <div className="titulo">
          <h2>Formas de pagamento</h2>
          <p>Selecione uma forma de pagamento</p>
        </div>
        <section className="header">
          
        </section>
      </Container>
      <Footer />
    </>
  );
}