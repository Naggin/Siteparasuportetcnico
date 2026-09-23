import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const easterEgg = `
SuporteTI — suporte técnico.

Site de demonstração. Os nomes e telefones desta página são fictícios.
`;

// O %c permite que passemos CSS direto no console.log
console.log(
  `%c${easterEgg}`,
  "color: #10b981; font-family: monospace; font-size: 14px; font-weight: bold;"
);

createRoot(document.getElementById("root")!).render(<App />);
