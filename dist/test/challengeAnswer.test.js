"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const challengeAnswer_1 = require("../challengeAnswer");
describe('smallestDifference', () => {
    it('should return the smallest difference when given two arrays of equal length and non-negative integers', () => {
        const firstArray = [1, 3, 5, 7];
        const secondArray = [2, 4, 6, 8];
        const result = (0, challengeAnswer_1.smallestDifference)(firstArray, secondArray);
        expect(result.difference).toBe(1);
        expect(result.pair).toEqual([1, 2]);
    });
    it('should return the smallest difference when given two arrays of different lengths and non-negative integers', () => {
        const firstArray = [1, 3, 5, 7];
        const secondArray = [2, 4, 6];
        const result = (0, challengeAnswer_1.smallestDifference)(firstArray, secondArray);
        expect(result.difference).toBe(1);
        expect(result.pair).toEqual([1, 2]);
    });
    it('should return 0 when given two arrays of length 1 and non-negative integers', () => {
        const firstArray = [5];
        const secondArray = [5];
        const result = (0, challengeAnswer_1.smallestDifference)(firstArray, secondArray);
        expect(result.difference).toBe(0);
        expect(result.pair).toEqual([5, 5]);
    });
    it('should throw an error when given two empty arrays', () => {
        const firstArray = [];
        const secondArray = [];
        expect(() => (0, challengeAnswer_1.smallestDifference)(firstArray, secondArray)).toThrowError('Arrays should have almost one element');
    });
    it('should return the smallest difference when given one empty array and one non-empty array', () => {
        const firstArray = [];
        const secondArray = [2, 4, 6, 8];
        expect(() => (0, challengeAnswer_1.smallestDifference)(firstArray, secondArray)).toThrowError('Arrays should have almost one element');
    });
    it('should throw an error when given two arrays containing only negative integers', () => {
        const firstArray = [-1, -3, -5, -7];
        const secondArray = [-2, -4, -6, -8];
        expect(() => (0, challengeAnswer_1.smallestDifference)(firstArray, secondArray)).toThrowError('it should not have negative number');
    });
    it('should return example 1 response', () => {
        const firstArray = [1, 3, 15, 11, 2];
        const secondArray = [23, 127, 235, 19, 8];
        const result = (0, challengeAnswer_1.smallestDifference)(firstArray, secondArray);
        expect(result.difference).toBe(3);
        expect(result.pair).toEqual([11, 8]);
    });
    it('should return example 2 response', () => {
        const firstArray = [10, 5, 40];
        const secondArray = [50, 90, 80];
        const result = (0, challengeAnswer_1.smallestDifference)(firstArray, secondArray);
        expect(result.difference).toBe(10);
        expect(result.pair).toEqual([40, 50]);
    });
});
describe('nonConstructibleChange', () => {
    it('should return the correct minimum amount of change for an array of positive integers', () => {
        const coins = [1, 2, 5];
        const result = (0, challengeAnswer_1.nonConstructibleChange)(coins);
        expect(result).toBe(4);
    });
    it('should return 1 when given an empty array', () => {
        const coins = [];
        const result = (0, challengeAnswer_1.nonConstructibleChange)(coins);
        expect(result).toBe(1);
    });
    it('should return the correct minimum amount of change when given an array with only one coin', () => {
        const coins = [2];
        const result = (0, challengeAnswer_1.nonConstructibleChange)(coins);
        expect(result).toBe(1);
    });
    it('should throw an error when given a negative coin', () => {
        const coins = [1, -2, 5];
        expect(() => {
            (0, challengeAnswer_1.nonConstructibleChange)(coins);
        }).toThrowError('it should not have negative coin');
    });
    it('should return the correct minimum amount of change when given an array with only one coin that is greater than 1', () => {
        const coins = [5];
        const result = (0, challengeAnswer_1.nonConstructibleChange)(coins);
        expect(result).toBe(1);
    });
    it('should return the correct minimum amount of change when given an array with coins that have duplicate values', () => {
        const coins = [1, 2, 2, 3, 4, 4, 5];
        const result = (0, challengeAnswer_1.nonConstructibleChange)(coins);
        expect(result).toBe(22);
    });
    it('should return example response', () => {
        const coins = [5, 7, 1, 1, 2, 3, 22];
        const result = (0, challengeAnswer_1.nonConstructibleChange)(coins);
        expect(result).toBe(20);
    });
});
//# sourceMappingURL=challengeAnswer.test.js.map