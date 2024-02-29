const readline = require('readline-sync')

    const produtos = [];

    function criar() {
        const nome = readline.question("Informe o nome do produto: ");
        const preco = readline.question("Informe o preco do poduto: ");
        const novo = (nome, preco); //new object (nome, preco)
        produtos.push(novo);
    }

    function listar() {
        produtos.forEach((produto) =>
         console.log(produto.nome, "-", produto.preco));
    }

    function Buscar(){
        const nome = readline.question("Informe o nome produto: ")
        const buscou = produtos.find((produto)  => produto.nome === nome);
            if (buscou) {
                console.log(buscou.nome, '-', buscou, preco);
            } else {
                console.log("produto nao encontrado")
            }
    }
    function atualizar(){
        const nome = readline.question("Informe o nome produto: ")
        const buscou = produtos.find((produto) => produto.nome === nome);
            if (buscou) {
                const outroNome =
                readline.question("informe outro nome para o produto: ")
                const outroPreco = 
                readline.question("Informe outro preco para o produto: ")
                buscou.nome = outroNome;
                buscou.preco = outroPreco;
            } else {
                console.log("produto nao encontrado meu aliado")
            }
         
    }

    function remover () {
        const nome = readline.question("Informe o nome do produto: ")
        const posicao = produtos.findIndex((produto) => produto.nome === nome)
        if (posicao >= 0) {
            produtos.splice(posicao, 1);
        } else {
            console.log("produto nao encontrado")
        }
    }

    module.exports = {criar, listar, buscar, atualizar, remover };