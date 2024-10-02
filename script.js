'use strict';

const doc = document;

console.log(doc.querySelector('.message').textContent);

doc.querySelector('.message').textContent = '🎉 Correct Number!';

doc.querySelector('.number').textContent = 13;
doc.querySelector('.score').textContent = 10;

doc.querySelector('.guess').value = 23;
console.log(doc.querySelector('.guess').value);
