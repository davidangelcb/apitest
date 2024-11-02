import request from 'supertest';
import app from '../../src/handlers/films.app.js' 

describe('GET /swapi/films', () => {
    it('should respond with a object', async () => {
        const response = await request(app).get('/swapi/films');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    });
});

describe('GET /swapi/films/1', () => {
    it('should respond with a object for the id 1' , async () => {
        const response = await request(app).get('/swapi/films/1');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    });
});

describe('GET /swapi/films/?search=new', () => {
    it('should respond with a object the search', async () => {
        const response = await request(app).get('/swapi/films/?search=new');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    });
});


describe('GET /swapi/films/10000000', () => {
    it('should respond with a 404 status code when id no exist', async () => {
        const response = await request(app).get('/swapi/films/1000000');
        expect(response.status).toBe(404);
    });
});