function calcular() {
    var f_numero = document.getElementById('f_numero').value
    var s_resultado = document.getElementById('s_resultado')

    var n_numero = Number(f_numero)


    if (f_numero == "" || f_numero == NaN) {

        window.alert(`Selecione um número válido.`)

    } else {

        var txt = ""
        s_resultado.length = 0;

        for (var c = 0; c <= 10; c++) {
            txt = `${n_numero} x ${c} = ${n_numero * c}`
            var option = new Option(txt, txt)
            s_resultado.add(option)
        }

    }
}

function clear(){
    var f_numero = document.getElementById('f_numero')
    var s_resultado = document.getElementById('s_resultado')

    s_resultado.length = 0

}