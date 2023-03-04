import React from "react";
import { Inicio } from "../pages/Inicio.jsx";
import { Form } from "../components/Form.jsx";
import { FormEliminar } from "../components/FormEliminar.jsx"


function App() {
  return (
    <>
      <Inicio />;
      <Form />;
      <FormEliminar />
    </>
  );
}

export default App;
