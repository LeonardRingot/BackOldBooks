import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import config from 'config'
import { IUserModel } from "../model/user.model";


export class UserDocument extends mongoose.Document implements IUserModel {
    name: string;
    code?: string | undefined;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        code: { type: String, require: true, unique: true },
        createdAt: { type: Date, require: true },
        updatedAt: { type: Date, require: true }
    },
    {
        timestamps: true,
    });

userSchema.pre('save', async function (next: mongoose.HooKNextFunction) {

    let user = this as UserDocument;

    if (!user.isModified('name')) {
        return next();
    }

})

const UserModel = mongoose.model('User', userSchema);

export default UserModel;