import React from "react";
import "../css/menu.css";
import Carrusel from "./carrusel";

function Menu() {
  return (
    <section className="menu-principal">
      <div className="menu-texto">
        <h1>🌿 Bienvenido a Huerto Online</h1>
        <p>
          Tu tienda de confianza para productos de huerto:{" "}
          <strong>plantas, semillas, herramientas y más.</strong>
        </p>
        <p>Haz crecer tu propio huerto desde casa con productos ecológicos.</p>
      </div>

      <div className="menu-carrusel">
        <Carrusel />
      </div>

      <div className="menu-info">
        <h2>🌱 ¿Por qué elegir Huerto Online?</h2>
        <ul>
          <li>Productos ecológicos y locales 🌎</li>
          <li>Envíos a todo Chile 🚚</li>
          <li>Asesorías para principiantes en cultivo urbano 🪴</li>
          <li>Ofertas exclusivas para clientes registrados 💚</li>
        </ul>
      </div>
    </section>
  );
}

export default Menu;
