import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CadastroInicial  from "../pages/CadastroInicial/cadinicial"
import CadastroGuia from "../pages/CadastroGuia/cadastroguia";
import CadastroParceiro from "../pages/CadastroParceiro/cadastroparceiro";

import CadastroTurista from "../pages/CadastroTurista/cadastroturista";
import CheckoutCartao from "../pages/CheckoutCartao/checkoutCartao";
import TelaLogin from "../pages/TelaLogin/telalogin";
import TelaPagamento from "../pages/TelaPagamento/telapagamento";
import TelaRoteiro from "../pages/TelaRoteiro/telaroteiro";
import TelaFiltro from "../pages/TelaFiltro/telafiltro";
import TelaGuia from "../pages/TelaGuia/telaGuia";
import HistoricoGuia from "../pages/HistoricoGuia/historicoGuia";
import HistoricoTurista from "../pages/HistoricoTurista/historicoTurista";
import TelaCampos from "../pages/TelaCampos/telacampos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastroinicial",
    element: <CadastroInicial />,
  },

  {
    path: "/cadastroguia",
    element: <CadastroGuia />,
  },
  {
    path: "/cadastroparceiro",
    element: <CadastroParceiro />,
  },
  {
    path: "/cadastroturista",
    element: <CadastroTurista />,
  },
  {
    path: "/checkoutcartao",
    element: <CheckoutCartao />,
  },
  {
    path: "/telaguia",
    element: <TelaGuia />,
  },
  {
    path: "/telalogin",
    element: <TelaLogin />,
  },
  {
    path: "/telapagamento",
    element: <TelaPagamento />,
  },
  {
    path: "/telaroteiro",
    element: <TelaRoteiro />,
  },
  {
    path: "/telafiltro",
    element: <TelaFiltro />,
  },
  {
    path: "/historicoguia",
    element: <HistoricoGuia />,
  },
  {
    path: "/historicoturista",
    element: <HistoricoTurista />,
  },
]);
