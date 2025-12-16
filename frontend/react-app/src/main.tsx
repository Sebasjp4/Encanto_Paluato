import React from "react";
import ReactDOM from "react-dom/client"; // @vite-ignore
import App from "./App.tsx";
// import 'bootstrap/dist/css/bootstrap.min.css'
// React DOM se encarga de renderizar los componentes de React en el DOM del navegador

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
