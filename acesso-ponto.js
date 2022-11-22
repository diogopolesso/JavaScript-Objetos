const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "00839060095",
    email: "andre@dominio.com.br"
};

console.log(`O Nome do Cliente é ${cliente.nome} e essa Pessoa tem ${cliente.idade} anos.`);

console.log(`Os 3 pimeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`)

// substring() passa um valor especificado de uma string.
