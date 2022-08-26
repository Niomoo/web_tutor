var x;
x = "prompt"
n1=prompt("請輸入第一個數字",100); 
n2=prompt("請輸入第二個數字",90);
op=prompt("請輸入運算符號(+ - * /)")
n1=Number(n1);
n2=Number(n2);
var sum =n1+n2;
var result;

if(op == "+"){
    result = n1 + n2;
} else if (op == "-"){
    result = n1 - n2;
} else if(op == "*"){  
    result = n1 * n2;
} else if (op == "/"){
    result = n1 / n2;
} else {
    result = "error";
}

/*switch(op){
    case "+":
        result = n1 + n2;
        break;
    case "-":
        result = n1 - n2;
        break;
    case "*":
        result = n1 * n2;
        break;
    case "/":
        result = n1 / n2;
        break;
    default: 
        result = "error";
        break;
}*/
alert(result);



    








