import React from "react";

import "../styles/components/receta.scss";

export const Receta = ({ img, name, description, ingredient }) => {
  return (
    <article className="receta">
      <figure>
        <img src={img} alt="" />
      </figure>

      <article>
        <h3>{name}</h3>
        <p>{description}</p>

        <ul>
          <li>{ingredient[0]}</li>
          <li>{ingredient[1]}</li>
          <li>{ingredient[2]}</li>
        </ul>
      </article>
    </article>
  );
};
