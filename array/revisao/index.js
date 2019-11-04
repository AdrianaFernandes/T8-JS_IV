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
//find - procura o elemento dentro da array retorna o valor
//findIndex - procura o elemento e retorna sua posicao

const numeros = [1,2,3,4,5]
console.log(numeros)
console.log(numeros.find(numero => numero === 1))
console.log(numeros.findIndex(numero => numero === 1))

//every

menorQueDez = (algumValor) => algumValor < 10
console.log(numeros.every(numero => menorQueDez(numero)))

// Array >> recomenda-se que seja homogeneo