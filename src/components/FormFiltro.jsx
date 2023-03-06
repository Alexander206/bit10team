import React from 'react';

export const FormFiltro = ({ ingredients, filtrerIgredients, setfiltrerIgredients }) => {
  // Función para los filtros
  const filtrer = (event) => {
    event.preventDefault();

    let data = [...filtrerIgredients, event.target.ingredient.value].filter(
      (item, index, array) => array.indexOf(item) === index,
    );
    setfiltrerIgredients(data);
    event.target.ingredient.value = '';
  };

  return (
    <form className='buscador' onSubmit={filtrer}>
      <label>
        <input name='ingredient' list='ingredientes' placeholder='What ingredients do you have?' />
        <datalist id='ingredientes'>{ingredients}</datalist>
        <button>
          <ion-icon name='search-circle-outline'></ion-icon>
        </button>
      </label>
    </form>
  );
};
