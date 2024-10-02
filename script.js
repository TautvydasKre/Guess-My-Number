'use strict';

const doc = document;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
doc.querySelector('.number').textContent = secretNumber;

doc.querySelector('.check').addEventListener('click', function () {
  const guess = Number(doc.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    doc.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess === secretNumber) {
    doc.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    doc.querySelector('.message').textContent = '📈Too high! ';
    score--;
    doc.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    doc.querySelector('.message').textContent = '📉Too low!';
    score--;
    doc.querySelector('.score').textContent = score;
  }
});
