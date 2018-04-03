import { Schema } from "mongoose";
import { options } from "./AccountOptions";
import { User } from "../UserModel";

export var AccountSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: User },
    mmAccountName: { type: String, required: true },
    balance: { type: Number, default: 0, required: false },
    isActive: { type: Number, default: 0, required: true },

    transactions: {
        debits: { type: Number, default: 0, required: false },
        credits: { type: Number, default: 0, required: true },
    },
}, options);