import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/scss/style.scss";

import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ContextProvider from "./context/ContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>,
);
