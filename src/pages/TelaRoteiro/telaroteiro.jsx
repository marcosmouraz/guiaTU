import Menu from "../../components/Menu/menu"
import { Container } from "../../pages/TelaRoteiro/roteiroStyles"
import  Itinerario from "../../assets/itinerariofoto.svg"
import { Clock, Info, PawPrint, Plant, Wheelchair, XSquare } from "@phosphor-icons/react"

export default function TelaRoteiro() {
  return (
    <>
    <Menu />
    
    <Container>

      <section className="frameTextoRota">


      <div className="paragrafo">
        <p>Brasil</p>
        <p>Pernambuco</p>
        <p>Recife</p>
      </div>     

      <div className="tituloPagina">
        <h2>Tour pelo Recife</h2>
      </div>

      <div className="infoRoteiro">

        <div className="ava">
          <p className="nota">8,6/10</p>
          <p className="avalicao"> 74 avaliações</p>
          <p className="lugar">Recife Antigo</p>
        </div>
          
          <div className="descricao">

            <div className="descritivoDesc">  
              <p>Descrição</p>
              <p>Detalhes</p>
              <p>Cancelamentos</p>
              <p>Opinões</p>             
            </div>  
            <p>Conheça a história do Recife onde a cidade começou a criar forma, 
              com muitas histórias e belos patrimônios. <br /> <span>Com este tour, conheceremos sua 
              origem e evolução enquanto passeamos por suas ruas.</span>
            </p>

          </div> 

      </div>
      </section>

      <section className="itinerario">

      
        <h4 className="Titulo">Itenerário</h4>

          <div className="parteUm">
          <p className="pUm">Você começará o seu roteiro pelo Recife antigo com um passeio panorâmico
           pelo dique de Brennand até o parque das esculturas um dos parques mais
           famosos do Brasil. Se você quiser, poderá subir a bordo de um catamarã 
           que o levará pelo rio Capibaribe e você saberá o porquê dessa zona ser 
           chamada de“Veneza Brasileira”.
           </p>
           
           <div className="img"> 
           <img  src={Itinerario} alt="" />
            </div>
          </div>

          <p className="pDois">Se você preferir continuar o roteiro por terra seguirá a rota pela rodovia
             até chegar ao Marco Zero, onde termina o passeio de catamarã. De lá, 
             o itinerário continua a pé. Atravessaremos a Rua do Bom Jesus, onde ficam 
             a Sinagoga Kahal Zur Israel, a Embaixada dos Bonecos Gigantes e o Museu a Céu Aberto.
             </p>

             <p className="pTres">
             Em seguida, neste roteiro tem a visita a Casa da Cultura, um edifício de meados do século XIX
             que funcionava como prisão e que hoje em dia é um centro cultural. Conheceremos os lugares imprescindíveis da cidade,
             incluindo as ilhas do Recife, Santo Antônio e Boa Vista, que formam um autêntico paraíso natural. 
             Passaremos também junto à Ponte Maurício de Nassau e iremos à Praça da República,
             onde veremos o Palácio do Governo, o Teatro de Santa Isabel e o Palácio da Justiça
             </p>

      

        <div className="detalhes">
          <h3>Detalhes</h3>

          <Clock size={22} color="#04136e" />
          <p>5 horas.</p>

          <Info size={22} color="#04136e" />
          <p>Guia em português.</p>

          <XSquare size={22} color="#04136e" />
          <p>Não inclusos: Alimentação, Taxas de entrada.</p>

          <Wheelchair size={22} color="#04136e" />
          <p>Acessibilidade: Não é acessível para cadeirantes.</p>

          <Plant size={22} color="#04136e" />
          <p>Sustentabilidade: Todos os serviços cumprem o nosso Código de Sustentabilidade.</p>

          <PawPrint size={22} color="#04136e" />
          <p>Pets não permitidos.</p>
        </div>




      </section>




    </Container>

    </>
  )
}