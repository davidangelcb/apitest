import serverless from 'serverless-http';
import app from './swapi.app.js';

export const handler = serverless(app);