import { Schema } from "mongoose";
import { options } from "./AccountOptions";

export const MutualFundSchema: Schema = new Schema({

    mmMutualFundName: { type: String, required: true, unique: true },

}, options);