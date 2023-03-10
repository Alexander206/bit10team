import React from "react";

import "../styles/components/Loading__Page.scss";

const Loading__Page = () => {
  window.addEventListener("load", () => {
    document.querySelector(".Loading__Page").id = "pagina__cargada";
    let element = document.getElementById("pagina__cargada");
    element.addEventListener("animationend", () => {
      element.className = "Loading__Page off";
    });
  });

  return (
    <div className="Loading__Page" id="">
      <div className="spinner-grow text-light" role="status">
        <span className="visually-hidden"></span>
      </div>
      <span className="Loading__text">Cargando...</span>
    </div>
  );
};

export default Loading__Page;
