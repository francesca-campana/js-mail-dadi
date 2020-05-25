//Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var playerUno = Math.floor(Math.random() * 6) + 1;
var playerDue = Math.floor(Math.random() * 6) + 1;
console.log(playerUno);
console.log(playerDue);

if (playerUno > playerDue) {
  console.log('You Win!');

} else if (playerUno < playerDue) {
  console.log('you Lose!');
} else {
  console.log('Draw!');
}
