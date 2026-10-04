const numbers = [1, 1, 2, 3, 5, 8]

function make_negative(element) {
    return -1 * element
}

negative_values = numbers.map(make_negative)
console.log(negative_values)