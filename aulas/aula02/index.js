const readline = require('readline-sync')

const controlador = require('./controlador')

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

        case '5': 
        remover();
        break;

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