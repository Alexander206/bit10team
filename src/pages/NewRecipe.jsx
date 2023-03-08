import React from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "../styles/components/NewRecipe.scss";
import { CrearReceta } from "../components/CrearReceta.jsx";

export const NewRecipe = () => {
  return (
    <>
      <Header />
      <CrearReceta />
      <Footer/>
    </>
  );
};
