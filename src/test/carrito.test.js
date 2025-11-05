import { render, screen, fireEvent } from "@testing-library/react";
import Carrito from "../components/carrito";
import "@testing-library/jest-dom";

const carritoMock = [{ id: 1, nombre: "Pala", precio: 1000, cantidad: 2 }];

test("muestra mensaje vacío", () => {
  render(<Carrito carrito={[]} setCarrito={() => {}} eliminarDelCarrito={() => {}} />);
  expect(screen.getByTestId("carrito-vacio")).toBeInTheDocument();
});

test("renderiza productos del carrito", () => {
  render(<Carrito carrito={carritoMock} setCarrito={() => {}} eliminarDelCarrito={() => {}} />);
  expect(screen.getByText("Pala")).toBeInTheDocument();
});

test("aumenta y disminuye cantidad", () => {
  const mockSet = jest.fn();
  render(<Carrito carrito={carritoMock} setCarrito={mockSet} eliminarDelCarrito={() => {}} />);
  fireEvent.click(screen.getByTestId("btn-mas-1"));
  fireEvent.click(screen.getByTestId("btn-menos-1"));
  expect(mockSet).toHaveBeenCalledTimes(2);
});

test("llama a eliminarDelCarrito", () => {
  const mockEliminar = jest.fn();
  render(<Carrito carrito={carritoMock} setCarrito={() => {}} eliminarDelCarrito={mockEliminar} />);
  fireEvent.click(screen.getByTestId("btn-borrar-1"));
  expect(mockEliminar).toHaveBeenCalledWith(1);
});
