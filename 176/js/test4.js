// Episodio 73 en adelante

// ----------- Ejercicio 6 ------------
// Crear una funcio que reciba un array con datos y me regrese unos de estos datos de forma aleatoria

function checkArray(cadena){
const random = Math.floor(Math.random() * cadena.length);
    return cadena[random];
}

console.log(checkArray([1,2,3,'a','b','c','d','e']));

// Funcion Scop() --> El lugar donde defina una variable determina si podre o no accederla

function saludar (){
    let saludo = "Hello, world in function";
    console.log(saludo);
}
saludar();
let saludo = "Hello, world";
console.log(saludo);

// Capitulo 75... No usar VAR, no siempre es la solucin y su scope es muy diferente.

// Lexical scpope del curso 76

function afuera() {
  console.log("Estamos afuera");
  const jugador = "Michael Jordan";
    function adentro(jugador) {
        return console.log(jugador)
    }
    adentro(`${jugador} 1996, ` + ` ${jugador} 1992`);
}
afuera();

//Functions expressions

const operators = function ops (a,b) {
    const suma = a - b;
    return console.log(`Esta es el resultado de la operacion realizada = ${suma}`);
}

operators(5,3);

function suma(a, b) {
    return a + b;
  }
  
  function resta(a, b) {
    return a - b;
  }
  
  function multiplicacion(a, b) {
    return a * b;
  }
  
  function division(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "No se puede dividir entre cero";
    }
  }

const theOperations = [suma, resta, multiplicacion, division];
for (let lasFuncion of theOperations) {
    console.log(lasFuncion(8,4));
}

// Pasar argumentos a una función

function repetir(funcion, numero){
  for(let i = 0; i < numero; i++) {
    funcion();
  }
}

function hola(){
  console.log("Hola buenas noches");
}

function adios(){
  console.log("Adios buenas noches");
}

repetir(hola, 1);

function retorno(){
  return function(){
    console.log("Retorno");
  }
}

const mifunc = retorno();
mifunc();

// Retorno de función anonima, tengo que asignarla a una variable o constante para usarla, esto porque se necesita llamar.

function multi(num1){
  return function(num2){
    return num1 + num2;
  }
}

const resulta = multi(99);

// const resulta = function(num2){
//   return num2 + 2
// };

console.log(resulta(2));

function valorEntero(n1, n2){
  return function(n3){
    return (n3 >= n1 && n3 <= n2);
  }
}

const primerValor = valorEntero(0, 100);
console.log(primerValor(1)); 