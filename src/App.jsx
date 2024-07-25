import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { router } from "./routes/index.routes";
import Home from "./pages/Home";

export default function App() {

  return (
    <>
      <GlobalStyle/>
      <RouterProvider router={router}/>
      <Home/>
    </>
  )
}


