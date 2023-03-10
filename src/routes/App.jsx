import React, { useState } from "react";
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

  const [page, setpage] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/SobreNosotros" element={<SobreNosotros page={page} setpage={setpage} />}></Route>
        <Route path="/NewRecipe" element={<NewRecipe page={page} setpage={setpage} />}></Route>
        <Route path="/TableRecipes" element={<TableRecipes page={page} setpage={setpage} />}></Route>
        <Route path="/Login" element={<Login page={page} setpage={setpage} />}></Route>
        <Route path="/Registrate" element={<Registrate page={page} setpage={setpage} />}></Route>
        <Route path="*" element={<NotFound page={page} setpage={setpage} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
