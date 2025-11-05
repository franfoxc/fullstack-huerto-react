import { render, screen } from "@testing-library/react";
import Menu from "../components/menu";
import "@testing-library/jest-dom";

jest.mock("../components/carrusel", () => () => <div data-testid="mock-carrusel">Carrusel Mock</div>);

test("renderiza el título principal", () => {
  render(<Menu />);
  expect(screen.getByText("🌿 Bienvenido a Huerto Online")).toBeInTheDocument();
});

test("muestra el texto de bienvenida", () => {
  render(<Menu />);
  expect(screen.getByText(/productos de huerto/i)).toBeInTheDocument();
});

test("incluye el carrusel", () => {
  render(<Menu />);
  expect(screen.getByTestId("mock-carrusel")).toBeInTheDocument();
});

test("estructura general del menú", () => {
  render(<Menu />);
  expect(screen.getByTestId("menu")).toBeInTheDocument();
});
