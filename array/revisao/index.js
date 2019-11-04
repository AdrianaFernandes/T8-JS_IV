const comidas =['lasanha', 'batata', 'bacon']

console.log(comidas[2])

comidas.forEach((comida, posicao) => {
    console.log(`Na posicao ${posicao} temos a comida: ${comida}`)
})

// concat faz a copia do array e adiciona o elemento que a gente passa como argumento

let outrasComidas = comidas.concat('jiló')

console.log('comidas', comidas)
console.log('outras comidas', outrasComidas)

// join - cria uma string do array e ele utiliza o argumento como separador

let stringDoArray = comidas.join(' ! ')
console.log(stringDoArray)

//shift - retira o primeiro elemento da array e retorna o elemento retirado
// modifica permanentemente o array

console.log(comidas.shift())

//pop - remove o ultimo elemento da array e retorna o elemento retirado

console.log(comidas.pop())

//unshift - adiciona um item na primeira posição da array
//modifica permanentemente o array

console.log(comidas.unshift('macarrão'))
console.log(comidas)

//adiciona um item na ultima posicao do array
comidas.push('strogonoff')
console.log(comidas)

//inverte o array
comidas.reverse()
console.log(comidas)

//slice - imprime os valores selecionados - faz uma copia simples
let cortarAlimentos = comidas.slice(1,2)
console.log(cortarAlimentos)
console.log(comidas)

//splice - tres argumentos (posicao, indice de apagar - 0 para não apagar, valor para adicionar ) - pode remover e adicionar valores utilizando posição, indice de apagar, valor para adicionar

comidas.splice(1,0,'alface')
console.log(comidas)

//sort - coloca em ordem alfabetica
comidas.sort()
console.log(comidas)

//indexOf - retorna posição do item pesquisado - retorna -1 quando não encontrado
//lastIndexOf - ultima posição encontrada

console.log(comidas.indexOf('alface'))

//map - metodo de array assim como o forEach - faz uma copia como os elementos alterados
let mapArray = comidas.map((comida) => `${comida} Gostosa`)
console.log(mapArray)


//filter - procura o elemento dado
let arrayProcura = comidas.filter((comida) => comida === 'Batata')
console.log(arrayProcura)

//reduce - reduz a uma unica variavel(que pode ser string, number, array ...) todos os elementos

let juntaComida = comidas.reduce((esq, dir) => {
    return `${esq} e ${dir}`
})

console.log(juntaComida)

//find - procura o elemento dentro da array
//findIndex - procura o elemento e retorna sua posicao

const numeros = [1,2,3,4,5]
    console.log(`Na posição ${posicao} temos a comida: ${comida}`)

// concat faz copia do arary e adiciona o elemento que a gente passa como argumento
let outrasComidas = comidas.concat("Jiló")
console.log('comidas', comidas) 
console.log('outras comidas', outrasComidas)

// join - cria uma string do array e ele utiliza o argumento como separador
let stringDoArray = comidas.join(', ')
console.log(stringDoArray)

//shift -> arranca o primeiro item do array e retorna qual ele arrancou
// modifica permanentemente o array
console.log(comidas.shift())
console.log(comidas)

//pop -> arranca o ultimo item do array e retorna o que ele deletou
// modifica permanentemente o array
console.log(comidas.pop())
console.log(comidas)

//Adiciona um item na primeira posição do array
// modifica permanentemente o array
comidas.unshift("Macarrão")
console.log(comidas)

//Adiciona um item na ultima posição do array
// modifica permanentemente o array
comidas.push("Strogonoff")
console.log(comidas)

//Inverte o array
comidas.reverse()
console.log(comidas)

// faz uma copia simples delimitando o começo e o final da parte que eu quero
// slice(comeco, final)
let cortarAlimentos = comidas.slice(1, 2)
console.log(cortarAlimentos)
console.log(comidas)

//Pode remover e adicionar valores utilizando posicao, indice de apagar, valor para adicionar
comidas.splice(2, 0, "Alface")
console.log(comidas)

// Coloca em ordem 
comidas.sort()
console.log(comidas)

comidas.unshift("Batata")
console.log(comidas)
console.log(comidas.indexOf("Batata"))
console.log(comidas.lastIndexOf("Batata"))
// Não encontrou
console.log(comidas.indexOf("Brocolis"))

let mapArray = comidas.map((comida)=> `${comida} Gostosa`)
console.log(mapArray)
let teste = comidas.forEach((comida)=> `${comida} boa`)
console.log(teste)
const numeros = [1, 2, 3, 4, 5]
let numerosDobrados = numeros.map((numero)=>numero*2)
console.log(numerosDobrados)

let arrayProcura = comidas.filter((comida)=> comida === 'Batata')
console.log(arrayProcura)

let juntaComida = comidas.reduce((esq, dir) => {
    return `${esq} e ${dir}`
})
console.log(juntaComida)

let somaNumero = numeros.reduce((esq, dir) => {
    return esq + dir
})
console.log(somaNumero) 

console.log(numeros)
console.log(numeros.find(numero => numero === 1))
console.log(numeros.findIndex(numero => numero === 1))

//every

menorQueDez = (algumValor) => algumValor < 10
console.log(numeros.every(numero => menorQueDez(numero)))

// Array >> recomenda-se que seja homogeneo
console.log(numeros.find(numero => numero === -1))
console.log(numeros.findIndex(numero => numero === 9))

menorQueDez = (algumValor) => algumValor < 10
console.log(numeros.every(numero => menorQueDez(numero)))
