import React from 'react';
import { ModalReceta } from './ModalReceta.jsx';
import '../styles/components/receta.scss';

export const Receta = ({ id, name, img, video, instruction, category, ciudad, ingredient, link }) => {
  function limpiarTexto(texto) {
    if (texto === null) {
      return 'modal_1000';
    } else {
      const caracteresEspeciales = {
        á: 'a',
        é: 'e',
        í: 'i',
        ó: 'o',
        ú: 'u',
        à: 'a',
        è: 'e',
        ì: 'i',
        ò: 'o',
        ù: 'u',
        ä: 'a',
        ë: 'e',
        ï: 'i',
        ö: 'o',
        ü: 'u',
        â: 'a',
        ê: 'e',
        î: 'i',
        ô: 'o',
        û: 'u',
        ñ: 'n',
        ç: 'c',
        ß: 'ss',
        Ø: 'O',
      };
      let textoLimpio = texto.replace(/\s+/g, '');
      textoLimpio = textoLimpio.replace(/[^\w\s]/gi, '');
      textoLimpio = textoLimpio.replace(/[\W_]+/g, '');
      textoLimpio = textoLimpio.replace(/[^\p{L}\p{N}]+/gu, '');
      textoLimpio = textoLimpio.toLowerCase();
      textoLimpio = textoLimpio.replace(/[^\u00C0-\u024F]/g, (letra) => caracteresEspeciales[letra] || letra);
      return textoLimpio;
    }
  }

  const idModal = limpiarTexto(name);

  return (
    <section className='container_receta'>
      <button type='button' className='receta' data-toggle='modal' data-target={`#${idModal}`}>
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
      <ModalReceta
        key={idModal}
        id={idModal}
        name={name}
        video={video}
        instruction={instruction}
        link={link}
        ciudad={ciudad}
      />
    </section>
  );
};
