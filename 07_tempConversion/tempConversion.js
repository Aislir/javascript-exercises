function convertToCelsius(tempFahr){
    let temp = 0;
    if(tempFahr == 32) {
      temp = 0;
      return temp;
    } else {
      temp = ((tempFahr - 32) * 5/9);
      temp = temp.toFixed(1);
      temp = Number.parseFloat(temp);
      return temp;
    }
}

function convertToFahrenheit(tempCels) {
    let temp = 0;
    if(tempCels == 0) {
      temp = 32;
      return temp;
    } else {
      temp = ((tempCels * 9/5) + 32);
      temp = temp.toFixed(1);
      temp = Number.parseFloat(temp);
      return temp;
    }
}
let askCelsius = 0;
askCelsius = convertToCelsius(-100);
console.log(askCelsius);
let askFahrenheit = 0;
askFahrenheit = convertToFahrenheit(-10);
console.log(askFahrenheit);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
