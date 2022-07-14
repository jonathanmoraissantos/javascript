function calcular(){
    var f_numero = document.getElementById('f_numero').value
    var s_resultado = document.getElementById('s_resultado').value

    var n_numero = Number(f_numero)

    if(!n_numero){

        window.alert(`Selecione um número válido.`)

    } else {
        var txt = ""
        
        for(var c=0;c<=10;c++){
            txt = `${n_numero} x ${c} = <strong>${n_numero*c}</strong>`
            var option = new Option(txt, txt)
            s_resultado.add(option)
        }

    }
}

