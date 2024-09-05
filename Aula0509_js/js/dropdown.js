//Seleciona o elemento HTML que tem a classe .dropdown-button, geralmente um botão ou link que o usuário clica para abrir o dropdown
document.querySelector('.dropdown-button').addEventListener('click', function () {  //Adiciona um ouvinte de eventos que espera o clique do usuário nesse botão. 
    //Quando o botão é clicado, a função é executada.
    let dropdownContent = document.querySelector('.dropdown-content'); //Seleciona o conteúdo do dropdown, ou seja, o menu suspenso com as opções,
    //que é o elemento com a classe .dropdown-content.
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';//: Acessa o estilo CSS do dropdown, especificamente a propriedade display, 
    //que controla se o conteúdo está visível ou oculto.
});

window.onclick = function (event) {//Define uma função que será chamada sempre que o usuário clicar em qualquer lugar da janela do navegador
    if (!event.target.matches('.dropdown-button')) { //Esta linha verifica se o elemento clicado não tem a classe .dropdown-button. 
        //Se o usuário clicou em outro lugar da página que não seja o botão do dropdown, o código dentro do if será executado.
        let dropdowns = document.querySelectorAll('.dropdown-content'); //Seleciona todos os elementos com a classe .dropdown-content 
        //(possivelmente mais de um, daí o uso de querySelectorAll).
        dropdowns.forEach(function (dropdown) {//Itera sobre todos os dropdowns encontrados (se houver mais de um) e para cada um deles
            dropdown.style.display = 'none'; //Esconde o dropdown, alterando sua propriedade display para 'none'.
        });
    }
};