function contar() {
    //Coleta valores digitados nos formulários
    var f_inicio = document.getElementById('f_inicio')
    var f_fim = document.getElementById('f_fim')
    var f_passo = document.getElementById('f_passo')

    //Converte valores do formulário em tipo Number
    var n_inicio = Number(f_inicio.value)
    var n_fim = Number(f_fim.value)
    var n_passo = Number(f_passo.value)

    //Onde resultado será armazenado e exibido
    var res = document.getElementById('res')
    var txt = 'Contando: <br>'

    //Tratamento dos valores inseridos no formulário
    if (n_inicio > n_fim) {

        window.alert(`Operação inválida! O número de início não pode ser menor que o fim.`)

    } else if (n_passo > (n_fim - n_inicio) || n_passo<=0) {

        window.alert(`Passo inválido! Selecione um valor menor ou igual a ${n_fim - n_inicio}.`)

    } else {

        for (n_inicio; n_inicio <= n_fim; n_inicio += n_passo) {
            txt += `${n_inicio} &#x1F449 `
        }
        txt += `&#x1F3C1`

        //Insere valor de 'txt' acumulado no laço na div 'res'
        res.innerHTML = txt

    }
}