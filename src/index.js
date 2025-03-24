const express = require("express");
const app = express();
const PORT = 3000;


// Ruta Home
app.get("/", (req, res) => {
    res.send("Bienvenido a la página Home");
});
// Ruta Todos
app.get("/todos", (req, res) => {
    res.json([
        { id: 1, tarea: "Aprender Docker" },
        { id: 2, tarea: "Configurar Express" },
    ]);
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});