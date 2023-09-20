# Challenge 42i

## Challenge 42i README

This application has designed to be the answer to the challenge for the company [42i](https://42i.co/). You can find the answer running [here](https://challenge-42i-production.up.railway.app/) and all documentation [here](https://challenge-42i-production.up.railway.app/api-docs/). Here will be the answers to the following two questions:

### Smallest Difference

Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.

**Examples:**

```javascript
const a = [1, 3, 15, 11, 2];
const b = [23, 127, 235, 19, 8];

smallestDifference(a, b); // output: 3

const a = [10, 5, 40];
const b = [50, 90, 80];

smallestDifference(a, b); // output: 10
```

### Non-Constructible Change

Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you **cannot** create. The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you’re given coins = `[1, 2, 5]`, the minimum amount of change that you can’t create is `4`. If you’re given no coins, the minimum amount of change that you can’t create is 1.

**Sample Input:**

`coins = [5, 7, 1, 1, 2, 3, 22]`

**Sample Output:**

`20`

### Getting started

Before that you must run `npm install` or `yarn` to install all dependencies of the app. In my case I used the following versions. Please be sure to have all these installations before to continue:

npm: 8.19.3
yarn: 1.22.19
node: v19.1.0

And finally you can run `npm start` or `yarn start` to compile the app and run this app. You can find this app in the server is running in : <http://localhost:8000> and all documentation in : <http://localhost:8000/api-docs>

Also there are other useful script that you could use:

- `npm run compile`: use this to compile the typescript code to javascript code
- `npm run compile-dev`: use this to active a watcher that compile every change in the code in real time
- `npm run dev`: use this to run the app with nodemon, in my case I used the version 2.0.20, to compile in real time every change (It is recommended that it be used in conjunction with the above command.)
- `npm run debug`: use this to do the same of the above command but in debug mode.
- `npm test`: use this to run the tests.
