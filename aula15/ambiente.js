var num = [5, 8, 2, 9, 3]
num.push(1)

console.log(`Nosso vetor tem os seguintes valors ${num}`)

console.log(`Ordenando array ${num.sort()}`)

for (let c = 0; c < num.length; c++) {
    console.log(`Posição: ${c} | Valor: ${num[c]}`)
}

//for com in
for (let c in num) {
    console.log(num[c])
}

//método indexOf()
let pos = num.indexOf(4)
if (pos == -1) {
    console.log("O valor não foi encontrado.")
} else {
    console.log(`O valor está na posição ${pos}`)
}