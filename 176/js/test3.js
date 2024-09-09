// Episodio 59 en adelante

const miArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(miArray);
for (let i = 0; i < miArray.length; i++){
    const miArray2 = miArray[i].reverse();
    console.log(miArray2);
}
for (let i = 0; i < miArray.length; i++){
    console.log(miArray[0]);
    console.log(miArray[1]);
    console.log(miArray[2]);
}

const m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < miArray.length; i++){
    console.log(m[i]);
}

// Ejercicio 1

const alumno = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let sumaTotal = 0; 
for (let i = 0; i < alumno.length; i++) {
    let sumaSubArray = 0;
    for (let j = 0; j < alumno[i].length; j++) {
        sumaSubArray += alumno[i][j];
    }
    sumaTotal += sumaSubArray; 
    console.log(`La suma del sub-array ${i+1} es: ${sumaSubArray}`);
}
console.log('La suma total de todos los sub-arrays es:', sumaTotal);

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
    [1,2,3],
    [4,5,6],
    [7,8],
    [10,22,33,44]
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