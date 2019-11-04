let frutas = ["banana", "morango", "bacurí", "laranja"];

const valorInput = document.querySelector(".input")

const submitar = document.querySelector(".submit")

submitar.addEventListener("click", function (){
    let digitado = frutas.find(f => f === valorInput.value)

    if (digitado === valorInput.value) {
        console.log("Achei")

    } else {
        alert("não encontrado")
    }
})

//exercicio prof
// let frutas = ["banana", "morango", "bacurí", "laranja"];
// let btn = document.getElementById('btn')
// let input = document.getElementById('input')
// let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase())


// btn.addEventListener('click', function(){
//     // let arrAchou = frutas.filter(fruta => fruta === input.value)
//     // console.log(arrAchou)
//     // if(arrAchou.length > 0){
//     //     alert(`ACHOU O ${input.value}`)
//     // }else{
//     //     alert(`Não achou o ${input.value}`)
//     // }

//     // if(frutas.find(fruta => fruta === input.value)){
//     //     alert(`ACHOU O ${input.value}`)
//     // }else{
//     //     alert(`Não achou o ${input.value}`)
//     // }
//     console.log(typeof input.value)
// console.log(frutasMaiusculas)

//     if( frutasMaiusculas.indexOf(input.value.toUpperCase()) > -1){
//             alert(`ACHOU O ${input.value}`)
//         }else{
//             alert(`Não achou o ${input.value}`)
//         }
// })