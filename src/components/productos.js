import React, { useState } from "react";

function Productos() {
  const [productos, setProductos] = useState([
    // 🌿 FRUTAS Y VERDURAS
    {
      id: 1,
      nombre: "Plantín de Tomate",
      precio: 2000,
      stock: 10,
      imagen: "/img/plantin-tomate.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion: "Pequeña planta lista para trasplantar en tu huerto.",
      unidad: "unidad",
    },
    {
      id: 2,
      nombre: "Plantín de Acelga",
      precio: 1800,
      stock: 7,
      imagen: "/img/plantin-acelga.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion:
        "Planta joven de acelga de alta resistencia y rápido crecimiento.",
      unidad: "unidad",
    },

    {
    id: 3,
      nombre: "Zanahoria",
      precio: 2000,
      stock: 10,
      imagen: "/img/zanahoria.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion: "Hortaliza rica en betacarotenos, ideal para fortalecer la vista y el sistema inmunológico.",
      unidad: "unidad",
    },

    {
    id: 4,
      nombre: "Manzana",
      precio: 2000,
      stock: 10,
      imagen: "/img/manzana.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion: "Fruta jugosa y crujiente, fuente natural de fibra y antioxidantes.",
      unidad: "unidad",
    },

    {
    id: 5,
      nombre: "Naranja",
      precio: 2000,
      stock: 10,
      imagen: "/img/naranja.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion: "Fruta cítrica de sabor dulce y refrescante, reconocida por su alto contenido de vitamina C.",
      unidad: "unidad",
    },

    {
    id: 6,
      nombre: "Frutilla",
      precio: 2000,
      stock: 10,
      imagen: "/img/frutilla.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion: "Fruta dulce y aromática, cosechada de forma local. Rica en antioxidantes y vitamina C, perfecta para postres, batidos o simplemente disfrutar al natural.",
      unidad: "unidad",
    },

    // 🌱 SEMILLAS
    {
      id: 7,
      nombre: "Semillas de Tomate",
      precio: 1500,
      stock: 20,
      imagen: "/img/semillas-tomate.jpg",
      categoria: "semillas",
      origen: "Chile",
      descripcion: "Semillas de tomate cherry de rápido crecimiento.",
      unidad: "paquete",
    },
    {
      id: 8,
      nombre: "Semillas de Lechuga",
      precio: 1200,
      stock: 15,
      imagen: "/img/semillas-lechuga.jpg",
      categoria: "semillas",
      origen: "Argentina",
      descripcion: "Variedad crespa verde ideal para cultivo urbano.",
      unidad: "paquete",
    },

    {
    id: 9,
      nombre: "Semillas de Zapallo",
      precio: 2000,
      stock: 10,
      imagen: "/img/zapallo.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion: "Semillas seleccionadas listas para sembrar o tostar. Ricas en magnesio, zinc y proteínas.",
      unidad: "unidad",
    },

    // 🌿 FERTILIZANTES
    {
      id: 10,
      nombre: "Fertilizante Orgánico",
      precio: 3500,
      stock: 8,
      imagen: "/img/fertilizante.jpg",
      categoria: "fertilizantes",
      origen: "Chile",
      descripcion: "Fertilizante 100% natural que mejora la calidad del suelo.",
      unidad: "bolsa",
    },

    {
      id: 11,
      nombre: "Compost Natural",
      precio: 2800,
      stock: 12,
      imagen: "/img/compost.jpg",
      categoria: "fertilizantes",
      origen: "Chile",
      descripcion: "Abono ecológico hecho de residuos vegetales compostados.",
      unidad: "bolsa",
    },

    {
    id: 12,
      nombre: "Huevos Orgánicos",
      precio: 2000,
      stock: 10,
      imagen: "/img/huevos-organicos.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion: "Producidos por gallinas criadas en libertad y alimentadas con granos naturales.",
      unidad: "docena",
    },

    {
    id: 13,
      nombre: "Miel Natural",
      precio: 2000,
      stock: 10,
      imagen: "/img/miel-natural.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion: "Miel pura recolectada de abejas que polinizan flores silvestres.",
      unidad: "frasco",
    },

    // 🧰 HERRAMIENTAS
    {
      id: 14,
      nombre: "Pala de Jardín",
      precio: 4500,
      stock: 10,
      imagen: "/img/pala.jpg",
      categoria: "herramientas",
      origen: "Chile",
      descripcion:
        "Ideal para cavar, remover y preparar la tierra del huerto.",
      unidad: "unidad",
    },
    {
      id: 15,
      nombre: "Regadera Metálica",
      precio: 6000,
      stock: 5,
      imagen: "/img/regadera.jpg",
      categoria: "herramientas",
      origen: "China",
      descripcion:
        "Resistente al óxido, perfecta para regar plantas pequeñas.",
      unidad: "unidad",
    },

    {
    id: 16,
      nombre: "Tijeras de Podar",
      precio: 2000,
      stock: 10,
      imagen: "/img/tijera-podar.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion: "Herramienta resistente con filo de acero inoxidable, diseñada para cortes precisos en ramas y tallos.",
      unidad: "unidad",
    },

    {
    id: 17,
      nombre: "Rastrillo",
      precio: 2000,
      stock: 10,
      imagen: "/img/rastrillo.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion: "Rastrillo de jardín con mango ergonómico y puntas metálicas. Perfecto para remover hojas, nivelar tierra o preparar tu terreno antes de plantar.",
      unidad: "unidad",
    },

    {
    id: 18,
      nombre: "Guantes de Jardineria",
      precio: 2000,
      stock: 10,
      imagen: "/img/guantes-jardineria.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion: "Guantes cómodos y duraderos que protegen tus manos del sol, espinas y tierra.",
      unidad: "par",
    },

    {
    id: 19,
      nombre: "Manguera",
      precio: 2000,
      stock: 10,
      imagen: "/img/manguera.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion: "Manguera flexible de alta resistencia con boquilla ajustable. Ideal para regar tu huerto.",
      unidad: "unidad",
    },
  ]);

  // Ejemplo: render simple (puedes reemplazarlo con tus filtros, carrito, etc.)
  return (
    <section className="stock-seccion">
      <h1>🛍️ Catálogo de Productos</h1>
      <div className="stock-lista">
        {productos.map((p) => (
          <div key={p.id} className="producto-card">
            <img src={p.imagen} alt={p.nombre} className="producto-img" />
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
            <p>💰 Precio: ${p.precio}</p>
            <p>📦 Stock: {p.stock} {p.unidad}</p>
            <p>🌍 Origen: {p.origen}</p>
            <p>📁 Categoría: {p.categoria}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productos;
