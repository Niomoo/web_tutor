function Player(hp) {
    this.hp = hp;                   // 屬性
    this.hurt = function () {       // 方法
        this.hp = this.hp - 5;      
    };
}

let playerA = new Player(100);
let playerB = new Player(100);

playerA.hurt();
// playerB.hurt();