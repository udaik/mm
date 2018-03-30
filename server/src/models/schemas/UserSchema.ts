import { Schema } from "mongoose";
import { options } from "./UserOptions";

export const UserSchema: Schema = new Schema({
    userName: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    linkedAccounts: [{ type: Schema.Types.ObjectId, required: false }],
}, options);


