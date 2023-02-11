import mongoose, { Mongoose } from "mongoose"
import config from 'config'
import { IConnect } from "~/core/interfaces/database.interface"
import logger from '../logger'

export default class connect implements IConnect {

    dbUri: string;

    constructor() {

        this.dbUri = config.get<string>('dbUri')
    }

    async authenticate(): Promise<void> {

        try {
            mongoose.set("strictQuery", false);
            await mongoose.connect(this.dbUri);
            logger.info('Database connected');
        } catch (error) {
            logger.error('Could not connect to Database');
            process.exit(1);
        }

    }

}

export const getConnectDataBase = async (): Promise<any> => {
    const database: connect = new connect();
    return await database.authenticate();
}