import React from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../styles/components/Login.scss";
import chef from "../assets/document/chef.png";

export const Login = () => {
  
  return (
    <>
      <Header />
      <main>
        <section>
          <Card>
            <Card.Header as="h5"></Card.Header>
            <Card.Body className="container_cardlogin">
              <Card.Title>
                <h1 className="titulo1">
                  Welcome to <span>FoodiesApp</span>
                </h1>
                <h3 className="titulo2">
                  Please enter your credentials to log In.
                </h3>
              </Card.Title>
              <figure>
                <img className="img-responsive" src={chef} alt="chef" />
              </figure>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicRecope">
                  <Form.Label></Form.Label>
                  <Form.Control type="email" placeholder="Username" />
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="Password" />
                  <br></br>
                  <Button variant="outline-success" size="lg">LOGIN</Button>{" "}
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
};
