// Expresión de función del enunciado
let suma = function (a, b) {
  return a + b;
};

// arrow function
// suma2: Num Num -> Num
// Toma dos números y retorna su suma

const suma2 = (a, b) => a + b;

var a = suma(2, 3);
var b = suma2(2, 3);

console.log(a == b);
