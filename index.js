const express = require('express');
const app = express();
const port = 3700;

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(port, () => {
    console.log("Servidor se está ejecutando en http://localhost:" + port);
})