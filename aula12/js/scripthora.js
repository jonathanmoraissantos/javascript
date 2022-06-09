
function start() {
    var frase = document.querySelector('p#hora')
    var imagem = document.querySelector('div#imagem')
    var agora = new Date()
    var hora = agora.getHours()
    hora = 6

    frase.innerHTML = `Agora são ${hora} horas`

    if (hora < 6 || hora >= 23) {
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #0D0D00, #1D2C40)'
        imagem.style.backgroundImage = "url(images/hora/madrugada.png)"
    } else if (hora < 12) {
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #F2CF8D, #D9C8A9)'
        imagem.style.backgroundImage = "url(images/hora/manha.png)"
    } else if (hora <= 18) {
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #0378A6, #DFE7F2)'
        imagem.style.backgroundImage = "url(images/hora/tarde.png)"
    } else {
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #734002, #BFB188)'
        imagem.style.backgroundImage = "url(images/hora/noite.png)"
    }
}