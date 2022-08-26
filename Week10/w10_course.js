var a = "今天12345abc阿拉拉88888讚";
var x, y;
x = 2+8;
y = 10!=10;
document.write("布林：" + x + "資料型態：" + typeof(y) + "<br>");

function square(n){
    return (n*n);      //回傳值
}
function summation(a, b){
    var sum = 0;
    sum = a + b;
    return sum;
}
var answer = summation(5, 2);
document.write("函數：" + square(5) + "資料型態：" + typeof(square)+"<br>");

x = new Date("2022-04-30");
document.write("日期："+ x + "資料型態：" + typeof(x)+"<br>");

x = ["orange", "apple", "banana"]; //array
x = [1, 2, 3, 4, 5]
document.write("陣列：" + x[4] + "資料型態：" + typeof(x)+"<br>");

x = {"Mon":"Game", "Tue":"Sports", "Wed":"Karaoke"};
document.write("字典：" + x.Tue + "資料型態：" + typeof(x)+"<br>");

student = new Object();
student.name = "Timmy";
student.age = "25";
student.phone = "575-1114";
document.write("自訂物件：" + student.name + "資料型態：" + typeof(student)+"<br>");

function flatter() {
    // var age = prompt("請輸入您的年齡：", 30);
    // if (age<30)
    //     alert("您只有 " + age + " 歲，真是青年才俊啊！");
    // else
    //     alert("您年過30，想必是事業有成了！");

    // var name = prompt("請輸入名字：");
    // if(name == "") {
    //     alert("Please enter a name");
    // } else {
    //     alert("Hello" + name);
    // }

    var grade = prompt("請輸入你的成績");
    // if(grade < 60) {
    //     alert("加油喔");
    // } else if (grade < 70) {
    //     alert("還行");
    // } else if (grade < 80) {
    //     alert("還不錯");
    // } else if (grade < 90) {
    //     alert("很棒喔");
    // } else {
    //     alert("超強");
    // }
    switch(grade) {
        case "60":
            alert("加油喔");
            break;
        case "70":
            alert('還行');
            break;
        case "80":
            alert("還不錯");
            break;
        case "90":
            alert("很棒喔");
            break;
        default:
            alert("超強");
            break;
    }
}



// var i, sum =0;
// for(i = 1; i <= 10; i++) {
//     sum = i + sum;
// }

// for (i=1; i<=5; i++) {
//     document.write("Font size = " + i + " ===> ");
//     document.write("<font color=green size=" + i + ">Hello World!</font><br>");
// }
// document.write("<table cellpadding=5>")
// for(i = 1; i <=10 ; i++) {
//     document.write("<tr>")
//     for(j = 1; j <= 10; j++) {
//         document.write("<td>" + i + " " + j + "</td>");
//     }
//     document.write("</tr>")
// }
// document.write("</table>")
