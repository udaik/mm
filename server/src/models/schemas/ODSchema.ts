import { Schema } from "mongoose";
import { options } from "./AccountOptions";

export const ODSchema: Schema = new Schema({

    accountHolderName: { type: String, default: 0, required: true },

    description: { type: String, default: 0, required: true },

    bankAccountNumber: { type: String, default: 0, required: true },

    rateOfInterest: { type: Number, default: 0, required: false },

    averageMonthlyBalance: { type: Number, default: 0, required: false },

    bookBalance: { type: Number, default: 0, required: false },

    availableBalance: { type: Number, default: 0, required: false },

    drawingPower: { type: Number, default: 0, required: false },

}, options);

ODSchema.methods.deposit = function (amt: number): Promise<number> {
    this.balance = this.balance + amt;
    this.availableBalance = this.availableBalance + amt;
    this.transactions.credits = this.transactions.credits + 1;
    return new Promise<number>((resolve) => {
        resolve(this.balance);
    });
}

ODSchema.methods.withdraw = function (amt: number): Promise<number> {
    this.balance = this.balance - amt;
    this.availableBalance = this.availableBalance - amt;
    this.transactions.debits = this.transactions.debits + 1;
    return new Promise<number>((resolve) => {
        resolve(this.balance);
    });
}

ODSchema.methods.balanceGet = function (): Promise<number> {
    return new Promise<number>((resolve) => {
        resolve(this.balance);
    });
}

