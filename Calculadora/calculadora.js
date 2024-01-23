function valor(x) {
    document.getElementById('display').value += x;
}

function borrardisplay(y) {
    document.getElementById('display').value = y;
}

function cal_resultado() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}

