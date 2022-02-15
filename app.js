const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Score')

}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Score')

}
const reset = document.querySelector('#reset')

const winningScoreSelect = document.querySelector('#goal');
let winningScore = 2;
let gameOver = false;
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    res()
})

function scoreUpdate(player, opponent) {
    if (!gameOver) {
        player.score += 1;

        if (player.score === winningScore) {
            gameOver = true;
            player.display.classList.add("has-text-success")
            opponent.display.classList.add("has-text-danger")
            player.button.disabled = true;
            opponent.button.disabled = true;


        }
        player.display.textContent = player.score;
    }

}




p1.button.addEventListener('click', function () {
    scoreUpdate(p1,p2)
})
p2.button.addEventListener('click', function () {
   scoreUpdate(p2,p1)
})
reset.addEventListener('click', res)

function res() {
    gameOver=false
    for (let p of [p1,p2]){
        p.score=0;
        p.display.textContent=0
        p.display.classList.remove("has-text-success",
        "has-text-danger")
        p.button.disabled = false;


    }
   
}
