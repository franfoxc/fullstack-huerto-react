import React from "react";
import "../css/sidebar.css";

function Sidebar({ setPaginaActual, paginaActual }) {
  const paginas = [
    { id: "menu", nombre: "Inicio" },
    { id: "stock", nombre: "Stock" },
    { id: "carrito", nombre: "Carrito" },
    { id: "productos", nombre: "Productos" },
    { id: "informacion", nombre: "Cuidados" },
    { id: "noticias", nombre: "Noticias" },
    { id: "registro", nombre: "Registro" },
  ];

  return (
    <div className="sidebar" data-testid="sidebar">
      <h2>Huerto Online</h2>
      <ul>
        {paginas.map((p) => (
          <li
            key={p.id}
            className={paginaActual === p.id ? "activo" : ""}
            onClick={() => setPaginaActual(p.id)}
            data-testid={`item-${p.id}`}
          >
            {p.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
