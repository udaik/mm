import { Schema } from "mongoose";
import { options } from "./UserOptions";

export var UserSchema: Schema = new Schema({
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    linkedAccounts: [{ type: Schema.Types.ObjectId }],
}, options);