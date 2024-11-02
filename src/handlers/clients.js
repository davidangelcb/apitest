import serverless from 'serverless-http';
import app from './clients.app.js';

export const handler = serverless(app);