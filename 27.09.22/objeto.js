/**
 * objeto e uma estrutura que permite organizar dados na forma de chave-valor
 */
let end = {
    
        rua: 'rua',
        numero: 456,
        estado: 'BH',
        complemento: 'sem complemento',
        cep: '1232066-00'


}
let pessoa = {
    nome: 'joana',
    cpf:'123.123.123-12',
    altura:156,
    endereço: {...end},
    solteiro:true,
    habilidades: ['react','java','javascript','golang','rust'],
    comprimentar(){
        console.log(this.nome);
    }
    
}
/*
console.log(pessoa.altura)
pessoa.comprimentar();
pessoa.nome='pablo';
pessoa.habilidades.push('angular')
console.log(pessoa.habilidades)
console.log(pessoa['cpf'])*/
console.log(end.rua)
console.log(pessoa.endereço.rua)
pessoa.endereço.rua= 'teste'
console.log(pessoa.endereço.rua)
console.log(end.rua)


