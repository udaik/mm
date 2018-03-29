export interface WalletInterface {
    userInfo: {
        userId: string,
    },

    name: string;
    balance: number;
    isActive?: boolean;

}