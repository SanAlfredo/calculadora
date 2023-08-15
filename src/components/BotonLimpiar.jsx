import React from "react";
import "../styles/BotonLimpiar.css";

function BotonLimpiar(props) {
  return (
    <div className="boton-limpiar" onClick={props.manejarLimpiar}>
      {props.children}
    </div>
  );
}

export default BotonLimpiar;
