import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../components/sidebar";
import "@testing-library/jest-dom";

test("renderiza el título y las opciones del sidebar", () => {
  render(<Sidebar setPaginaActual={() => {}} paginaActual="menu" />);
  expect(screen.getByText("Huerto Online")).toBeInTheDocument();
  expect(screen.getByText("Inicio")).toBeInTheDocument();
});

test("resalta la opción activa correctamente", () => {
  render(<Sidebar setPaginaActual={() => {}} paginaActual="carrito" />);
  expect(screen.getByText("Carrito")).toHaveClass("activo");
});

test("cambia de página al hacer clic", () => {
  const mockSetPagina = jest.fn();
  render(<Sidebar setPaginaActual={mockSetPagina} paginaActual="menu" />);
  fireEvent.click(screen.getByText("Stock"));
  expect(mockSetPagina).toHaveBeenCalledWith("stock");
});

test("contiene todas las secciones principales", () => {
  render(<Sidebar setPaginaActual={() => {}} paginaActual="menu" />);
  ["Inicio", "Stock", "Carrito", "Productos", "Cuidados", "Noticias", "Registro"].forEach((texto) =>
    expect(screen.getByText(texto)).toBeInTheDocument()
  );
});
