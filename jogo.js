/*encontrar a largura e altura da página
var altura = window.innerHeight
var largura = window.innerWidth
console.log(altura, largura)*/

// precisa que seja atualizado de acordo com a acao de mudar o tam da tela 
// para isso colocamos dentro de uma funcao
// chamamos o onresize no body  

var altura = 0 
var largura = 0
var vidas = 1
var tempo = 10
var criaMosquitoTempo = 1500

var nivel = window.location.search//search recupera tudo q estiver a direita do ? 
nivel = nivel.replace('?', '') // onde for encontrado ? sera vazio 
if(nivel === 'normal'){
    //1500
    criaMosquitoTempo = 1500
}else if (nivel === 'dificil'){
    //1000
    criaMosquitoTempo = 1000
} else if(nivel === 'expert'){
    //750
    criaMosquitoTempo = 750
}



function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth
     
     console.log(largura, altura)

}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo -=1
    if (tempo < 0){
        clearInterval(cronometro) // eliminando a funcao da memoria da aplicacao 
        clearInterval(criaMosquito) // 
       // alert('vitoria')
       window.location.href = "vitoria.html"
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000) //1s



function posicaoRandomica(){

    //remover o elemento html anterior caso exista 
    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        // alterando coracao cheio para coracao vazio 
        if(vidas > 3){ // se vidas for maior que 3x tentativas da game over 
           // alert('interroper o jogo')
           // redirecionar o usuario para outra pagina 
           window.location.href="fimDeJogo.html"
        }else{
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
            vidas ++
        }

    }


    // criacao de uma posicao randomica 
    // criar um elemento html de forma dinamica 
    // dentro dos limitadores largura e altura da pag 
    // Math.floor para arrendondar para baixo os numerais 
    var posicaoX = Math.floor(Math.random() * largura) - 90 // para nao ultrapassar o tamanho diminuir uma quantidade de px 
    var posicaoY = Math.floor(Math.random() * altura) - 90 

    // para a imagem nao sumir 
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

   // console.log(posicaoX, posicaoY)

    //criar o elemento html utilizando o dom 
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()// atribuindo a classe do css
    mosquito.style.left = posicaoX + 'px'// posicionar o elemento nas coordenadas geradas em pixel 
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute' // precisa estar em posicao absoluta 
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        // alert('elemento clicado')
        this.remove() // removendo o elemento no momento do clique 
    }
    document.body.appendChild(mosquito) // criando um filho para o body

    //ladoAleatorio()

    //console.log(tamanhoAleatorio())
    
    // tamanhoAleatorio()
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    // console.log(classe)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    // console.log(classe)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
