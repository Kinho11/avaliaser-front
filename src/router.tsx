import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login/Login";
import { NotFound } from "./pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
