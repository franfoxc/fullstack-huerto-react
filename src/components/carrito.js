import React from "react";
import "../css/carrito.css";

function Carrito({ carrito, setCarrito, eliminarDelCarrito }) {
  const aumentar = (id) => {
    setCarrito(carrito.map((i) => (i.id === id ? { ...i, cantidad: i.cantidad + 1 } : i)));
  };
  const disminuir = (id) => {
    setCarrito(
      carrito
        .map((i) =>
          i.id === id && i.cantidad > 1 ? { ...i, cantidad: i.cantidad - 1 } : i
        )
        .filter((i) => i.cantidad > 0)
    );
  };
  const total = carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);

  return (
    <section className="carrito-seccion">
      <h1>🛒 Tu Carrito</h1>
      {carrito.length === 0 ? (
        <p data-testid="carrito-vacio">Tu carrito está vacío 🌱</p>
      ) : (
        <div>
          {carrito.map((item) => (
            <div key={item.id} data-testid={`item-${item.id}`}>
              <p>{item.nombre}</p>
              <button data-testid={`btn-mas-${item.id}`} onClick={() => aumentar(item.id)}>+</button>
              <button data-testid={`btn-menos-${item.id}`} onClick={() => disminuir(item.id)}>-</button>
              <button data-testid={`btn-borrar-${item.id}`} onClick={() => eliminarDelCarrito(item.id)}>🗑️</button>
            </div>
          ))}
          <h2 data-testid="total">Total: ${total}</h2>
        </div>
      )}
    </section>
  );
}
export default Carrito;
