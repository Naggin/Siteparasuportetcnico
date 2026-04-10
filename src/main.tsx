import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const easterEgg = `
   .----------------------------.
   |  ________________________  |
   | |                        | |
   | |  >_ Suporte T.I.       | |
   | |  >_ Status: Online     | |
   | |                        | |
   | |________________________| |
   |                            |
   '----------------------------'
               |  |
               ====

Opa, inspecionando o código? 👀💻

Se você curte fuçar nos bastidores e encontrou um bug, ou se 
simplesmente precisa de uma infraestrutura de T.I. de respeito, 
me chame no WhatsApp: +55 (51) 98974-6959.

`;

// O %c permite que passemos CSS direto no console.log
console.log(
  `%c${easterEgg}`,
  "color: #10b981; font-family: monospace; font-size: 14px; font-weight: bold;"
);

createRoot(document.getElementById("root")!).render(<App />);
