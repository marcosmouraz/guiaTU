import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CadastroGuia from "../pages/CadastroGuia/cadastroguia";
import CadastroParceiro from "../pages/CadastroParceiro/cadastroparceiro";
import CadastroTurista from "../pages/CadastroTurista/cadastroturista";
import CheckoutCartao from "../pages/CheckoutCartao/checkout";
import SejaParceiro from "../pages/SejaParceiro/sejaparceiro";
import TelaGuia from "../pages/TelaGuia/teladoguia";
import TelaLogin from "../pages/TelaLogin/telalogin";
import TelaPagamento from "../pages/TelaPagamento/telapagamento";
import TelaRoteiro from "../pages/TelaRoteiro/telaroteiro";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/sejaparceiro",
    element: <SejaParceiro />,
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
]);