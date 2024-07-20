let numero = [1,2,3,4,5,6,7];

for(i=0; i<numero.length; i++){
    console.log(numero[i])
}
numero.forEach((value) => {
   console.log( value == 5);
   console.log(i);
})

console.log(numeros.some((value) => {
    return(value < 0)
}));

console.log(numeros.every((value) =>{
    return(value == 5);
}));