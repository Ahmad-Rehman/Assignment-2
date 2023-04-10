 
 function addResult(value) {
    let expresion = document.getElementById('result').value
    let length = expresion.length-1
    if (expresion[length] !== "+" && expresion[length] !== "-" && expresion[length] !== "*" && expresion[length] !== "/" || typeof value === "number")
        document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    let expresion = document.getElementById('result').value
    if (expresion) {
        result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    }
}




