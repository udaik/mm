import { Schema } from "mongoose";
import { options } from "./AccountOptions";

export var BankSchema: Schema = new Schema({
    
    rateOfInterest: { type: Number, default: 0, required: false },

    averageMonthlyBalance: { type: Number, default: 0, required: false }

}, options);