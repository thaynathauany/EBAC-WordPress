function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var mensagemElement = document.getElementById('mensagem');

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        mensagemElement.textContent = 'Por favor, digite notas válidas.';
        return;
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        mensagemElement.textContent = 'Por favor, digite notas entre 0 e 10.';
        return;
    }

    var media = (nota1 + nota2 + nota3) / 3;
    document.getElementById('resultado').textContent = media.toFixed(2);
    mensagemElement.textContent = '';

    adicionarNota(nota1);
    adicionarNota(nota2);
    adicionarNota(nota3);

    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
}

function adicionarNota(nota) {
    var notasAdicionadasElement = document.getElementById('notasAdicionadas');
    var listItem = document.createElement('li');
    listItem.textContent = 'Nota: ' + nota.toFixed(1);
    notasAdicionadasElement.appendChild(listItem);
}
