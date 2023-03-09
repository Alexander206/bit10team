import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { Receta } from '../components/Receta.jsx';
import { FormFiltro } from '../components/FormFiltro.jsx';
import imgCheft from '../assets/document/chef.png';
import '../styles/pages/inicio.scss';

export const Inicio = () => {
  const API = 'https://www.themealdb.com/api/json/v2/9973533/randomselection.php';

  const btnCreate = (
    <Receta
      key='create_recipe'
      id='create_recipe'
      name='New recipe'
      img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEkJyJjmf3mAb3ovVger1-iynxPG4Ke9e1Q&usqp=CAU'
      category='New category'
      ingredient={['Ingredient 1', 'Ingredient 2', 'Ingredient 3', 'Ingredient 4']}
      instruction='I am a recipe and I should have a few simple steps that are easy to follow. Whether you are a beginner or an experienced cook, my instructions will guide you through the process of creating a delicious dish that you can enjoy with your friends and family.'
      video=''
      link=''
      ciudad='Country'
    />
  );

  const [data, setdata] = useState([]);
  const [recetas, setrecetas] = useState(<h1>No hay data</h1>);
  const [ingredients, setingredients] = useState();
  const [filtrerIgredients, setfiltrerIgredients] = useState([]);
  const [showFiltrers, setshowFiltrers] = useState([]);

  /* Modal */
  const [show, setShow] = useState(false);

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
    } else {
      arrayTemp = data;
    }

    let filtrers = filtrerIgredients.map((item) => (
      <li key={item}>
        <button onClick={() => deleteFiltrer(item)}>{item}</button>
      </li>
    ));

    setshowFiltrers(filtrers);

    // Creando el componente de la receta
    let listaRecetas = arrayTemp.map((item) => {
      return (
        <Receta
          key={item.idMeal}
          id={item.idMeal}
          name={item.strMeal}
          img={item.strMealThumb}
          category={item.strCategory}
          ingredient={[
            item.strIngredient1,
            item.strIngredient2,
            item.strIngredient3,
            item.strIngredient4,
            item.strIngredient5,
          ]}
          instruction={item.strInstructions}
          video={item.strYoutube}
          link={item.strSource}
          ciudad={item.strArea}
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

  // Función para borrar el filtro
  const deleteFiltrer = (name) => {
    let array = filtrerIgredients.filter((item) => item !== name);
    setfiltrerIgredients(array);
  };

  return (
    <>
      <Header />
      <main className='main_inicio'>
        <section className='fondo_banner'>
          <figure>
            <h1>FOODIES APP</h1>
          </figure>
          <FormFiltro
            ingredients={ingredients}
            filtrerIgredients={filtrerIgredients}
            setfiltrerIgredients={setfiltrerIgredients}
          />
        </section>

        <section className='categorias'>
          <article>
            <figure>
              <figcaption>Ingredients</figcaption>
            </figure>
          </article>

          <article className=''>
            <ul className='ingredients'>{showFiltrers.length ? showFiltrers : <button>All recipes</button>}</ul>
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
