import { Document, Schema, Model, model } from "mongoose";
import { TransactionSchema } from "./schemas/TransactionSchema";
import { TransactionInterface } from './interfaces/TransactionInterface';

export interface TransactionModelInterface extends TransactionInterface, Document {
    creditAccount: { type: Schema.Types.ObjectId, ref: 'Account' },
    debitAccount: { type: Schema.Types.ObjectId, ref: 'Account' },
    amount: Number;
}

export const Transaction: Model<TransactionModelInterface> = model<TransactionModelInterface>("Transaction", TransactionSchema);
