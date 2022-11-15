function Player() {
    this.hp = 100;
    this.hurt = function() {
        this.hp -= 5;
    }
    this.rest = function() {
        this.hp += 2;
    }
}

let playerA = new Player();
let playerB = new Player();

function fight(id) {
    if(id == 1) {
        playerA.hurt();
        document.getElementById("blood1").innerText = "HP: " + playerA.hp;
    }
    else {
        playerB.hurt();
        document.getElementById("blood2").innerText = "HP: " + playerB.hp;
    }
}

function rest(id) {
    if(id == 1) {
        playerA.rest();
        document.getElementById("blood1").innerText = "HP: " + playerA.hp;
    }
    else {
        playerB.rest();
        document.getElementById("blood2").innerText = "HP: " + playerB.hp;
    }
}