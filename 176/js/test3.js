// Episodio 59 en adelante

const miArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(miArray);
for (let i = 0; i < miArray.length; i++) {
  const miArray2 = miArray[i].reverse();
  console.log(miArray2);
}
for (let i = 0; i < miArray.length; i++) {
  console.log(miArray[0]);
  console.log(miArray[1]);
  console.log(miArray[2]);
}

const m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < miArray.length; i++) {
  console.log(m[i]);
}

// Ejercicio 1

const alumno = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let sumaTotal = 0;
for (let i = 0; i < alumno.length; i++) {
  let sumaSubArray = 0;
  for (let j = 0; j < alumno[i].length; j++) {
    sumaSubArray += alumno[i][j];
  }
  sumaTotal += sumaSubArray;
  console.log(`La suma del sub-array ${i + 1} es: ${sumaSubArray}`);
}
console.log("La suma total de todos los sub-arrays es:", sumaTotal);

// const miArray4 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8],
//     [10, 22, 33, 44],
// ];

// let parciales = 0;
// let total = 0;

// for (let i = 0; i < miArray4.length; i++){
//     let fila = (miArray4[i]);
//     for (let x = 0; x < fila.length; x++){
//         console.log(fila[x]);
//         parciales += fila[x];
//     }
//     console.log(parciales);
// console.log(total+=parciales);

// const ejercicio2 = [
//     [20,30,40,50],
//     [1,2,3,4],
//     [10,10,10,10],
//     [2,2,2,2]
// ];
//  let sumaTodos = 0;
//  let unir = [];
// for (let i = 0; i < ejercicio2.length; i++) {
//     unir = ejercicio2[i];
//     for (let x = 0; x < unir.length; x++) {
//         sumaTodos += unir[x];

//     };

// };
// console.log(unir);
// console.log(sumaTodos);

const miArray3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8],
  [10, 22, 33, 44],
];
let total2 = 0;
for (let i = 0; i < miArray3.length; i++) {
  const fila = miArray3[i];
  console.log(fila);
  for (let j = 0; j < fila.length; j++) {
    total2 += fila[j];
    console.log(total2);
  }
}
console.log(total2);

// Bucle While
A = 15;
B = 14;
while (A <= 16) {
  console.log(`Funciona ${A++}`);
  // let H = A++
  // console.log(H);
}

// Juego con While

const numeroSecreto = Math.floor(Math.random() * 10);
console.log(numeroSecreto);

let numeroRobot = Math.floor(Math.random() * 10);
console.log(numeroRobot);

let intentos = 0;
while (numeroSecreto !== numeroRobot) {
  console.log(`${numeroRobot} contra ${numeroSecreto}`);
  numeroRobot = Math.floor(Math.random() * 10);
  intentos++;
}
console.log(
  `${numeroRobot} contra ${numeroSecreto} fue el resultado final con ` +
    intentos +
    " intentos"
);
// if (numeroRobot === numeroSecreto){
//     console.log(`Resultado final fue un empate: ${numeroRobot} - ${numeroSecreto}`);
// }

//Break =  Rompoer  un bucle
for (var i = 0; i <= 20; i++) {
  console.log(i);
  if (i === 15) {
    console.log("Limite: " + i);
    break;
  }
}

// Continue = Saltar ciclos
for (var i = 0; i <= 20; i++) {
  if (i % 5 === 0) continue;
  console.log(i);
}

// for of
let cadena = "Buenas Tardes";
for (let element of cadena) {
  console.log(element);
}

console.log(miArray3);
for (let element of miArray3) {
  let sumada = 0;
  for (let numero of element) {
    sumada += numero;
  }
  console.log(sumada);
}

const Users = {
  nombre: "Juana",
  edad: 21,
  numero: "0-000-000-0000",
};

for (let elemento of Object.keys(Users)) {
  console.log(elemento);
}

for (let elemento of Object.keys(Users)) {
  console.log(`${elemento}: ${Users[elemento]}`);
}

for (let elemento of Object.values(Users)) {
  console.log(elemento);
}

const UsersValue = Object.values(Users);
console.log(UsersValue);
const UsersKey = Object.keys(Users);
console.log(UsersKey);

console.log(Math.floor(Math.random() * 100));

function nuemroAle() {
  const Number = Math.floor(Math.random() * 10);
  return console.log(Number);
}
// nuemroAle();

function numerosAle(numerosRepetir) {
  for (let i = 0; i <= numerosRepetir; i++) {
    nuemroAle();
  }
  // nuemroAle();
  // nuemroAle();
  // nuemroAle();
  // nuemroAle();
}
numerosAle(1);

function Arrays(array) {
  for (valor of array) {
    if (valor === 2 || valor === 4) {
      return true;
    } // si el return (FALSE) va aqui lo va a imprimir debido a que toma el primer caracter del array
  } return false; // aqui recorre todo el array buscando el valor de la condicion
}
console.log(Arrays([1, 2, 3, 4]));

// -------- Ejercicio 3 -------------

// Crear una función isValidPassword que acepte 2 argumentos, user and pass

function isValidPassword(user, pass) {
    if(pass.indexOf(' ') !== -1 || pass.length !== 8 || pass.indexOf(user) !== -1){
        return false;
    }
    return true;
}
console.log(isValidPassword('Juantio', "8uantio4"));

// function isValidPassword(user, pass) {
//     if(pass.indexOf(' ') !== -1){
//         return false;
//     }
//     if(pass.length !== 8){
//         return false;
//     }
//     if(pass.indexOf(user) !== -1){
//         return false;
//     }
//     return true;
// }
// console.log(isValidPassword('Juantio', "8uantio4"));

// -------- Ejercicio 4 -------------

// Crear función que resiva un array y saque el promedio de un array

// function sumaArrayM(array){
//   const result = array.length;
//   let base = 0;
//   for(let element of array){
//     base = (base + element) / result;
//     console.log(base);
//     return base;
//   }
// }
// sumaArrayM([5, 5, 5]);

function sumaArrayM(array){
  let base = 0;
  for(let element of array){
    base = base + element;
  }
  return (base / array.length);
}
console.log(sumaArrayM([5,10,10,10,10]));

// -------- Ejercicio 5 -------------

const Abecedario = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'];

