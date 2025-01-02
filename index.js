function cal(){
    var op1 = document.getElementById('first').value;
    var op2 = document.getElementById('second').value;
    var op = document.getElementById('ope').value;
    if(op == '+'){
        var res = parseInt(op1)+parseInt(op2);
    }
    if(op == '-'){
        var res = parseInt(op1)-parseInt(op2);
    }
    if(op == '/'){
        var res = parseInt(op1)/parseInt(op2);
    }
    if(op == '*'){
        var res = parseInt(op1)*parseInt(op2);
    }
    document.getElementById('res').value = res;
}