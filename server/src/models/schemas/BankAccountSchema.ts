import { Schema } from "mongoose";
import { options } from "./AccountOptions";

export var BankAccountSchema: Schema = new Schema({
    userInfo: {
        userId: { type: Schema.Types.ObjectId },
    },

    name: { type: String, required: true, unique: true },
    balance: { type: Number, required: true },
    rateOfInterest: { type: Number, default: 0, required: true },
    /*
    unclearedBalance: { type: Number },
    modBalance: { type: Number },
    lienAmount: { type: Number },
    isActive: { type: Boolean, default: true },
    accountType: { type: String, required: true },


    branch: {
        description: { type: String },
        code: { type: String },
        name: { type: String },
        address: { type: String },
        city: { type: String },
        state: { type: String },
        phoneNo: { type: String },
        email: { type: String },
        ifsc: { type: String },
        micr: { type: String },
    },

    overdraftLimit: { type: Number, required: true },
    accountNumber: { type: String, required: true, unique: true },
    amb: { type: Number, required: true },
    openedDate: { type: Date, default: Date.now },
    customerId: { type: String, required: true }
    */
}, options);