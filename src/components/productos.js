import React, { useState } from "react";

function Productos({ reseñas = [] }) {
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
        "Fruta dulce y aromática, rica en antioxidantes y vitamina C, perfecta para postres o batidos.",
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
        "Rastrillo con mango ergonómico y puntas metálicas. Perfecto para remover hojas o nivelar tierra.",
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

  // 🔍 Estado del filtro de búsqueda y categoría
  const [busqueda, setBusqueda] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("todos");

  // 🔹 Obtener categorías únicas dinámicamente
  const categorias = ["todos", ...new Set(productos.map((p) => p.categoria))];

  // 🔹 Filtrado combinado: texto + categoría
  const productosFiltrados = productos.filter((p) => {
    const coincideTexto =
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.origen.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria =
      categoriaFiltro === "todos" || p.categoria === categoriaFiltro;
    return coincideTexto && coincideCategoria;
  });

  // 🧮 Calcular promedio de reseñas por producto
  const promedioCalificacion = (idProducto) => {
    const reseñasDelProducto = reseñas.filter((r) => r.productoId === idProducto);
    if (reseñasDelProducto.length === 0) return null;
    const promedio =
      reseñasDelProducto.reduce((acc, r) => acc + r.calificacion, 0) /
      reseñasDelProducto.length;
    return promedio.toFixed(1);
  };

  return (
    <section className="stock-seccion">
      <h1>🛍️ Catálogo de Productos</h1>

      {/* 🔍 Barra de búsqueda y filtro */}
      <div className="filtros-container">
        <input
          type="text"
          placeholder="Buscar producto, descripción u origen..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="input-busqueda"
        />

        <select
          value={categoriaFiltro}
          onChange={(e) => setCategoriaFiltro(e.target.value)}
          className="select-categoria"
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* 🔹 Mostrar productos filtrados */}
      <div className="stock-lista">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((p) => {
            const promedio = promedioCalificacion(p.id);
            const reseñasDelProducto = reseñas.filter((r) => r.productoId === p.id);

            return (
              <div key={p.id} className="producto-card">
                <img src={p.imagen} alt={p.nombre} className="producto-img" />
                <h3>
                  {p.nombre}
                  {promedio && (
                    <span style={{ color: "#f5b301", fontSize: "0.9em", marginLeft: "8px" }}>
                      ⭐ {promedio}
                    </span>
                  )}
                </h3>
                <p>{p.descripcion}</p>
                <p>💰 Precio: ${p.precio}</p>
                <p>📦 Stock: {p.stock} {p.unidad}</p>
                <p>🌍 Origen: {p.origen}</p>
                <p>📁 Categoría: {p.categoria}</p>

                {/* 🔹 Mostrar reseñas */}
                {reseñasDelProducto.length > 0 && (
                  <div className="reseñas-container mt-2">
                    <h6>💬 Reseñas:</h6>
                    {reseñasDelProducto.map((r) => (
                      <div key={r.id} className="reseña-item">
                        <p>
                          <strong>{r.calificacion} ⭐</strong> — {r.texto}
                        </p>
                        <small className="text-muted">{r.fecha}</small>
                        <hr />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p style={{ color: "#777" }}>
            No se encontraron productos con esa búsqueda o categoría.
          </p>
        )}
      </div>
    </section>
  );
}

export default Productos;
