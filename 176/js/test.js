console.log("Welcome my first course in JavaScript world!");

let peopleCourse = 34;
peopleCourse = true; 
// CamelCase
console.log(peopleCourse);


const NAME = "Jeremy Smith";
//typeof es para que me diga que tipo de valor es... String, Number or Boolean
console.log(NAME);
console.log(NAME.indexOf(' ') === -1);
console.log(NAME.indexOf(' '));
const data = {
    Name: "Jeremy",
    Edad: 34,
    Sexo: "Female"
};

const data2 = [
    {
        Name: "Jeremy",
        Edad: 34
    },
    {
        Name: "Alice",
        Edad: 28
    }
];

console.log(data2.indexOf(data2.Name));
const index = data2.findIndex(item => item.Name === "Alice");
console.log(index);


const Edad = "Edad";
const Numero = "Numero";

console.log(Edad + " " + Numero);

// `` alt derecho mas 96 para esas comillas
console.log(`Welcome ${NAME}, You have ${Edad} and your cellphone ${Numero}`);

let num1 = 200
let num2 = 0
let num3 = 0

console.log(num1 - num2 / num3);
// NaN no es un Numero
console.log((num1 - num2) / num3);

let a = 3
let b = 5
let c = 3

c = a + b
console.log(c);
c = ++c;
console.log(c);
c += a;
console.log(c);

// Funciones
function FirstFunction() {
    console.log("First Function");
    const Compra = "BMW"
    return Compra;
}
console.log(FirstFunction());

function SecondFunction(i, e) {
    console.log("Second Function");
    return `Anoche fui a domir ${i} y me ${e}`;
}
console.log(SecondFunction("con mi novia","pillaron"));

const TheFunction = function (a, b) {
    console.log("The Function in to Variable");
    return a + b;
}
console.log(TheFunction(4, 76));

// Functions flechas
const TheFunctionFlecha = (a, b) => {
    return a + b;
}  
console.log(TheFunctionFlecha(3,1));

const DataOld = () => {
    // document.getElementById("data").innerHTML="";
    return "Hello, world!!";
}
DataOld();

const FuncionesOneLine = () => {
    console.log("Function the one line");
}
FuncionesOneLine();
const FuncionesTwoLine = (data) => {
    // console.log("Function the one line");
    const line = data
    return line
}
console.log(FuncionesTwoLine("Something"));

const FuncionesThreeLine = (da) => da = "Queso";
console.log(FuncionesThreeLine());

const FuncionesFourLine = () => ({nombre: "Funciones", edad: 54});
console.log(FuncionesFourLine());
// export default function LlamarJaimito(){
//     return(
//     );
// }

FirstFunction();



// Funciones callback = Los callbacks aseguran que una función no se va a ejecutar antes de que se complete una tarea, sino que se ejecutará justo después de que la tarea se haya completado.

function CallBacksFunctions (name, edad, funcion) {
    name = name;
    edad = edad;
    let cliente = name + " de " + edad + " years old"
    funcion (cliente);
}
 function Traer(Cliente) {
    console.log(`El nuevo cliente es: ${Cliente}`);
 }
 CallBacksFunctions("Eduardo", 21, Traer);
// console.log(CallBacksFunctions());

let cadena = "31";
console.log(cadena +' es un '+ typeof cadena);
console.log(cadena.length);
// Los strings son inmutables
console.log(cadena.substring(0, cadena.length - 1));
console.log(cadena[0] + ' ' + cadena[1]);
console.log(cadena[cadena.length - 1]);

let cadena2 = new String ('La vida es bella');
console.log(typeof cadena2);

let cadena3 = new Number (234);
console.log(typeof cadena2);

console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

console.log (cadena2);

//Metodo Trim String
console.log(cadena2.trim());

//String indexOf
let venganza = "Hoy me vengare de vos, retrasado";
console.log(venganza.indexOf('o', 2));

//Metodo slice
let slice = "Klk mi gente"
console.log(slice.slice(0,2));

let ExampleReplace = "Hola gente";
console.log(ExampleReplace.replace("Hola", "klk"));

