import type { PresetCategory } from '@/core/category.ts';

export const DEFAULT_EXPENSE_CATEGORIES: PresetCategory[] = [
    {
        name: 'Food',
        categoryIconId: '2',
        color: 'ff6b22',
        subCategories: [
            {
                name: 'Food',
                categoryIconId: '2',
                color: 'ff6b22'
            }
        ]
    },
    {
        name: 'Social Life',
        categoryIconId: '540',
        color: 'ff2d55',
        subCategories: [
            {
                name: 'Social Life',
                categoryIconId: '540',
                color: 'ff2d55'
            }
        ]
    },
    {
        name: 'Rent',
        categoryIconId: '290',
        color: '000000',
        subCategories: [
            {
                name: 'Rent',
                categoryIconId: '290',
                color: '000000'
            }
        ]
    },
    {
        name: 'Loans',
        categoryIconId: '970',
        color: 'ff9500',
        subCategories: [
            {
                name: 'Loans',
                categoryIconId: '970',
                color: 'ff9500'
            }
        ]
    },
    {
        name: 'Groceries',
        categoryIconId: '70',
        color: 'ff6b22',
        subCategories: [
            {
                name: 'Groceries',
                categoryIconId: '70',
                color: 'ff6b22'
            }
        ]
    },
    {
        name: 'Transport',
        categoryIconId: '300',
        color: '009688',
        subCategories: [
            {
                name: 'Transport',
                categoryIconId: '300',
                color: '009688'
            }
        ]
    },
    {
        name: 'Entertainment',
        categoryIconId: '500',
        color: 'ff2d55',
        subCategories: [
            {
                name: 'Entertainment',
                categoryIconId: '500',
                color: 'ff2d55'
            }
        ]
    },
    {
        name: 'Household',
        categoryIconId: '210',
        color: '000000',
        subCategories: [
            {
                name: 'Household',
                categoryIconId: '210',
                color: '000000'
            }
        ]
    },
    {
        name: 'Beauty',
        categoryIconId: '180',
        color: '673ab7',
        subCategories: [
            {
                name: 'Beauty',
                categoryIconId: '180',
                color: '673ab7'
            }
        ]
    },
    {
        name: 'Apparel',
        categoryIconId: '110',
        color: '673ab7',
        subCategories: [
            {
                name: 'Apparel',
                categoryIconId: '110',
                color: '673ab7'
            }
        ]
    },
    {
        name: 'Pets',
        categoryIconId: '580',
        color: 'ff2d55',
        subCategories: [
            {
                name: 'Pets',
                categoryIconId: '580',
                color: 'ff2d55'
            }
        ]
    },
    {
        name: 'Health',
        categoryIconId: '800',
        color: 'ff3b30',
        subCategories: [
            {
                name: 'Health',
                categoryIconId: '800',
                color: 'ff3b30'
            }
        ]
    },
    {
        name: 'Education',
        categoryIconId: '600',
        color: 'cddc39',
        subCategories: [
            {
                name: 'Education',
                categoryIconId: '600',
                color: 'cddc39'
            }
        ]
    },
    {
        name: 'Culture',
        categoryIconId: '610',
        color: 'cddc39',
        subCategories: [
            {
                name: 'Culture',
                categoryIconId: '610',
                color: 'cddc39'
            }
        ]
    },
    {
        name: 'Gift',
        categoryIconId: '710',
        color: '4cd964',
        subCategories: [
            {
                name: 'Gift',
                categoryIconId: '710',
                color: '4cd964'
            }
        ]
    },
    {
        name: 'Insurance',
        categoryIconId: '950',
        color: 'ff9500',
        subCategories: [
            {
                name: 'Insurance',
                categoryIconId: '950',
                color: 'ff9500'
            }
        ]
    },
    {
        name: 'Others',
        categoryIconId: '1000',
        color: '8e8e93',
        subCategories: [
            {
                name: 'Others',
                categoryIconId: '1010',
                color: '8e8e93'
            }
        ]
    }
];

export const DEFAULT_INCOME_CATEGORIES: PresetCategory[] = [
    {
        name: 'Salary',
        categoryIconId: '2010',
        color: 'ff6b22',
        subCategories: [
            {
                name: 'Salary',
                categoryIconId: '2010',
                color: 'ff6b22'
            }
        ]
    },
    {
        name: 'Allowance',
        categoryIconId: '2080',
        color: 'ff6b22',
        subCategories: [
            {
                name: 'Allowance',
                categoryIconId: '2080',
                color: 'ff6b22'
            }
        ]
    },
    {
        name: 'Shares',
        categoryIconId: '2100',
        color: 'ff9500',
        subCategories: [
            {
                name: 'Shares',
                categoryIconId: '2100',
                color: 'ff9500'
            }
        ]
    },
    {
        name: 'Petty cash',
        categoryIconId: '5200',
        color: '8e8e93',
        subCategories: [
            {
                name: 'Petty cash',
                categoryIconId: '5200',
                color: '8e8e93'
            }
        ]
    },
    {
        name: 'Bonus',
        categoryIconId: '2020',
        color: 'ff6b22',
        subCategories: [
            {
                name: 'Bonus',
                categoryIconId: '2020',
                color: 'ff6b22'
            }
        ]
    },
    {
        name: 'Refund',
        categoryIconId: '920',
        color: '8e8e93',
        subCategories: [
            {
                name: 'Refund',
                categoryIconId: '920',
                color: '8e8e93'
            }
        ]
    },
    {
        name: 'Others',
        categoryIconId: '1000',
        color: '8e8e93',
        subCategories: [
            {
                name: 'Others',
                categoryIconId: '3010',
                color: '8e8e93'
            }
        ]
    }
];

export const DEFAULT_TRANSFER_CATEGORIES: PresetCategory[] = [
    {
        name: 'General Transfer',
        categoryIconId: '4000',
        color: 'ff6b22',
        subCategories: [
            {
                name: 'Bank Transfer',
                categoryIconId: '900',
                color: 'ff6b22'
            },
            {
                name: 'Credit Card Repayment',
                categoryIconId: '980',
                color: 'ff6b22'
            },
            {
                name: 'Deposits & Withdrawals',
                categoryIconId: '981',
                color: 'ff6b22'
            }
        ]
    },
    {
        name: 'Loan & Debt',
        categoryIconId: '950',
        color: 'ff9500',
        subCategories: [
            {
                name: 'Borrowing Money',
                categoryIconId: '910',
                color: 'ff9500'
            },
            {
                name: 'Lending Money',
                categoryIconId: '290',
                color: 'ff9500'
            },
            {
                name: 'Repayment',
                categoryIconId: '930',
                color: 'ff9500'
            },
            {
                name: 'Debt Collection',
                categoryIconId: '5030',
                color: 'ff9500'
            }
        ]
    },

    {
        name: 'Miscellaneous',
        categoryIconId: '1000',
        color: '8e8e93',
        subCategories: [
            {
                name: 'Out-of-Pocket Expense',
                categoryIconId: '2010',
                color: '8e8e93'
            },
            {
                name: 'Reimbursement',
                categoryIconId: '920',
                color: '8e8e93'
            },
            {
                name: 'Other Transfer',
                categoryIconId: '4900',
                color: '8e8e93'
            }
        ]
    }
];
