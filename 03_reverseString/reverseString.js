function reverseString() {
    console.log("bob");
    let toReverse = "";
    let reversed = '';
    //let i = (toReverse.length - 1);
    //console.log(i);
    for(let i = (toReverse.length - 1); i >= 0; i--) {
        //console.log("bob");
        reversed += toReverse.charAt(i);
    }
    return reversed;
}

let sentence = reverseString();
console.log(sentence);

// Do not edit below this line
module.exports = reverseString;
