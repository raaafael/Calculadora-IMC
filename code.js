function calc() {
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var resultado = document.getElementById("resultado")
    var text = document.getElementById("text")
    var IMC = "Seu IMC é: "
    const calc = peso/altura**2
    IMC += calc
    if (calc < 17) {
        resultado.innerHTML = IMC
        text.innerHTML = "Muito abaixo do peso!"
    }
    if (calc > 17 && calc < 18.49) {
        resultado.innerHTML = IMC
        text.innerHTML = "Abaixo do peso!"
    }
    if (calc > 18.5 && calc < 24.99) {
        resultado.innerHTML = IMC
        text.innerHTML = "Peso normal!"
    }
    if (calc > 25 && calc < 29.99) {
        resultado.innerHTML = IMC
        text.innerHTML = "Acima do peso!"
    }
    if (calc > 30 && calc < 34.99) {
        resultado.innerHTML = IMC
        text.innerHTML = "Obesidade I!"
    }
    if (calc > 35 && 39.99) {
        resultado.innerHTML = IMC
        text.innerHTML = "Obesidade II (Severa)!"
    }
    if (calc > 40) {
        resultado.innerHTML = IMC
        text.innerHTML = "Obesidade III (Mórbida)!"
    }
}