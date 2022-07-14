function calcular() {
    var f_numero = document.getElementById('f_numero').value
    var s_resultado = document.getElementById('s_resultado')

    var n_numero = Number(f_numero)

    //Testa se número não é null
    if (f_numero == "" || f_numero == NaN) {

        window.alert(`Selecione um número válido.`)

    } else {
        //cria variável que vai receber o texto 'número x número = resultado' a cada for
        var txt = ""
        s_resultado.length = 0

        //c é igual à zero. enquanto c for menor ou igual à dez = texto recebe string
        //em seguida, select 's_resultado' adiciona um novo 'option' anônimo (mesmo que var option = new Option(txt, txt)). 
        for (var c = 0; c <= 10; c++) {
            txt = `${n_numero} x ${c} = ${n_numero * c}`
            s_resultado.add(new Option(txt, txt))
        }

    }
}

function limpar() {
    var f_numero = document.getElementById('f_numero')
    var s_resultado = document.getElementById('s_resultado')

    //limpar todos os campos e restaurar ao original
    s_resultado.length = 0
    s_resultado.add(new Option('Digite um número', 'dgt'))
    f_numero.value = ""

}
