const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 10
let timeId = null
let countDownTimerId = null


function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})


function countDown() {
    const gameOver = document.getElementById('game-over')
    const boardOut = document.querySelector('.board')
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timeId)
        boardOut.classList.add('fadeOut')
        gameOver.textContent = `You knacked ${result} mosquitoes
         in 10 seconds`
    }

    setTimeout(() => {
        gameOver.textContent = `Reloading`
        location.reload()
    }, 25000);

}

const startBtn = () => {
    const playBtn = document.getElementById('play')
    playBtn.addEventListener('click', () => {
        timeId = setInterval(randomSquare, 650)
        countDownTimerId = setInterval(countDown, 2000)
    }
    )
}
startBtn()



