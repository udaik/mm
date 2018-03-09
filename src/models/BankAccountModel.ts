import { Document, Model, model } from "mongoose";
import { BankAccountSchema } from "./schemas/BankAccountSchema";
import { BankAccountInterface } from "./interfaces/BankAccountInterface";

export interface BankAccountModelInterface extends BankAccountInterface, Document {
    balanceGet(): number;
    nameGet(): number;
}

export const BankAccount: Model<BankAccountModelInterface> = model<BankAccountModelInterface>("BankAccount", BankAccountSchema);
