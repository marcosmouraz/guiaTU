import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { router } from "./routes/index.routes";

export default function App() {

  return (
    <>
      <GlobalStyle/>
      <RouterProvider router={router}/>
    </>
  )
}


