let n1 = parseFloat(prompt("Digite a nota 1: "))
let n2 = parseFloat(prompt("Digite a nota 2: "))

let media = (n1 + n2) / 2

// se (media > 6)
    // entao mostra a mensagem
alert("A média foi "+media)

if (media > 6) {
    alert("Aprovado")
}
else {
    alert("Reprovado")
}
