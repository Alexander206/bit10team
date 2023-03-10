import React from "react";
import linea from "../assets/img/linea.png";

export const TagetAbout = ({ profesion, name, lastname, description, img, linkedin, github }) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="informacion">
          <h2 className="titulo_profesion">{profesion}</h2>
          <h1 className="nombre_programador">
            {name} <br /> {lastname}
          </h1>
          <figure>
            <img className="img_linea" src={linea} alt="linea" />
          </figure>
          <p className="descripcion">{description}</p>
        </div>
      </div>
      <div className="col-lg-6">
        <figure>
          <img className="img_jeison" src={img} alt="jeison" />
        </figure>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <a className="a" target="_blank" href={linkedin}>
            <button className="btn_portafolio" type="button">
              <ion-icon name="briefcase-outline"></ion-icon> Portafolio
            </button>
          </a>
        </div>
        <div>
          <a className="a" target="_blank" href={github}>
            <button className="btn_portafolio_uno" type="button">
              <ion-icon name="briefcase-outline"></ion-icon> GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
