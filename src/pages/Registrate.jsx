import React from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../styles/components/Registrate.scss";
import chef from "../assets/document/chef.png";

export const Registrate = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Card>
            <Card.Header as="h5">Sign Up New User</Card.Header>
            <Card.Body className="container-card">
              <Card.Title>
                <h1 className="titulo3">Welcome</h1>
                <br></br>
                <h3 className="titulo4">
                  Here you can register to be part of <span>SabrosApp</span>
                </h3>
              </Card.Title>
              <figure>
                <img className="img-responsive" src={chef} alt="chef" />
              </figure>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicRecope">
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                  <br></br>
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="LastName" />
                  <br></br>
                  <Form.Label></Form.Label>
                  <Form.Control type="email" placeholder="E-mail" />
                  <br></br>
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="Password" />
                  <br></br>
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="Confirm Password" />
                  <br></br>
                  <Button variant="outline-danger" size="lg">REGISTER NOW</Button>{" "}
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
