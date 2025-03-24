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

// Ruta /tasks: responde un mensaje genérico
app.get("/tasks", (req, res) => {
    res.send("Bienvenido a la ruta Tasks");
});

// Ruta /tasks/:id: responde un mensaje genérico
app.get("/tasks/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Estás consultando la tarea con ID: ${id}`);
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


// Exportar la aplicación para Jest
module.exports = app;
