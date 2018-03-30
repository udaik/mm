import { Schema } from "mongoose";
import { options } from "./AccountOptions";

export const ExpenseSchema: Schema = new Schema({
    userInfo: {
        userId: { type: Schema.Types.ObjectId },
    },

    name: { type: String, required: true, unique: true },

    totalSpent: { type: Number, required: true }

}, options);
