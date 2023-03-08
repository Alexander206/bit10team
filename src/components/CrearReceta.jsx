import React from "react";
import { useForm } from "react-hook-form";
import "../styles/components/crearReceta.scss";
import { useEffect, useState } from "react";

export const CrearReceta = () => {
  //ESTE DEBERÍA SER EL ARREGLO DE TODOS LOS RECIPES ACTUALES
  //AÑADIR STATES PARA QUE SE SINCRONICE EL ARREGLO DE TODOS LOS ITEMS CON LOS NUEVOS GENERADOS
  const [recipes, setRecipes] = useState([]);
  const { register, handleSubmit } = useForm();

  let id = 0;

  const onSubmit = (data) => {
    console.log(data);
    id++;
    data.id = id;
    //AÑADIR NUEVO RECORD A LA LISTA DE RECIPES ACTUALES
    recipes.push(data);
    console.log(recipes);
  };

  return (
    <>
      <div className="container-create">
        <h2 className="title_new">New Recipe</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <article>
            <label className="title_recipe">New Recipe</label>
            <input
              className="input_recipe"
              type="text"
              {...register("newrecipe", {
                required: true,
              })}
            />
            <br />
            <label className="ingredients">Recipe Ingredients</label>
            <input
              className="input_ingredients"
              type="text"
              {...register("ingredients", {
                required: true,
              })}
            />
            <br />
            <label className="description">Description Recipe</label>
            <input
              className="input_description"
              type="text"
              {...register("description", {
                required: true,
              })}
            />
          </article>
          <input
            className="input_submit"
            type="submit"
            value="Add New Recipe"
          />
        </form>
      </div>
    </>
  );
};
