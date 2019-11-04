//lista


const nomesNoRole = ['Adriana', 'Adrielly', 'Aline', 'Ana', 'Angelica', 'Ba', 'Babs', 'Carolzinha', 'Carolzona', 'Cecilia', 'Daiana', 'Emanuelle', 'Jackeline', 'Jennifer', 'Josiane', 'Lia', 'Marcela', 'Monique', 'Priscilla Roiz Garcia', 'Priscilla Soares Alves', 'Raissa', 'Raquel', 'Romênia', 'Rosana', 'Simara', 'Simone', 'Talita', 'Telma', 'Thaís', 'Valdeniza']

const input = document.getElementById("nome")
const submit = document.getElementById("btn")
const mensagem = document.getElementById("status")

submit.addEventListener("click", function(e) {

    e.preventDefault()

    const acharnalista = nomesNoRole.find(f => f === input.value)

    if (input.value.trim() === "") {
        mensagem.innerHTML = `Digite o nome`

    } else if (acharnalista === input.value) {
        input.classList.remove("is-invalid")
        input.classList.add("is-valid")
        mensagem.innerHTML = `${nome.value} foi para o rolê!`
        input.value = ""

    } else {
        input.classList.remove("is-valid")
        input.classList.add("is-invalid")
        mensagem.innerHTML = `${nome.value} não foi para o rolê!`
        input.value = ""
    }
})

//exercicio prof

// const validacao = (nome) => {
//     if(nome.trim() === '') throw 'O campo está vazio'
// }

// const checaPresenca = nome => {
//     let estaNaLista = nomesNoRole.find((presente) => {
//         return nome.toLowerCase() === presente.toLowerCase()
//     })
//     if(estaNaLista){
//         document.getElementById("nome").classList.add("is-valid")
//         document.getElementById("status").innerHTML = `${nome} estava no rolê`
//         return
//     }

//     throw `${nome} nãããão estava no rolê`
// }

// document.getElementById('form-do-role').addEventListener('submit', function(event){
//     event.preventDefault()
    
//     let valorCampo = document.getElementById("nome").value
//     if(document.getElementById("nome").classList.contains("is-valid")){
//         document.getElementById("nome").classList.remove("is-valid")
//     }
//     if(document.getElementById("nome").classList.contains("is-invalid")){
//         document.getElementById("nome").classList.remove("is-invalid")
//     }
//     document.getElementById("nome").value = ''

//     try{
//         validacao(valorCampo)
//         checaPresenca(valorCampo)
//     }catch(erro){
//         document.getElementById("status").innerHTML = erro
//         document.getElementById("nome").classList.add("is-invalid")
//     }


// })