// --- REST OPERATOR
const usuario = {
    nome: 'Fernando',
    idade: 25,
    endereco: {
        cidade: 'Natal',
        estado: 'RN'
    }
}

console.log(usuario)

const { nome, ...resto } = usuario

console.log(nome)
console.log(resto)

// --- Com arrays

const arr = [1, 2, 3, 4]
const [a, b, ...c] = arr

console.log(a)
console.log(b)
console.log(c)

// --- Com parâmetros de funções

function soma(a, b, ...params){
    return a + b + params.reduce((total, next) => total + next)
}

console.log(soma(1, 3, 5, 5))

// --- SPREAD OPERATOR

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)

const usuario1 = {
    nome: 'Fernando',
    idade: 25,
    empresa: 'IFRN'
}

const usuario2 = {...usuario1, nome:'João'}
console.log(usuario1)
console.log(usuario2)
