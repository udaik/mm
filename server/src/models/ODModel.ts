import { Document, Model } from "mongoose";
import { BankAccount } from "./BankModel";
import { ODAccountSchema } from "./schemas/ODAccountSchema";
import { ODAccountInterface } from "./interfaces/ODAccountInterface";

export interface ODAccountModelInterface extends ODAccountInterface, Document {
}

export const ODAccount: Model<ODAccountModelInterface> = BankAccount.discriminator('ODAccount', ODAccountSchema);
