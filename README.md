# CombinationToy
Toy problem: combinations with exclusion pairs.

## Goal
Define the function in combinations.js to pass tests in test/combination-tests.js

Given a set of values and a list of exclusions (pairs of values that cannot be combined together), write a function that returns all combinations of values.

The order of the outer array is not important. The order of the values in the inner array should match the order of appearance in the `values` set.

Example:
```Javascript
const values = ['positive', 'negative', 'minimum', 'maximum'];
const excluded = {
  positive: ['negative'],
  negative: ['positive'],
  minimum : [],
  maximum : []
};

const validCombinations = combinations(values, excluded);

/*
  [
    ['positive'],
    ['negative'],
    ['minimum'],
    ['maximum'],
    ['positive', 'minimum'],
    ['positive', 'maximum'],
    ['positive', 'minimum', 'maximum'],
    ['negative', 'minimum'],
    ['negative', 'maximum'],
    ['negative', 'minimum', 'maximum'],
    ['minimum', 'maximum']
  ]
*/
```

## Run Tests
```bash
npm install &&
npm test
```
