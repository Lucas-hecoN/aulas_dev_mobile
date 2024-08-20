let n1 = parseFloat(prompt("Digite a nota 1: "))
let n2 = parseFloat(prompt("Digite a nota 2: "))


if (n1 <= 10 && n2 <= 10 && n1 >= 0 && n2 >= 0) {
    let media = (n1 + n2) / 2
    alert("Média = " + media)

    if (media > 6 && n1 > 0 && n2 > 0) {
        alert("Aprovado")
    }
    else {
        alert("Reprovado")
    }
} else {
    alert("Digite valores entre 0 e 10!!")
}


