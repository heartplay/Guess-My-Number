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
    // Invalid number
    if (guessNumber < 1) {
        message.textContent = `Choose number between 1 and 20`;
        guess.value = ``;
        // No input
    } else if (!guessNumber) {
        message.textContent = `No number! 🚫`;
    } else if (guessNumber === secretNumber) {
        message.textContent = `🥳 Correct Number!`;
        number.textContent = secretNumber;
        document.querySelector(`body`).style.backgroundColor = `#60b347`;
        number.style.width = `30rem`;
        if (currentScore > highScore) {
            highScore = currentScore;
            record.textContent = highScore;
        }
        // Guess is wrong
    } else if (guessNumber !== secretNumber) {
        if (currentScore > 1) {
            message.textContent =
                guessNumber > secretNumber ? `📈 Too high!` : `📈 Too low!`;
            currentScore--;
            score.textContent = currentScore;
        } else {
            message.textContent = `💥 You lost the game!`;
            score.textContent = 0;
        }
    }
});
