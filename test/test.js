import { expect } from 'chai';
import calculator from '../index.js';

describe('String Calculator - Extended', () => {
    it('should return 0 for an empty string', () => {
        expect(calculator.add("")).to.equal(0);
    });
});
