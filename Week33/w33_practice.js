let num = Math.floor(Math.random() * 100) + 1;
let count = 0;
let min = 1;
let max = 100;
let time = new Date();
document.getElementById("time").innerText = "現在時間：" + time.getFullYear() + "年" + Number(time.getMonth()+1) + "月" + time.getDate() + "日 " + time.getHours() + "點" + time.getMinutes() + "分";
document.getElementById("count").innerText = "猜測次數：" + count;
// document.getElementById("answer").innerText = "（答案是：" + num + ")";
function guess() {
    let number = document.getElementById("number").value;
    let hint = document.getElementById("hint");
    count++;
    if(number == num) {
        hint.innerText = "猜對了！你總共猜了 " + count + " 次！";
        hint.style.color = 'blue';
        count = 0;
    } else {
        hint.innerText = '猜錯了！';
        hint.style.color = 'red';
        if(number < num) {
            min = number;
            hint.innerText = hint.innerText + '答案在 ' + min + ' ~ ' + max + ' 之間！';
        } else {            
            max = number;
            hint.innerText = hint.innerText + "答案在 " + min + " ~ " + max + " 之間！";
        }
    }
    document.getElementById("count").innerText = "猜測次數：" + count;
}