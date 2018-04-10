import { Schema } from "mongoose";
import { options } from "./AccountOptions";

export const EquitySchema: Schema = new Schema({

    mmEquityName: { type: String, required: true },

}, options);