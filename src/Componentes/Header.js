import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const Header = ({ mostrar, cambiarOjo }) => {
  const toggleCompletada = () => {
    cambiarOjo(!mostrar);
  };

  return (
    <header className="header">
      <h1 className="header__titulo">Lista de tareas</h1>

      {mostrar ? (
        <button className="header__boton" onClick={() => toggleCompletada()}>
          No mostrar completadas
          <FontAwesomeIcon icon={faEyeSlash} className="header__icono1" />
        </button>
      ) : (
        <button className="header__boton" onClick={() => toggleCompletada()}>
          Mostrar completadas
          <FontAwesomeIcon icon={faEye} className="header__icono1" />
        </button>
      )}
    </header>
  );
};

export default Header;
