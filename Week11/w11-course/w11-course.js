var n1 = prompt("請輸入一個數字", 3);
n1 = parseInt(n1, 10);
var sum = 0;
for(i = 0; i < 5; i++){
    if(i % 2 == 0){
        continue;
    }
    sum += i;
}
alert(sum);


// for(var i = 0; i < 10; i++ ){
//     if( i % 2 == 0 ){
//         continue;
//     }
//     sum += i;
// }
// alert(sum);

// while(i < 5);{
//     sum += 1;
//     i++;
// }