import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header.jsx';
import { Receta } from '../components/Receta.jsx';
import imgCheft from '../assets/document/chef.png';
import '../styles/pages/inicio.scss';

export const Inicio = () => {
  const API = 'https://fakestoreapi.com/products';
  const [recetas, setrecetas] = useState([]);
  const [datos, setdatos] = useState(<h1>No hay data</h1>);

  window.addEventListener('load', async () => {
    let res = await fetch(API);
    let response = await res.json();

    setrecetas(response);
  });

  useEffect(() => {
    let data = recetas.map((item) => {
      return (
        <Receta
          key={item.id}
          img={item.image}
          name={item.title}
          description={item.description}
          category={item.category}
        />
      );
    });

    setdatos(data);
  }, [recetas]);

  return (
    <>
      <Header />
      <main className='main_inicio'>
        <section className='fondo_banner'>
          <figure>
            <h1>SABROSAP</h1>
          </figure>
        </section>
        <section className='categorias'>
          <article>
            <figure>
              <figcaption></figcaption>
              <img src={imgCheft} alt='' />
            </figure>
          </article>

          <article className=''>
            <ul>
              <li>
                <button> Alimento</button>
              </li>

              <li>
                <button> Alimento</button>
              </li>

              <li>
                <button> Alimento</button>
              </li>
            </ul>
          </article>
        </section>

        <section className='recetas' id='recetas'>
          {datos}
        </section>
      </main>

      <footer>Adriana</footer>
    </>
  );
};
