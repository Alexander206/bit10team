import React from 'react';

import '../styles/components/receta.scss';

export const Receta = ({ img, name, category, ingredient }) => {
  return (
    <button className='receta'>
      <figure>
        <img src={img} alt='' />
      </figure>

      <article>
        <h3>{name}</h3>
        <p>{category}</p>

        <ul>
          <li>{ingredient[0]}</li>
          <li>{ingredient[1]}</li>
          <li>{ingredient[2]}</li>
        </ul>
      </article>
    </button>
  );
};
