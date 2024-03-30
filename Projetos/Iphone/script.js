/*var roxo = document.querySelector('.roxo')
        var rosa = document.querySelector('.rosa')
        var preto = document.querySelector('.preto')
        var azul = document.querySelector('.azul')*/
var ball = document.querySelector('.ball')
var iphone = document.querySelector('.ip')

ball.style.display = 'none'

function roxo() {
    var roxo = document.querySelector('.roxo')

    ball.style.display = 'block'
    ball.style.background = '#c592c5'
    iphone.src = "imagens/roxo.png"
}

function rosa() {
    var rosa = document.querySelector('.rosa')

    ball.style.display = 'block'
    ball.style.background = '#F2C3CB'
    iphone.src = "imagens/rosa.png"
}

function preto() {
    var preto = document.querySelector('.preto')

    ball.style.display = 'block'
    ball.style.background = '#555E6F'
    iphone.src = "imagens/preto.png"
}

function azul() {
    var azul = document.querySelector('.azul')

    ball.style.display = 'block'
    ball.style.background = '#5dc1d8'
    iphone.src = "imagens/azul.png"
}

function amarelo() {
    var amarelo = document.querySelector('.amarelo')

    ball.style.display = 'block'
    ball.style.background = '#fff566'
    iphone.src = "imagens/amarelo.png"
}

function verde() {
    var amarelo = document.querySelector('.verde')

    ball.style.display = 'block'
    ball.style.background = '#82ff9d'
    iphone.src = "imagens/verde.png"
}