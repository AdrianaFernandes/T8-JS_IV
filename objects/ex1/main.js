class Botao {
    constructor(texto, cor, tamanho, icone){
        this.texto = texto
        this.cor = cor
        this.tamanho =  tamanho
        this.icone = icone
    }
    desenhaBotao(){
        const novoBotao = document.createElement('button')
        novoBotao.setAttribute("class", `${this.cor} ${this.tamanho}`)
        if (this.icone) {
            //<i></i>
            const tagIcone= document.createElement("i")
            tagIcone.setAttribute("class", `${this.icone}`)

            novoBotao.appendChild(tagIcone)            
            const text = document.createTextNode(this.texto)
            novoBotao.appendChild(text)
        } else {
            novoBotao.innerHTML=this.texto
        }
        document.getElementById('buttons-section').appendChild(novoBotao)
    }
}

const botaoVerde = new Botao ("Botao verde", "verde", "pequeno", "fas fa-plus")
botaoVerde.desenhaBotao()

const botaoRoxo = new Botao ("Botao Novo", "roxo", "grande", "fas fa-infinity")
botaoRoxo.desenhaBotao()

const botaoAzul = new Botao ("Botao Novo1", "azul", "medio", "fab fa-phoenix-framework")
botaoAzul.desenhaBotao()

