const { expect } = require('chai');
const { add } = require('../src/app');
describe('add function', () => {
  it('should return the sum of two numbers', () => {
    expect(add(1, 2)).to.equal(3);
  });
  it('should handle negative numbers', () => {
    expect(add(-1, -2)).to.equal(-3);
  });
  it('should handle decimal numbers', () => {
    expect(add(1.5, 2.5)).to.equal(4);
  });
  it('should return 0 when one of the input is 0', () => {
    expect(add(0, 5)).to.equal(5);
  });
  it('should return NaN if one of the input is not a number', () => {
    expect(add('a', 2)).to.be.NaN;
  });
});