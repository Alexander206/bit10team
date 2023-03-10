import React, { useState } from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import chef from "../assets/document/chef.png";
export const Registrate = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));

      console.log("Saved in Local Storage");
      alert("Registration Succesful!");
    }
  }
  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleClick() {
    setLogin(!Login);
  }

  return (
    
    
    <div className= "contenedor1">

      <form onSubmit={handleSubmit}>
      <Header />
      
        <span className="titulo"></span>
        
        <h3 className="titulo4">
                  Here you can register to be part of <span>FoodiesApp</span>
                </h3>
                <figure>
                <img className="img-responsive" src={chef} alt="chef" />
              </figure>
                
        <div className="form-group">
          
          <label></label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter full name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
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
            type= {showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setPassword(event.target.value)}
          />
          </div>
        </div>
        <div className="input-group-append">
          
        </div>
        <br/>
        <button type="submit" className="btn btn-success btn-lg btn-block"style={{ fontSize: "2rem" }}>
          Register
        </button>
        <br/>


        {flag && (
          <Alert color="primary" variant="danger">
            Please Fill Every Field
          </Alert>
        )}
      
      </form>
      <br/>
      <Footer/>
      
    </div>
    
  );
};
