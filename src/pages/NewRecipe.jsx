import React from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import '../styles/components/NewRecipe.scss';

export const NewRecipe = () => {
  return (
      <>
      <Header />
      <main className="main_inicio">
      <section className="container">
      <Card className="container-card">
      {/* <Card.Img className="img_card" variant="top" src="hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRygaqc9_wrQFcORSTaVn8rek6FnRVY44qOAq-oDNDVtSe0XsyGM6yv4ip2UNnXQcl8AH4&usqp=CAU"/> */}
      <Card.Header as="h5">Form New Recipe</Card.Header>
      <Card.Body>
        <Card.Title>Welcome! 
          <br></br>
          Here you can create the ideas you have for new recipes</Card.Title>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicRecope">

        <Form.Label>Name Recipe</Form.Label>
        <Form.Control type="text" placeholder="Enter Name Recipe" />
        <br></br>
        <Form.Label>Category Recipe</Form.Label>
        <Form.Control type="text" placeholder="Enter Category Recipe (Example Dessert)" />
        <br></br>
        <Form.Label>Recipe Ingredients</Form.Label>
        <Form.Control type="text" placeholder="Enter Recipe Ingredients (Maximum 3 separated , )" />
        <br></br>
        <Form.Label>Location Recipe</Form.Label>
        <Form.Control type="text" placeholder="Enter Location Recipe (A city or Country )" />
        <br></br>
        <Form.Label>Description Recipe</Form.Label>
        <Form.Control as="textarea" placeholder="Enter Description Recipe (Recipe step by step)" />
        <br></br>
        <Form.Label>Video Recipe</Form.Label>
        <Form.Control type="textarea" placeholder="Enter Link Video Recipe (Link)" />



        
        <br></br>
        <Button variant="secondary">Save name new recipe</Button>{' '}
      </Form.Group>
    </Form>
      </Card.Body>
    </Card>
      </section>
      </main>

      <Footer/>
      </>
  );
};