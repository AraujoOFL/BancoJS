//BANCO COM CASE & STRUCT
var operacao;

    let usuario = {
    cliente: [50],
    agencia: 0,
    conta: '',
    valor: '',
    }

    switch (operacao) {
        case "CADASTRO":
            cliente = prompt("Digite o Nome do CLiente");
            agencia = prompt("Digite o Numero da Agencia");
            conta = prompt("Digite o Numero da Conta");
            valor = prompt("Digite o Valor da Conta");
            break;

        case "CONSULTA":
            console.log(cliente);
            console.log(agencia);
            console.log(conta);
            console.log(valor);
            break;
        default:
            console.log("ERRO");
            break;
    }
