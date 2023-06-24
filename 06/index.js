const celular = 99918888;

let celularFormatado = String(celular)

if(celularFormatado.length === 11){
    console.log(`(${celularFormatado.slice(0, 2)}) ${celularFormatado.slice(2, -8)} ${celularFormatado.slice(3, -4)}-${celularFormatado.slice(7)}`)
}else if(celularFormatado.length === 9){
    console.log(`${celularFormatado.slice(0,1)} ${celularFormatado.slice(1,5)}-${celularFormatado.slice(5,9)}`)
}else{
    console.log("Numero de celular inválido")
}
