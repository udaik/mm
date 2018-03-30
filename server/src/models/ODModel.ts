import { Document, Model, model } from "mongoose";
import { ODSchema } from "./schemas/ODSchema";
import { ODInterface } from "./interfaces/ODInterface";

export interface ODModelInterface extends ODInterface, Document {

}

export const ODModel: Model<ODModelInterface> = model<ODModelInterface>("ODAccount", ODSchema);
