import React from 'react';
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../styles/components/Registrate.scss';



export const Registrate = () => {
  return (
    <>
    <Header />
    <main>
      <section>
      <Card>
      <Card.Header as="h5">Sign Up New User</Card.Header>
      <Card.Body className="container-card">
        <Card.Title>Welcome! 
          <br></br>
          Here you can register to be part of SabrosApp</Card.Title>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicRecope">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter User Name" />
        <br></br>
        <Form.Label>User LastName</Form.Label>
        <Form.Control type="text" placeholder="Enter User LastName" />
        <br></br>
        <Form.Label>User Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <br></br>
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Enter Password" />
        <br></br>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="text" placeholder="Confirm Password" />
        <br></br>
        <Button variant="danger">REGISTER NOW</Button>{' '}
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
