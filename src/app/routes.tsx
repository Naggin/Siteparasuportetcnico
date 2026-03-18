import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Manuais } from "./components/Manuais";
import { Contato } from "./components/Contato";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "manuais", Component: Manuais },
      { path: "contato", Component: Contato },
    ],
  },
]);