'use strict';
const number = document.querySelector(`.number`);
const check = document.querySelector(`.check`);
const guess = document.querySelector(`.guess`);
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const again = document.querySelector('.again');
const record = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;

again.addEventListener(`click`, function () {
    currentScore = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(`body`).style.backgroundColor = `#222`;
    number.textContent = `?`;
    number.style.width = `15rem`;
    guess.value = ``;
    message.textContent = `Start guessing...!`;
    score.textContent = currentScore;
});

check.addEventListener(`click`, function () {
    const guessNumber = Number(guess.value);
    // No input
    if (!guessNumber) {
        message.textContent = `No number! 🚫`;
        // Player wins
    } else if (guessNumber === secretNumber) {
        message.textContent = `🥳 Correct Number!`;
        number.textContent = secretNumber;
        document.querySelector(`body`).style.backgroundColor = `#60b347`;
        number.style.width = `30rem`;
        if (!highScore) {
            highScore = currentScore;
        } else if (currentScore > highScore) {
            highScore = currentScore;
        }
        record.textContent = highScore;
        // Guess is higher
    } else if (guessNumber > secretNumber) {
        if (currentScore > 1) {
            message.textContent = `📈 Too high!`;
            currentScore--;
            score.textContent = currentScore;
        } else {
            message.textContent = `💥 You lost the game!`;
            score.textContent = 0;
        }
        // Guess is lower
    } else if (guessNumber < secretNumber) {
        if (currentScore > 1) {
            message.textContent = `📈 Too low!`;
            currentScore--;
            score.textContent = currentScore;
        } else {
            message.textContent = `💥 You lost the game!`;
            score.textContent = 0;
        }
    }
});
