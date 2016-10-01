'use strict';

const Hoek = require('hoek');

const combinations = function (requirements, exclusionSet) {

    const overallSet = {};

    const recursiveCombinations = function (requirementSet, cumulativeSet) {

        requirementSet.forEach((currentRequirement, index) => {

            const newCumulativeSet = Hoek.clone(cumulativeSet);

            if (Hoek.intersect(newCumulativeSet, exclusionSet[currentRequirement]).length === 0) {
                newCumulativeSet.push(currentRequirement);

                const stringSet = newCumulativeSet.toString();
                overallSet[stringSet] = true;
            }

            if (requirementSet.slice(index + 1).length > 0) {
                return recursiveCombinations(requirementSet.slice(index + 1), newCumulativeSet);
            }
        });
    };

    recursiveCombinations(requirements, []);

    return Object.keys(overallSet).map((set) => {

        return set.split(',');
    });
};

module.exports = combinations;