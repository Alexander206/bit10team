import React from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { useState } from "react"

export const TableRecipes = () => {
  // Simulated Data RECIPES
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "test1",
      description: "test1",
      ingredients: "test1",
    },
    {
      id: 2,
      name: "test2",
      description: "test2",
      ingredients: "test2",
    },
    {
      id: 3,
      name: "test3",
      description: "test3",
      ingredients: "test3",
    },
    {
      id: 4,
      name: "test4",
      description: "test4",
      ingredients: "test4",
    },
    {
      id: 5,
      name: "test5",
      description: "test5",
      ingredients: "test5",
    },
  ]);

  const handleDelete = (id) => {
    // Eliminamos el elemento con el id dado
    setRecipes(recipes.filter(function (item) {
      return item.id !== id;
    }));
  };
  return (
    <>
      <Header />
      <main>
        <section>
          <>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Recipe Name</th>
                  <th>Ingredients</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recipes.map((recipe) => (
                  <tr key={recipe.id}>
                    <td>{recipe.id}</td>
                    <td>{recipe.name}</td>
                    <td>{recipe.description}</td>
                    <td>{recipe.ingredients}</td>
                    <td>
                      {" "}
                      <button onClick={() => handleDelete(recipe.id)}>
                        Delete
                      </button>
                      <button onClick={() => handleEdit(recipe.id)}>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        </section>
      </main>
      <Footer />
    </>
  );
};
