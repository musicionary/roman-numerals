/*===========================
Back End
=============================*/
//spec: assign letters to user input numbers based on each unique roman numeral
var one = "I";
var five = "V";
var ten = "X";
var fifty = "L";
var hundred = "C";
var fiveHundred = "D";
var thousand = "M";
var numberArray = [];
var romanArray = [];

function numberSplit(input) {
  numberArray = [];
  numberArray.push(input);
  console.log(numberArray);
}

function converter(numbers) {
  romanArray = [];
  numbers.forEach(function(number){
    switch (number) {
      case 1:
        romanArray.push(one);
        break;
      case 5:
        romanArray.push(five);
        break;
      case 10:
        romanArray.push(ten);
        break;
      case 50:
        romanArray.push(fifty);
        break;
      case 100:
        romanArray.push(hundred);
        break;
      case 500:
        romanArray.push(fiveHundred);
        break;
      case 1000:
        romanArray.push(thousand);
        break;
    }
  });
  console.log(romanArray);
}







/*===========================
Front End
=============================*/







$(document).ready(function(){
  $("#converter").submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($("#number").val());

    numberSplit(numberInput);
    converter(numberArray);
    // console.log("Hi there.");
  });
});
