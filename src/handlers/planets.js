import serverless from 'serverless-http';
import app from './planets.app.js';

export const handler = serverless(app);