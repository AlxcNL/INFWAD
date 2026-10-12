function faculty(n) {
    // Conditional Assignment
    // Recursive call
    const acc = n==0 ? 1 : n * faculty(n-1);
    console.log(acc); 
    return acc; 
}

faculty(-1)


