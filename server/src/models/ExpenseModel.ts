import { Document, Model } from "mongoose";
import { CreditCardSchema } from "./schemas/CreditCardSchema";
import { ExpenseInterface } from './interfaces/ExpenseInterface';
import { Account } from "./AccountModel";
import { AccountInterface } from "./interfaces/AccountInterface";


export interface ExpenseModelInterface extends AccountInterface, ExpenseInterface, Document {

}

export const Expense: Model<ExpenseModelInterface> = Account.discriminator("Expense", CreditCardSchema);

