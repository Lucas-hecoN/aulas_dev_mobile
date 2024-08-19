let n1 = parseFloat(prompt("Digite um número de 0 a 10: "))
let n2 = parseFloat(prompt("Digite outro número de 0 a 10: "))

let media = (n1 + n2) / 2

alert("A média é maior que 7? " + (media > 7))
alert("Esta aprovado? " + (media > 4 && n1 > 0 || n2 > 0))