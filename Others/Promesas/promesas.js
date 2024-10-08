console.log("Welcome to Promise");

const Data = [{
    name: "John",
    age: 32,
    }, {
        name: "Jane",
        age: 45
    }, {
        name: "Mark",
        age: 18
}];

// console.log(Data);


// const getData=()=>{
//     return Data;
// }
// console.log(getData());


const getData = () => {
    return new Promise((resolve, _reject) => {
        if (Data.length < 1){
            setTimeout(() => resolve('No data available'), 2000);
        }
        setTimeout(()=>{
            resolve(Data);
            }, 2000);
        });
}
getData().then((Data) => console.log(Data) + console.log("Finally we got the data"));

console.log(getData());

async function AsincData(){
    const dataFetched = await getData();
    console.log(dataFetched);
}


// console.log("Inicio de la operación");

// setTimeout(() => {
//   console.log("Operación asíncrona completada después de 2 segundos");
// }, 2000);

// console.log("Fin de la operación principal");


