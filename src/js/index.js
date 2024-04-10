/*
 Objetivo 1 - quandoo o usuário clicar no botão de mostrar mais deve abrir os porojetos que estão escondidos no html 
        
        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

        Passo 2 - indentificar o clique no botão

        Passo 3 -adicionar a classe "ativo" nos projetos escondidos

 Objetivo 2 - esconder o botão de mostrar mais
        Passo 1 - pegar o botão e esconder ele
*/

// Objetivo 1 - quandoo o usuário clicar no botão de mostrar mais deve abrir os porojetos que estão escondidos no html 

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
const botaoProjetos = document.querySelector('.btn-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


botaoProjetos.addEventListener('click', () => {
    //Passo 3 -adicionar a classe "ativo" nos projetos escondidos
    mostrarProjetos(); //chama a função 'function'

   // Objetivo 2 - esconder o botão de mostrar mais
   //   Passo 1 - pegar o botão e esconder ele
   esconderBotao();
});

function esconderBotao() {
    botaoProjetos.classList.add('remover');
}

function mostrarProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
