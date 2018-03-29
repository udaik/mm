import { BankInterface } from "./BankInterface";

export interface ODInterface extends BankInterface {
    bookBalance?: number;
    availableBalance?: number;
    drawingPower?: number;
};
