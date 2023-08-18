import { useState } from "react";
import "./App.css";
import Boton from "./components/Boton";
import BotonEspecial from "./components/BotonEspecial";
import Pantalla from "./components/Pantalla";
import BotonLimpiar from "./components/BotonLimpiar";
import PiePagina from "./components/Footer";
import {
  derivative,
  e,
  evaluate,
  factorial,
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
      setInput("" + evaluate(input));
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
      setInput("" + derivative(input, "x"));
      //console.log(input);
    } else {
      alert("No hay valores para derivar!!!");
    }
  };
  const quitarValor = () => {
    if (input) {
      setInput(input.substring(0, input.length - 1));
      //console.log(input);
    } else {
      alert("No hay valores para quitar!!!");
    }
  };
  const calculoFactorial = () => {
    if (input) {
      setInput(input+"!");
    } else {
      alert("No hay valores para el factorial!!!");
    }
  };
  return (
    <>
      <div className="Instrucciones">
        <h2>Calculadora Científica</h2>
        <p>Diseñada por: Ing. Alfredo Valverde Aranibar</p>
        <h3>Instruciones de uso</h3>
        <ul>
          <h4>funciones que requieren del igual "="</h4>
          <li>Las funciones básicas de "+,-,*,/,10^,e^,^(1/3),n!" requieren del igual</li>
          <li>sin,cos,tan se usan de la siguiente forma:
            ejemplo sin(45deg) y luego igual
          </li>
          <li>^ sirve para elevar un numero por ejemplo: 2^2 = 4</li>
          <h4>funciones que no requiren del igual</h4>
          <li>Rnd: redondea el numero a 2 decimales</li>
          <li>Log,Ln requiren de un valor para calcular</li>
          <li>Sqrt es la raiz y requiere de un valor para calcular</li>
          <li>+/- cambia el signo del numero</li>
          <li>d / dx deriva la funcion respecto de x requiere de una funcion en x, por ejemplo: x^2+x</li>
          <li>i agrega la letra i de numero complejo a los valores</li>
          <li>del borra el ultimo valor introducido hasta vaciar la pantalla</li>
          <li>Limpiar Pantalla deja limpia la pantalla para volver a empezar</li>
        </ul>
      </div>
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
              <BotonEspecial manejarClick={agregarValor}>10^</BotonEspecial>
              <BotonEspecial manejarClick={agregarValor}>e^</BotonEspecial>
              <BotonEspecial manejarClick={agregarValor}>^(1/3)</BotonEspecial>
              <BotonEspecial manejarClick={calculoFactorial}>n!</BotonEspecial>
            </div>
            <div className="fila-especial">
              <BotonEspecial manejarClick={derivar}>d / dx</BotonEspecial>
              <BotonEspecial manejarClick={agregarValor}>x</BotonEspecial>
              <BotonEspecial manejarClick={agregarValor}>i</BotonEspecial>
              <BotonEspecial manejarClick={quitarValor}>del</BotonEspecial>
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
      <PiePagina>
        
      </PiePagina>
    </>
  );
}

export default App;
