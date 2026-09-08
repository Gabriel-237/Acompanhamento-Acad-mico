function calcular() {
    // Captura dos elementos
    const inputNota1 = document.getElementById("nota1");
    const inputNota2 = document.getElementById("nota2");
    const pResultado = document.getElementById("resultado");

    // Converte os valores para número
    const nota1 = parseFloat(inputNota1.value);
    const nota2 = parseFloat(inputNota2.value);

    // Validação
    if (isNaN(nota1) || isNaN(nota2)) {
        pResultado.textContent = "Por favor, informe ambas as notas.";
        pResultado.style.color = "orange";
        return;
    }

    // Cálculo da média
    const media = (nota1 + nota2) / 2;

    // Exibição e estilização
    if (media >= 7) {
        pResultado.textContent = "Média: " + media.toFixed(1) + " - Estudante Aprovado!";
        pResultado.style.color = "green";
    } else {
        pResultado.textContent = "Média: " + media.toFixed(1) + " - Estudante Não Aprovado.";
        pResultado.style.color = "red";
    }
}