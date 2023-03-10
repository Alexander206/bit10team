import React from "react";
import { Inicio } from "../pages/Inicio.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SobreNosotros } from "../pages/SobreNosotros.jsx";
import { NewRecipe } from "../pages/NewRecipe.jsx";
import { Registrate } from "../pages/Registrate.jsx";
import { Login } from "../pages/Login.jsx";
import { TableRecipes } from "../pages/TableRecipes.jsx";
import { NotFound } from "../pages/NotFound.jsx";

import initialRecipe from "../data/recipes.json";

function App() {
  //MANEJAR ESTRUCTURA JSON (Común en APIs)
  localStorage.setItem("recipes", JSON.stringify(initialRecipe));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/SobreNosotros" element={<SobreNosotros />}></Route>
        <Route path="/NewRecipe" element={<NewRecipe />}></Route>
        <Route path="/TableRecipes" element={<TableRecipes />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Registrate" element={<Registrate />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
