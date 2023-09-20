"use strict";
// Question 1
// Smallest Difference
// Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonConstructibleChange = exports.smallestDifference = void 0;
// Answer 1
function smallestDifference(firstArray, secondArray) {
    let minDifference = Infinity;
    let pair = [0, 0];
    for (const i of firstArray) {
        for (const j of secondArray) {
            let difference = Math.abs(i - j);
            if (difference < minDifference) {
                minDifference = difference;
                pair = [i, j];
            }
        }
    }
    return {
        difference: minDifference,
        pair
    };
}
exports.smallestDifference = smallestDifference;
// Question 2
// Non-Constructible Change
// Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create.
// The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value).
// Answer 2
function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);
    let change = 0;
    for (const coin of coins) {
        if (coin <= change + 1) {
            change += coin;
        }
        else {
            break;
        }
    }
    return change + 1;
}
exports.nonConstructibleChange = nonConstructibleChange;
//# sourceMappingURL=index.js.map