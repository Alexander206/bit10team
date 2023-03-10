import React, { useState } from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/components/Registrate.scss";
import chef from "../assets/document/chef.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const storedEmail = localStorage.getItem("Email");
    const storedPassword = localStorage.getItem("Password");

    if (email === storedEmail && password === JSON.parse(storedPassword)) {
      setLoginError(false);
      alert("Login successful!");
      // Aquí podrías redirigir al usuario a otra página o hacer cualquier otra acción que desees
    } else {
      setLoginError(true);
    }
  }

  return (
    <div className= "contenedor1">
      <Header />
      <h1 className="titulo">Please enter your credentials to log In</h1>
      <figure>
                <img className="img-responsive" src={chef} alt="chef" />
              </figure>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label></label>
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-danger btn-lg btn-block lg" style={{ fontSize: "2rem" }}>
        Login
        </button>
        {loginError && (
          <p className="text-danger mt-4">Incorrect email or password.</p>
        )}
      </form>
      <br />
      <Footer />
    </div>
  );
};

