const validar = document.getElementById('form-validar');

function compararCampos() {
    var campoA = document.getElementById("campoA");
    var campoB = document.getElementById("campoB");

    if (Number(campoB.value) > Number(campoA.value)) {
        alert("O valor do depósito é maior que o salo da conta!");
    } else {
        alert("Seu depósito foi feito com sucesso!");
    }
    campoA.value = "";
    campoB.value = "";
}

console.log(validar);