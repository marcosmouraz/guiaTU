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
    if (!mapRef.current) {
      const marcoZero = [-8.0645, -34.8711];
      const mercadoCultura = [-8.0539, -34.8823];

      // Inicializar o mapa
      mapRef.current = L.map("map").setView(marcoZero, 14);

      // Adicionar camada do OpenStreetMap
      L.tileLayer(
        "https://{s}.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      ).addTo(mapRef.current);

      // Adicionar rota
      L.Routing.control({
        waypoints: [L.latLng(marcoZero), L.latLng(mercadoCultura)],
        routeWhileDragging: true,
      }).addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove(); // Destrói o mapa se o componente for desmontado
        mapRef.current = null; // Reseta a referência
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
        <div className="blocoUm">
          <img className="fotoPerfil" src={Perfil} alt="Perfil do Guia" />
          {/* Mapa interativo substituindo a imagem */}
          <div id="map" style={{ height: "350px", width: "60%" }}></div>
        </div>
        <div className="blocoDois">
          <div className="nomeGuia">
            <h2>Rogerio Marques</h2>
          </div>
          <div className="fraseGuia">
            <p className="frase">
              “Guia local há mais de 20 anos, conheça as belezas de Recife
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
            <input type="date" name="calendario" id="data" />
            <select name="" id="qntPessoas">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">10</option>
            </select>
          </section>
        </div>
      </Container>
      <Footer />
    </>
  );
}
