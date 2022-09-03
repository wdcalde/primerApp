'use strict'
const port = 3700;
const app = require('./app');

app.listen(port, () => {
    console.log("Servidor se está ejecutando en http://localhost:" + port);
})