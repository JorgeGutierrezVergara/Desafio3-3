// Se transformará la función a una de tipo arrow, así
// se podrá agregar como argumento a EventListener dentro
// de una función anónima para que no sea evaluada de
// forma temprana

const ele = document.getElementById("ele1");

const pintar = (element, color = "green") =>
  (element.style.backgroundColor = color);

ele.addEventListener("click", () => pintar(ele, "yellow"));
