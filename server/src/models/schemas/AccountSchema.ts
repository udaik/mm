import { Schema } from "mongoose";
import { options } from "./AccountOptions";
import { User } from "../UserModel";

export var AccountSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: User },
    mmAccountName: { type: String, required: true },
    balance: { type: Number, default: 0, required: false },
    isActive: { type: Number, default: 0, required: true },

    transactions: {
        debits: { type: Number, default: 0, required: false },
        credits: { type: Number, default: 0, required: true },
    },
}, options);

AccountSchema.methods.deposit = function (amt: number): Promise<number> {
    this.balance = this.balance + amt;
    this.transactions.credits = this.transactions.credits + 1;
    var p = new Promise<number>((resolve) => {
        resolve(this.balance);
    });
    return p;
}

AccountSchema.methods.withdraw = function (amt: number): Promise<number> {
    this.balance = this.balance - amt;
    this.transactions.debits = this.transactions.debits + 1;
    var p = new Promise<number>((resolve) => {
        resolve(this.balance);
    });
    return p;
}

AccountSchema.methods.balanceGet = function (): Promise<number> {
    var p = new Promise<number>((resolve) => {
        resolve(this.balance);
    });
    return p;
}