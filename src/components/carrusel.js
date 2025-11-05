import React, { useState, useEffect } from "react";

function Carrusel() {
  // Rutas a tus imágenes (ubicadas en public/img)
  const imagenes = [
    "/img/banner1.jpg",
    "/img/banner2.jpg",
    "/img/banner3.jpg",
  ];

  const [indiceActual, setIndiceActual] = useState(0);

  // Cambia de imagen automáticamente cada 4 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % imagenes.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, [imagenes.length]);

  return (
    <div className="carousel">
      <img
        src={imagenes[indiceActual]}
        alt={`Banner ${indiceActual + 1}`}
        className="carousel-img"
      />
      <div className="indicadores">
        {imagenes.map((_, i) => (
          <span
            key={i}
            className={`indicador ${i === indiceActual ? "activo" : ""}`}
            onClick={() => setIndiceActual(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;
