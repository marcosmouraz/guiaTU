import CardRecife from "../../assets/cardRecifeFrame.svg";

export default function FrameSolicitacoes() {
  return (
    <section>
      <div className="titulo">
        <h1>Solicitação </h1>
      </div>
      <div className="frame">
        <div className="left">
          <div className="cidade">
            <img src={CardRecife} alt="" className="imagemCidade" />
          </div>
        </div>
        <div className="center">
          <div>
            <h3>Você tem uma nova solicitação:</h3>
            <button>Aceitar</button>
            <button>Cancelar</button>
          </div>
        </div>
      </div>
    </section>
  );
}
