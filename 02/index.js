const cpf = "12345678900";
const cnpj = "12345678000199";

    if(cpf.length !== 11){
        console.log(`CPF INVALIDO`)
    }else{
        const cpfFormatado = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
        console.log(`CPF VÁLIDO ${cpfFormatado}`)
    }


    if(cnpj.length !== 14){
        console.log(`CNPJ INVÁLIDO`)
    }else{
        const cnpjFormatado = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
        console.log(`CNPJ VÁLIDO ${cnpjFormatado}`)
    }



