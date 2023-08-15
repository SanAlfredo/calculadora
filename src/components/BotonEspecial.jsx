import React from "react";
import "../styles/BotonEspecial.css";

function BotonEspecial(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  return (
    <button
      className={`boton-contenedores ${
        esOperador(props.children) ? "operadore" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </button>
  );
}

export default BotonEspecial;