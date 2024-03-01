const readline = require('readline-sync');

const contatos = [];

    function criar() {
        const nome = readline.question("Informe o nome do contato: ");
        const email = readline.question("Informe o email do contato: ");
        const telefone = readline.question("Informe o telefone do contato: ");
        const novo = { nome, email, telefone };
        contatos.push(novo);
    }
    
    function listar() {
        contatos.forEach((contato) => console.log(contato.nome, "-", contato.email, "-", contato.telefone));
    }
    
    function buscar() {
        const nome = readline.question("Informe o nome do contato: ");
        const buscou = contatos.find((contato) => contato.nome === nome);
        if (buscou) {
        console.log(buscou.nome, "-", buscou.email, "-", buscou.telefone);
        } else {
        console.log("Contato não encontrado");
        }
    }
    
    function atualizar() {
        const nome = readline.question("Informe o nome do contato: ");
        const buscou = contatos.find((contato) => contato.nome === nome);
        if (buscou) {
        const outroNome = 
            readline.question("Informe outro nome para o contato: ");
        const outroEmail = 
            readline.question("Informe outro email para o contato: ");
        const outroTelefone = 
            readline.question("Informe outro telefone para o contato: ");
        buscou.nome = outroNome;
        buscou.email = outroEmail;
        buscou.telefone = outroTelefone;
        } else {
            console.log("Contato não encontrado");
        }
    }

    function remover() {
        const nome = readline.question("Informe o nome do contato: ")
        const posicao = produtos.findIndex((contato) => contato.nome === nome)
        if (posicao >= 0) {
            produtos.splice(posicao, 1);
        } else {
            console.log("Contato nao encontrado")
        }
    }

    module.exports = {criar, listar, buscar, atualizar, remover};