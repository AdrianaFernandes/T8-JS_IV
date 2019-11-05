/*

abstração
encapisulamento
henrença
polimorfismo

*/

/* variavel tipo objeto */

//const name = new type(arguments);


const crianca = new Object
console.log(typeof(crianca))
crianca.nome = "Elaine"
crianca.idade = 5
crianca['brinquedo_favorito'] = 'Homem aranha' //outra maneira de adicionar atributos > não é recomendado faze-lo
delete crianca.idade //deleta atributo

const crianca2 = {
    nome: "Paulo",
    idade: 6,
    endereco: { 
        logradouro: "Rua dos Bobos",
        numero: 0,
        referencia: {
            endereco: {
                logradouro: "Rua dos Bobos",
                numero: 2,
                descricao: "Mercado",
            }
        }
    },
    responsaveis: [{
        nome: "Tereza",
        telefone: "111111111",
        parentesco: "tia",
    }],
    podeBrincar: false
}
console.log(crianca2)
delete crianca2.idade
console.log(crianca2)
delete crianca2.endereco
//console.log(crianca2.endereco.logradouro)

function Crianca(nome, idade, altura){
    this.nome = nome
    this.idade = idade
    this.altura = altura
    this.podeBrincar = () => {
        return (altura > 1)
    }
}

const c1 = new Crianca("Bete", 6, 1.1)
console.log(`${c1.nome} tem ${c1.altura} e ${c1.podeBrincar() ? `pode brincar` : `não pode brincar`}`)
const c2 = new Crianca("Carlos", 4, 0.8)
console.log(`${c2.nome} tem ${c2.altura} e ${c2.podeBrincar() ? `pode brincar` : `não pode brincar`}`)

//const fromJSON = JSON.parse()

// os vlaores da constante pessoa tão no endereço A
const pessoa = {nome: "Gustavo"}
console.log(pessoa);
pessoa.nome = "Geraldo"
console.log(pessoa);

//os valores da constante pessoa2 tão no endereço A
const pessoa2 = pessoa
pessoa2.nome = "Tereza"
console.log(pessoa)
console.log(pessoa2)

const a = 1
const b = 2
const c = 3
const obj1 = {a:a, b:b, c:c} // atribuição literal
const obj2 = {a, b, c} // atribuição direta
console.log(obj1)
console.log(obj2)

const nomeAttr = "nota"
const valorAttr = 8
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const crianca4 = {
    nome: "Jani",
    idade: 6,
    altura: 1.2,
}

console.log(Object.keys(crianca4)) // mostra os metodos
console.log(Object.values(crianca4)) // mostra só os valores
console.log(Object.entries(crianca4)) // mostra tudoooo

//defineProperty - define propriedades: enumerable(listado qdo console.log), writable(reescrever), value

Object.defineProperty(crianca4, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '29/08/2013'
})

console.log(crianca4)
crianca4.dataNascimento = 'batata'
console.log(crianca4.dataNascimento)

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj5 = Object.assign(dest, o1, o2) //soma atributos no novo objeto
console.log(obj5)

const produto = Object.preventExtensions({
    nome: "Notebook",
    preco: 2,
    tag: 'promoção',
})

produto.desconto = 100
console.log(produto)
produto.nome = "banana"
console.log(produto)
console.log(Object.isExtensible(produto)) //verifica se é extensivo

const pessoa7 = {
    nome: "Claudia",
    idade: 32,
}

Object.freeze(pessoa7) //congela tudo, não dá pra alterar e fazer nada
console.log(pessoa7)
pessoa7.nome = "Ana"
console.log(pessoa7)
pessoa7.filhos = false
console.log(pessoa7)

///////////////////////////////

function Pessoa(nome, idade, corFavorita){
    this.nome = nome
    this.idade = idade
    this.corFavorita = corFavorita
}

let mae = new Pessoa("Ana", 35, "vermelho")
let tio = new Pessoa("Cleber", 49, "rosa")

Pessoa.prototype.apresentacao = function() {
    return `O nome da pessoa é: ${this.nome}`
}

console.dir(Pessoa) // 

console.log(mae.apresentacao())
console.log(tio.apresentacao())

mae.apresentacao = function(){
    return `O nome da mãe é: ${this.nome}`
}
console.log(mae.apresentacao())

function Pessoa(nome, idade, corFavorita) {
    this.nome = nome
    this.idade = idade
    this.corFavorita = corFavorita
}

//nome, sobrenome, materia

function Professor(nome, sobrenome, materia) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.materia = materia  
}

Professor.prototype.dizMateria = function(){
    return `A Materia é: ${this.materia}`
}

const prof1 = new Professor('Gustavo', 'Alberto', 'Matematica')
console.log(prof1);

const js3 = new Professor("Cintia", "Fumi", "JavaScript 3")
console.log(js3.dizMateria());
const js4 = new Professor("Lydia", "Rodrigues", "JavaScript 4")
console.log(js4.dizMateria());

js4.dizMateria = function() {
    return `A professora é: ${this.nome} e a materia é ${this.materia}`
}

console.log(js4.dizMateria());

const avo = { attr1: 'A'}
const mae = {__proto__:avo, attr2: 'B', attr3: 'C'}
console.log(filha.attr1, filha.at);




