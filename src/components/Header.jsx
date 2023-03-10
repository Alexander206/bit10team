import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/document/chef.png";
import { Link } from "react-router-dom";
import "../styles/components/header.scss";

export const Header = () => {
  return (
    <>
      <header className="header">
        <Navbar className="navbar" expand="lg">
          <Container>
            <figure className="logo">
              <img className="img-chef" src={logo} alt="chef" />
              <h1 className="titulo_foodiesapp">
                Foodies<span>App</span>
              </h1>
            </figure>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navegacion">
              <Nav className="me-auto">
                <Link className="inicio" to="/">
                  {" "}
                  Home{" "}
                </Link>
                <Link className="sobre" to="/NewRecipe">
                  {" "}
                  NewRecipe{" "}
                </Link>
                <Link className="sobre" to="/TableRecipes">
                  {" "}
                  Table Recipes{" "}
                </Link>
                <Link className="sobre" to="/SobreNosotros">
                  {" "}
                  About{" "}
                </Link>
              </Nav>
              <section className="botones">
                <Link className="registrar" to="/Registrate">
                  Register{" "}
                </Link>
                <Link className="iniciar" to="/Login">
                  {" "}
                  Login{" "}
                </Link>
              </section>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};
