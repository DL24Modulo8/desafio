const express = require("express");
const app = express();
const PORT = 3000;


let tasks = [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' }
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Task not found');
    res.json(task);
});


// Exporta la aplicación para pruebas
module.exports = app;

// Solo iniciar el servidor si el archivo se ejecuta directamente
if (require.main === module) {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}
