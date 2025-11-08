import { render, screen } from "@testing-library/react";
import Stock from "../components/stock";
import "@testing-library/jest-dom";

describe("Componente Stock", () => {
  
  // ✅ Prueba 1: Verifica que se renderice el título
  test("renderiza el título de categorías", () => {
    render(<Stock />);
    expect(screen.getByText(/Categorías de Productos/i)).toBeInTheDocument();
  });

  // ✅ Prueba 2: Verifica que se muestren todas las categorías
  test("muestra todas las categorías de productos", () => {
    render(<Stock />);
    
    expect(screen.getByText("FRUTAS Y VERDURAS")).toBeInTheDocument();
    expect(screen.getByText("SEMILLAS")).toBeInTheDocument();
    expect(screen.getByText("FERTILIZANTES")).toBeInTheDocument();
    expect(screen.getByText("ORGANICOS")).toBeInTheDocument();
    expect(screen.getByText("HERRAMIENTAS")).toBeInTheDocument();
  });

  // ✅ Prueba 3: Verifica que se rendericen 5 tarjetas de categorías
  test("renderiza exactamente 5 categorías", () => {
    const { container } = render(<Stock />);
    const categorias = container.querySelectorAll(".categoria-card");
    expect(categorias).toHaveLength(5);
  });

  // ✅ Prueba 4: Verifica la estructura del componente
  test("tiene la estructura correcta con sección y grid", () => {
    const { container } = render(<Stock />);
    
    expect(container.querySelector(".stock-seccion")).toBeInTheDocument();
    expect(container.querySelector(".categorias-grid")).toBeInTheDocument();
  });
});
