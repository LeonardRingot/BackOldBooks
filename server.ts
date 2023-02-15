import dotenv from "dotenv";
dotenv.config();

import cors from 'cors'
import express from "express"
import { Response, Request, NextFunction } from 'express';
import { databaseConnect } from './src/database/connect'
import { apiRouter } from './src/api/api.router'
const app = express()
// decommenter la ligne ci-dessous pour reset la BDD à chaque demerrage
//sequelize.initDb()
app.use(express.json())
app.use(cors())
app.use(apiRouter)
databaseConnect().catch(err => console.log(err));
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}...`)
})
app.get("/", (req: Request, res: Response) => {
    res.send("SWAGGER : /api/docs")
})