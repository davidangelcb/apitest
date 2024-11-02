import express from 'express';

import baseRouterByID from './../routers/swapi.js';
import baseRouter from './../routers/swapiAll.js';
//import baseRouter from './../routers/swapiSchema.js';

const app = express();
app.use(express.json());

// Rutas
app.use('/swapi', baseRouterByID); // {id} getById
app.use('/swapi', baseRouter); // getAll

export default app;