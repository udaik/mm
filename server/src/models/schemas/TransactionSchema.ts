import { Schema } from "mongoose";
import { options } from "./TransactionOptions";

export const TransactionSchema: Schema = new Schema({

    creditAccount: { type: Schema.Types.ObjectId, ref: 'Account' },

    debitAccount: { type: Schema.Types.ObjectId, ref: 'Account' },

    amount: Number

}, options);

TransactionSchema.pre("save", function (next) {
    next();
});