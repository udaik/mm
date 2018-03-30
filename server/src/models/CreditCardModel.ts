import { Document, Model, model } from "mongoose";
import { CreditCardSchema } from "./schemas/CreditCardSchema";
import { CreditCardInterface } from './interfaces/CreditCardInterface';

export interface CreditCardModelInterface extends CreditCardInterface, Document {
}

export const CreditCard: Model<CreditCardModelInterface> = model<CreditCardModelInterface>("CreditCard", CreditCardSchema);
