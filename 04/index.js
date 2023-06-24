let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificadorFormatado = identificador.padStart(6, '0')
nomeFormatado = nome.split(' ')

for(let i = 0; i < nomeFormatado.length;i++){
    nomeFormatado[i] = nomeFormatado[i][0].toUpperCase() + nomeFormatado[i].substring(1)
}

console.log(`${nomeFormatado.join(' ')}`)
console.log(`${email.trim()}`)
console.log(identificadorFormatado)