var numero = 7;

var i = 1;

while (i <= 10) {
    var resultado = numero * i;
    console.log(numero + "x" + i + " = " + resultado);
    i++;
}

// Exemplo (for): Imprimir números de 1 a 5 no console
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Exemplo (while): Imprimir números de 1 a 5 no console
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;    
// }

// Exemplo (forEach): Imprimir os intems de um array no console
// (forEach) função para percorrer um array
const items = ["Maçã", "Banana", "Laranja"];

items.forEach(function(item) {
    console.log(item);
});