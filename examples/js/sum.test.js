const total1 = require('./sum');
const total2 = require('./sum');
const total3 = require('./sum');

test('total1', () => {
    expect(total1([1, 2, 3, 4, 5])).toBe(15);
});

test('total2', () => {
    expect(total2([1, 2, 3, 4, 5])).toBe(15);
});

test('total3', () => {
    expect(total3([1, 2, 3, 4, 5])).toBe(15);
});
