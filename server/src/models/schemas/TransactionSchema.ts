import { Schema } from "mongoose";
import { options } from "./TransactionOptions";
import { Account } from "../AccountModel";
import { User } from "../UserModel";

export const TransactionSchema: Schema = new Schema({
    
    userId: { type: Schema.Types.ObjectId, ref: User, required: true },

    description: { type: String, default: "No Description", required: true },

    amount: { type: Number, ref: Account, required: true },

    creditAccount: { type: Schema.Types.ObjectId, ref: Account, required: true },

    debitAccount: { type: Schema.Types.ObjectId, ref: Account, required: true },

}, options);

TransactionSchema.pre("save", function (next) {
    next();
});