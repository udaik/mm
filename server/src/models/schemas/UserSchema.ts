import { Schema } from "mongoose";
import { options } from "./UserOptions";
import { Account } from "../AccountModel";
import * as bcrypt from "bcrypt";
import { UserModelInterface } from "../UserModel";

export const UserSchema: Schema = new Schema({

    mmUserName: { type: String, required: true, unique: true, index: true },

    password: { type: String, required: true },

    linkedAccounts: [{ type: Schema.Types.ObjectId, required: false, ref: Account }],

}, options);


UserSchema.methods.linkedAccountsAdd = function (linkedAccount: string): void {
    this.linkedAccounts.push(linkedAccount);
}

UserSchema.methods.verifyPassword = function (password: string, hash: string): Promise<UserModelInterface> {

    return new Promise<boolean>((resolve, reject) => {
        return resolve();
    }).then(() => {
        return bcrypt.compare(password, this.password);
    }).then((result) => {
        console.log('result', result);
        return this;
    }).catch((reject) => {
        return reject();
    });
}