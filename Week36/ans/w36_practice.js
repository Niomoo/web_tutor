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
        if(playerA.hp > 0) {
            playerA.hurt();
        }
        if(playerA.hp <= 50) {
            document.getElementById("blood1").style.color = 'red';
            document.getElementById("bar1").style.backgroundColor = "red";
        }
        document.getElementById("blood1").innerText = "HP: " + playerA.hp;
        document.getElementById("bar1").style.width = playerA.hp + "%";
        if(playerA.hp <= 0) {
            alert("Player 2 wins!");
        }
    }
    else {        
        if(playerB.hp > 0) {
            playerB.hurt();
        }
        if(playerB.hp <= 50) {
            document.getElementById('blood2').style.color = 'red';
            document.getElementById("bar2").style.backgroundColor = "red";
        }
        document.getElementById("blood2").innerText = "HP: " + playerB.hp;
        document.getElementById("bar2").style.width = playerB.hp + "%";
        if(playerB.hp <= 0) {
            alert("Player 1 wins!");
        }
    }
}

function rest(id) {
    if(id == 1) {
        if(playerA.hp < 100) {
            playerA.rest();
        }
        if(playerA.hp > 50) {
            document.getElementById("blood1").style.color = 'black';
            document.getElementById("bar1").style.backgroundColor = "blue";
        }
        document.getElementById("blood1").innerText = "HP: " + playerA.hp;
        document.getElementById("bar1").style.width = playerA.hp + "%";
    }
    else {
        if (playerB.hp < 100) {
          playerB.rest();
        }
        if(playerB.hp > 50) {
            document.getElementById("blood2").style.color = 'black';
            document.getElementById("bar2").style.backgroundColor = "blue";
        }
        document.getElementById("blood2").innerText = "HP: " + playerB.hp;
        document.getElementById("bar2").style.width = playerB.hp + "%";
    }
}