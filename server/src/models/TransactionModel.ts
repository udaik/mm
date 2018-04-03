import { Document, Model, model } from "mongoose";
import { TransactionSchema } from "./schemas/TransactionSchema";
import { TransactionInterface } from './interfaces/TransactionInterface';

export interface TransactionModelInterface extends TransactionInterface, Document {

}

export const Transaction: Model<TransactionModelInterface> = model<TransactionModelInterface>("Transaction", TransactionSchema);
