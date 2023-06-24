const comentario = "Esse COVID é muito perigoso!";

if(comentario.includes('COVID', 'covid', 'pandemia', 'PANDEMIA') ){
    console.log("Comentário bloqueado por conter palavras proibidas")
}else{
    console.log('Comentário autorizado')
}