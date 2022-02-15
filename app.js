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

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    res()
})

p1Btn.addEventListener('click', function () {
    if (!gameOver) {
        p1P += 1;

        if (p1P === winningScore) {
            gameOver = true;
            p1Score.classList.add("has-text-success")
            p2Score.classList.add("has-text-danger")
            p1Btn.disabled=true;
            p2Btn.disabled=true;


        }
        p1Score.textContent = p1P;

    }
})
p2Btn.addEventListener('click', function () {
    if (!gameOver) {
        p2P += 1;

        if (p2P === winningScore) {
            gameOver = true;
            p2Score.classList.add("has-text-success")
            p1Score.classList.add("has-text-danger")
            p1Btn.disabled=true;
            p2Btn.disabled=true;


        }
        p2Score.textContent = p2P;

    }
})
reset.addEventListener('click', res)

function res() {
    gameOver = false;
    p1P = 0;
    p2P = 0;
    p1Score.textContent = p1P;
    p2Score.textContent = p2P;
    p1Score.classList.remove("has-text-success",
    "has-text-danger")
    p2Score.classList.remove("has-text-success"
    ,"has-text-danger")
    p1Btn.disabled=false;
            p2Btn.disabled=false;
}
