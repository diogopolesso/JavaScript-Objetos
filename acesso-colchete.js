const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "00839060095",
    email: "andre@dominio.com.br"
};

console.log(`O Nome do Cliente é ${cliente["nome"]} e essa Pessoa tem ${cliente["idade"]} anos.`);


/* com a sintaxe de colchetes podemos acessar campos que não temos acesso
no momento em que estamos escrevendo o código. Com isso,
flexibilizamos o uso das chaves, das propriedades e dos objetos.*/

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) =>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});


/* A última linha é a chave altura, em que o valor foi devolvido como undefined ("indefinido").
O undefined é um valor reservado do JavaScript (sendo uma palavra especial)
devolvido ao tentarmos acessar uma propriedade que não existe.

Não retorna erro e não vai quebrar o código,
mas o campo é devolvido com o valor undefined. */
