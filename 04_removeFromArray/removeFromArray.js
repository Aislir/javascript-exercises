const niceArray = [1, 2, 3, 4];
let number1 = 3;
let number2 = 2;
function removeFromArray(a, n1, s1) {
    for(let i = 0; i < a.length; i++) {
        if(a[i] == n1 || a[i] == s1) {
            a.splice(i, 1);
            i--;
        }
    }
    return a;
}

let b = removeFromArray(niceArray, number1, number2);
for(let i =  0; i < b.length; i++) {
    console.log(b[i]);
}

// Do not edit below this line
module.exports = removeFromArray;
