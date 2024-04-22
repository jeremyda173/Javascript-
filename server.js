// Aprendiendo a tener los datos en una base de datos

const express = require('express');
const mysql = require('mysql2'); // Agrega el paquete mysql2
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Creamos la conexión a MySQL
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'jeremy12345JL30',
    database: 'UserData',
    port: 3306,
    ssl: null
});
db.connect(err => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos MySQL');
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/guardarDatos', (req, res) => {
    const userData = req.body;

    console.log('Datos recibidos del cliente:', userData);

    // Insertar datos en la base de datos
    const sql = 'INSERT INTO usuarios (nombre, edad, email, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [userData.name, userData.age, userData.email, userData.pass], (err, result) => {
        if (err) {
            console.error('Error al insertar datos en la base de datos:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            console.log('Datos insertados en la base de datos');
            res.send('Datos recibidos y guardados correctamente.');
        }
    });
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Para encender la conexion, debes de ejecutar node server.js