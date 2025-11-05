import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import Stock from "../components/stock";
import "@testing-library/jest-dom";

jest.useFakeTimers();

test("llama a agregarAlCarrito y muestra mensaje", async () => {
  const mockAgregar = jest.fn();
  render(<Stock agregarAlCarrito={mockAgregar} />);

  //  1. Seleccionar categoría
  fireEvent.click(screen.getByTestId("cat-semillas"));

  //  2. Agregar producto
  fireEvent.click(screen.getByTestId("btn-agregar-3"));

  // Verifica que la función se haya llamado
  expect(mockAgregar).toHaveBeenCalledTimes(1);
  expect(screen.getByTestId("mensaje")).toHaveTextContent(
    "Semillas de Tomate agregado al carrito"
  );

  //  3. Usamos act() para avanzar el tiempo del setTimeout
  await act(async () => {
    jest.advanceTimersByTime(3000);
  });

  //  4. Verificamos que el mensaje desaparece
  await waitFor(() =>
    expect(screen.queryByTestId("mensaje")).not.toBeInTheDocument()
  );
});
