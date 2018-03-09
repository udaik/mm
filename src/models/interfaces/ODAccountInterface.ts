import { BankAccountInterface } from "./BankAccountInterface";

export interface ODAccountInterface extends BankAccountInterface {
    bookBalance: number;
    availableBalance: number;
    drawingPower : number;
};
