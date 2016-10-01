'use strict';

const Code = require('code');
const Lab = require('lab');
const Combinations = require('./../combinations');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('Combinations', () => {

    it('should handle the small cases', (done) => {

        const requirementSet = ['positive', 'min', 'max'];
        const exclusionList = {
            positive: [],
            min     : [],
            max     : []
        };

        const allowedCombinations = Combinations(requirementSet, exclusionList);

        expect(allowedCombinations.length).to.equal(7);
        expect(allowedCombinations).to.once.include([['positive']]);
        expect(allowedCombinations).to.once.include([['min']]);
        expect(allowedCombinations).to.once.include([['max']]);
        expect(allowedCombinations).to.once.include([['positive', 'min']]);
        expect(allowedCombinations).to.once.include([['positive', 'max']]);
        expect(allowedCombinations).to.once.include([['min', 'max']]);
        expect(allowedCombinations).to.once.include([['positive', 'min', 'max']]);
        done();
    });

    it('should handle an exclusion', (done) => {

        const requirementSet = ['positive', 'min', 'max', 'negative'];
        const exclusionList = {
            positive: ['negative'],
            min     : [],
            max     : [],
            negative: ['positive']
        };

        const allowedCombinations = Combinations(requirementSet, exclusionList);

        expect(allowedCombinations.length).to.equal(11);
        expect(allowedCombinations).to.once.include([['positive']]);
        expect(allowedCombinations).to.once.include([['min']]);
        expect(allowedCombinations).to.once.include([['max']]);
        expect(allowedCombinations).to.once.include([['negative']]);
        expect(allowedCombinations).to.once.include([['min', 'max']]);
        expect(allowedCombinations).to.once.include([['positive', 'min']]);
        expect(allowedCombinations).to.once.include([['positive', 'max']]);
        expect(allowedCombinations).to.once.include([['positive', 'min', 'max']]);
        expect(allowedCombinations).to.once.include([['min', 'negative']]);
        expect(allowedCombinations).to.once.include([['max', 'negative']]);
        expect(allowedCombinations).to.once.include([['min', 'max', 'negative']]);
        done();
    });

    it('should do it all', (done) => {

        const requirementSet = [
            'positive',
            'negative',
            'integer',
            'min',
            'max',
            'greater',
            'less',
            'precision',
            'multiple'
        ];
        const exclusionList = {
            positive : ['negative'],
            negative : ['positive'],
            precision: ['integer', 'multiple'],
            integer  : ['precision'],
            multiple : ['precision'],
            max      : ['less'],
            less     : ['max'],
            min      : ['greater'],
            greater  : ['min']
        };

        const allowedCombinations = Combinations(requirementSet, exclusionList);

        expect(allowedCombinations.length).to.equal(134);

        // A few spot-checks:
        expect(allowedCombinations).to.once.include([['positive']]);
        expect(allowedCombinations).to.once.include([['min']]);
        expect(allowedCombinations).to.once.include([['max']]);
        expect(allowedCombinations).to.once.include([['negative']]);
        expect(allowedCombinations).to.once.include([['min', 'max']]);
        expect(allowedCombinations).to.once.include([['positive', 'min']]);
        expect(allowedCombinations).to.once.include([['positive', 'max']]);
        expect(allowedCombinations).to.once.include([['positive', 'min', 'max']]);
        expect(allowedCombinations).to.once.include([['negative', 'min']]);
        expect(allowedCombinations).to.once.include([['negative', 'max']]);
        expect(allowedCombinations).to.once.include([['negative', 'min', 'max']]);
        expect(allowedCombinations).to.once.include([['positive', 'integer', 'min', 'less', 'multiple']]);
        expect(allowedCombinations).to.once.include([['less', 'multiple']]);
        done();
    });
});
