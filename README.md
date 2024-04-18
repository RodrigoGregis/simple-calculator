# simple-calculator

Este projeto é uma calculadora simples com o objetivo de praticar e aprimorar os conceitos de HTML, CSS e JavaScript.

![](https://raw.githubusercontent.com/RodrigoGregis/simple-calculator/main/image/preview.png)

---

### Pegar os elementos do fumulário.

Foi utilizado o objeto document (que representa o HTML), com o método **getElementById** para pegar o elemento no HTML através do ID.

Como este elemento é utilizado em outras partes do código, foi utilizado uma variável para o armazenamento. 

Uma vez que este elemento não mudará durante a execução do código (aplicação), foi utilizado uma **const** (constante) para o armazenamento.

---
### Criar a função responsável pelo cálculo.

Inicialmente, criamos uma variável chamada result para armazenar o resultado da operação.

Uma vez que esta variável vai mudar durante a execução do código (aplicação), foi utilizado uma **let**.

A inicialização de uma **let** é opcional, ou seja, não é preciso atribuir um valor quando é declarada.

---
### Identifica o tipo de operação e efetuar o cálculo.

Foi utilizado um **switch** para verificar qual o operador está selecionado e assim, executar o cálculo e armazenar na variável.

Foi utilizado a função **Number** para converter o valor do input (que atualmente é uma string) para um valor do tipo numérico.

---
### Imprimindo o resultado na tela.

Por último, no elemento que representa o display da calculador, é utilizado o **innerText** para imprimir no HTML o resultado.

---
### Pegar o botão e adicionar evento de click.

Foi utilizado o objeto document (que representa o HTML), com o método **getElementById** para pegar o elemento no HTML através do ID.

Para adicionar o evento de clique ao botão, foi utilizado o método **addEventListener** que recebe dois parâmetros: 

- o tipo de evento (string)
- função que vai ser executada (callback function)

Para o tipo de evento, foi informado que é do tipo 'click' (string).

Para a função de retorno, foi criada uma função anônima (não possui nome) para que fosse possível adicionar a validação de campos antes de executar a função de cálculo.

### Validar se os campos field1 e field2 NÃO estão vazios.

Para a validação, foi utilizado o **if**, verificando se os campos do formulário estavam preenchidos. 

Foi utilizado **!==** para verificar se o campo era EXATAMENTE DIFERNTE de uma string vazia. Ou seja, se o campo estava preenchido.

Observação: Para a verificação de igualdade, é utilizado **===**.

