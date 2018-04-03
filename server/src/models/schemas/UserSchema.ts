import { Schema } from "mongoose";
import { options } from "./UserOptions";
import { Account } from "../AccountModel";

export const UserSchema: Schema = new Schema({
    mmUserName: { type: String, required: true, unique: true, index: true },

    password: { type: String, required: true },

    linkedAccounts: [{ type: Schema.Types.ObjectId, required: false, ref: Account }],

}, options);
