import React, { useState } from 'react';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica si las contraseñas coinciden
    if (password !== confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Crea un objeto con los datos del usuario
    const usuarioRegistrado = {
      nombre,
      apellido,
      email,
      usuario,
      password
    };

    // Almacena los datos del usuario en el Local Storage
    localStorage.setItem('usuarioRegistrado', JSON.stringify(usuarioRegistrado));

    // Limpia los campos del formulario
    setNombre('');
    setApellido('');
    setEmail('');
    setUsuario('');
    setPassword('');
    setConfirmarPassword('');

    alert('¡Registro exitoso!');
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <br />
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <br />
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="usuario">Nombre de Usuario:</label>
        <input
          type="text"
          id="usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <label htmlFor="confirmarPassword">Confirmar Contraseña:</label>
        <input
          type="password"
          id="confirmarPassword"
          value={confirmarPassword}
          onChange={(e) => setConfirmarPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
