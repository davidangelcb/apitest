import Clients from '../models/clients.js';

const clientRepository = {
    getAll: async () => {
        return await Clients.findAll();
    },
    create: async (newClient) => {
        return await Clients.create(newClient);
    },
    getById: async (id) => {
        return await Clients.findByPk(id);
    }
};

export default clientRepository;

