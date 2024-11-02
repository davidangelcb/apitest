import request from 'supertest';
import app from '../../src/handlers/planets.app.js' 

describe('GET /swapi/planets', () => {
    it('should respond with a object', async () => {
        const response = await request(app).get('/swapi/planets');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    });
});

describe('GET /swapi/planets/1', () => {
    it('should respond with a object for the id 1' , async () => {
        const response = await request(app).get('/swapi/planets/1');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    });
});

describe('GET /swapi/planets/?search=ya', () => {
    it('should respond with a object the search', async () => {
        const response = await request(app).get('/swapi/planets/?search=ya');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    });
});


describe('GET /swapi/planets/10000000', () => {
    it('should respond with a 404 status code when id no exist', async () => {
        const response = await request(app).get('/swapi/planets/1000000');
        expect(response.status).toBe(404);
    });
});