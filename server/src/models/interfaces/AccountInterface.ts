export interface AccountInterface {
    userId: string;
    mmAccountName: string;
    balance: number;
    isActive: boolean;
    transactions?: {
        debits: number;
        credits: number;
    };

    deposit(amt: number): Promise<number>;
    withdraw(amt: number): Promise<number>;
    balanceGet(): Promise<number>;
}