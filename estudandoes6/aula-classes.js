
class List {
    constructor(){
        this.data = []
    }

    add(data){
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor(){
        super()
        this.usuario = 'Fernando'
    }

    mostraUsuario() {
        console.log(this.usuario)
    }
}

class Matematica {
    static soma (a, b){
        return a + b
    }
}

const minhaLista = new TodoList()

document.getElementById('novotodo').onclick = function(){
    minhaLista.add('Novo todo')
}

minhaLista.mostraUsuario()

console.log(Matematica.soma(2, 3))