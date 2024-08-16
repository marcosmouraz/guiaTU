import Menu from "../../components/Menu/menu";
import {Container} from "../TelaGuia/guiaStyles"
import Perfil from "../../assets/perfilguia.svg"
import Cidade from "../../assets/bannerRecife.svg"
import Footer from "../../components/Footer/footer";


export default function TelaGuia() {
  return (
    <>
      <Menu />
      <Container>
        <div className="titulo">
          <h1>Confira seu guia e detalhes do passeio:</h1>
        </div>
        <div className="blocoUm">
          <img className="fotoPerfil" src={Perfil} alt="" />
          <h2 className="nomeRota">Tour pelo Recife</h2>
          <p className="nomeCidade">Recife - PE</p>
          <img className="fotoCidade" src={Cidade} alt="" />
        </div>
        <div className="blocoDois">
          <div className="nomeGuia">
            <h2>Rogerio Marques</h2>
          </div>
          <div className="fraseGuia">
            <p className="frase">
              “Guia local a mais de 20 anos, conheça as belezas de Recife
              comigo.“
            </p>
          </div>
        </div>

        <div className="blocoTres">
          <div className="infoGuia">
            <p className="credencial">
              Credencial: 17.551568.72-8 <br />
              Atuação: Olinda, Paulista,<br />
               Recife - PE
            </p>
          </div>
        </div>

        <div className="blocoQuatro">
          <div className="infoRota">
            <h4 className="data">Qua. 03 jul</h4>
          </div>
          <div className="valor">
            <h4>
              Preço: <span>R$200,00 / 2 pessoas</span>
            </h4>
          </div>
          <section className="reserva">
            <h4>A partir de R$100,00/pessoa</h4>
          </section>
        </div>
      </Container>
      <Footer />
    </>
  );}
