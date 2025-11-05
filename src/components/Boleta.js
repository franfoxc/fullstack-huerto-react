import React, { useRef, useEffect } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "../css/boleta.css";

function Boleta({ pedido }) {
  const boletaRef = useRef();

  // 🔹 Genera el PDF automáticamente al confirmar el pedido
  useEffect(() => {
    generarPDF();
  }, []);

  const generarPDF = async () => {
    const element = boletaRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Boleta_Pedido_${pedido.id}.pdf`);
  };

  return (
    <section className="boleta-seccion">
      <div className="boleta-container" ref={boletaRef}>
        <h2>🌿 Huerto Online</h2>
        <h3>🧾 Boleta de Compra</h3>

        <div className="boleta-info">
          <p><strong>N° Pedido:</strong> {pedido.id}</p>
          <p><strong>Fecha:</strong> {pedido.fecha}</p>
          <p><strong>Estado actual:</strong> {pedido.estado}</p>
        </div>

        <div className="boleta-cliente">
          <h4>👤 Datos del Cliente</h4>
          <p><strong>Nombre:</strong> {pedido.cliente.nombre}</p>
          <p><strong>Dirección:</strong> {pedido.cliente.direccion}</p>
          <p><strong>Teléfono:</strong> {pedido.cliente.telefono}</p>
        </div>

        <h4>🛍️ Detalle del Pedido</h4>
        <table className="boleta-tabla">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cant.</th>
              <th>Precio</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {pedido.productos.map((p) => (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>{p.cantidad}</td>
                <td>${p.precio}</td>
                <td>${p.cantidad * p.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="boleta-total">Total: ${pedido.total}</h3>
        <p>Gracias por tu compra 💚</p>
      </div>

      <button className="btn-descargar" onClick={generarPDF}>
        💾 Descargar Boleta PDF
      </button>
    </section>
  );
}

export default Boleta;
