console.log("Bienvenidos");

// Aprendiendo a optener los datos
// var data ={
//     name:"Juan",
//     age:25,
//     email:"juanprueba21@gmail.com",
//     password:"qwerty123456"
// }
// console.log(data);
function OptenData() {
    var userName = document.getElementById('name').value;
    var userAge = document.getElementById('age').value;
    var userEmail = document.getElementById('email').value;
    var userPassword = document.getElementById('password').value;

    var userInfo = {
        name: userName,
        age: userAge,
        email: userEmail,
        pass: userPassword
    };


    // Enviar datos al servidor usando Fetch API
    fetch('http://localhost:3000/guardarDatos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error al enviar datos al servidor:', error);
    });
}