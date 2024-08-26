function limpar() {
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
    document.getElementById("resultado").value = "Insira os valores e selecione a operação"
}

function calcular() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado;

    switch(operacao) {
        case "soma":
            resultado = n1 + n2;
            break;
        case "subtracao":
            resultado = n1 - n2;
            break;
        case "multi":
            resultado = n1 * n2;
            break;
        case "divisao":
            if (n2 === 0) {
                document.getElementById("resultado").innerHTML = "Divisão por zero não é permitida";
                return;
            }
            resultado = n1 / n2;
            break;
        default:
            resultado = "Operação inválida.";
    }

    document.getElementById("resultado").innerHTML = `O resultado da ${operacao} é ${resultado}`;
}