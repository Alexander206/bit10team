import React from "react";
import { useForm } from "react-hook-form";
import "../styles/components/crearReceta.scss"

export const CrearReceta = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
    <div className="container-create">
    <h2 className="title_new">New Recipe</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <article>
          <label className="title_recipe">New Recipe</label>
          <input className="input_recipe"
            type="text"
            {...register("newrecipe", {
              required: true,
            })}
          />
          <br />
          <label className="ingredients">Recipe Ingredients</label>
          <input className="input_ingredients"
            type="text"
            {...register("ingredients", {
              required: true,
            })}
          />
          <br />
          <label className="description">Description Recipe</label>
          <input className="input_description"
            type="text"
            {...register("description", {
              required: true,
            })}
          />
        </article>
        <input className="input_submit" type="submit" value="Add New Recipe" />
      </form>
    </div>
    </>
  );
};
