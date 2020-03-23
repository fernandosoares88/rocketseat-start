"use strict";

var usuario = {
  nome: 'Fernando',
  idade: 25,
  endereco: {
    cidade: 'Natal',
    estado: 'RN'
  }
};
console.log(usuario); // const nome = usuario.nome
// const idade = usuario.idade
// const cidade = usuario.endereco.cidade
// desestruturação

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
