function salvarDados(tiposDados, dados) {
    dados = JSON.stringify(dados)
    localStorage.setItem(tiposDados, dados);
}

function lerDados(tipoDados) {
    dados = []
    if (localStorage.getItem(tipoDados)) {
        dados = localStorage.getItem(tipoDados)
        dados = JSON.parse(dados)
    }
    return dados
}


function mostrarSanduiches() {
    var area = document.getElementById("sanduiches")

    sanduiches = lerDados("sanduiches")

    html = ""

    sanduiches.forEach((sanduiche) => {

        html += `id: ${sanduiche.id}
  
   
        Nome: ${sanduiche.nome}
   
        Composicao: ${sanduiche.composicao}
      
        Preço: ${sanduiche.preco}  <br/>`

    })
    console.log(html)

    area.innerHTML = html
}

function criarSanduiche() {

    var sanduiches = lerDados("sanduiches");

    var id = 1
    var nome = prompt("Qual o nome do sanduiche?")
    var composicao = prompt("Qual a composição:")
    var preco = prompt("Qual o preco")

    var novoSanduiche = { id: id, nome: nome, composicao: composicao, preco: preco }

    sanduiches.push(novoSanduiche)

    salvarDados("sanduiches", sanduiches)

    mostrarSanduiches()

}

