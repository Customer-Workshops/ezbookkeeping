// Unit tests for default categories
import { describe, expect, test } from '@jest/globals';
import { DEFAULT_EXPENSE_CATEGORIES, DEFAULT_INCOME_CATEGORIES, DEFAULT_TRANSFER_CATEGORIES } from '@/consts/category.ts';

describe('Default Expense Categories', () => {
    test('should have exactly 17 expense categories', () => {
        expect(DEFAULT_EXPENSE_CATEGORIES).toHaveLength(17);
    });

    test('should contain all required expense categories in correct order', () => {
        const expectedCategories = [
            'Food',
            'Social Life',
            'Rent',
            'Loans',
            'Groceries',
            'Transport',
            'Entertainment',
            'Household',
            'Beauty',
            'Apparel',
            'Pets',
            'Health',
            'Education',
            'Culture',
            'Gift',
            'Insurance',
            'Others'
        ];

        DEFAULT_EXPENSE_CATEGORIES.forEach((category, index) => {
            expect(category.name).toBe(expectedCategories[index]);
        });
    });

    test('each expense category should have required properties', () => {
        DEFAULT_EXPENSE_CATEGORIES.forEach((category) => {
            expect(category).toHaveProperty('name');
            expect(category).toHaveProperty('categoryIconId');
            expect(category).toHaveProperty('color');
            expect(category).toHaveProperty('subCategories');
            
            expect(typeof category.name).toBe('string');
            expect(typeof category.categoryIconId).toBe('string');
            expect(typeof category.color).toBe('string');
            expect(Array.isArray(category.subCategories)).toBe(true);
            expect(category.subCategories.length).toBeGreaterThan(0);
        });
    });

    test('each expense category should have at least one subcategory', () => {
        DEFAULT_EXPENSE_CATEGORIES.forEach((category) => {
            expect(category.subCategories.length).toBeGreaterThanOrEqual(1);
            
            category.subCategories.forEach((subCategory) => {
                expect(subCategory).toHaveProperty('name');
                expect(subCategory).toHaveProperty('categoryIconId');
                expect(subCategory).toHaveProperty('color');
            });
        });
    });
});

describe('Default Income Categories', () => {
    test('should have exactly 7 income categories', () => {
        expect(DEFAULT_INCOME_CATEGORIES).toHaveLength(7);
    });

    test('should contain all required income categories in correct order', () => {
        const expectedCategories = [
            'Salary',
            'Allowance',
            'Shares',
            'Petty cash',
            'Bonus',
            'Refund',
            'Others'
        ];

        DEFAULT_INCOME_CATEGORIES.forEach((category, index) => {
            expect(category.name).toBe(expectedCategories[index]);
        });
    });

    test('each income category should have required properties', () => {
        DEFAULT_INCOME_CATEGORIES.forEach((category) => {
            expect(category).toHaveProperty('name');
            expect(category).toHaveProperty('categoryIconId');
            expect(category).toHaveProperty('color');
            expect(category).toHaveProperty('subCategories');
            
            expect(typeof category.name).toBe('string');
            expect(typeof category.categoryIconId).toBe('string');
            expect(typeof category.color).toBe('string');
            expect(Array.isArray(category.subCategories)).toBe(true);
            expect(category.subCategories.length).toBeGreaterThan(0);
        });
    });

    test('each income category should have at least one subcategory', () => {
        DEFAULT_INCOME_CATEGORIES.forEach((category) => {
            expect(category.subCategories.length).toBeGreaterThanOrEqual(1);
            
            category.subCategories.forEach((subCategory) => {
                expect(subCategory).toHaveProperty('name');
                expect(subCategory).toHaveProperty('categoryIconId');
                expect(subCategory).toHaveProperty('color');
            });
        });
    });
});

describe('Default Transfer Categories', () => {
    test('should have transfer categories defined', () => {
        expect(DEFAULT_TRANSFER_CATEGORIES.length).toBeGreaterThan(0);
    });

    test('each transfer category should have required properties', () => {
        DEFAULT_TRANSFER_CATEGORIES.forEach((category) => {
            expect(category).toHaveProperty('name');
            expect(category).toHaveProperty('categoryIconId');
            expect(category).toHaveProperty('color');
            expect(category).toHaveProperty('subCategories');
            
            expect(typeof category.name).toBe('string');
            expect(typeof category.categoryIconId).toBe('string');
            expect(typeof category.color).toBe('string');
            expect(Array.isArray(category.subCategories)).toBe(true);
        });
    });
});

describe('Category Color Format', () => {
    test('all expense category colors should be valid hex colors', () => {
        const hexColorRegex = /^[0-9a-fA-F]{6}$/;
        
        DEFAULT_EXPENSE_CATEGORIES.forEach((category) => {
            expect(category.color).toMatch(hexColorRegex);
            
            category.subCategories.forEach((subCategory) => {
                expect(subCategory.color).toMatch(hexColorRegex);
            });
        });
    });

    test('all income category colors should be valid hex colors', () => {
        const hexColorRegex = /^[0-9a-fA-F]{6}$/;
        
        DEFAULT_INCOME_CATEGORIES.forEach((category) => {
            expect(category.color).toMatch(hexColorRegex);
            
            category.subCategories.forEach((subCategory) => {
                expect(subCategory.color).toMatch(hexColorRegex);
            });
        });
    });
});

describe('Category Icon IDs', () => {
    test('all expense categories should have numeric icon IDs', () => {
        DEFAULT_EXPENSE_CATEGORIES.forEach((category) => {
            expect(category.categoryIconId).toMatch(/^\d+$/);
            
            category.subCategories.forEach((subCategory) => {
                expect(subCategory.categoryIconId).toMatch(/^\d+$/);
            });
        });
    });

    test('all income categories should have numeric icon IDs', () => {
        DEFAULT_INCOME_CATEGORIES.forEach((category) => {
            expect(category.categoryIconId).toMatch(/^\d+$/);
            
            category.subCategories.forEach((subCategory) => {
                expect(subCategory.categoryIconId).toMatch(/^\d+$/);
            });
        });
    });
});
