const sum = require('./sum');

describe('return sum', () => {
  test('sum a + b', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  test('The sum of 0 + 0 must be 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  test('Test error throw when parameters are not numbers', () => {
    expect(() => {sum(4, '5')}).toThrow(Error)
  });

  test('Test erro messege', () => {
    expect(() => {sum(4, '5')}).toThrowError('parameters must be numbers')
  });
});