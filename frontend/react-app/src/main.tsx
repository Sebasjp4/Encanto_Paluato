import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css"; // ← IMPORTANTE: debe estar aquí
// React DOM se encarga de renderizar los componentes de React en el DOM del navegador
import { BrowserRouter } from "react-router-dom"; // <--- 1. IMPORTAR ESTO

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 2. ENVOLVER APP AQUÍ */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
