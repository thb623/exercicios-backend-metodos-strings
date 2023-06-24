const numeroCartao = '1111222233334444';

let primeirosQuatro = numeroCartao.slice(0, 4)
let ultimosQuatro = numeroCartao.slice(-4)
let numeroEscondido = '*'.repeat(numeroCartao.length - 8)

console.log(primeirosQuatro + numeroEscondido + ultimosQuatro)