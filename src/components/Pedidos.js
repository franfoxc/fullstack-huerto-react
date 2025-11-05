import React, { useState } from "react";
import "../css/pedido.css";
import Notificacion from "./notificacion";

function Pedidos({ pedidos, setPedidos, setReseñas }) {
  const [notificacion, setNotificacion] = useState(null);
  const [reseñaTexto, setReseñaTexto] = useState("");
  const [calificacion, setCalificacion] = useState(5);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const actualizarEstado = (id, nuevoEstado) => {
    setPedidos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, estado: nuevoEstado } : p))
    );

    if (nuevoEstado === "Enviado") {
      setNotificacion({
        mensaje: "📦 El pedido está siendo enviado. ¡Prepárate para recibirlo pronto!",
        tipo: "primary",
      });
    } else if (nuevoEstado === "Entregado") {
      setNotificacion({
        mensaje: "✅ El pedido ha sido entregado con éxito. ¡Puedes dejar una reseña en tus productos!",
        tipo: "success",
      });
    }
  };

  const enviarReseña = (producto, pedidoId) => {
    if (!reseñaTexto.trim()) {
      setNotificacion({ mensaje: "⚠️ Escribe una reseña antes de enviar.", tipo: "warning" });
      return;
    }

    const nuevaReseña = {
      id: Date.now(),
      productoId: producto.id,
      productoNombre: producto.nombre,
      calificacion,
      texto: reseñaTexto,
      fecha: new Date().toLocaleString(),
      pedidoId,
    };

    setReseñas((prev) => [...prev, nuevaReseña]);
    setReseñaTexto("");
    setProductoSeleccionado(null);

    setNotificacion({
      mensaje: "🌟 ¡Gracias por tu reseña! Se ha guardado correctamente.",
      tipo: "success",
    });
  };

  return (
    <section className="pedidos-seccion">
      <h1>🚚 Seguimiento de Pedidos</h1>

      {pedidos.length === 0 ? (
        <p>No tienes pedidos aún 🌱</p>
      ) : (
        pedidos.map((pedido) => (
          <div key={pedido.id} className="pedido-card">
            <h3>Pedido #{pedido.id}</h3>
            <p><strong>Cliente:</strong> {pedido.cliente.nombre}</p>
            <p><strong>Estado:</strong> {pedido.estado}</p>
            <p><strong>Total:</strong> ${pedido.total}</p>

            <div className="pedido-botones">
              {pedido.estado === "Preparando" && (
                <button
                  className="btn btn-outline-primary me-2"
                  onClick={() => actualizarEstado(pedido.id, "Enviado")}
                >
                  Enviar 🚚
                </button>
              )}
              {pedido.estado === "Enviado" && (
                <button
                  className="btn btn-success me-2"
                  onClick={() => actualizarEstado(pedido.id, "Entregado")}
                >
                  Marcar como Entregado ✅
                </button>
              )}
            </div>

            {/* Si el pedido está entregado, mostrar los productos para reseñar */}
            {pedido.estado === "Entregado" && (
              <div className="reseñas-seccion">
                <h5 className="mt-3">📝 Deja tu reseña:</h5>
                {pedido.productos.map((producto) => (
                  <div key={producto.id} className="reseña-card">
                    <p><strong>{producto.nombre}</strong></p>
                    {productoSeleccionado === producto.id ? (
                      <div>
                        <textarea
                          className="form-control mb-2"
                          placeholder="Escribe tu reseña..."
                          value={reseñaTexto}
                          onChange={(e) => setReseñaTexto(e.target.value)}
                        />
                        <label>Calificación:</label>
                        <select
                          className="form-select w-auto d-inline mx-2"
                          value={calificacion}
                          onChange={(e) => setCalificacion(Number(e.target.value))}
                        >
                          {[1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n}>
                              {n} ⭐
                            </option>
                          ))}
                        </select>
                        <button
                          className="btn btn-success"
                          onClick={() => enviarReseña(producto, pedido.id)}
                        >
                          Enviar reseña
                        </button>
                      </div>
                    ) : (
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => setProductoSeleccionado(producto.id)}
                      >
                        Reseñar este producto ✍️
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}

            <hr />
          </div>
        ))
      )}

      {notificacion && (
        <Notificacion
          mensaje={notificacion.mensaje}
          tipo={notificacion.tipo}
          onClose={() => setNotificacion(null)}
        />
      )}
    </section>
  );
}

export default Pedidos;
