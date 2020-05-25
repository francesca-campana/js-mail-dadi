//Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
buttonLancia = document.getElementById('lancia')

buttonLancia.addEventListener('click',
  function() {

  var playerUno = Math.floor(Math.random() * 6) + 1;
  alert('Tu giochi il n° ' + playerUno);
  var playerDue = Math.floor(Math.random() * 6) + 1;
  alert('Il computer gioca il n° ' + playerDue);

  if (playerUno > playerDue) {
  alert('You Win!');

  } else if (playerUno < playerDue) {
  alert('you Lose!');
  } else {
  alert('Draw!');
  }
}
);
