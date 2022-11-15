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
        if(playerA.hp <= 50) {
            document.getElementById('blood1').style.color = 'red';
        }
        document.getElementById("blood1").innerText = "HP: " + playerA.hp;
    }
    else {
        playerB.hurt();
        if(playerB.hp <= 50) {
            document.getElementById('blood2').style.color = 'red';
        }
        document.getElementById("blood2").innerText = "HP: " + playerB.hp;
    }
}

function rest(id) {
    if(id == 1) {
        playerA.rest();
        if(playerA.hp > 50) {
            document.getElementById("blood1").style.color = 'black';
        }
        document.getElementById("blood1").innerText = "HP: " + playerA.hp;
    }
    else {
        playerB.rest();
        if(playerB.hp > 50) {
            document.getElementById("blood2").style.color = 'black';
        }
        document.getElementById("blood2").innerText = "HP: " + playerB.hp;
    }
}