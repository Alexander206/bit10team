import React from "react";
import "../styles/components/header.scss";

export const Header = () => {
  return (
      <header className="header">
        <a className="inicio" href="/">
          Inicio
        </a>
        <a href="/sobre">Sobre Nosotros</a>
        <div>
          <a className="btn_registro" href="/register">
            Registrate
          </a>
          <a className="btn_iniciar" href="/login">
            Iniciar Sesión
          </a>
        </div>
      </header>
  );
};
