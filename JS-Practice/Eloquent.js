// -----------------------option arguments 
// skip var be skip
function square(x, y) {
    return y;
}
console.log(square(1, 2, 3));
// → 2

// minus
function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

// function power()
function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64

//------------------------Closure
// let insde the function - normal situation
function wrapValue(n) {
    let local = n;
    return a = function () {
        return local * 2;
    }
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2


// No let or var inside the function
function wrapValue(n) {
    local = n;
    //return () => local; 
    return a = function () {
        return local * 2;
    }
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 4
console.log(wrap2());
// → 4