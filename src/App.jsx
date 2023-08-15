import { useState } from "react";
import "./App.css";
import Boton from "./components/Boton";
import BotonEspecial from "./components/BotonEspecial";
import Pantalla from "./components/Pantalla";
import BotonLimpiar from "./components/BotonLimpiar";
import {
  derivative,
  e,
  evaluate,
  log,
  log10,
  round,
  sqrt,
} from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const agregarValor = (valor) => {
    setInput(input + valor);
  };
  const calcularRes = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("No hay valores para calcular!!!");
    }
  };
  const redondear = () => {
    if (input) {
      setInput(round(input, 2));
    } else {
      alert("No hay valores para redondear!!!");
    }
  };
  const raiz = () => {
    if (input) {
      if (input < 0) {
        setInput(-1 * input);
        setInput(sqrt(input) + "");
      } else {
        setInput(sqrt(input));
      }
    } else {
      alert("No hay valores para sacar raiz!!!");
    }
  };
  const loga1 = () => {
    if (input) {
      if (input < 0) {
        alert("No se puede sacar el logaritmo de un numero negativo");
        setInput("");
      } else {
        setInput(log10(input));
      }
    } else {
      alert("No hay valores para sacar el logaritmo base 10!!!");
    }
  };
  const loga2 = () => {
    if (input) {
      if (input < 0) {
        alert("No se puede sacar el logaritmo de un numero negativo");
        setInput("");
      } else {
        setInput(log(input, e));
      }
    } else {
      alert("No hay valores para sacar el logaritmo neperiano!!!");
    }
  };
  const cambio = () => {
    if (input) {
      setInput(-1 * input);
    } else {
      alert("No hay valores para cambiar signo!!!");
    }
  };
  const derivar = () => {
    if (input) {
      setInput(derivative(input,'x'));
    } else {
      alert("No hay valores para derivar!!!");
    }
  };
  return (
    <>
      <h1>Calculadora</h1>
      <div className="App">
        <div className="contenedor-calcu">
          <Pantalla input={input} />
          <div className="fila">
            <BotonLimpiar manejarLimpiar={() => setInput("")}>
              Limpiar Pantalla
            </BotonLimpiar>
          </div>
          <div className="contenedor-especial">
            <div className="fila-especial">
              <BotonEspecial manejarClick={agregarValor}>sin</BotonEspecial>
              <BotonEspecial manejarClick={agregarValor}>cos</BotonEspecial>
              <BotonEspecial manejarClick={agregarValor}>tan</BotonEspecial>
              <BotonEspecial manejarClick={agregarValor}>^</BotonEspecial>
            </div>
            <div className="fila-especial">
              <BotonEspecial manejarClick={redondear}>Rnd</BotonEspecial>
              <BotonEspecial manejarClick={agregarValor}>(</BotonEspecial>
              <BotonEspecial manejarClick={agregarValor}>)</BotonEspecial>
              <BotonEspecial manejarClick={agregarValor}>deg</BotonEspecial>
            </div>
            <div className="fila-especial">
              <BotonEspecial manejarClick={loga1}>Log</BotonEspecial>
              <BotonEspecial manejarClick={loga2}>Ln</BotonEspecial>
              <BotonEspecial manejarClick={raiz}>Sqrt</BotonEspecial>
              <BotonEspecial manejarClick={cambio}>+ / -</BotonEspecial>
            </div>
            <div className="fila-especial">
              <BotonEspecial manejarClick={derivar}>dx</BotonEspecial>
              <BotonEspecial manejarClick={agregarValor}>x</BotonEspecial>
              <BotonEspecial manejarClick={agregarValor}>i</BotonEspecial>
              <BotonEspecial manejarClick={agregarValor}>,</BotonEspecial>
            </div>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarValor}>7</Boton>
            <Boton manejarClick={agregarValor}>8</Boton>
            <Boton manejarClick={agregarValor}>9</Boton>
            <Boton manejarClick={agregarValor}>+</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarValor}>4</Boton>
            <Boton manejarClick={agregarValor}>5</Boton>
            <Boton manejarClick={agregarValor}>6</Boton>
            <Boton manejarClick={agregarValor}>-</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarValor}>1</Boton>
            <Boton manejarClick={agregarValor}>2</Boton>
            <Boton manejarClick={agregarValor}>3</Boton>
            <Boton manejarClick={agregarValor}>*</Boton>
          </div>
          <div className="fila">
            <Boton manejarClick={agregarValor}>0</Boton>
            <Boton manejarClick={agregarValor}>.</Boton>
            <Boton manejarClick={calcularRes}>=</Boton>
            <Boton manejarClick={agregarValor}>/</Boton>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
