import { Schema } from "mongoose";
import { options } from "./AccountOptions";

export const CREDIT_CARD_SCHEMA: Schema = new Schema({
    userInfo: {
        userId: { type: Schema.Types.ObjectId },
    },

    name: { type: String, required: true, unique: true },

    balance: { type: Number, required: true }

}, options);
