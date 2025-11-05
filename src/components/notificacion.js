import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Notificacion({ mensaje, tipo = "info", onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 3000); // 🔹 se cierra después de 3 segundos
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div
      className={`alert alert-${tipo} position-fixed top-0 start-50 translate-middle-x mt-3 shadow`}
      style={{ zIndex: 2000, minWidth: "300px", textAlign: "center" }}
      role="alert"
    >
      {mensaje}
    </div>
  );
}

export default Notificacion;
