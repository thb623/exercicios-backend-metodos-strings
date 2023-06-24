const email = "aluno@cubos.academy";

const tamanho = email.length
const verificacaoFinal = email[tamanho -1]
const verificacaoInicio = email[0]

if(verificacaoFinal === "." || verificacaoInicio === "."){
    console.log("email inválido")
}else if(email.indexOf("@") !== -1 || email.indexOf(".",email.indexOf("@"))!== -1 || email.length > 3){
    console.log("email válido")
}