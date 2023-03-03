import React from 'react';

import '../styles/components/receta.scss'

export const Receta = ({ img, name, description, category }) => {
  return (
    <article className='receta'>
      <figure>
        <img src={img} alt='' />
      </figure>

      <article>
        <h3>{name}</h3>
        <p>{description}</p>

        <ul>
          <li>{category}</li>
        </ul>
      </article>
    </article>
  );
};
