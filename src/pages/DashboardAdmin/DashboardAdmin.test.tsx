import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { DashboardAdmin } from "./DashboardAdmin";

test("Verifica se existe o titulo Dashboard Colaboradores", () => {
  render(<Router><DashboardAdmin /></Router>);

  const titulo = screen.getByText("Dashboard Colaboradores");
  expect(titulo).toBeInTheDocument();
});

