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
    {
      id: 2,
      name: "Pizza Pepperoni",
      ingredients: "Tomato, 1 pizza mass, Mozzarella",
      description:
        "First, on the mass, we spread a layer of tomato paste with the help of a knife. Then, we placed a layer of Mozzarella. Later, we cut 20 slices of pepperoni and uniformly distributed. We add a few pieces of salami. By last, we sprinkle grated cheese and oregano to our taste. We bake for 10 to 15 minutes at 180° and ready. "
    },
    {
      id: 3,
      name: "Chunky Pancakes",
      ingredients: "1 cup all-purpose flour, 3 teaspoons baking powder (or a sachet of Royal). 1/4 teaspoon salt",
      description:
        "Combine flour, baking powder and salt. In a separate bowl, whisk together the skimmed milk, melted butter, eggs, sugar, and vanilla. Make a well in the centre of the dry ingredients and gently stir in the wet ingredients. Fold in the banana, chocolate chips, and nuts. "
    },
    {
      id: 4,
      name: "Mac and Cheese",
      ingredients: "1/4 cup butter, 1/4 cup all-purpose flour. 1/2 teaspoon salt ",
      description:
        "Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes. Drain. "
    },
    {
      id: 5,
      name: "Sloppy Joes",
      ingredients: "1 cup lentils, 2 onions, diced, 1 pound lean ground beef ",
      description:
        "Heat a large nonstick skillet over medium heat. Add onions; cook and stir until softened, 3 to 5 minutes. Add ground beef and green bell pepper; cook and stir until browned, about 8 minutes."
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
