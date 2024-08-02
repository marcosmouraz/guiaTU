import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CadastroGuia from "../pages/CadastroGuia/cadastroguia";
import CadastroParceiro from "../pages/CadastroParceiro/cadastroparceiro";
import CadastroTurista from "../pages/CadastroTurista/cadastroturista";
import CadastroTuristaDois from "../pages/CadastroTuristaDois/cadastroturistaDois";
import CheckoutCartao from "../pages/CheckoutCartao/checkoutCartao";
import SejaParceiro from "../pages/SejaParceiro/sejaparceiro";
import TelaGuia from "../pages/TelaGuia/teladoguia";
import TelaLogin from "../pages/TelaLogin/telalogin";
import TelaPagamento from "../pages/TelaPagamento/telapagamento";
import TelaRoteiro from "../pages/TelaRoteiro/telaroteiro";
import TelaFiltro from "../pages/TelaFiltro/telafiltro"

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
    path: "/cadastroturistaDois",
    element: <CadastroTuristaDois />,
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
  {
    path: "/telafiltro",
    element: <TelaFiltro />
  }
]);