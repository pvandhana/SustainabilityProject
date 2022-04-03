

function signup() {
    var cName = document.forms['signupForm'].exampleInputCName.value;
    var ELR;
    var SMR;
    var RER;
    var ELD;
    var SMD;
    var RED;
    if(document.getElementById('5').checked) {
        ELR = 5;
    }
    else if(document.getElementById('4').checked) {
        ELR = 4;
    }
    else if(document.getElementById('3').checked) {
        ELR = 3;
    }
    else if(document.getElementById('2').checked) {
        ELR = 2;
    }
    else if(document.getElementById('1').checked) {
        ELR = 1;
    }
    ELD = document.forms['signupForm'].exampleInputELR.value;
    if(document.getElementById('55').checked) {
        SMR = 5;
    }
    else if(document.getElementById('44').checked) {
        SMR = 4;
    }
    else if(document.getElementById('33').checked) {
        SMR = 3;
    }
    else if(document.getElementById('22').checked) {
        SMR = 2;
    }
    else if(document.getElementById('11').checked) {
        SMR = 1;
    }
    SMD = document.forms['signupForm'].exampleInputSMR.value;
    if(document.getElementById('555').checked) {
        RER = 5;
    }
    else if(document.getElementById('444').checked) {
        RER = 4;
    }
    else if(document.getElementById('333').checked) {
        RER = 3;
    }
    else if(document.getElementById('222').checked) {
        RER = 2;
    }
    else if(document.getElementById('111').checked) {
        RER = 1;
    }
    RED = document.forms['signupForm'].exampleInputRER.value;
}