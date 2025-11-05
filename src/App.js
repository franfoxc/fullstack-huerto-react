import React, { useState } from "react";
import "./App.css";

// Componentes principales
import Sidebar from "./components/sidebar";
import Menu from "./components/menu";
import Stock from "./components/stock";
import Carrito from "./components/carrito";
import Noticias from "./components/noticias";
import Productos from "./components/productos";
import Registro from "./components/registro";
import InformacionCuidados from "./components/informacionCuidados";

// Nuevos componentes de pedidos
import ConfirmarPedido from "./components/ConfirmarPedido";
import Pedidos from "./components/Pedidos";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Control de página actual
  const [paginaActual, setPaginaActual] = useState("menu");

  // Estado del carrito
  const [carrito, setCarrito] = useState([]);

  // Estado de pedidos confirmados
  const [pedidos, setPedidos] = useState([]);

  // Nuevo: Estado global de reseñas
  const [reseñas, setReseñas] = useState([]);

  // Agregar producto al carrito
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

  // Eliminar producto del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((p) => p.id !== id));
  };

  // Renderizado dinámico de contenido
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
            setPaginaActual={setPaginaActual} // redirige a confirmar pedido
          />
        );

      case "productos":
        return <Productos reseñas={reseñas} />; // recibe reseñas para mostrarlas

      case "registro":
        return <Registro />;

      case "informacion":
        return <InformacionCuidados />;

      case "noticias":
        return <Noticias />;

      case "confirmarPedido":
        return (
          <ConfirmarPedido
            carrito={carrito}
            setCarrito={setCarrito}
            setPedidos={setPedidos}
          />
        );

      case "pedidos":
        return (
          <Pedidos
            pedidos={pedidos}
            setPedidos={setPedidos}
            setReseñas={setReseñas} // permite que los clientes agreguen reseñas
          />
        );

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
