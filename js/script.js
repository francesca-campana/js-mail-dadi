// Mail Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
var emailUser = prompt('Qual è la tua email?')
var emailList = ["ziopaperone@gmail.com", "minnie@gmail.com", "pippo@gmail.com", "topolino@gmail.com", "paperino@gmail.com", "pluto@gmail.com", "gastone@gmail.com"];

emailDaCercare = emailUser;
emailInLista = false;

for (var i = 0; i < emailList.length; i++ ){
  if (emailUser === emailList[i]) {
    emailInLista = true;

  }
console.log(emailInLista);
}
if (emailInLista) {
  console.log('Lei è in lista');
} else {
  console.log('Lei non è in lista');
}
