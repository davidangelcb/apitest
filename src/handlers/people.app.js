import express from 'express';
import baseRouter from './../routers/people.js';

const app = express();
app.use(express.json());

// Rutas
app.use('/swapi', baseRouter);

export default app;