function validacaoArquivo(nomeArquivo){
    if(nomeArquivo.includes(".jpg") || nomeArquivo.includes(".png") || nomeArquivo.includes(".gif") || nomeArquivo.includes(".jpeg") ){
        return `Arquivo válido`
    }else{
        return `Arquivo inválido`
    }
}

console.log(validacaoArquivo("Foto da Familia.pdf"))