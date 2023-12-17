const validar = document.getElementById('form-validar');

validar.addEventListener('submit', function(event) {
    event.preventDefault();
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB >= campoA) {
        alert("O valor do depósito é maior que o saldo da conta!");
    } else {
        alert("Seu depósito foi feito com sucesso!");
    }
    location.reload()
})   

console.log(validar);