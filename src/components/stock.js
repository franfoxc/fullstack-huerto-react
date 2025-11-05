import React, { useState } from "react";
import "../css/stock.css";

function Stock({ agregarAlCarrito }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [mensaje, setMensaje] = useState("");

  // 🧺 Lista completa de productos (desde tu productos.js)
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
      descripcion:
        "Hortaliza rica en betacarotenos, ideal para fortalecer la vista y el sistema inmunológico.",
      unidad: "kg",
    },
    {
      id: 4,
      nombre: "Manzana",
      precio: 2000,
      stock: 10,
      imagen: "/img/manzana.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion:
        "Fruta jugosa y crujiente, fuente natural de fibra y antioxidantes.",
      unidad: "kg",
    },
    {
      id: 5,
      nombre: "Naranja",
      precio: 2000,
      stock: 10,
      imagen: "/img/naranja.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion:
        "Fruta cítrica de sabor dulce y refrescante, reconocida por su alto contenido de vitamina C.",
      unidad: "kg",
    },
    {
      id: 6,
      nombre: "Frutilla",
      precio: 2000,
      stock: 10,
      imagen: "/img/frutilla.jpg",
      categoria: "frutas y verduras",
      origen: "Chile",
      descripcion:
        "Fruta dulce y aromática, cosechada de forma local. Rica en antioxidantes y vitamina C.",
      unidad: "bandeja",
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
      categoria: "semillas",
      origen: "Chile",
      descripcion:
        "Semillas seleccionadas listas para sembrar o tostar. Ricas en magnesio, zinc y proteínas.",
      unidad: "paquete",
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
      descripcion:
        "Fertilizante 100% natural que mejora la calidad del suelo.",
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
      descripcion:
        "Abono ecológico hecho de residuos vegetales compostados.",
      unidad: "bolsa",
    },

    // 🧺 ORGÁNICOS
    {
      id: 12,
      nombre: "Huevos Orgánicos",
      precio: 2000,
      stock: 10,
      imagen: "/img/huevos-organicos.jpg",
      categoria: "organicos",
      origen: "Chile",
      descripcion:
        "Producidos por gallinas criadas en libertad y alimentadas con granos naturales.",
      unidad: "docena",
    },
    {
      id: 13,
      nombre: "Miel Natural",
      precio: 2000,
      stock: 10,
      imagen: "/img/miel-natural.jpg",
      categoria: "organicos",
      origen: "Chile",
      descripcion:
        "Miel pura recolectada de abejas que polinizan flores silvestres.",
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
      precio: 5500,
      stock: 10,
      imagen: "/img/tijera-podar.jpg",
      categoria: "herramientas",
      origen: "Chile",
      descripcion:
        "Herramienta resistente con filo de acero inoxidable, diseñada para cortes precisos en ramas y tallos.",
      unidad: "unidad",
    },
    {
      id: 17,
      nombre: "Rastrillo",
      precio: 3500,
      stock: 10,
      imagen: "/img/rastrillo.jpg",
      categoria: "herramientas",
      origen: "Chile",
      descripcion:
        "Rastrillo de jardín con mango ergonómico y puntas metálicas. Perfecto para remover hojas o nivelar tierra.",
      unidad: "unidad",
    },
    {
      id: 18,
      nombre: "Guantes de Jardinería",
      precio: 2500,
      stock: 10,
      imagen: "/img/guantes-jardineria.jpg",
      categoria: "herramientas",
      origen: "Chile",
      descripcion:
        "Guantes cómodos y duraderos que protegen tus manos del sol, espinas y tierra.",
      unidad: "par",
    },
    {
      id: 19,
      nombre: "Manguera",
      precio: 8500,
      stock: 10,
      imagen: "/img/manguera.jpg",
      categoria: "herramientas",
      origen: "Chile",
      descripcion:
        "Manguera flexible de alta resistencia con boquilla ajustable. Ideal para regar tu huerto o jardín.",
      unidad: "unidad",
    },
  ]);

  // 🔹 Filtrar productos por categoría seleccionada
  const productosFiltrados = categoriaSeleccionada
    ? productos.filter((p) => p.categoria === categoriaSeleccionada)
    : [];

  // 🔹 Manejar agregar al carrito
  const manejarAgregar = (producto) => {
    if (producto.stock <= 0) {
      setMensaje(`❌ No queda stock de ${producto.nombre}`);
      setTimeout(() => setMensaje(""), 2500);
      return;
    }

    agregarAlCarrito(producto);
    setMensaje(`${producto.nombre} agregado al carrito`);

    setProductos((prev) =>
      prev.map((p) =>
        p.id === producto.id ? { ...p, stock: p.stock - 1 } : p
      )
    );

    setTimeout(() => setMensaje(""), 3000);
  };

  // 🔹 Vista: lista de categorías
  if (!categoriaSeleccionada) {
    const categoriasUnicas = [
      ...new Set(productos.map((p) => p.categoria)),
    ];

    return (
      <section className="stock-seccion">
        <h1>🪴 Categorías de Productos</h1>
        <div className="categorias-grid">
          {categoriasUnicas.map((cat) => (
            <div
              key={cat}
              className="categoria-card"
              onClick={() => setCategoriaSeleccionada(cat)}
            >
              <h3>{cat.toUpperCase()}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // 🔹 Vista: productos de una categoría
  return (
    <section className="stock-seccion">
      <button className="btn-volver" onClick={() => setCategoriaSeleccionada(null)}>
        ← Volver
      </button>

      <h1>
        {categoriaSeleccionada.charAt(0).toUpperCase() +
          categoriaSeleccionada.slice(1)}
      </h1>

      {mensaje && <div className="mensaje-agregado">{mensaje}</div>}

      <div className="stock-lista">
        {productosFiltrados.map((p) => (
          <div key={p.id} className="producto-card">
            <img src={p.imagen} alt={p.nombre} className="producto-img" />
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
            <p>💰 Precio: ${p.precio}</p>
            <p>📦 Stock: {p.stock} {p.unidad}</p>
            <p>🌍 Origen: {p.origen}</p>
            <button
              onClick={() => manejarAgregar(p)}
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
