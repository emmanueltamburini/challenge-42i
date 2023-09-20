// Question 1
// Smallest Difference
// Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.

// Answer 1
export const smallestDifference = (firstArray: number[], secondArray: number[]): { difference: number, pair: number[] } =>  {
    if (firstArray.length === 0 || secondArray.length === 0) {
        throw new Error('Arrays should have almost one element');
    } 

    let minDifference = Infinity;
    let pair = [0, 0];

    for (const i of firstArray) {
        for (const j of secondArray) {
            if (i < 0 || j < 0) {
                throw new Error('it should not have negative number');
            }
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
    }
}

// Question 2
// Non-Constructible Change
// Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create.
// The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value).


// Answer 2
export const nonConstructibleChange = (coins: number[]): number =>  {
    coins.sort((a, b) => a - b);

    let change = 0;

    for (const coin of coins) {
        if (coin < 0) {
            throw new Error('it should not have negative coin');
        }
        if (coin <= change + 1) {
            change += coin;
        } else {
            break;
        }
    }

    return change + 1;
}
