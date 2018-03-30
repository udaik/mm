import { Document, Model, model } from "mongoose";
import { BankSchema } from "./schemas/BankSchema";
import { BankInterface } from "./interfaces/BankInterface";

export interface BankModelInterface extends BankInterface, Document {
    balance: number;
}

export const Bank: Model<BankModelInterface> = model<BankModelInterface>("Bank", BankSchema);
