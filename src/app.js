import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = ['heart', 'spade', 'diamond', 'club'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const symbols = { heart: '♥', spade: '♠', diamond: '♦', club: '♣' };

  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];

  let card = document.getElementById('card');
  card.className = `card ${randomSuit}`;
  card.querySelector('.top-left').textContent = symbols[randomSuit];
  card.querySelector('.bottom-right').textContent = symbols[randomSuit];
  card.querySelector('.value').textContent = randomValue;
}

window.onload = generateCard;
