'use strict';
const number = document.querySelector(`.number`);
const check = document.querySelector(`.check`);
const guess = document.querySelector(`.guess`);
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const again = document.querySelector('.again');
const record = document.querySelector('.highscore');
const body = document.querySelector(`body`);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;
let tryCount = 0;

const invalidChars = [`-`, `+`, `e`, `.`, `,`];

again.addEventListener(`click`, function () {
    clear();
});

check.addEventListener(`click`, function () {
    const guessNumber = Number(guess.value);
    // Invalid number
    if (!isCorrectString(guess.value)) {
        displayMessage(`Invalid number 😒`);
        guess.value = ``;
    } else if (guessNumber < 1 || guessNumber > 20) {
        displayMessage(`Choose number between 1 and 20 🤦`);
        guess.value = ``;
        // No input
    } else if (!guessNumber) {
        displayMessage(`No number! 🚫`);
        // Guess is right
    } else if (guessNumber === secretNumber) {
        win(secretNumber);
        // Guess is wrong
    } else if (guessNumber !== secretNumber) {
        if (currentScore > 1) {
            displayMessage(
                guessNumber > secretNumber ? `📈 Too high!` : `📈 Too low!`
            );
            currentScore--;
            score.textContent = currentScore;
            tryCount++;
        } else {
            displayMessage(`💥 You lost the game!`);
            score.textContent = 0;
        }
    }
});

const win = function (secretNumber) {
    displayMessage(`🥳 Correct Number!`);
    number.textContent = secretNumber;
    body.style.backgroundColor = `#60b347`;
    number.style.width = `30rem`;
    if (currentScore > highScore) {
        highScore = currentScore;
        record.textContent = highScore;
    }
    if (tryCount == 0) alert(`Wow! First Try!`);
};

const clear = function () {
    tryCount = 0;
    currentScore = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    body.style.backgroundColor = `#222`;
    number.textContent = `?`;
    number.style.width = `15rem`;
    guess.value = ``;
    displayMessage(`Start guessing...!`);
    score.textContent = currentScore;
};

const displayMessage = function (string) {
    message.textContent = string;
};

const isCorrectString = function (string) {
    for (let i = 0; i < invalidChars.length; i++) {
        if (string.indexOf(invalidChars[i]) !== -1) return false;
    }
    return true;
};
