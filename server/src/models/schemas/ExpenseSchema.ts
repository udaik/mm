import { Schema } from "mongoose";
import { options } from "./AccountOptions";

export const ExpenseSchema: Schema = new Schema({

    mmExpenseName: { type: String, required: true, unique: true },

}, options);