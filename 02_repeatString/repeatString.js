let pippo = 'hey';
let n = 3;
let string = pippo;

const repeatString = function(pippo, n) {
    for(i = 1; i < n; i++){
        string += pippo;
        console.log(string);
    }
    return string;
}

// Do not edit below this line
module.exports = repeatString;
