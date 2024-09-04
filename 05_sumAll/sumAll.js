function sumAll(n1, n2) {
    let sum = 0;
    let isDecimal1 = Math.trunc(n1);
    let isDecimal2 = Math.trunc(n2);
    let isStr1 = n1.toString();
    let isStr2 = n2.toString();
    if(n1 < 0 || n2 < 0) {
        console.log("here1");
        sum = 'ERROR';
    } else if((n1 - isDecimal1) != 0 || (n2 - isDecimal2) != 0) {
        console.log("here2");
        sum = 'ERROR';
    } else if(n1 === isStr1 || n2 === isStr2) {
        console.log("here3");
        sum = 'ERROR';
    } else {
        if(n1 < n2) {
            sum = iterate(n1, n2);
            } else {
            sum = iterate(n2, n1);
        }
    }
    return sum;
}

function iterate(n1, n2){
    let sum = 0;
    for(let i = n1; i <= n2; i++) {
        sum += i;
        console.log(sum);
    }
    return sum;
}





let number1 = 10;
let number2 = [90, 1];

let result = sumAll(number1, number2);
console.log(result);

// Do not edit below this line
module.exports = sumAll;
