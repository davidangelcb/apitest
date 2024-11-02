import Clients from '../../../src/models/clients.js';
import clientRepository from '../../../src/repositories/clientRepository.js';


jest.mock('../../../src/models/clients.js');

describe('clientRepository', () => {
    afterAll(() => {
        jest.resetAllMocks();
    });

    describe('getAll', () => {
        it('get clients list', async () => {
            const mockClients = [
                { id: 1, 
                  firstname: 'David Cama' ,
                  lastname: 'cama',
                  dni:42618338,
                  age: 40,
                  linkedin: 'linkedin.com'
                }, 
                { id: 2, 
                  firstname: 'Angel ',
                  lastname: 'Buleje',
                  dni:42618338,
                  age: 40,
                  linkedin: 'linkedin.com'
                }, 
                { id: 3, 
                  firstname: 'juan ',
                  lastname: 'Osorio',
                  dni:42618338,
                  age: 40,
                  linkedin: 'linkedin.com'
                }
            ];
            Clients.findAll.mockResolvedValue(mockClients);

            const clients = await clientRepository.getAll();
            expect(clients).toEqual(mockClients);
            expect(Clients.findAll).toHaveBeenCalled();
        });
    });

    describe('create', () => {
        it('new client', async () => {
            const newClient = {  
                firstname: 'David',
                lastname: 'cama',
                dni:42618338,
                age: 40,
                linkedin: 'linkedin.com'  
            };
            const mockClient = { id: 1, ...newClient };
            Clients.create.mockResolvedValue(mockClient);

            const createdClient = await clientRepository.create(newClient);
            expect(createdClient).toEqual(mockClient);
            expect(Clients.create).toHaveBeenCalledWith(newClient);
        });
    });

    describe('getById', () => {
        it('debería devolver un cliente por ID', async () => {
            const mockClient = { 
                id: 1, 
                firstname: 'David',
                lastname: 'cama',
                dni:42618338,
                age: 40,
                linkedin: 'linkedin.com'  
            };
            Clients.findByPk.mockResolvedValue(mockClient);

            const client = await clientRepository.getById(1);
            expect(client).toEqual(mockClient);
            expect(Clients.findByPk).toHaveBeenCalledWith(1);
        });
    });
});
