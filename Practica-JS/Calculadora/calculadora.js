var expression = [];

function valor(x) {
    expression.push(x);
    actualizarDisplay();
}

function actualizarDisplay() {
    document.getElementById('display').value = expression.join('');
}

function borrardisplay() {
    expression = [];
    actualizarDisplay();
}

function cal_resultado() {
    var resultado = '';
    try {
        var exprString = expression.join('');
        resultado = eval(exprString);
    } catch (error) {
        if (error instanceof SyntaxError) {
            resultado = 'Error';
        }
    }
    document.getElementById('display').value = resultado;
    expression = [];
}
