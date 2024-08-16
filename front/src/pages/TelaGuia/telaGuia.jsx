import { useEffect, useRef } from "react";
import Menu from "../../components/Menu/menu";
import { Container } from "../TelaGuia/guiaStyles";
import Perfil from "../../assets/perfilguia.svg";
import Footer from "../../components/Footer/footer";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

export default function TelaGuia() {
  const mapRef = useRef(null);

  useEffect(() => {
    const marcoZero = [-8.0645, -34.8711];
    const mercadoCultura = [-8.0539, -34.8823];

    if (mapRef.current === null) {
      // Inicializar o mapa
      const map = L.map("map").setView(marcoZero, 14);
      mapRef.current = map;

      // Adicionar camada do OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Adicionar rota
      L.Routing.control({
        waypoints: [L.latLng(marcoZero), L.latLng(mercadoCultura)],
        routeWhileDragging: true,
      }).addTo(map);
    }

    return () => {
      if (mapRef.current !== null) {
        mapRef.current.remove(); // Destrói o mapa se o componente for desmontado
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <div className="titulo">
          <h1>Confira seu guia e detalhes do passeio:</h1>
          <h2 className="nomeRota">Tour pelo Recife Antigo</h2>
        </div>
        <section className="header">
          <div className="blocoGuia">
              <img className="fotoPerfil" src={Perfil} alt="Perfil do Guia" />
                <h2>Rogerio Marques</h2>
                <p className="credencial">
                  Credencial: 17.551568.72-8 <br />
                  Atuação: Olinda, Paulista, Recife - PE
                </p>
          </div>
          <div className="blocoMapa">
              {/* Mapa interativo substituindo a imagem */}
              <div id="map" style={{ height: "350px", width: "100%" }}></div>
            <div className="fraseGuia">
              <p className="frase">
                “Guia local há mais de 20 anos, conheça as belezas de Recife
                comigo.“
              </p>
            </div>
          </div>
        </section>
        <div className="blocoTres"></div>
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
            <div className="textoReserva">
              <h4>A partir de R$100,00/pessoa</h4>
              <p>Em até 3x sem juros*</p>
            </div>
            <div className="selecioneData">
              <h4>Selecione a data</h4>
              <h4>Qnt. Pessoas</h4>
            </div>
            <div className="inputsReserva">
              <input type="date" name="calendario" id="data" />
              <select name="" id="qntPessoas">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">10</option>
              </select>
            </div>
            <div className="buttonReservar">
              <a href="">
                <button>Reservar agora</button>
              </a>
            </div>
            <div className="buttonWhats">
              <a href="">
                <button>Reservar via Whatssap</button>
              </a>
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </>
  );
}
