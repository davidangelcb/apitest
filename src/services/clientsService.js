import clientRepository from '../repositories/clientRepository.js'; // Asegúrate de incluir la extensión .js

const clientsService = {
    getAllClients: async () => {
        return await clientRepository.getAll();
    },
    createClient: async (firstname , lastname , dni , age , linkedin) => {
        return await clientRepository.create({ firstname , lastname , dni , age , linkedin });
    },
    getClientById: async (id) => {
        return await clientRepository.getById(id);
    }
};

export default clientsService;
