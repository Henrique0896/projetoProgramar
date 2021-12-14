function salvarDados(tipoDados, dados) {
    dados = JSON.stringify(dados)
    localStorage.setItem(tipoDados, dados);
}

function lerDados(tipoDados) {
    dados = null
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

    if (sanduiches != null) {
        sanduiches.forEach((sanduiche) => {
            html += `id: ${sanduiche.id}
        Nome: ${sanduiche.nome}
        Composicao: ${sanduiche.composicao}
        Preço: ${sanduiche.preco}  <br/>`

        })
    }

    area.innerHTML = html
}

function criarSanduiche() {

    var sanduiches = lerDados("sanduiches");
    var id = lerDados("id")
    var nome = prompt("Qual o nome do sanduiche?")
    var composicao = prompt("Qual a composição:")
    var preco = prompt("Qual o preco")

    if (id == null) {
        id = 1
    } else {
        id += 1
    }
    salvarDados("id", id)
    var novoSanduiche = { id: id, nome: nome, composicao: composicao, preco: preco }
    if (sanduiches == null) {
        sanduiches = []
    }
    sanduiches.push(novoSanduiche)
    salvarDados("sanduiches", sanduiches)
    mostrarSanduiches()

}

function editar(id) {
    sanduiches = lerDados("sanduiches")
    if (sanduiches == null) {
        sanduiches = []
    }

    sanduiches.forEach((sanduiche) => {

        if (sanduiche.id == id) {
            sanduiche.nome = prompt("Novo nome:")
            sanduiche.composicao = prompt("Nova Composicao:")
            sanduiche.preco = prompt("Novo preco:")
        }
    })

    salvarDados("sanduiches", sanduiches)
    mostrarSanduiches()
}

function excluir(id) {
    sanduiches = lerDados("sanduiches")
    if (sanduiches == null) {
        sanduiches = []
    }

    sanduiche = sanduiches.forEach((sanduiche) => {

        if (sanduiche.id == id) {
            return sanduiche
        }
    })

    index = sanduiches.indexOf(sanduiche)

    sanduiches.splice(index, 1)

    salvarDados("sanduiches", sanduiches)
    mostrarSanduiches()
}