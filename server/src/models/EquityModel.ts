import { Document, Model } from "mongoose";
import { EquitySchema } from "./schemas/EquitySchema";
import { EquityInterface } from './interfaces/EquityInterface';
import { Account } from "./AccountModel";
import { AccountInterface } from "./interfaces/AccountInterface";


export interface ExpenseModelInterface extends AccountInterface, EquityInterface, Document {

}

export const Equity: Model<ExpenseModelInterface> = Account.discriminator("Equity", EquitySchema);

