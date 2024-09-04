function leapYears(year) {
    let isNotOdd = ((year % 2) == 0);
    if(isNotOdd) {
        if((year % 4) == 0) {
            if((year % 100) == 0){
                if((year % 400) == 0) {
                    console.log("The year " +year+ " is a leap year!");
                    return true;
                } else {
                    console.log("Not a leap year!");
                    return false;
                }
            } else {
                console.log("The year " +year+ " is a leap year!");
                return true;
             }
        } else { return false;}
    } else { 
        console.log("Not a leap year!");
        return false; }
}

let isALeapYear = leapYears(700);
console.log(isALeapYear);

// Do not edit below this line
module.exports = leapYears;
