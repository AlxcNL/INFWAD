const numbers = [0, 1, 1, 2, 3, 5];

// Function Expression
// Reduce function
const total = numbers.reduce(
    // Anomymous function
    function(a, b) {
        // Template String
        // Output color using ANSI escape codes
        console.log( `\x1b[36m${a}\x1b[0m + ${b}` )
        return a + b;
    }
);

console.log(total)

