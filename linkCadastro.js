
var Cliente = document.getElementById("Cliente");
var Agencia = document.getElementById("Agencia");
var Conta = document.getElementById("Conta");
var Valor = document.getElementById("Valor");

var botoes = document.getElementsByClassName("button button2");

function botaoPressionado(evento) {
    id = evento.currentTarget.id

    if (id == "Confirmar") {
        console.log(Cliente.value)
        console.log(Agencia.value)
        console.log(Conta.value)
        console.log(Valor.value)
    }

    if (id == "Confirmar") {
        window.alert("Cliente: " + Cliente.value + "\n Agência: " + Agencia.value + "\n Conta: " + Conta.value + "\n Valor: " + Valor.value)
    }

}
for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', botaoPressionado);
}