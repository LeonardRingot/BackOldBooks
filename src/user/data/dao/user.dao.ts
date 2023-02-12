import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt'
import config from 'config'
import { IUserDocument } from "../model/user.model";

/**
 * Class representing a document in MongoDB
 */
export interface UserDocument extends Document {
    name: string; 
    code: string;
    admin: boolean;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<UserDocument>(
    {
        name: { type: String, require: true },
        code: { type: String, require: true, unique: true },
        admin: {type: Boolean, require: true},
        password: { type: String, require: true},
    },
    {
        timestamps: true,
    });

userSchema.pre('save', async function (next): Promise<any> {
    
    let user = this as UserDocument;

    if (!user.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));

    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();
})

userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
    
    const user = this as UserDocument;

    return bcrypt.compare(candidatePassword, user.password).catch((err) => false)
}

// 3. Create a Model.
const UserModel = model<UserDocument>('User', userSchema);

export default UserModel;