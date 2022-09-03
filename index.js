const express = require('express');
const app = express();
const port = 3700;

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.get('/alumnos', (req, res) => {
    res.send('Mi listado de alumnos');
});

app.get('/alumno', (req, res) => {
    res.send('Información de un alumno');
});

app.post('/alumno', (req, res) => {
    res.send('creamos un alumno');
});

app.put('/alumno', (req, res) => {
    res.send('Actualizamos un alumno');
});

app.delete('/alumno', (req, res) => {
    res.send('Eliminamos un alumno');
});

app.listen(port, () => {
    console.log("Servidor se está ejecutando en http://localhost:" + port);
})