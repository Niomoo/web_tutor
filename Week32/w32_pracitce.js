function add(num) {
    let scoreDiv = document.getElementById("score" + num);
    let score = Number(scoreDiv.innerText);
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

function randomScore() {
    for (let i = 1; i <= 3; i++) {
        let score = Math.floor(Math.random() * 100) + 1;
        document.getElementById("score" + i).innerText = score;
        if(score <= 60) {
            document.getElementById("score" + i).style.color = "red";
        } else {
            document.getElementById("score" + i).style.color = "#000000";
        }
    }
}