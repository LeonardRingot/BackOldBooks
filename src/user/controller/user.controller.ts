import { Request, Response } from "express"; 
import { omit } from 'lodash';
import logger from "../../core/utils/logger";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.services";

/**
 * 
 * @param req 
 * @param res 
 * @returns create user or send status 409 Conflict "Cette réponse est envoyée lorsqu'une demande entre en conflit avec l'état actuel du serveur."
 */
export async function createUserHandler (req: Request<{}, {}, CreateUserInput['body']>, res: Response): Promise<any> {

    try {

        // Call create user service
        const user = await createUser(req.body);

        return res.send(omit(user.toJSON(), 'password'));
    }
    catch(err: any) {
        logger.error(err);
        return res.status(409).send(err.message);
    }
}