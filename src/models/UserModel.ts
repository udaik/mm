import { Document, Model, model } from "mongoose";
import { UserInterface } from "./interfaces/UserInterface";
import { UserSchema } from "./schemas/UserSchema"

export interface UserModelInterface extends UserInterface, Document {
    password : string;
}

export const User: Model<UserModelInterface> = model<UserModelInterface>("User", UserSchema);
