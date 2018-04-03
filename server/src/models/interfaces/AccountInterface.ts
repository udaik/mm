export interface AccountInterface {
    userId: string;
    mmAccountName: string;
    balance: number;
    isActive: boolean;
    transactions?: {
        debits: number;
        credits: number;
    };
}