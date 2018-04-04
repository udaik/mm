import { Document, Model } from "mongoose";
import { WalletSchema } from "./schemas/WalletSchema";
import { WalletInterface } from './interfaces/WalletInterface';
import { Account } from "./AccountModel";
import { AccountInterface } from "./interfaces/AccountInterface";


export interface WalletModelInterface extends AccountInterface, WalletInterface, Document {

}

export const Wallet: Model<WalletModelInterface> = Account.discriminator("Wallet", WalletSchema);

