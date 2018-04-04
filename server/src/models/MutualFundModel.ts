import { Document, Model } from "mongoose";
import { CreditCardSchema } from "./schemas/CreditCardSchema";
import { MutualFundInterface } from './interfaces/MutualFundInterface';
import { Account } from "./AccountModel";
import { AccountInterface } from "./interfaces/AccountInterface";


export interface MutualFundModelInterface extends AccountInterface, MutualFundInterface, Document {

}

export const MutualFund: Model<MutualFundModelInterface> = Account.discriminator("MutualFund", CreditCardSchema);

