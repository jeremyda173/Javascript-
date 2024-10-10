// Episodio 73 en adelante

// ----------- Ejercicio 6 ------------
// Crear una funcio que reciba un array con datos y me regrese unos de estos datos de forma aleatoria

function checkArray(cadena){
const random = Math.floor(Math.random() * cadena.length);
    return cadena[random];
}

console.log(checkArray([1,2,3,'a','b','c','d','e']));