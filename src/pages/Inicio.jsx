import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { Receta } from '../components/Receta.jsx';
import imgCheft from '../assets/document/chef.png';
import '../styles/pages/inicio.scss';

export const Inicio = () => {
  const API = 'https://www.themealdb.com/api/json/v2/9973533/randomselection.php';
  const [datos, setdatos] = useState(<h1>No hay data</h1>);

  window.addEventListener('load', async () => {
    let res = await fetch(API);
    let response = await res.json();

    setdatos(
      response.meals.map((item) => {
        return (
          <Receta
            key={item.idMeal}
            img={item.strMealThumb}
            name={item.strMeal}
            description={item.strInstructions}
            ingredient={[item.strIngredient1, item.strIngredient2, item.strIngredient3, item.strIngredient4]}
          />
        );
      }),
    );
  });

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

      <Footer />
    </>
  );
};
