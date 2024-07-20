function Messi (a,b) {
    var cr = a + b;
    console.log('la suma es: ' + cr)
}


Messi(7,6);

// funcion retornables
function datosT() {
    var nombre = "Jeremy"
    return nombre
}
var apellido = datosT();
console.log(apellido);

// funciones flecha

var resta = (n1,n2) => n1 - n2
console.log(resta(8,2));

