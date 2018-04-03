import { Document, Model, model } from "mongoose";
import { AccountInterface } from "./interfaces/AccountInterface";
import { AccountSchema } from "./schemas/AccountSchema";

export interface AccountModelInterface extends AccountInterface, Document {

}

export const Account: Model<AccountModelInterface> = model<AccountModelInterface>("Account", AccountSchema);
