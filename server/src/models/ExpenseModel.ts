import { Document, Model, model } from "mongoose";
import { ExpenseSchema } from './schemas/ExpenseSchema';
import { ExpenseInterface } from './interfaces/ExpenseInterface';

export interface ExpenseModelInterface extends ExpenseInterface, Document {
}

export const Expense: Model<ExpenseModelInterface> = model<ExpenseModelInterface>("Expense", ExpenseSchema);
