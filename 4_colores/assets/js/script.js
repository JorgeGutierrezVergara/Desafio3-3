// Se obtienen los cuatro divs
const div1 = document.getElementById("div-1");
const div2 = document.getElementById("div-2");
const div3 = document.getElementById("div-3");
const div4 = document.getElementById("div-4");
const key = document.getElementById("key");

// Función para pintar, extraída del apartado 3
const pintar = (element, color = "green") =>
  (element.style.backgroundColor = color);

// Función para agregar elementos, extraída de la guía de estudio
const agregarElemento = (color) => {
  contenedor = document.getElementById("container");
  nuevoElemento = document.createElement("div");
  nuevoElemento.style.backgroundColor = color;
  nuevoElemento.style.height = "200px";
  nuevoElemento.style.width = "200px";
  contenedor.appendChild(nuevoElemento);
};

// Se agregan los eventListeners a cada elemento
div1.addEventListener("click", () => pintar(div1, "black"));
div2.addEventListener("click", () => pintar(div2, "black"));
div3.addEventListener("click", () => pintar(div3, "black"));
div4.addEventListener("click", () => pintar(div4, "black"));

var color;

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "pink";
    pintar(key, color);
  } else if (event.key === "s") {
    color = "orange";
    pintar(key, color);
  } else if (event.key === "d") {
    color = "aqua";
    pintar(key, color);
  } else if (event.key === "q") {
    color = "purple";
    agregarElemento(color);
  } else if (event.key === "w") {
    color = "grey";
    agregarElemento(color);
  } else if (event.key === "e") {
    color = "brown";
    agregarElemento(color);
  } else {
    console.log("color no determinado");
  }
});
