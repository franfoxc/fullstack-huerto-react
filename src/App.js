import React, { useState } from "react";
import "./App.css";

// 🔹 Componentes principales
import Sidebar from "./components/sidebar";
import Menu from "./components/menu";
import Stock from "./components/stock";
import Carrito from "./components/carrito";
import Noticias from "./components/noticias";
import Productos from "./components/productos";
import Registro from "./components/registro";
import InformacionCuidados from "./components/informacionCuidados";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [paginaActual, setPaginaActual] = useState("menu");
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find((p) => p.id === producto.id);
      if (existente) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((p) => p.id !== id));
  };

  const renderContenido = () => {
    switch (paginaActual) {
      case "menu":
        return <Menu />;
      case "stock":
        return <Stock agregarAlCarrito={agregarAlCarrito} />;
      case "carrito":
        return (
          <Carrito
            carrito={carrito}
            setCarrito={setCarrito}
            eliminarDelCarrito={eliminarDelCarrito}
          />
        );
      case "registro":
        return <Registro />;
      case "productos":
        return <Productos />;
      case "informacion":
        return <InformacionCuidados />;
      case "noticias":
        return <Noticias />;
      default:
        return <Menu />;
    }
  };

  return (
    <div className="layout-principal">
      <Sidebar setPaginaActual={setPaginaActual} paginaActual={paginaActual} />
      <main className="content">{renderContenido()}</main>
    </div>
  );
}

export default App;
