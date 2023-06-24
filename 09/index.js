const nome = 'Guido Cerqueira';

let nickname = nome.slice(0,13)
nicknameFormatado = nickname.split(" ")

console.log(`@${nicknameFormatado.join("").trim().toLowerCase()}`)