import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { Receta } from '../components/Receta.jsx';
import imgCheft from '../assets/document/chef.png';
import '../styles/pages/inicio.scss';

export const Inicio = () => {
  const API = 'https://www.themealdb.com/api/json/v2/9973533/randomselection.php';

  const [data, setdata] = useState([]);
  const [recetas, setrecetas] = useState(<h1>No hay data</h1>);
  const [ingredients, setingredients] = useState();
  const [filtrerIgredients, setfiltrerIgredients] = useState([]);
  const [showFiltrers, setshowFiltrers] = useState([]);

  // Vigilante a cambios en la lista
  useEffect(() => {
    let arrayTemp = [];

    // Se crea un array de la data que coincide con el filtro
    if (filtrerIgredients.length > 0) {
      arrayTemp = data.filter((item) => {
        for (let propiedad in item) {
          if (filtrerIgredients.includes(item[propiedad])) {
            return true;
          }
        }
        return false;
      });

      let filtrers = filtrerIgredients.map((item) => (
        <li>
          <button>{item}</button>
        </li>
      ));

      setshowFiltrers(filtrers);
    } else {
      arrayTemp = data;
    }

    // Creando el componente de la receta
    let listaRecetas = arrayTemp.map((item) => {
      return (
        <Receta
          key={item.idMeal}
          img={item.strMealThumb}
          name={item.strMeal}
          category={item.strCategory}
          ingredient={[item.strIngredient1, item.strIngredient2, item.strIngredient3, item.strIngredient4]}
        />
      );
    });

    // Cuardando la receta en el estado de las recetas
    setrecetas(listaRecetas);
  }, [data, filtrerIgredients]);

  // Cuando cargue windows
  window.addEventListener('load', async () => {
    // LLamado a la API
    let res = await fetch(API);
    let response = await res.json();

    // Se guarda la data de la API en 'data'
    setdata(response.meals);

    // Creando lista de ingredientes
    let resIngredients = response.meals.map((item) => [
      item.strIngredient1,
      item.strIngredient2,
      item.strIngredient3,
      item.strIngredient4,
      item.strIngredient5,
      item.strIngredient6,
      item.strIngredient7,
      item.strIngredient8,
      item.strIngredient9,
      item.strIngredient10,
      item.strIngredient11,
      item.strIngredient12,
      item.strIngredient13,
      item.strIngredient14,
      item.strIngredient15,
      item.strIngredient16,
      item.strIngredient18,
      item.strIngredient19,
      item.strIngredient20,
    ]);

    // Concatenando la lista de ingredientes
    resIngredients = [].concat(...resIngredients);

    // Eliminando items en blanco o nulos
    resIngredients = resIngredients.filter((item) => {
      if (item !== null) {
        if (item.length > 0) {
          return item;
        }
      }
    });

    // Eliminando ingredientes iguales
    resIngredients = resIngredients.filter((item, index, array) => array.indexOf(item) === index);

    // Organizando el array en orden alfabetico
    resIngredients = resIngredients.sort((a, b) => a.localeCompare(b));

    // Creando el elemento HTML para colocarlo dentro del buscador
    resIngredients = resIngredients.map((item) => <option key={item} value={item} />);

    // Guardandolo en el estado de los ingredientes
    setingredients(resIngredients);
  });

  // Función para los filtros
  const filtrer = (event) => {
    event.preventDefault();

    let data = [...filtrerIgredients, event.target.ingredient.value].filter(
      (item, index, array) => array.indexOf(item) === index,
    );

    setfiltrerIgredients(data);
  };

  return (
    <>
      <Header />
      <main className='main_inicio'>
        <section className='fondo_banner'>
          <figure>
            <h1>SABROSAPP</h1>
          </figure>
          <form className='buscador' onSubmit={filtrer}>
            <label>
              <input name='ingredient' list='ingredientes' placeholder='¿Qué ingredientes tienes?' />
              <datalist id='ingredientes'>{ingredients}</datalist>
              <button>
                <ion-icon name='search-circle-outline'></ion-icon>
              </button>
            </label>
          </form>
        </section>

        <section className='categorias'>
          <article>
            <figure>
              <figcaption></figcaption>
              <img src={imgCheft} alt='' />
            </figure>
          </article>

          <article className=''>
            <ul className='ingredients'>{showFiltrers}</ul>
          </article>
        </section>

        <section className='recetas' id='recetas'>
          {recetas}
        </section>
      </main>

      <Footer />
    </>
  );
};
