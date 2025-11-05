import React, { useState } from "react";
import "../css/stock.css";

function Stock({ agregarAlCarrito }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [mensaje, setMensaje] = useState("");

  // 🔹 Productos con 4 categorías
  const [productos, setProductos] = useState({
    herramientas: [
      { id: 1, nombre: "Pala de Jardín", precio: 4500, stock: 10, imagen: "/img/pala.jpg" },
      { id: 2, nombre: "Regadera Metálica", precio: 6000, stock: 5, imagen: "/img/regadera.jpg" },
    ],
    semillas: [
      { id: 3, nombre: "Semillas de Tomate", precio: 1500, stock: 20, imagen: "/img/semillas-tomate.jpg" },
      { id: 4, nombre: "Semillas de Lechuga", precio: 1200, stock: 15, imagen: "/img/semillas-lechuga.jpg" },
    ],
    fertilizantes: [
      { id: 5, nombre: "Fertilizante Orgánico", precio: 3500, stock: 8, imagen: "/img/fertilizante.jpg" },
      { id: 6, nombre: "Compost Natural", precio: 2800, stock: 12, imagen: "/img/compost.jpg" },
    ],
    frutasVerduras: [
      { id: 7, nombre: "Plantín de Tomate", precio: 2000, stock: 10, imagen: "/img/plantin-tomate.jpg" },
      { id: 8, nombre: "Plantín de Acelga", precio: 1800, stock: 7, imagen: "/img/plantin-acelga.jpg" },
    ],
  });

  // 🔹 Agregar producto al carrito + descontar stock
  const manejarAgregar = (producto, categoria) => {
    if (producto.stock <= 0) {
      setMensaje(`❌ No queda stock de ${producto.nombre}`);
      setTimeout(() => setMensaje(""), 2500);
      return;
    }

    agregarAlCarrito(producto);
    setMensaje(`${producto.nombre} agregado al carrito`);

    // Descontar stock
    setProductos((prev) => {
      const nuevos = { ...prev };
      nuevos[categoria] = nuevos[categoria].map((p) =>
        p.id === producto.id ? { ...p, stock: p.stock - 1 } : p
      );
      return nuevos;
    });

    setTimeout(() => setMensaje(""), 3000);
  };

  // 🔹 Vista principal: categorías
  if (!categoriaSeleccionada) {
    return (
      <section className="stock-seccion">
        <h1>🪴 Categorías de Productos</h1>
        <div className="categorias-grid">
          <div
            className="categoria-card"
            onClick={() => setCategoriaSeleccionada("herramientas")}
          >
            🧰 <h3>Herramientas</h3>
          </div>
          <div
            className="categoria-card"
            onClick={() => setCategoriaSeleccionada("semillas")}
          >
            🌱 <h3>Semillas</h3>
          </div>
          <div
            className="categoria-card"
            onClick={() => setCategoriaSeleccionada("fertilizantes")}
          >
            🌿 <h3>Fertilizantes</h3>
          </div>
          <div
            className="categoria-card"
            onClick={() => setCategoriaSeleccionada("frutasVerduras")}
          >
            🍅 <h3>Frutas y Verduras</h3>
          </div>
        </div>
      </section>
    );
  }

  // 🔹 Vista de productos dentro de la categoría
  return (
    <section className="stock-seccion">
      <button className="btn-volver" onClick={() => setCategoriaSeleccionada(null)}>
        ← Volver
      </button>

      <h1>
        {categoriaSeleccionada === "frutasVerduras"
          ? "🍅 Frutas y Verduras"
          : categoriaSeleccionada.charAt(0).toUpperCase() +
            categoriaSeleccionada.slice(1)}
      </h1>

      {mensaje && <div className="mensaje-agregado">{mensaje}</div>}

      <div className="stock-lista">
        {productos[categoriaSeleccionada].map((p) => (
          <div key={p.id} className="producto-card">
            <img src={p.imagen} alt={p.nombre} className="producto-img" />
            <h3>{p.nombre}</h3>
            <p>💰 Precio: ${p.precio}</p>
            <p>📦 Stock: {p.stock}</p>
            <button
              onClick={() => manejarAgregar(p, categoriaSeleccionada)}
              disabled={p.stock === 0}
              className={p.stock === 0 ? "btn-agregar agotado" : "btn-agregar"}
            >
              {p.stock > 0 ? "Agregar" : "Sin stock"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stock;
