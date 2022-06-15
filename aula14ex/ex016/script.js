function contar() {
    var f_inicio = document.getElementById('f_inicio')
    var f_fim = document.getElementById('f_fim')
    var f_passo = document.getElementById('f_passo')
    var res = document.getElementById('res')
    var txt = ''

    for(c = Number(f_inicio); c <= Number(f_fim); c+=Number(f_passo)){
        txt+= `${c} &#x1F449`
    }
    txt+=`&#x1F3C1`

    res.innerHTML= txt

}