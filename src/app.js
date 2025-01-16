/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var datos = [];
const guardarCampeon = document.getElementById("guardarCampeon");
guardarCampeon.addEventListener("click", guardarDatos);
function guardarDatos() {
  let campeonDatos = document.getElementById("campeon").value;
  let lineaDatos = document.getElementById("linea").value;
  let hechizoDatos = document.getElementById("hechizo").value;

  let nuevoDato = {
    campeon: campeonDatos,
    linea: lineaDatos,
    hechizo: hechizoDatos
  };

  datos.push(nuevoDato);

  document.getElementById("campeon").value = "";
  document.getElementById("linea").value = "";
  document.getElementById("hechizo").value = "";
}
