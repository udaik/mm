export interface TransactionInterface {
    userInfo: {
        userId: string,
    },

    name: string;
    balance: number;
    isActive?: boolean;

}