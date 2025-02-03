'use strict';
const number = document.querySelector(`.number`);
const check = document.querySelector(`.check`);
const guess = document.querySelector(`.guess`);
const message = document.querySelector('.message');
const score = document.querySelector('.score');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = secretNumber;
let currentScore = 20;

check.addEventListener(`click`, function () {
    const guessNumber = Number(guess.value);
    if (!guessNumber) {
        message.textContent = `No number! 🚫`;
    } else if (guessNumber === secretNumber) {
        message.textContent = `🥳 Correct Number!`;
    } else if (guessNumber > secretNumber) {
        if (currentScore > 1) {
            message.textContent = `📈 Too high!`;
            currentScore--;
            score.textContent = currentScore;
        } else {
            message.textContent = `💥 You lost the game!`;
            score.textContent = 0;
        }
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
