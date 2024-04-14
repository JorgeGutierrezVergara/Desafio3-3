// Declaración de función del enunciado
function example(a, b, c) {
  return a + b + c;
}

// Expresión de función
// example2: Num Num Num -> Num
// Toma tres números y retorna su suma
const example2 = function (a, b, c) {
  return a + b + c;
};

var a = example(1, 2, 3);
var b = example2(1, 2, 3);

console.log(a == b);
