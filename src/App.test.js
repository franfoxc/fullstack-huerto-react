import React, { useState } from "react";
import "./App.css";

import Sidebar from "./components/sidebar";
import Menu from "./components/menu";
import Stock from "./components/stock";
import Carrito from "./components/carrito";
import Noticias from "./components/noticias";
import Productos from "./components/productos";
import Registro from "./components/registro";
import InformacionCuidados from "./components/informacionCuidados";

function App() {
  const [paginaActual, setPaginaActual] = useState("menu");

  function renderContenido() {
    switch (paginaActual) {
      case "menu":
        return <Menu />;
      case "stock":
        return <Stock />;
      case "carrito":
        return <Carrito />;
      case "noticias":
        return <Noticias />;
      case "productos":
        return <Productos />;
      case "registro":
        return <Registro />;
      case "informacion":
        return <InformacionCuidados />;
      default:
        return <Menu />;
    }
  }

  return (
    <div className="layout">
      {/* Sidebar envía la función para cambiar la página */}
      <Sidebar setPaginaActual={setPaginaActual} />

      <main className="contenido-principal">{renderContenido()}</main>
    </div>
  );
}

export default App;

// Archivo de test vacío para App.js
test("dummy test", () => {
  expect(true).toBe(true);
});

