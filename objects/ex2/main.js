const users = [{
  nome: "Lydia Rodrigues",
  imagem: "https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.0-9/26166938_1133699003400526_8706692885971000189_n.jpg?_nc_cat=100&_nc_oc=AQkW7DAtsoYgehpYbPuUa0PxGmk28SqRXrmw2w48gPX6k97WEI6te9ZVQykcLeU_8d4&_nc_ht=scontent.fcgh9-1.fna&oh=505e19dc3731aba00e6572c4fb8fce33&oe=5E4C587D"
},
{
  nome: "Doge",
  imagem: "https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L._SY355_.png"
},
{
  nome: "Antonio Bandeiras",
  imagem: "https://ichef.bbci.co.uk/news/660/cpsprodpb/1480E/production/_95328938_antonio3_getty.jpg"
},
{
  nome: "Rick Martin",
  imagem: "https://uploads.metropoles.com/wp-content/uploads/2019/10/30100551/martin.jpg"
}]

// class Card {
//   constructor(nome, imagem){
//     this.nome = nome
//     this.imagem = imagem
//   }
//   desenhaCard(){
//     const novoCard = document.createElement('div')
//     const cardImg = document.createElement("img")
//     cardImg.src = this.imagem
//     novoCard.appendChild(cardImg)
//     const text = document.createElement("h1")

//     document.getElementById('cards-section').appendChild(novoCard)
//   }
// }

// const card1 = new Card ('card1', "https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.0-9/26166938_1133699003400526_8706692885971000189_n.jpg?_nc_cat=100&_nc_oc=AQkW7DAtsoYgehpYbPuUa0PxGmk28SqRXrmw2w48gPX6k97WEI6te9ZVQykcLeU_8d4&_nc_ht=scontent.fcgh9-1.fna&oh=505e19dc3731aba00e6572c4fb8fce33&oe=5E4C587D")
// card1.desenhaCard()

// const card2 = new Card ('card2', "https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L._SY355_.png")
// card2.desenhaCard()


class Avatar {
  constructor(usuario){
    this.usuario = usuario
  }
  render(){
    const avatar = `<div class="avatar green">
    <img class="img-rounded" src=${this.usuario.imagem} />
    <h2>${this.usuario.nome} </h2> 
    </div>`
    document.getElementById('cards-section').insertAdjacentHTML('beforeend', avatar)
  }
}


users.map((user)=> {
  new Avatar(user).render()
})

//////////// outro jeito ////////

