function add(subtotal, element) {
    return subtotal + element;    
}

function total1(nums) {

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = add(sum, nums[i]);
    }

    return sum;

}

function total2(nums) {
    let sum = 0;

    for (let value of nums) {
        sum = add(sum,value)
    }

    return sum;

}

function total3(nums) {
    return nums.reduce(add);
}

const total4 = (a, b) => {
    return add(a, b)
};

module.exports = total1, total2, total3, total4;