// Caracteres de escape
// \'
// \"
// \n
// \t
// \\

let mensaje = "Hola mi gente,\n como estais \'pendejos'\. \t Bobo el que lo lea";
console.log(mensaje);

const variavs = null;
const varia = undefined;
console.log(variavs);
console.log(varia);

console.log(Math.PI);
// cantidad de decimales que deseo mostrar
console.log(Math.PI.toFixed(2));
// redondea el numero al numero entero mas cercano
console.log(Math.round(Math.PI));
// elimina los decimales
console.log(Math.floor(Math.PI));
// valor absoluto
console.log(Math.abs(-219));
// crear un numero random
console.log(Math.floor(Math.random() * 11));

let cadenas1 = "27.32";
let resultado = parseInt(cadenas1)
console.log(resultado);

let cadenas2 = "27.32";
let resultado2 = parseFloat(cadenas2)
console.log(typeof resultado2 + " " + resultado2);

const Bolvert = "12345";
if (Bolvert.length == 5){
    console.log("La Bolvert está correcta", Bolvert);
    // return Bolvert;
} else {
    console.log("La Bolvert está incorrecta", Bolvert);
}

if (Bolvert.length != 5){
    console.log("La Bolvert está incorrecta", Bolvert);
} else {
    console.log("La Bolvert está correcta", Bolvert);
}

if (Bolvert.length >= 5 && Bolvert.length <= 10) {
    console.log("La Bolvert está correcta", Bolvert);
} else {
    console.log("La Bolvert está incorrecta", Bolvert);
}
console.log(Bolvert);

const password = "password"

if (password === password) {
    console.log("Password correcto", password);
}
// Los if anidados son if dentro de otros, condiciones dentro de otras


// Practicando el mapeo de datos
const nombres = ["ana", "beto", "carla", "diego"];

const nombreMa = nombres.map(nombre => nombre.toUpperCase());
console.log(nombreMa)

const productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalones", precio: 30 },
    { nombre: "Zapatos", precio: 50 }
];

const productosPlus = productos.map(product => {
    return {
        Nombre: product.nombre,
        NuevoPrecio: product.precio * 1.10
    };
});
console.log(productosPlus);

const personas = [
    { nombre: "Ana", fechaDeNacimiento: "1990-05-15" },
    { nombre: "Beto", fechaDeNacimiento: "1985-12-22" },
    { nombre: "Carla", fechaDeNacimiento: "2000-03-10" }
];

const personEdad = personas.map(person => {
    const añoActual = new Date().getFullYear();
    const añoNacimiento = new Date(person.fechaDeNacimiento).getFullYear();
    const edad = añoActual - añoNacimiento;
    return {
        Persona: person.nombre,
        Edad: edad,
    }
});
console.log(personEdad);

const tareas = [
    { nombre: "Lavar la ropa", estado: "completada", prioridad: "alta" },
    { nombre: "Limpiar la casa", estado: "pendiente", prioridad: "media" },
    { nombre: "Hacer la compra", estado: "completada", prioridad: "baja" },
    { nombre: "Pagar facturas", estado: "completada", prioridad: "alta" }
];

const tarea = tareas.filter(tareas => tareas.estado === 'completada' && tareas.prioridad === 'alta').map(tareas => tareas.nombre);
console.log(tarea);

// Volviendo con los IF

let Name = 223
let Edades = 222
let Tareas = 223

if (Name === Edades && Name === Tareas) {
    console.log('Esto es verdadero');
} else if (Edades === Tareas) {
    console.log('Estas son iguales');
} else {
    console.log('Ninguna son iguales');
}

if (Name && Edades === Tareas) {
    console.log('Usando el OR ||');
} else if (Tareas === Name) {
    console.log('Usando el Y &&');
}

const edad = 99;

if (edad == 0) {
    console.log('Esta cuenta es falsa');
} else if (edad > 100) {
    console.log('Esta persona tiene más de 100 años');
} else if (edad < 0) {
    console.log('Edad no válida');
} else {
    console.log('Esta persona tiene una edad normal');
}
