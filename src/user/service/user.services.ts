import { DocumentDefinition } from "mongoose";
import UserModel,{ UserDocument } from "../data/dao/user.dao";

/**
 * Create User
 * Failure to send the following parameters: createdAt, updatedAt, comparePassword
 * @param input 
 * @returns 
 */
export async function createUser(input: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>>) {

    try {
        return await UserModel.create(input);
    }
    catch(err: any) {

        throw new Error(err);
    }
}