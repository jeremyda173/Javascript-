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
console.log (prueba.splice(3,1, 'Pluma'));
console.log(prueba);

// Metodo .every() --> Se utiliza para cumplir condiciones generales de los arrays

const edades2 = [32,45,155,68,33];

const mayoresMenores = (edad) => edad >= 18;

let pruerba = (edades2.every(mayoresMenores));
console.log(pruerba);

const violet = ['Ana','Camila','6','2','Z'];
violet.forEach(valor => console.log(valor));

function retornaValores(valor, indice) {
  console.log(`${indice} tiene el valor de: ${valor}`);
}
violet.forEach(retornaValores);

const vendedor = violet.map(function(valor){
  return valor
});
console.log(vendedor);

const multiple = edades2.map(function(valor){
return valor * 2;
});
console.log(multiple);

const multipleF = edades2.map((valor) => {
  return valor * 2;
});
console.log(multipleF);


const clientes = {
  name: 'Marcos',
  actividad: 'Cargando',
  age: 21
};

console.log(clientes.age);
const dataName = clientes.name + ' se encuentra ' + clientes.actividad
console.log(dataName);

clientes.Presupuesto = 32.12;
clientes.age = 22;  
console.log(clientes);


const barca =  {
  name: 'Pedri',
  Age: 21,
  Team: 'Barcelona',
  Position: 'MC',
  Money: {
    Week: '200,000$',
    Month: '750,000',
    Year: '20,000,000'
  }
}
console.log(barca);

const player = Object.values(barca).map(function(valor) {
  return valor;
});
console.log(player);

const players = Object.entries(barca).map(function([key, value]) {
  return `${key}: ${value}`;
});
console.log(players);

const alumno = {
  nombre: 'Marcos',
  apellido: 'Marquitos',
  cursa: 'Ingenieria en Platanos',
  notas: {
    primerA: 8,
    segundoA: 7.56,
    tercerA: 8.99
  },
  sobrenombre: 'El pedo'
}

const notas4 = alumno.notas;
console.log(notas4);

console.log(alumno.notas.segundoA);

const notas = Object.values(alumno.notas);

let sumaTotal = 0;
notas.map(function(valor) {
  sumaTotal += valor;
});

const promedio = sumaTotal / notas.length;
console.log('Promedio:', promedio.toFixed(2));
console.log(promedio.toFixed(2));

const nota = Object.values(alumno.notas);
const promedios = nota.reduce(function(suma, valor) {
  return suma + valor;
}, 0) / nota.length;

console.log('Promedio:', promedios.toFixed(1));

const miArray = [2];
const miArray2 = miArray;

if(miArray === miArray2){
  console.log('Son iguales');
} else {
  console.log('Son diferentes');
}

const result = {
  names: 'Jeremy',
  edad: [3],
  notas: [7],
};

// if(result.names.length === []){
//   console.log('Si');
// } else {
//   console.log('No');
// }

const A = 100

for(let i=0; i <= 10; i+=2){
  console.log('Incremento', i);
}

for(let i=0; i <= A; i++){
  if(i % 2 === 0 && i > 0){
    console.log(`${i} es un numero par`);
  } else if(i % 2 === 1){
    console.log(`${i} es un numero impar`);
  }
}

let B = 35;
for (let j = 0; j <= B; j++) {
  if (j % 3 === 0 && j % 5 === 0 && j > 0) {
    console.log(`${j} FizzBuzz`);
  } else if (j % 3 === 0 && j > 0) {
    console.log(`${j} Fizz`);
  } else if (j % 5 === 0 && j > 0) {
    console.log(`${j} Buzz`);
  }
}

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
  } else if (i % 3 === 0) {
      console.log("Fizz");
  } else if (i % 5 === 0) {
      console.log("Buzz");
  } else {
      console.log(i);
  }
}

const data = ['FizzBuzz', 'FizzBuzz', 'FizzBuzz', 'FizzBuzz', 'FizzBuzz', 'FizzBuzz', 'FizzBuzz'];
console.log(data);

for (let i = 0; i < 2; i++) {
  console.log(data[i]);
}

for (let i = 0; i < data.length; i++) {
  console.log(data.join(' --> ')[i]);
}

for (let i = 0; i < data.length; i++) {
  const endData = data[i].split('\n');
  console.log(endData);
}