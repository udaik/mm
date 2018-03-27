import { Schema } from "mongoose";
import { options } from "./AccountOptions";

export var ODAccountSchema: Schema = new Schema({
    bookBalance: { type: Number, default: 0.0 },
    availableBalance: { type: Number, default: 0.0 },
    drawingPower : {type: Number, default : 0.0}
}, options);