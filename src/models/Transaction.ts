import { Document, Schema, Model, model } from "mongoose";
import { TransactionSchema } from "./schemas/TransactionSchema";

export interface TransactionInterface extends Document {
    creditAccount: { type: Schema.Types.ObjectId, ref: 'Account' },
    debitAccount: { type: Schema.Types.ObjectId, ref: 'Account' },
    amount: Number;
}

export const Transaction: Model<TransactionInterface> = model<TransactionInterface>("Transaction", TransactionSchema);
