import { Schema } from "mongoose";
import { options } from "./AccountOptions";

export var BankSchema: Schema = new Schema({
    
    accountHolderName : { type: String, default: 0, required: true },

    description : { type: String, default: 0, required: true },

    bankAccountId: { type: String, default: 0, required: true },

    rateOfInterest: { type: Number, default: 0, required: false },

    averageMonthlyBalance: { type: Number, default: 0, required: false }

}, options);