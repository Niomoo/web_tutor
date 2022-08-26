// console.log(4.7888);
// console.log(null);

// let x12345;

// let x
// console.log(x);

var n1 = prompt("請輸入一個數字",10);
var n2 = prompt("請再輸入一個數字",5);
op = prompt("請輸入運算符號(+ - * /)");
n1 = Number(n1);
n2 = Number(n2);
var result;
if(n1 > n2){
    result = n1 + n2;
    alert(result);
}else if(n1 < n2){
    result = "error";
}
// var sum = n1 + n2;
// if(op == "+");
//     result = n1 + n2;
