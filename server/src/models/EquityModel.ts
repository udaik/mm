import { Document, Model, model } from "mongoose";
import { EquitySchema } from './schemas/EquitySchema';
import { EquityInterface } from './interfaces/EquityInterface';

export interface EquityModelInterface extends EquityInterface, Document {
}

export const Equity: Model<EquityModelInterface> = model<EquityModelInterface>("Equity", EquitySchema);
