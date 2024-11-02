import express from 'express';
import clientsService from '../services/clientsService.js';
import { validateClient } from '../middlewares/clientValidator.js';

const baseRouter = express.Router();


baseRouter.get('/', async (req, res) => {
   const clients = await clientsService.getAllClients();
    res.json(clients);
});

baseRouter.post('/', validateClient, async (req, res) => {
    const { firstname , lastname , dni , age , linkedin } = req.body;
    const newClient = await clientsService.createClient(firstname , lastname , dni , age , linkedin);
    res.status(201).json(newClient);
});

baseRouter.get('/:id', async (req, res) => {
    const client = await clientsService.getClientById(req.params.id);
    if (!client) return res.status(404).send('Client not found');
    res.json(client);
});

export default baseRouter;