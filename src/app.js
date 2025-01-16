/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var datos = [];

const guardarCampeon = document.getElementById("guardarCampeon");
guardarCampeon.addEventListener("click", guardarDatos);

const mostrarAleatorio = document.getElementById("mostrarAleatorio");
mostrarAleatorio.addEventListener("click", mostrarAleatorioDatos);

function guardarDatos() {
  let campeonDatos = document.getElementById("campeon").value;
  let lineaDatos = document.getElementById("linea").value;
  let hechizoDatos = document.getElementById("hechizo").value;

  if (campeonDatos && lineaDatos && hechizoDatos) {
    let nuevoDato = {
      campeon: campeonDatos,
      linea: lineaDatos,
      hechizo: hechizoDatos
    };

    datos.push(nuevoDato);

    document.getElementById("campeon").value = "";
    document.getElementById("linea").value = "";
    document.getElementById("hechizo").value = "";

    console.log("Datos guardados:", datos);
  } else {
    alert("Por favor, completa todos los campos.");
  }
}
function mostrarAleatorioDatos() {
  if (datos.length > 0) {
    let campeonAleatorio =
      datos[Math.floor(Math.random() * datos.length)].campeon;
    let lineaAleatoria = datos[Math.floor(Math.random() * datos.length)].linea;
    let hechizoAleatorio =
      datos[Math.floor(Math.random() * datos.length)].hechizo;

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `
      <h3>Campeón: ${campeonAleatorio}</h3>
      <h4>Línea: ${lineaAleatoria}</h4>
      <h4>Hechizo: ${hechizoAleatorio}</h4>
    `;
  } else {
    alert("No hay datos guardados para mostrar.");
  }
}
