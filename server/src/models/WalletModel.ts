import { Document, Model, model } from "mongoose";
import { WalletSchema } from "./schemas/WalletSchema";
import { WalletInterface } from "./interfaces/WalletInterface";

export interface WalletModelInterface extends WalletInterface, Document {
    balanceGet(): number;
    nameGet(): number;
}

export const Wallet: Model<WalletModelInterface> = model<WalletModelInterface>("Wallet", WalletSchema);
