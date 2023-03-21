function Calculate(){

var num1 =parseInt(document.getElementById("number1").value);
var num2 = parseInt(document.getElementById("number2").value);

var op = document.getElementById("operation").value;

var result = 0;
switch(op){
    case '+':
        document.getElementById("result").innerHTML = num1+num2;
        break;
    case '-':
        document.getElementById("result").innerHTML = num1-num2;
        break;
    case '*':
        document.getElementById("result").innerHTML = num1*num2;
        break;
    case '/':
        document.getElementById("result").innerHTML = num1/num2;
        break;
   // default:   
     //   document.getElementById("result").innerHTML ="Invalid";
        

}

}