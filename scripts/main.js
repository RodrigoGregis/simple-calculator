// Pegar os elementos do fumulário.
const field1 = document.getElementById('inputForm1');
const field2 = document.getElementById('inputForm2');
const selectOperator = document.getElementById('selectOperator');
const display = document.getElementById('display');

// Criar a função responsável pelo cálculo.
function calculate() {
    let result;

    // Identifica o tipo de operação e efetuar o cálculo.
    switch (selectOperator.value) {
        case '+': {
            result = Number(field1.value) + Number(field2.value);
            break;
        }

        case '-': {
            result = Number(field1.value) - Number(field2.value);
            break;
        }

        case '/': {
            result = Number(field1.value) / Number(field2.value);
            break;
        }

        case '*': {
            result = Number(field1.value) * Number(field2.value);
            break;
        }
    }

    // Imprimir o resultado na tela.
    display.innerText = result;
}

// Pegar o botão e adicionar evento de click.
const elementButton = document.getElementById('buttonSubmit');

elementButton.addEventListener('click', function (event) {
    event.preventDefault();

    // Validar se os campos field1 e field2 NÃO estão vazios.
    if (field1.value !== '' && field2.value !== '') {
        calculate();
    }
})


