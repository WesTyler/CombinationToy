'use strict';

const Code = require('code');
const Lab = require('lab');
const Permutations = require('./../permutations');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('Permutations', () => {

    it('should handle the small cases', (done) => {

        const requirementSet = ['positive', 'min', 'max'];
        const exclusionList = {
            positive: ['positive'],
            min     : ['min'],
            max     : ['max']
        };

        const allowedPermutations = Permutations(requirementSet, exclusionList);

        expect(allowedPermutations.length).to.equal(7);
        expect(allowedPermutations).to.once.include([['positive']]);
        expect(allowedPermutations).to.once.include([['min']]);
        expect(allowedPermutations).to.once.include([['max']]);
        expect(allowedPermutations).to.once.include([['positive', 'min']]);
        expect(allowedPermutations).to.once.include([['positive', 'max']]);
        expect(allowedPermutations).to.once.include([['min', 'max']]);
        expect(allowedPermutations).to.once.include([['positive', 'min', 'max']]);
        done();
    });

    it('should handle an exclusion', (done) => {

        const requirementSet = ['positive', 'min', 'max', 'negative'];
        const exclusionList = {
            positive: ['positive', 'negative'],
            min     : ['min'],
            max     : ['max'],
            negative: ['negative', 'positive']
        };

        const allowedPermutations = Permutations(requirementSet, exclusionList);

        expect(allowedPermutations.length).to.equal(11);
        expect(allowedPermutations).to.once.include([['positive']]);
        expect(allowedPermutations).to.once.include([['min']]);
        expect(allowedPermutations).to.once.include([['max']]);
        expect(allowedPermutations).to.once.include([['negative']]);
        expect(allowedPermutations).to.once.include([['min', 'max']]);
        expect(allowedPermutations).to.once.include([['positive', 'min']]);
        expect(allowedPermutations).to.once.include([['positive', 'max']]);
        expect(allowedPermutations).to.once.include([['positive', 'min', 'max']]);
        expect(allowedPermutations).to.once.include([['min', 'negative']]);
        expect(allowedPermutations).to.once.include([['max', 'negative']]);
        expect(allowedPermutations).to.once.include([['min', 'max', 'negative']]);
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
            positive : ['positive','negative'],
            negative : ['negative','positive'],
            precision: ['precision','integer', 'multiple'],
            integer  : ['integer','precision'],
            multiple : ['multiple','precision'],
            max      : ['max','less'],
            less     : ['less','max'],
            min      : ['min','greater'],
            greater  : ['greater','min']
        };

        const allowedPermutations = Permutations(requirementSet, exclusionList);

        expect(allowedPermutations.length).to.equal(134);

        // A few spot-checks:
        expect(allowedPermutations).to.once.include([['positive']]);
        expect(allowedPermutations).to.once.include([['min']]);
        expect(allowedPermutations).to.once.include([['max']]);
        expect(allowedPermutations).to.once.include([['negative']]);
        expect(allowedPermutations).to.once.include([['min', 'max']]);
        expect(allowedPermutations).to.once.include([['positive', 'min']]);
        expect(allowedPermutations).to.once.include([['positive', 'max']]);
        expect(allowedPermutations).to.once.include([['positive', 'min', 'max']]);
        expect(allowedPermutations).to.once.include([['negative', 'min']]);
        expect(allowedPermutations).to.once.include([['negative', 'max']]);
        expect(allowedPermutations).to.once.include([['negative', 'min', 'max']]);
        expect(allowedPermutations).to.once.include([['positive', 'integer', 'min', 'less', 'multiple']]);
        expect(allowedPermutations).to.once.include([['less', 'multiple']]);
        done();
    });
});