const request = require('supertest');
const express = require('express');
const app = require('../src/index.js');
describe('API Tests', () => {
 
    // Prueba para la ruta GET /tasks
    it('GET /tasks - Debería devolver todas las tareas', async () => {
        const res = await request(app).get('/tasks');
        expect(res.status).toBe(200); // Verifica que el código de estado sea 200
        expect(res.body).toEqual([
            { id: 1, name: 'Task 1' },
            { id: 2, name: 'Task 2' }
        ]); // Verifica que el cuerpo devuelto coincida con las tareas
    });

    // Prueba para la ruta GET /tasks/:id con un ID existente
    it('GET /tasks/:id - Debería devolver la tarea con el ID proporcionado', async () => {
        const res = await request(app).get('/tasks/1');
        expect(res.status).toBe(200); // Verifica que el código de estado sea 200
        expect(res.body).toEqual({ id: 1, name: 'Task 1' }); // Verifica que devuelva la tarea correcta
    });

    // Prueba para la ruta GET /tasks/:id con un ID inexistente
    it('GET /tasks/:id - Debería devolver un error 404 si la tarea no existe', async () => {
        const res = await request(app).get('/tasks/999'); // Prueba con un ID inexistente
        expect(res.status).toBe(404); // Verifica que el código de estado sea 404
        expect(res.text).toBe('Task not found'); // Verifica que el mensaje sea "Task not found"
    });


});