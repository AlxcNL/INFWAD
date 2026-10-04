const numbers = [1, 1, 2, 3, 5, 8];

const negative_values = numbers.map(
    function make_negative(element) {
        return -1 * element;
    }
);

console.log(negative_values);