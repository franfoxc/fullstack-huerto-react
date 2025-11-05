import React from "react";
import "../css/carrito.css";

function Carrito({ carrito, setCarrito, eliminarDelCarrito, setPaginaActual }) {
  // 🔹 Aumentar cantidad
  const aumentar = (id) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  // 🔹 Disminuir cantidad (sin bajar de 1)
  const disminuir = (id) => {
    setCarrito(
      carrito
        .map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad > 1 ? item.cantidad - 1 : 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  // 🔹 Eliminar producto del carrito
  const eliminar = (id) => {
    const actualizado = carrito.filter((item) => item.id !== id);
    setCarrito(actualizado);
  };

  // 🔹 Vaciar carrito completamente
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // 🔹 Calcular subtotal y total general
  const calcularSubtotal = (item) => item.precio * item.cantidad;
  const total = carrito.reduce((acc, item) => acc + calcularSubtotal(item), 0);

  return (
    <section className="carrito-seccion">
      <h1>🛒 Tu Carrito</h1>

      {carrito.length === 0 ? (
        <p className="carrito-vacio">Tu carrito está vacío 🌱</p>
      ) : (
        <div className="carrito-lista">
          {carrito.map((item) => (
            <div key={item.id} className="carrito-item">
              <div className="carrito-detalles">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="carrito-imagen"
                />
                <div>
                  <h3>{item.nombre}</h3>
                  <p>💰 Precio unitario: ${item.precio}</p>
                  <p>📦 Cantidad: {item.cantidad}</p>
                  <p>🧾 Subtotal: ${calcularSubtotal(item)}</p>
                </div>
              </div>

              <div className="carrito-botones">
                <button onClick={() => aumentar(item.id)}>+</button>
                <button onClick={() => disminuir(item.id)}>-</button>
                <button onClick={() => eliminar(item.id)}>🗑️</button>
              </div>
            </div>
          ))}

          {/* 🔹 Resumen final */}
          <div className="carrito-resumen">
            <h2>Resumen del pedido 🧾</h2>
            {carrito.map((item) => (
              <p key={item.id}>
                {item.nombre} ({item.cantidad} x ${item.precio}) = ${calcularSubtotal(item)}
              </p>
            ))}
            <hr />
            <h3>Total general: ${total}</h3>

            <div className="carrito-acciones">
              <button className="btn-vaciar" onClick={vaciarCarrito}>
                Vaciar carrito
              </button>

              {/* 🧾 NUEVO BOTÓN PARA CONFIRMAR PEDIDO */}
              <button
                className="btn-confirmar"
                onClick={() => setPaginaActual("confirmarPedido")}
              >
                🧾 Confirmar Pedido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Carrito;
