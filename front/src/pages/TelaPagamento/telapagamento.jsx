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
          <h2>
           Formas de pagamento
          </h2>
          <p>Selecione uma forma de pagamento</p>
        </div>

        <div className="forms">
          <div>
            <input type="checkbox" name="" id="" />
            <label > Pix <PixLogo size={20} color="#383838" weight="fill" />  </label>
          </div>

          <div>
            <input type="checkbox" name="" id="" />
            <label > Credito/ Debito / Pré-pago <CreditCard size={20} color="#383838" weight="fill" />  </label>
          </div>
        </div>
    
          <div>
          <input type="checkbox" name="" id="" />
          <label > Carteira Digital  </label>
          </div>

          <div>
          <input type="checkbox" name="" id="" />
          <label > Dinheiro  </label>
          </div>
          
          <div className="cadastrar novo cartão">
            <hr />
            <button>+ Cadastrar novo cartão</button>
            <hr />
            
          </div>

          <div>
            <h2>Valor total a pagar:</h2>
            <p><LockKey size={12} color="#383838" weight="fill" /> 
            Esta transação esta segura com uma encriptação ponta-a-ponta
            </p>
            <div>
              <h2>R$ 200,00</h2>
            </div>
          </div>
          
      </Container>
      <Footer />

    </>
  )
}