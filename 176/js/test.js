console.log("Welcome my first course in JavaScript world!");

let peopleCourse = 34;
peopleCourse = true; 
// CamelCase
console.log(peopleCourse);


const NAME = "Jeremy Smith";
//typeof es para que me diga que tipo de valor es... String, Number or Boolean
console.log(NAME);

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
console.log(FuncionesThreeLine(da));

const FuncionesFourLine = () => ({nombre: "Funciones", edad: 54});
console.log(FuncionesFourLine());
// export default function LlamarJaimito(){
//     return(
//     );
// }

FirstFunction();