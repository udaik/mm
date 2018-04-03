import { Document, Model } from "mongoose";
import { BankSchema } from "./schemas/BankSchema";
import { BankInterface } from "./interfaces/BankInterface";
import { Account } from "./AccountModel";
import { AccountInterface } from "./interfaces/AccountInterface";

export interface BankModelInterface extends AccountInterface, BankInterface, Document {
    
}

export const Bank: Model<BankModelInterface> = Account.discriminator("Bank", BankSchema);
