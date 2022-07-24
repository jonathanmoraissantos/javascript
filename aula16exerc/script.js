function adicionar() {
    var f_numero = document.getElementById("f_numero")
    var s_resultado = document.getElementById("s_resultado")

    var n_numero = Number(f_numero.value)

    if (n_numero < 1 || n_numero > 100) {
        window.alert(`Selecione um número dentro do intervalo válido.`)
    }

}