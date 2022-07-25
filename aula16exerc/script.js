var colecao = []
var verificador = false

function adicionar() {
    var f_numero = document.getElementById("f_numero")
    var s_resultado = document.getElementById("s_resultado")

    var n_numero = Number(f_numero.value)

    if (n_numero < 1 || n_numero > 100 || n_numero == NaN) {
        window.alert(`Selecione um número dentro do intervalo válido.`)
    } else if (colecao.indexOf(n_numero) != -1) {
        window.alert(`Número já adicionado anteriormente.`)
    } else {
        verificador = true
        colecao.push(n_numero)
        s_resultado.add(new Option(`O valor informado é ${n_numero}`, 1))
    }
}

function menor(){
    let c_ordenada = colecao.sort()
    return c_ordenada[0]
}

function maior(){
    let c_ordenada = colecao.sort()
    return c_ordenada[c_ordenada.length-1]
}

function somar(){
    let c_soma = 0
    let c = colecao

    for(let pos in c){
        c_soma += c[pos]
    }
    
    return c_soma
}

function media(){
    let c_soma = somar()
    let c_tamanho = colecao.length

    return c_soma/c_tamanho
}

function finalizar() {
    let div_res = document.getElementById("res")
    let c_ordenada = colecao.sort()

    if (verificador == false) {
        window.alert(`Não há itens inseridos na listagem.`)
    } else {

        //Média de todos os valores da coleção
        let c_media = c_soma / c_ordenada.length

        //Inserção no HTML
        div_res.innerHTML = `
        &#10003 Ao todo, temos <strong>${c_ordenada.length}</strong> valores cadastrados.<br>
        &#10003 O maior valor informado foi <strong>${maior()}</strong>.<br>
        &#10003 O menor valor informado foi <strong>${menor()}</strong>.<br>
        &#10003 Somando todos os valores, temos <strong>${somar()}</strong>.<br>
        &#10003 A média dos valores digitados é <strong>${media}</strong>.<br>
        `
    }
}