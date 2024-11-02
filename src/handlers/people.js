import serverless from 'serverless-http';
import app from './people.app.js';

export const handler = serverless(app);