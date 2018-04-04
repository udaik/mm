import { Document, Model } from "mongoose";
import { CreditCardSchema } from "./schemas/CreditCardSchema";
import { CreditCardInterface } from './interfaces/CreditCardInterface';
import { Account } from "./AccountModel";
import { AccountInterface } from "./interfaces/AccountInterface";


export interface CreditCardModelInterface extends AccountInterface, CreditCardInterface, Document {

}

export const CreditCard: Model<CreditCardModelInterface> = Account.discriminator("CreditCard", CreditCardSchema);

