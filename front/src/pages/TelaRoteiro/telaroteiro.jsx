import Menu from "../../components/Menu/menu";
import Footer from "../../components/Footer/footer";
import { Container } from "../../pages/TelaRoteiro/roteiroStyles";
import Itinerario from "../../assets/itinerariofoto.svg";
import Jesus from "../../assets/jesus.svg"
import {
  Clock,
  Info,
  PawPrint,
  Plant,
  Wheelchair,
  XSquare,
} from "@phosphor-icons/react";

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
              <p className="avalicao">74 avaliações</p>
              <p className="lugar">Recife Antigo</p>
            </div>

            <div className="descricao">
              <div className="descritivoDesc">
                <p>Descrição</p>
                <hr />
                <p>Detalhes</p>
                <hr />
                <p>Cancelamentos</p>
                <hr />
                <p>Opinões</p>
              </div>
              <p>
                Conheça a história do Recife onde a cidade começou a criar forma,
                com muitas histórias e belos patrimônios.
                Com este tour, conheceremos sua origem e evolução enquanto
                passeamos por suas ruas.
               
              </p>
            </div>
          </div>
        </section>

        <section className="itinerario">
          <div className="titulo">
            <h4 className="tituloitineraio">Itinerário</h4>
          </div>
        </section>
         
          <div className="itinerarioContent">
            <div className="parteUm">
              <p className="pUm">
                Você começará o seu roteiro pelo Recife antigo com um passeio
                panorâmico pelo <span>dique de Brennand até o parque das esculturas um dos parques mais
                famosos do Brasil</span>. Se você quiser, poderá subir a bordo de
                um catamarã que o levará pelo rio Capibaribe e você saberá o porquê
                dessa zona ser chamada de <span>“Veneza Brasileira”</span>.
              </p>
            </div>
          </div>


          <div className="imgs">

            <img src={Jesus} alt="" className="bomjesus" />

            <img src={Itinerario} alt="" className="marcozero" />

          </div>
        
        

        <div className="paragrafos">
          <p className="pDois">
            Se você preferir continuar o roteiro por terra seguirá a rota pela
            rodovia até chegar ao <span>Marco Zero</span>, onde termina o
            passeio de catamarã. De lá, o itinerário continua a pé.
            Atravessaremos a <span>Rua do Bom Jesus</span>, onde ficam a
            <span>Sinagoga Kahal Zur Israel, a Embaixada dos Bonecos Gigantes e o Museu a Céu Aberto.</span>
          </p>

          <p className="pTres">
            Em seguida, neste roteiro tem a visita a <span>Casa da Cultura</span>, um edifício de meados do século XIX
            que funcionava como prisão e que hoje em dia é um centro cultural. Conheceremos os lugares imprescindíveis da cidade,
            incluindo as <span>ilhas do Recife</span>, <span>Santo Antônio e Boa Vista</span>, que formam um autêntico paraíso natural. 
            Passaremos também junto à <span>Ponte Maurício de Nassau</span> e iremos à <span>Praça da República</span>,
            onde veremos o <span>Palácio do Governo</span>, o <span>Teatro de Santa Isabel</span> e o <span>Palácio da Justiça</span>
          </p>
        </div>

        <div className="tituloDetalhes">
          <h3>Detalhes</h3>
        </div>

        <div className="Infos">
          <div className="detalhes">
            <Clock size={22} color="#04136e" />
            <p>5 horas.</p>
            </div>

            <div className="detalhes">
            <Info size={22} color="#04136e" />
            <p>Guia em português.</p>
            </div>

            <div className="detalhes">
            <XSquare size={22} color="#04136e" />
            <p>Não inclusos: Alimentação, Taxas de entrada.</p>
            </div>

            <div className="detalhes">
            <Wheelchair size={22} color="#04136e" />
            <p>Acessibilidade: Não é acessível para cadeirantes.</p>
            </div>

            <div className="detalhes">
            <Plant size={22} color="#04136e" />
            <p>
              Sustentabilidade: Todos os serviços cumprem o nosso Código de Sustentabilidade.
            </p>
            </div>

            <div className="detalhes">
            <PawPrint size={22} color="#04136e" />
            <p>Pets não permitidos.</p>
            </div>
        </div>
        
      </Container>
      <Footer />
    </>
  );
}