import { Schema } from "mongoose";
import { options } from "./AccountOptions";

export const ODSchema: Schema = new Schema({

    accountHolderName: { type: String, default: 0, required: true },

    description: { type: String, default: 0, required: true },

    bankAccountNumber: { type: String, default: 0, required: true },

    rateOfInterest: { type: Number, default: 0, required: false },

    averageMonthlyBalance: { type: Number, default: 0, required: false },

    bookBalance: { type: Number, default: 0, required: false },

    availableBalance: { type: Number, default: 0, required: false },

    drawingPower: { type: Number, default: 0, required: false },

}, options);