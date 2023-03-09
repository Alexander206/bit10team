import React from "react";
import { Inicio } from "../pages/Inicio.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SobreNosotros } from "../pages/SobreNosotros.jsx";
import { NewRecipe } from "../pages/NewRecipe.jsx";
import { Registrate } from "../pages/Registrate.jsx";
import { Login } from "../pages/Login.jsx";
import { TableRecipes } from "../pages/TableRecipes.jsx";
import { NotFound } from "../pages/NotFound.jsx";

function App() {
  //INICIALIZAR RECIPES (1 RECIPIENTE)
  const initialRecipe = [
    {
      id: 1,
      name: "Rice pudding recipe",
      ingredients: "3 cups rice, 1 liter of milk, Sugar to taste.",
      description:
        "We will cook 3 cups rice 2 cups water, half-baked when we pour 1 liter of milk and a can of condensed milk. We add sugar to taste, it is ideal to add half a teaspoon of cinnamon and a teaspoon of cloves hope it is the desired point moment, when not completely dry and is cooked rice, remove from heat so it can cool, as soon as it has cooled it is ready for consumption. "
    },
  ];
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
