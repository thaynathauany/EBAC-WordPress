// Aplicando e retirando estilo dos inputs de acordo com o definido nos campos dos formulários

document.getElementById("nome").addEventListener('blur', function () {
    var campoNome = this;
    console.log("Valor do campo:", campoNome.value);
    if (campoNome.value === "") {
        campoNome.classList.add("input-error");
        campoNome.style.color = 'red'
        //console.log("Campo vazio. Adicionando classe input-error."); //inputs add pra testes de lógica
    } else if (campoNome.value.length <= 8) {
        campoNome.classList.add("input-error");
        campoNome.style.color = 'red'
        //console.log("Campo com menos de 8 caracteres. Adicionando classe input-error.");
    } else {
        campoNome.classList.remove("input-error");
        campoNome.style.color = ''
        //console.log("Campo válido. Removendo classe input-error.");
    }
});

//Essa foi uma maneira mais simples que procurei para acessar os elementos Dom
// var campoNome = document.getElementById("nome");
// campoNome.addEventListener('blur', function () {
//     if (campoNome.value === "" || campoNome.value.length <= 8) {
//         campoNome.classList.add("input-error");
//         campoNome.style.color = 'red';
//     } else {
//         campoNome.classList.remove("input-error");
//     }
// });

document.getElementById("email").addEventListener('blur', function () {
    var email = this.value;
    var campoEmail = document.getElementById("email");

    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
        campoEmail.classList.add("input-error");
        campoEmail.style.color = 'red'
    } else {
        campoEmail.classList.remove("input-error");
        campoEmail.style.color = ''
    }
});

document.getElementById("telefone").addEventListener('blur', function () {
    var telefone = this.value;
    var campoTelefone = document.getElementById("telefone");

    if (!/^\d{10,11}$/.test(telefone)) {
        campoTelefone.classList.add("input-error");
        campoTelefone.style.color = 'red'
    } else {
        campoTelefone.classList.remove("input-error");
        campoTelefone.style.color = ''
    }
});

document.getElementById("cep").addEventListener('blur', function () {
    var cep = this.value;
    var campoCep = document.getElementById("cep");

    if (!/^\d{5}-?\d{3}$/.test(cep)) {
        campoCep.classList.add("input-error");
        campoCep.style.color = 'red'
    } else {
        campoCep.classList.remove("input-error");
        campoCep.style.color = ''
    }
});

document.getElementById("cidade").addEventListener('blur', function () {
    var cidade = this.value;
    var campoCidade = document.getElementById("cidade");

    if (cidade === "") {
        campoCidade.classList.add("input-error");
        campoCidade.style.color = 'red'
    } else {
        campoCidade.classList.remove("input-error");
        campoCidade.style.color = ''
    }
});

document.getElementById("estado").addEventListener('blur', function () {
    var estado = this.value;
    var campoEstado = document.getElementById("estado");

    if (estado === "") {
        campoEstado.classList.add("input-error");
        campoEstado.style.color = 'red'
    } else {
        campoEstado.classList.remove("input-error");
        campoEstado.style.color = ''
    }
});

//validando informações do formulário

document.querySelector('form').addEventListener('submit', function (event) {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cep = document.getElementById("cep").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;

    var error = false;
    var errorMessage = "";

    if (nome === "") {
        error = true;
        errorMessage += "Nome completo é obrigatório.\n";
        document.getElementById("nome").classList.add("input-error");
    } else if (nome.length <= 8) {
        error = true;
        errorMessage += "O Nome Completo deve ter mais de 8 letras.\n";
        document.getElementById("nome").classList.add("input-error");
    } else {
        document.getElementById("nome").classList.remove("input-error");
    }

    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
        error = true;
        errorMessage += "Email inválido.\n";
        document.getElementById("email").classList.add("input-error");
    } else {
        document.getElementById("email").classList.remove("input-error");
    }

    if (!/^\d{10,11}$/.test(telefone)) {
        error = true;
        errorMessage += "Telefone inválido.\n";
        document.getElementById("telefone").classList.add("input-error");
    } else {
        document.getElementById("telefone").classList.remove("input-error");
    }

    if (!/^\d{5}-?\d{3}$/.test(cep)) {
        error = true;
        errorMessage += "CEP inválido.\n";
        document.getElementById("cep").classList.add("input-error");
    } else {
        document.getElementById("cep").classList.remove("input-error");
    }

    if (cidade === "") {
        error = true;
        errorMessage += "Cidade é obrigatória.\n";
        document.getElementById("cidade").classList.add("input-error");
    } else {
        document.getElementById("cidade").classList.remove("input-error");
    }

    if (estado === "") {
        error = true;
        errorMessage += "Estado é obrigatório.\n";
        document.getElementById("estado").classList.add("input-error");
    } else {
        document.getElementById("estado").classList.remove("input-error");
    }

    if (error) {
        alert(errorMessage);
        event.preventDefault();
        return false;
    }

    return true;
});
