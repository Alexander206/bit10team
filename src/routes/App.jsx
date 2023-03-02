import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from "../pages/Inicio.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Inicio />} />
        <Route exact path='/sobre' element={<SobreNosotros />} />
        <Route exact path='/login' element={<Registrate />} />
        <Route exact path='/registrer' element={<Registrate />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
