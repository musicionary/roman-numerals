/*===========================
Back End
=============================*/
//spec: assign letters to user input numbers based on each unique roman numeral

var romanString;
var romanArray = [];


function convert(number) {
  if (number >= 1000) {
    return romanArray.push("M") + convert(number-1000);
  }
  if (number >= 900) {
    return romanArray.push("CM") + convert(number-900);
  }
  if (number >= 500) {
    return romanArray.push("D") + convert(number-500);
  }
  if (number >= 400) {
    return romanArray.push("CD") + convert(number-400);
  }
  if (number >= 100) {
    return romanArray.push("C") + convert(number-100);
  }
  if (number >= 90) {
    return romanArray.push("XC") + convert(number-90);
  }
  if (number >= 50) {
    return romanArray.push("L") + convert(number-50);
  }
  if (number >= 40) {
    return romanArray.push("XL") + convert(number-40);
  }
  if (number >= 10) {
    return romanArray.push("X") + convert(number-10);
  }
  if (number >= 9) {
    return romanArray.push("IX") + convert(number-9);
  }
  if (number >= 5) {
    return romanArray.push("V") + convert(number-5);
  }
  if (number >= 4) {
    return romanArray.push("IV") + convert(number-4);
  }
  if (number >= 1) {
    return romanArray.push("I") + convert(number-1);
  }

  // return romanArray;
  romanString = romanArray.join("");
  romanArray = [];
  console.log(romanString);
}


/*===========================
Front End
=============================*/

$(document).ready(function(){
  $("#converter").submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($("#number").val());

    convert(numberInput);
    $("#output").text(romanString);
    $(".result").show();
  });
});
