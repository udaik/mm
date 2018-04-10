export interface TransactionInterface {
    userId: string;
    description: string;
    amount: number;
    
    creditBalance: number;
    debitBalance: number;

    creditAccount: string;
    debitAccount: string;
}