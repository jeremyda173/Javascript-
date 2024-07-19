console.log("Hello world!");
console.log("Starting");
// document.write("Estamos desde JavaScript ");

const server = 45;
console.log(server);

const person = {
  name: 'Jeremy Smith',
  age: 19,
  number: '+1 000-000-0000'
}

console.log(person);

if (typeof document !== 'undefined') {
  document.body.innerHTML += server + ' ';
  document.body.innerHTML += '<br>';
  document.body.innerHTML += person.name + " " + person.age + " " + person.number;
}

// Array original
const numeros = [1, 2, 3, 4, 5, "La vida es bella"];

// Usando map para multiplicar cada número por 2
const numerosMultiplicados = numeros.map(numero => {
  if (typeof numero === 'number') {
    return numero * 2;
  }
  return numero; // Dejar los no números como están
});
console.log(numerosMultiplicados);

// Usando map para sumar cada elemento a sí mismo
const numerosSumados = numeros.reverse().map(numero => {
  if (typeof numero === 'number') {
    return numero + numero;
  }
  return numero + numero; // Concatenar strings
});
console.log(numerosSumados);

// Filtrando un string específico del array
const stringEspecifico = numeros.find(numero => typeof numero === 'string' && numero.includes('La vida es bella'));
console.log(stringEspecifico);


