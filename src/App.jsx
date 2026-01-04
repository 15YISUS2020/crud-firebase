
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import InsertarDatos from "./pages/insertarDatos";
import ConsultarDatos from "./pages/consultarDatos";
import EliminarDatos from "./pages/eliminarDatos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/insertar" element={<InsertarDatos />} />
        <Route path="/consultar" element={<ConsultarDatos />} />
        <Route path="/eliminar" element={<EliminarDatos />} />
      </Routes>
    </BrowserRouter>
  );
}
