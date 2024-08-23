import { Star } from '@phosphor-icons/react';
import Footer from '../../components/Footer/footer';
import Menu from '../../components/Menu/menu';
import { Container } from './historicoGuiaStyles'
import CardRecife from "../../assets/cardRecifeFrame.svg"
import Museu from "../../assets/brennand.svg"



export default function HistoricoGuia() {
  return(
      <>
      <Menu />
      <Container>

        <div className='header'>

          <div className='titulopagina'>
            <h2>Historico de Passeio</h2>
          </div>

          <div className='buttonTitulo'>
            <h3 className='ativos' onClick={1}>Passeios Ativos</h3>
            <h3 className='encerrados' onClick={1}>Passeios Encerrados</h3>
          </div>

        </div>
        

        <div className="Frames">
        <section className="frameUm">
        <div className="cardCidade">
          <img src={CardRecife} alt="" className="imagem-fundo" />
        </div>

        <div className="textosFrame">
          <h3>Tour pelo Recife antigo.</h3>

          <div className="nomeGuia">
            <p>Rogerio Marques</p>

            <Star className="estrela" size={16} color="#f1f500" weight="fill" />
            
            <p className="nota">4.2</p>

              <p className="avaliacao">83 avaliações</p>
            <div >
              
            </div>
          </div>

          <div className="paragrafo">
            <p>
              Conheça a historia de Recife essa cidade com a terceira rua mais
              belas do Mundo, conhecendo suas origens e evolução enquanto
              exploramos as ruas dessa cidade maravilhosa.
            </p>

            <div className="valor">
              <h2>R$ 98</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="frameDois">
        <div className="cardCidade">
          <img src={Museu} alt="" className="imagem-fundo" />
        </div>

        <div className="textosFrame">
          <h3>Conheça Int. Ricardo Brennand.</h3>

          <div className="nomeGuia">
            <p className='guia'>Rogerio Marques</p>

            <div className="nota">
              <p>4.2</p>

              <Star className="estrela" size={16} color="#f1f500" weight="fill" />

              <p className="avaliacao">83 avaliações</p>
            </div>
          </div>

          <div className="paragrafo">
            <p>
            Conheça o maior acervo de artes da América do Sul do instituto Brennand .
            </p>

            <div className="valor">
              <h2>R$ 98</h2>
            </div>
          </div>
        </div>
      </section>
      </div>


      </Container>
      <Footer />
      </>
  );
}