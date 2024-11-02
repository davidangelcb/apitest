import request from 'supertest';
import app from '../../src/handlers/clients.app.js' 

describe('GET /v1/clients', () => {
    it('should respond with a object', async () => {
        const response = await request(app).get('/v1/clients');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    });
});