import express from 'express';
import baseRouter from './../routers/clients.js';

const app = express();
app.use(express.json());

// Rutas
app.use('/v1/clients', baseRouter);

export default app;