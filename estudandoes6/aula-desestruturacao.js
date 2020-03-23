const usuario = {
    nome: 'Fernando',
    idade: 25,
    endereco: {
        cidade: 'Natal',
        estado: 'RN'
    }
}

console.log(usuario)

// const nome = usuario.nome
// const idade = usuario.idade
// const cidade = usuario.endereco.cidade

// desestruturação
const {nome, idade, endereco:{cidade}} = usuario

console.log(nome)
console.log(idade)
console.log(cidade)

function mostraNome({nome, idade}){
    console.log(nome, idade)
}

mostraNome(usuario)

