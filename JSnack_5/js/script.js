// // #SNACK 5 - 10/01/2020
var lista = [];
var x = 1;
while (x <= 6) {
    var numero = parseInt(prompt('[' + x + '] ' + 'Inserisci un numero:'))
    if (numero % 2 !== 0) {
        lista.push(numero);
    }
    x++;
}
alert(lista);

// var lista = [];
// for (var i = 1; i <= 6; i++) {
//     var numero = parseInt(prompt('[' + i + '] ' + 'Inserisci un numero:'))
//     if (numero % 2 !== 0) {
//         lista.push(numero);
//     }
// }
// console.log(lista);
