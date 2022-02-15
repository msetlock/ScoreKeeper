const p1Btn = document.querySelector('#p1Button')
const p2Btn = document.querySelector('#p2Button')
const reset = document.querySelector('#reset')
let p1Score = document.querySelector('#p1Score')
let p2Score = document.querySelector('#p2Score')
let p1P = 0;
let p2P = 0;
let winningScore = 5;
let gameOver = false;

p1Btn.addEventListener('click', function () {
    if (!gameOver){
        p1P += 1;

        if (p1P === winningScore) {
        gameOver=true;

    }
    p1Score.textContent = p1P;

}
})
p2Btn.addEventListener('click', function () {
    if (!gameOver){
        p2P += 1;

        if (p2P === winningScore) {
        gameOver=true;

    }
    p2Score.textContent = p2P;

}
})