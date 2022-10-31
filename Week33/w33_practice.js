let num = Math.floor(Math.random() * 100) + 1;
let count = 0;
let time = new Date();
document.getElementById("time").innerText = "現在時間：" + time.getFullYear() + "年" + time.getMonth() + "月" + time.getDate() + "日 " + time.getHours() + "點" + time.getMinutes() + "分";
document.getElementById("count").innerText = "猜測次數：" + count;
document.getElementById("answer").innerText = "（答案是：" + num + ")";
function guess() {
    let number = document.getElementById("number").value;
    let hint = document.getElementById("hint");
    if(number == num) {
        hint.innerText = "猜對了！";
    } else {
        hint.innerText = '猜錯了！';
        count++;
        document.getElementById("count").innerText = "猜測次數：" + count;
    }
}