function makeInt(n){
    const parsed = parseInt(n, 10);
    return parsed;
}

console.log(makeInt("4"));

function add(a, b){
    return a + b;
}

console.log(add(4,7));

function subtract(a, b){
    return a - b;
}

console.log(subtract(9,2));

function divide(a,b){
    return a / b;
}

console.log(divide(18, 6));

function multiply(a,b){
    return a * b;
}

console.log(multiply(8,4));

let n = 5;

function increment(n){
    n++;
    return n;
}

console.log(increment());

function decrement(n){
    n--;
    return n;
}

console.log(decrement());

function preserveDecimal(n){
    const preserve = parseFloat(n);
    return preserve;
}

console.log(preserveDecimal("8.45330"));