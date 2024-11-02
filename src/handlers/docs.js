import express from 'express';
import serverless from 'serverless-http';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
 app.use('/api-docs', express.static(path.join(__dirname, '../../node_modules/swagger-ui-dist')));

 app.get('/api-docs/openapi.yaml', (req, res) => {
    res.sendFile(path.join(__dirname, '../swagger/openapi.yaml')); // Ajusta la ruta si es necesario
});

 app.get('/api-docs/sw-docs.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../swagger/sw-docs.html')); // Ajusta la ruta si es necesario
});

export const handler = serverless(app);
