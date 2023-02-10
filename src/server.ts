// Import module 
import express, { Express } from 'express'
import config from 'config';
import { getConnectDataBase } from './core/utils/database/service.mongoose';
import logger from './core/utils/logger';
import routes from './core/routes';

// Create port
const port = config.get<number>('port') || 8082;

const app: Express = express();

app.listen(port, async () => {
    logger.info(`server is running at http://localhost:${port}`)
    getConnectDataBase();

    routes(app);
})