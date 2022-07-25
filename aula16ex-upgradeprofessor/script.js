var colecao = []

function adicionar() {
    let f_numero = document.getElementById("f_numero")
    let s_resultado = document.getElementById("s_resultado")
    let div_res = document.getElementById("res")
    let n_numero = Number(f_numero.value) //conversão de f_numero

    //Se é um número válido e não está na lista
    if (isNumero(n_numero) && !inLista(n_numero, colecao)) {
        colecao.push(n_numero)
        s_resultado.add(new Option(`O valor informado é ${n_numero}`, `${n_numero}`))
        div_res.innerHTML = ""
    } else {
        window.alert(`Valor inválido ou já encontrado na lista.`)
    }

    f_numero.value = ""
    f_numero.focus()
}

function isNumero(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function menor() {
    let c_ordenada = colecao.sort()
    return c_ordenada[0]
}

function maior() {
    let c_ordenada = colecao.sort()
    return c_ordenada[c_ordenada.length - 1]
}

function somar() {
    let c_soma = 0
    let c = colecao

    for (let pos in c) {
        c_soma += c[pos]
    }

    return c_soma
}

function media() {
    let c_soma = somar()
    let c_tamanho = colecao.length

    return c_soma / c_tamanho
}

function finalizar() {
    let div_res = document.getElementById("res")

    if (colecao.length == 0) {
        window.alert(`Não há itens inseridos na listagem. Adicione valores antes de finalizar.`)
    } else {
        //Inserção no HTML
        let total = colecao.length

        div_res.innerHTML = ''
        div_res.innerHTML += `<br>`
        div_res.innerHTML += `<p>&#10003 Ao todo, temos <strong>${total}</strong> números cadastrados.</p><br>`
        div_res.innerHTML += `<p>&#10003 O maior valor informado foi <strong>${maior()}</strong>.</p><br>`
        div_res.innerHTML += `<p>&#10003 O menor valor informado foi <strong>${menor()}</strong>.</p><br>`
        div_res.innerHTML += `<p>&#10003 Somando todos os valores, temos <strong>${somar()}</strong>.</p><br>`
        div_res.innerHTML += `<p>&#10003 A média dos valores digitados é <strong>${media()}</strong>.</p><br>`
    }
}