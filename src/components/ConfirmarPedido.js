import React, { useState } from "react";
import "../css/pedido.css";
import Boleta from "./Boleta"; // importamos el componente de boleta

function ConfirmarPedido({ carrito, setCarrito, setPedidos }) {
  const [cliente, setCliente] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
  });

  const [pedidoConfirmado, setPedidoConfirmado] = useState(false);
  const [pedidoGenerado, setPedidoGenerado] = useState(null); // guardará el pedido para mostrar la boleta

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  const confirmarPedido = () => {
    if (!cliente.nombre || !cliente.direccion || !cliente.telefono) {
      alert("Por favor completa todos los campos antes de confirmar.");
      return;
    }

    // Crear pedido nuevo
    const nuevoPedido = {
      id: Date.now(),
      cliente,
      productos: carrito,
      total,
      estado: "Preparando",
      fecha: new Date().toLocaleString(),
    };

    // Guardar pedido en el estado global
    setPedidos((prev) => [...prev, nuevoPedido]);

    // Limpiar carrito
    setCarrito([]);

    // Guardar para mostrar boleta
    setPedidoGenerado(nuevoPedido);

    // Cambiar estado de confirmación
    setPedidoConfirmado(true);
  };

  // Si el pedido ya fue confirmado, mostramos la boleta
  if (pedidoConfirmado && pedidoGenerado) {
    return (
      <section className="pedido-confirmado">
        <h2> Pedido confirmado</h2>
        <p>Gracias por tu compra, {cliente.nombre} 🌱</p>
        <p>Tu pedido está en preparación 🚚</p>

        {/* mostramos la boleta generada */}
        <Boleta pedido={pedidoGenerado} />
      </section>
    );
  }

  // Formulario de confirmación
  return (
    <section className="confirmar-pedido">
      <h1>🧾 Confirmar Pedido</h1>

      <h3>Datos del Cliente</h3>
      <input
        type="text"
        placeholder="Nombre"
        value={cliente.nombre}
        onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })}
      />
      <input
        type="text"
        placeholder="Dirección"
        value={cliente.direccion}
        onChange={(e) => setCliente({ ...cliente, direccion: e.target.value })}
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={cliente.telefono}
        onChange={(e) => setCliente({ ...cliente, telefono: e.target.value })}
      />

      <h3>Resumen del Pedido</h3>
      <ul>
        {carrito.map((p) => (
          <li key={p.id}>
            {p.nombre} x {p.cantidad} = ${p.precio * p.cantidad}
          </li>
        ))}
      </ul>

      <h3>Total: ${total}</h3>

      <button className="btn-confirmar" onClick={confirmarPedido}>
        Confirmar Pedido
      </button>
    </section>
  );
}

export default ConfirmarPedido;
