import { Schema } from "mongoose";
import { options } from "./AccountOptions";

export const ODSchema: Schema = new Schema({
    userInfo: {
        userId: { type: Schema.Types.ObjectId },
    },

    bookBalance: { type: Number, default: 0.0 },
    availableBalance: { type: Number, default: 0.0 },
    drawingPower: { type: Number, default: 0.0 }

}, options);