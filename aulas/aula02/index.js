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
        const buscou = produtos.find((produto) 
            => produto.nome === nome);
            if (buscou) {
                console.log(buscou.nome, '-', buscou preco);
            } else {
                console.log("produto nao encontrado")
            }
    }
    function atualizar(){
        const nome = readline.question("Informe o nome produto: ")
        const buscou = produtos.find((produto) 
            => produto.nome === nome);
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

function menu() {
    console.log('1. Listar');
    console.log('2. Criar');
    console.log('3. Buscar');
    console.log('4. Atualizar');
    console.log('5. Remover');
    console.log('6. sair');
}

function escolherOpcao(opcao) {
    switch(opcao) {

        case '1': 
        listar();
        break;

        case '2':
        criar();
        break;

        case '3':
        buscar()
        break;

        case '4':
        atualizar(); 
        break;
        
        case '5': break;
        case '6': Process.exit(0);
        default: console.log('Opcao invalida');
    }
         readline.question("Pressione ENTER para continuar");
}




function main() {
    while (true) {
        menu ();
        const opcao = readline.question("Entre com uma opcao: ");
        escolherOpcao(opcao);
    }
}

main();