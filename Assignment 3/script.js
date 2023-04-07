function addResult(value) {
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



