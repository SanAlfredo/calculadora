import React, { Component } from "react";
import whatsapp from "../image/WhatsApp.svg.webp";
import facebook from "../image/Facebook.svg.webp";
import github from "../image/Octicons-mark-github.svg.png";
import { render } from "react-dom";

class PiePagina extends Component {
  render() {
    return (
      <>
        <div>
          <h4>Copyright (2023). Ing. Alfredo Valverde Aranibar</h4>
          <h3>Comuniquese a mis redes sociales o vea mi trabajo en github</h3>
          <div>
            <a>
              <img src={whatsapp} style={{ width: 100 }}></img>
            </a>
            <a href="https://www.facebook.com/sanalfredo/?viewas=100000686899395" target="_blank">
            <img src={facebook} style={{ width: 100 }}></img>
            </a>
            <a href="https://github.com/SanAlfredo/calculadora" target="_blank">
            <img src={github} style={{ width: 100 }}></img>
            </a>
            
            <h5>+591 - 67996741    ----------------------------------------------</h5>
          </div>
        </div>
      </>
    );
  }
}
export default PiePagina;
