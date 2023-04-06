function calculator(){
let number1 = document.getElementsByName("num1")[0].value;
let number2 = document.getElementsByName("num2")[0].value;

let operator = document.getElementById("operator")[0].value
let result;

if (operator == '+') {
        result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}


document.getElementById("result").innerHTML = result;
}
