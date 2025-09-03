document.addEventListener('DOMContentLoaded', function(){ //Aguarda até que a página seja carregada antes de rodar o código//
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade') //Encontra e guarda o botão de acessibilidade//
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade') // Encontra e guarda as opções de acessibilidade//
 
    botaoDeAcessibilidade.addEventListener('click', function (){ //ouve quando o botão é clicado//
     botaoDeAcessibilidade.classList.toggle('rotacao-botao'); //adiciona ou remove a classe rotacao-botao do botão//
     opcoesDeAcessibilidade.classList.toggle('apresenta-lista') //adiciona ou remove a classe apresenta-lista em outro elemento (chamado opcoesDeAcessibilidade)//
 
     const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true'; //verifica se o botão está "expandido" e guarda o resultado (verdadeiro ou falso)//
     botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado) //muda o status de "expandido" para o oposto. Se estava expandido, agora não está; se não estava, agora está//
   
    })
 
     const aumentaFonteBotao = document.getElementById('aumentar-fonte'); //Encontra o botão de "aumentar fonte" e o salva numa variável//
     const diminuiFonteBotao = document.getElementById('diminuir-fonte'); //Encontra o botão de "diminuir fonte" e o salva numa variável//
     
     const alternaContraste = document.getElementById('alterna-contraste') //seleciona um elemento HTML com o ID 'alterna-contraste' e o armazena em uma constante chamada alternaContraste//
 
     let tamanhoAtualFonte = 1; //cria uma variável chamada tamanhoAtualFonte e define seu valor inicial como 1//
 
     aumentaFonteBotao.addEventListener('click', function(){ //ouve quando o botão de aumentar a fonte é clicado//
         tamanhoAtualFonte += 0.1; //adiciona 0.1 ao tamanho atual da fonte//
         document.body.style.fontSize = `${tamanhoAtualFonte}rem` //aplica o novo tamanho da fonte ao corpo do documento (a página toda)//
 
     })
 
     diminuiFonteBotao.addEventListener('click', function(){ //O código espera que o botão seja clicado//
         tamanhoAtualFonte -= 0.1; //O código diminui o tamanho da fonte em 0.1//
         document.body.style.fontSize = `${tamanhoAtualFonte}rem` //O código aplica o novo tamanho da fonte a todo o corpo da página//
 
     })
 
     alternaContraste.addEventListener('click', function(){ // ouve quando o botão de contraste é clicado//
         document.body.classList.toggle('alto-contraste') //adiciona ou remove a classe alto-contraste no body da página, mudando o visual//
     })
 
 
 })
 
 ScrollReveal().reveal('#inicio', { delay: 500 }); // Faz com que o elemento com o ID #inicio apareça com um atraso de meio segundo quando o usuário rola a página//
 ScrollReveal().reveal('#tropicalia', { delay: 500 }); // Faz com que o elemento com o ID #tropicalia apareça com o mesmo atraso, quando o usuário rola a página//
 ScrollReveal().reveal('#galeria', { delay: 500 }); //Faz com que o elemento com o ID #galeria apareça com o mesmo atraso, quando o usuário rola a página//
 ScrollReveal().reveal('#contato', { delay: 500 }); //Faz com que o elemento com o ID #contato apareça com o mesmo atraso, quando o usuário rola a página//
 //Em resumo, todas as linhas fazem com que as seções da página apareçam gradualmente, uma por vez, com um efeito de atraso suave, à medida que o usuário as visualiza ao rolar a tela//
