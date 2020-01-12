// // #SNACK 3 - 09/01/2020
// var numeri = [];
// for (var i = 0; i < 5; i++) {
//     var numero = parseInt(prompt('Inserisci un numero:'));
//     numeri.push(numero)
// }
//
// var totale = 0;
// for (var x = 0; x < numeri.length; x++) {
//     totale += numeri[x];
// }
// console.log(totale);

// // #SNACK 3B - 09/01/2020
var totale = 0;
var i = 0;
while (i < 5) {
    var numero = parseInt(prompt('Inserisci un numero:'));
    totale += numero;
    i++;
}
alert(totale);
