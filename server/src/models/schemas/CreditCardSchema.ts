import { Schema } from "mongoose";
import { options } from "./AccountOptions";

export const CreditCardSchema: Schema = new Schema({

    mmCreditCardName: { type: String, required: true },

    lastBilledDate: { type: Date, required: true },

    nextBilledDate: { type: Date, required: true },

}, options);