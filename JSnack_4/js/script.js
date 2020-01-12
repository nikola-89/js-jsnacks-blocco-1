// // #SNACK 4 - 10/01/2020
var listaInvitati = ['nietzsche', 'kant', 'schopenhauer', 'hegel', 'heidegger'];
var user = prompt('Inserisci il tuo nome:');
var auth = false;
for (var i = 0; i < listaInvitati.length; i++) {
    if(listaInvitati[i] == user) {
        auth = true;
    }
}

if(auth == true) {
    alert('200 | OK');
}
else {
    alert('401 | Unauthorized');
}
