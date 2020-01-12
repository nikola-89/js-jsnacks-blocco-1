// // #SNACK 2 - 09/01/2020
var parolaUno = prompt('Inserisci la prima parola:');
var parolaDue = prompt('Inserisci la seconda parola:');

if(parolaUno.length > parolaDue.length) {
    alert('Lunga: [' + parolaUno.length + '] ' + parolaUno + ' | ' + 'Corta: [' + parolaDue.length + '] ' + parolaDue);
}
else if(parolaUno.length == parolaDue.length) {
    alert('Uguali: [' + parolaUno.length + '] ' + parolaUno + ' | ' + '[' + parolaDue.length + '] ' + parolaDue);
}
else {
    alert('Lunga: [' + parolaDue.length + '] ' + parolaDue + ' | ' + 'Corta: [' + parolaUno.length + '] ' + parolaUno);
}
