function verificarSigno() {
    var data = document.getElementById("dataNascimento").value;
    var partesData = data.split("-");
    var dia = parseInt(partesData[2]);
    var mes = parseInt(partesData[1])
    var signo;

    switch(mes) {
        case 1:
            if (dia <= 20) {
                signo = "Capricórnio";
            } else {
                signo = "Aquário";
            }
            break;
        case 2:
            if (dia <= 18) {
                signo = "Aquário";
            } else {
                signo = "Peixes";
            }
            break;
        case 3:
            if (dia <= 20) {
                signo = "Peixes";
            } else {
                signo = "Áries";
            }
            break;
        case 4:
            if (dia <= 20) {
                signo = "Áries";
            } else {
                signo = "Touro";
            }
            break;
        case 5:
            if (dia <= 20) {
                signo = "Touro";
            } else {
                signo = "Gêmeos";
            }
            break;
        case 6:
            if (dia <= 20) {
                signo = "Gêmeos";
            } else {
                signo = "Câncer";
            }
            break;
        case 7:
            if (dia <= 22) {
                signo = "Câncer";
            } else {
                signo = "Leão";
            }
            break;
        case 8:
            if (dia <= 22) {
                signo = "Leão";
            } else {
                signo = "Virgem";
            }
            break;
        case 9:
            if (dia <= 22) {
                signo = "Virgem";
            } else {
                signo = "Libra";
            }
            break;
        case 10:
            if (dia <= 22) {
                signo = "Libra";
            } else {
                signo = "Escorpião";
            }
            break;
        case 11:
            if (dia <= 21) {
                signo = "Escorpião";
            } else {
                signo = "Sagitário";
            }
            break;
        case 12:
            if (dia <= 21) {
                signo = "";
            } else {
                signo = "Aquário";
            }
            break;
    }
    document.getElementById("resultado").innerHTML = "Seu signo é: " + signo;
}




function excluirItemSelecionado() {
    var itens = document.getElementById("itens");
    if (itens.selectedIndex == -1) {
        alert("Selecione um item na lista!");
        return;
    }

    var indice = itens.selectedIndex;
    var itemSelecionado = itens.options[indice].text;

    var resultado = confirm("Deseja excluir o item: " + itemSelecionado + " ?")
    if (resultado) {
        itens.remove(indice);
        alert("O item " + itemSelecionado + " foi removido da lista!");
    } else {
        alert("Você cancelou a exclusão do item " + itemSelecionado + ".");
    }
}


function adicionarItem() {
    var novoItem = prompt("Digite o nome do novo item: ");
    if (novoItem) {
        var itens = document.getElementById("itens");
        var option = document.createElement("option");
        option.text = novoItem;
        itens.add(option);
        alert("O item " + novoItem + " foi adicionado à lista!");
    }
}


function classToggle() {
    const navs = document.querySelectorAll(".navbar_items")
    navs.forEach(nav => nav.classList.toggle(".navbar_toggle-show"));
}


document.getElementById("btnVerificarSigno").onclick = verificarSigno;
document.getElementById("btnExcluirItem").onclick = excluirItemSelecionado;
document.getElementById("btnAdicionarItem").onclick = adicionarItem;

document.querySelector(".navbar_link-toggle")
    .addEventListener("click", classToggle);