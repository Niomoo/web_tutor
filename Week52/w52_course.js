const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.minute-hand');
const secHand = document.querySelector(".second-hand");
const timeText = document.querySelector('.timeText');

function setDate() {
    const date = new Date();
    const sec = date.getSeconds();
    const secDegree = (sec * (360 / 60)) + 90;
    secHand.style.transform = `rotate(${secDegree}deg)`;

    const min = date.getMinutes();
    const minDegree = ((min * (360 / 60)) + (sec * (360 / 60) / 60))+ 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hour = date.getHours();
    const hourDegree = ((hour * (360 / 12)) + (min * (360 / 12) / 60)) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg) scaleX(0.8)`;

    timeText.innerText = "現在時間：" + date.getFullYear() + "年" + Number(date.getMonth() + 1) + "月" + date.getDate() + "日 " + date.getHours() + "點" + date.getMinutes() + "分" + date.getSeconds() + "秒";
}

setInterval(setDate, 1000);