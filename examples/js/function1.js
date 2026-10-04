const numbers = [-1, 0, 1, 3, 5];

// Function Expression
const negative_numbers = numbers.map(
    // Anomymous function
    function(element) {
        // Conditional Assignment
        const result = element > 0? -1 * element : element;
        return result;
    }
);

console.log(negative_numbers);

