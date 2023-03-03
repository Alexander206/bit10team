import React from "react";
import { Inicio } from "../pages/Inicio.jsx";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "../pages/Inicio.jsx";
import { SobreNosotros } from "../pages/SobreNosotros.jsx";
import { Registrate } from "../pages/Registrate.jsx";
import { NotFound } from "../pages/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/SobreNosotros" element={<SobreNosotros />}></Route>
      <Route path="/Login" element={<Registrate />}></Route>
      <Route path="/Registrate" element={<Registrate />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
