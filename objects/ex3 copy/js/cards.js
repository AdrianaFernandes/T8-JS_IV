let resultados = [
    {
        titulo: "Ginger Champagne",
        ingredientes: "champagne, ginger, ice, vodka",
        imagem: "http://img.recipepuppy.com/1.jpg"
    },
    {
        titulo: "Potato and Cheese Frittata",
        ingredientes: "cheddar cheese, eggs, olive oil, onions, potato, salt",
        imagem: "http://img.recipepuppy.com/2.jpg"
    },
    {
        titulo: "Eggnog Thumbprints",
        ingredientes: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        imagem: "http://img.recipepuppy.com/3.jpg"
    },
    {
        titulo: "Succulent Pork Roast",
        ingredientes: "brown sugar, garlic, pork chops, water",
        imagem: "http://img.recipepuppy.com/4.jpg"
    },
    {
        titulo: "Irish Champ",
        ingredientes: "black pepper, butter, green onion, milk, potato, salt",
        imagem: "http://img.recipepuppy.com/5.jpg"
    }
];


// class NewCard{
//     constructor(receita){
//         this.receita = receita
        
//     }
//     render() {
//         const {
//             imagem,
//             titulo,
//             ingredientes
//         } = this.receita
//         const cardNovo = `<div class="card">
//             <img class="imagem" src=${imagem} />
//             <h2>${titulo}</h2>
//             <p>${ingredientes}</p>
//         </div>`
//         document.querySelector('.cards').insertAdjacentHTML('beforeend', cardNovo)
//     }
// }

// resultados.map(receita => {
//     new cardNovo(receita).rendr()
// })

/////insertAdjacentHTML (ele ira concatenar)  innerHTML substitui o texto


/////ou/////


class NewCard{
    constructor(receita){
        this.receita = receita
        
    }
    render() {
        const cardNovo = `<div class="card">
            <img class="imagem" src=${this.receita.imagem} />
            <h2>${this.receita.titulo}</h2>
            <p>${this.receita.ingredientes}</p>
        </div>`
        document.querySelector('.cards').insertAdjacentHTML('beforeend', cardNovo)
    }
}