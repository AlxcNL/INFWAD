const total1 = require('./sum');
const total2 = require('./sum');
const total3 = require('./sum');
const total4 = require('./sum');

const nums = [1, 2, 3, 4, 5];
const expected = 15;

test('total1', () => {
    expect(total1(nums)).toBe(expected);
});

test('total2', () => {
    expect(total2(nums)).toBe(expected);
});

test('total3', () => {
    expect(total3(nums)).toBe(expected);
});

test('total4', () => {
    expect(total4(nums)).toBe(expected);
});
