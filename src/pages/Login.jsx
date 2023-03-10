import React from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../styles/pages/Login.scss";

export const Login = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Card>
            <Card.Header as="h5">Login User</Card.Header>
            <Card.Body className="container-cardlogin">
              <Card.Title>
                Welcome!
                <br></br>
                Here you can log in of SabrosApp
              </Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicRecope">
                  <Form.Label>User Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <br></br>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" placeholder="Enter Password" />
                  <br></br>
                  <Button variant="success">LOGIN</Button>{" "}
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
