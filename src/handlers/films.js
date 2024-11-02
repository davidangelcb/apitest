import serverless from 'serverless-http';
import app from './films.app.js';

export const handler = serverless(app);