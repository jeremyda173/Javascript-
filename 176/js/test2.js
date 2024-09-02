// Episodio 34 en adelante
let dia = 23;

switch (dia) {
  case 23:
    console.log("Case 0");
    break;
  default:
    console.log("Hola mundo");
}

let mayor = 3;
switch (mayor) {
  case 5:
    console.log("Es igual a 5");
    break;
  default:
    console.log("Es un valor diferente de 5");
}

let edad = 18;

if (edad >= 18) {
  console.log("Es mayor de edad", edad);
} else {
  console.log("Es menor de edad", edad);
}

edad >= 18
  ? console.log("Es mayor de edad", edad)
  : console.log("Es menor de edad", edad);
let users = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log("El usuario: ", users);

let edades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let largo = edades.push(32, 33, 34);
console.log(edades);
console.log(largo);
let Pop = edades.pop();
console.log(edades);
console.log(Pop);
edades.unshift(-2, -1, 0);
console.log(edades);
let Shift = edades.shift();
console.log(edades);
console.log(Shift);

// Push - Agrega datos al final del Array
// Pop - Elimina datos del finald del Array
// Unshift - Agrega datos al principio del Array
// Shift - Elimina datos al principio del Array

let numeros = [1, 2, 3, 4, 5];
let frutas = ["Manzana", " Pero", " Mango"];

console.log(numeros, frutas);
console.log(numeros + " --> " + frutas);
let sumoArrays = numeros.concat(frutas);
console.log(sumoArrays);

const Users = [
  {
    nombre: "Juana",
    edad: 21,
    numero: "0-000-000-0000",
  },
  {
    nombre: "Carlos",
    edad: 34,
    numero: "1-234-567-8901",
  },
  {
    nombre: "María",
    edad: 29,
    numero: "2-345-678-9012",
  },
];

const nombreBuscado = "Juana".toLowerCase();
// const usuario = Users.filter(user => user.nombre.toLowerCase() === nombreBuscado);
const usuario = Users.find(
  (user) => user.nombre.toLowerCase() === nombreBuscado
);

if (usuario) {
  console.log("Usuario encontrado:", usuario);
} else {
  console.log("Usuario no encontrado");
}

const Users2 = ["Juana", "Carlos", "María"];
let agregarNuevoUsuario = Users2.push('Jeremy');
console.log(Users2.indexOf('Jeremy'));
console.log(Users2);

const numerosOrdenados = [1,2,3,4,101,6,7,8,9,10];

const numerosConvertidos = numerosOrdenados.reverse();
console.log(numerosConvertidos);

console.log (numerosConvertidos.join(' '));
console.log (numerosConvertidos.join(' --> '));
console.log (numerosConvertidos.join(', '));
console.log (numerosConvertidos.join('^2 '));

// Metodo .slice() --> Duplica un array

const numerosConvertidosDuplicados = numerosConvertidos.slice(3,4);
console.log(numerosConvertidosDuplicados);

console.log (numerosOrdenados.sort());
const alfa = ['E','F','A','H','I','J','K','L','M',3,'Q','R','S','U',1,'W','Y','Z',4];
console.log (alfa.sort());


// Metodo .splice() --> Se utiliza para index, agregar y eliminar

const prueba = [1,2,3,4,5,6,7,8,9,10];
console.log (prueba.splice(3,2, 'Pluma'));
console.log(prueba);