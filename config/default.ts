import { config } from "dotenv"
config();

export default {
    port: process.env.PORT,
    dbUri: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PWD}@${process.env.CLUSTER_URI}/${process.env.DB_NAME}`,
    saltWorkFactor:10,
}