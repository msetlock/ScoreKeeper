const p1Btn = document.querySelector('#p1Button')
const p2Btn = document.querySelector('#p2Button')
const reset = document.querySelector('#reset')
let p1Score = document.querySelector('#p1Score')
let p2Score = document.querySelector('#p2Score')
let p1P = 0;
let p2P = 0;
const winningScoreSelect = document.querySelector('#goal');
let winningScore = 2;
let gameOver = false;

winningScoreSelect.addEventListener('change', function(){
    winningScore=parseInt(this.value)
    res()
})

p1Btn.addEventListener('click', function () {
    if (!gameOver){
        p1P += 1;

        if (p1P === winningScore) {
        gameOver=true;
        p1Score.classList.add("winner")
        p2Score.classList.add("loser")

        
    }
    p1Score.textContent = p1P;

}
})
p2Btn.addEventListener('click', function () {
    if (!gameOver){
        p2P += 1;

        if (p2P === winningScore) {
        gameOver=true;
        p2Score.classList.add("winner")
        p1Score.classList.add("loser")

    }
    p2Score.textContent = p2P;

}
})
reset.addEventListener('click', res)

function res(){
    gameOver = false;
    p1P= 0;
    p2P=0;
    p1Score.textContent = p1P;
    p2Score.textContent = p2P;
    p1Score.classList.remove("winner", "loser")
    p2Score.classList.remove("loser", "loser")

}
