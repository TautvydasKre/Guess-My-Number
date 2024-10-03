'use strict';

const doc = document;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

doc.querySelector('.check').addEventListener('click', function () {
  const guess = Number(doc.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   when there is no input
  if (!guess) {
    doc.querySelector('.message').textContent = '⛔️ No number!';
    // When player winss
  } else if (guess === secretNumber) {
    doc.querySelector('.message').textContent = '🎉 Correct Number!';
    doc.querySelector('.number').textContent = secretNumber;

    doc.querySelector('body').style.backgroundColor = '#60b347';

    doc.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      doc.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      doc.querySelector('.message').textContent =
        guess > secretNumber ? '📈Too high! ' : '📉Too low!';
      score--;
      doc.querySelector('.score').textContent = score;
    } else {
      doc.querySelector('.message').textContent = '💥You lost the game!';
      doc.querySelector('.score').textContent = 0;
    }
  }
});

doc.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  doc.querySelector('.message').textContent = 'Start guessing...';
  doc.querySelector('.score').textContent = score;
  doc.querySelector('.number').textContent = '?';
  doc.querySelector('.guess').value = '';
  doc.querySelector('body').style.backgroundColor = '#222';
  doc.querySelector('.number').style.width = '15rem';
});
