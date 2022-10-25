function add(num) {
    let scoreDiv = document.getElementById("score" + num);
    let score = Number(scoreDiv.innerText)
    scoreDiv.innerText = score + 1;
    if(score >= 59) {
        scoreDiv.style.color = "#000000";
    }
}

function sub(num) {
    let scoreDiv = document.getElementById("score" + num);
    let score = Number(scoreDiv.innerText);
    scoreDiv.innerText = score - 1;
    if(score <= 60) {
        scoreDiv.style.color = "red";
    }
}