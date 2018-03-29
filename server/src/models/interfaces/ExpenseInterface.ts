export interface ExpenseInterface {
    userInfo: {
        userId: string,
    },

    name: string;
    totalSpent: number;
    isActive: boolean;
}