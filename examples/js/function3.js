const numbers = [0, 1, 1, 2, 3, 5];

// Function Expression
// Reduce function
const total = numbers.reduce(
    // Anomymous function
    function(a, b) {
        // Template String        
        console.log( `${highlight(a)} + ${highlight(b)}` )
        return a + b;
    }
);

function highlight(word) {
    // Output color using ANSI escape codes
    return `\x1b[36m${word}\x1b[0m`;
}

console.log(total)

