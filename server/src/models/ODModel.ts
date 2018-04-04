import { Document, Model } from "mongoose";
import { ODSchema } from "./schemas/ODSchema";
import { ODInterface } from './interfaces/ODInterface';
import { Account } from "./AccountModel";
import { AccountInterface } from "./interfaces/AccountInterface";


export interface ODModelInterface extends AccountInterface, ODInterface, Document {

}

export const OD: Model<ODModelInterface> = Account.discriminator("OD", ODSchema);

