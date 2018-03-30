import { Document, Model, model } from "mongoose";
import { MutualFundSchema } from './schemas/MutualFundSchema';
import { MutualFundInterface } from './interfaces/MutualFundInterface';


export interface MutualFundModelInterface extends MutualFundInterface, Document {
    
}

export const MutualFund: Model<MutualFundModelInterface> = model<MutualFundModelInterface>("MutualFund", MutualFundSchema);
