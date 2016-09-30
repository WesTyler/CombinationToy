# PermutationToy
Toy problem: permutations with exclusion pairs.

## Goal
Define the function in permutations.js to pass tests in test/permutation-tests.js

Given a set of values and a list of exclusions (pairs of values that cannot be combined), write a function that returns all combinations of values.

The order of the outer array is not important. The order of the values in the inner array should match the order of appearance in the `values` set.

Example:
```Javascript
const values = ['a', 'b', 'c', 'd'];
const excluded = {
  a: ['a', 'c'],
  b: ['b'],
  c: ['c', 'a'],
  d: ['d']
};

const validCombinations = permutations(values, excluded);

/*
  [
    ['a'],
    ['b'],
    ['c'],
    ['d'],
    ['a', 'b'],
    ['a', 'd'],
    ['b', 'c'],
    ['b', 'd'],
    ['c', 'd'],
    ['b', 'c', 'd']
  ]
*/
```

## Run Tests
```bash
npm install &&
npm test
```
