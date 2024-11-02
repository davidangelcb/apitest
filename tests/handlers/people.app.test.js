import request from 'supertest';
import app from '../../src/handlers/people.app.js' 

describe('GET /swapi/people', () => {
    it('should respond with a object', async () => {
        const response = await request(app).get('/swapi/people');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    });
});

describe('GET /swapi/people/1', () => {
    it('should respond with a object for the id 1' , async () => {
        const response = await request(app).get('/swapi/people/1');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    });
});

describe('GET /swapi/people/?search=ra', () => {
    it('should respond with a object the search', async () => {
        const response = await request(app).get('/swapi/people/?search=ra');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    });
});


describe('GET /swapi/people/10000000', () => {
    it('should respond with a 404 status code when id no exist', async () => {
        const response = await request(app).get('/swapi/people/1000000');
        expect(response.status).toBe(404);
    });
});