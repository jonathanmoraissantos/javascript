function verificar() {
    var res = document.querySelector('div#resultado')
    var txtano = document.querySelector('input#txtano')
    var today = new Date()
    var hoje = today.getFullYear()
    var rdfem = document.getElementById('rdfem')
    var rdmasc = document.getElementById('rdmasc')
    var imagem = document.querySelector('div#img')
    var ano = Number(txtano.value)
    var idade = hoje - ano

    if (ano < 1900 || ano > hoje) {

        window.alert(`Ano inválido! Selecione um ano entre 1900 e o ano atual.`)

    } else if (rdmasc.checked == true) {

        res.innerHTML = `<p>Homem com  ${idade} anos de idade.`
        img.style.display = 'block'

        if (idade <= 18) {
            img.style.backgroundImage = 'url(images/idade/hjovem.jpg)'
        } else if (idade <= 50) {
            img.style.backgroundImage = 'url(images/idade/hmaduro.jpg)'
        } else {
            img.style.backgroundImage = 'url(images/idade/hidoso.jpg)'
        }

    } else if (rdfem.checked == true) {

        res.innerHTML = `<p>Mulher com  ${idade} anos de idade.`
        img.style.display = 'block'
        if (idade <= 18) {
            img.style.backgroundImage = 'url(images/idade/mjovem.jpg)'
        } else if (idade <= 50) {
            img.style.backgroundImage = 'url(images/idade/mmadura.jpg)'
        } else {
            img.style.backgroundImage = 'url(images/idade/midosa.jpg)'
        }

    }

    if (rdmasc.checked == false && rdfem.checked == false) {

        window.alert(`Você não selecionou o sexo.`)

    }
}