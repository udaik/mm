import { Document, Model, model } from "mongoose";
import { UserInterface } from "./interfaces/UserInterface";
import { UserSchema } from "./schemas/UserSchema"

export interface UserModelInterface extends UserInterface, Document {
    linkedAccountsAdd(linkedAccount: string): void;
    verifyPassword(password: string): Promise<UserModelInterface>;
}

export const User: Model<UserModelInterface> = model<UserModelInterface>("User", UserSchema);
