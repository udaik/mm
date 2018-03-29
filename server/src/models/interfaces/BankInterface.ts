// import { AccountType } from "../schemas/AccountType"

export interface BankInterface {
    userInfo: {
        userId: string,
    },
    
    name: string;
    balance: number;
    isActive: boolean;
    /*
    accountType: AccountType;

    branch: {
        code: string;
        name: string;
        address: string;
        city: string;
        state: string;
        phoneNo: string;
        email: string;
        ifsc: string;
        micr: string;
    };

    overdraftLimit: number;
    accountNumber: string;
    amb: number;
    openedDate: string;
    customerId: string;

    transactions: {
        debits: number;
        credits: number;
    };
    */
}
