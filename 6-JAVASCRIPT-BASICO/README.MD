## JAVASCRIPT - HELLO WORLD

### Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Document</title>
  </head>
  <body>
    <!-- <script>
      alert("Olá Mundo");
    </script> -->
    <script src="script.js"></script>
  </body>
</html>
```

```js
alert("Olá Mundo");
```

## JAVASCRIPT - ALGORITMO

- Um algoritmo é uma sequência lógica e finita de instruções que visa resolver um problema ou realizar uma tarefa específica. Ele é composto por passos claros e definidos, permitindo a execução automatizada por um computador.

## JAVASCRIPT - CONSOLE

- No contexto do navegador ou terminal do VS Code, o termo "console" refere-se a uma interface interativa que permite a comunicação entre o usuário e o ambiente de desenvolvimento. No navegador, o console geralmente é usado para depuração, exibição de mensagens de erro, e execução de scripts JavaScript. No VS Code, o terminal é uma janela de linha de comando onde você pode executar comandos do sistema operacional ou scripts, facilitando a interação com o ambiente de desenvolvimento.

### Uso/Exemplos

```js
console.log("Olá Mundo");
```

## JAVASCRIPT - VARIAVEIS

- Variáveis em JavaScript são contêineres para armazenar valores. Elas são declaradas usando as palavras-chave `var`, `let`, ou `const`, seguidas por um nome de variável. Exemplos:

### Uso/Exemplos

```js
var idade = 25; // Declaração usando var (antiga, evite usar)
let nome = "João"; // Declaração usando let (preferível para variáveis mutáveis)
const PI = 3.14; // Declaração usando const (para constantes imutáveis)
```

- Variáveis podem armazenar diversos tipos de dados, como números, strings, booleanos, objetos, entre outros. O valor de uma variável pode ser alterado ao longo do tempo, dependendo do tipo de declaração (`var`, `let`, `const`) e do escopo em que estão inseridas.

### Uso/Exemplos

```js
var a = "teste";
a = "queijo";
console.log("🚀 ~ a:", a);
var b = "Junior";
a = b;
console.log("🚀 ~ a:", a);
```

## JAVASCRIPT - TIPOS DE DADOS

- Boolean
- Null
- Undefined
- Number
- String

## JAVASCRIPT - OPERADORES ARITMETICOS

- JavaScript possui operadores aritméticos que realizam operações matemáticas básicas. Aqui estão alguns dos operadores aritméticos em JavaScript:

1. **Adição (+):**

- Soma dois valores.

### Uso/Exemplos

```js
let resultado = 5 + 3; // resultado será 8
```

2. **Subtração (-):**

- Subtrai o valor do operando direito do operando esquerdo.

### Uso/Exemplos

```js
let resultado = 8 - 3; // resultado será 5
```

3. **Multiplicação (\*):**

- Multiplica dois valores.

### Uso/Exemplos

```js
let resultado = 4 * 2; // resultado será 8
```

4. **Divisão (/):**

- Divide o operando esquerdo pelo operando direito.

### Uso/Exemplos

```js
let resultado = 10 / 2; // resultado será 5
```

5. **Módulo (%):**

- Retorna o resto da divisão do operando esquerdo pelo operando direito.

### Uso/Exemplos

```js
let resultado = 15 % 4; // resultado será 3 (resto da divisão)
```

6. **Incremento (++):**

- Adiciona 1 ao valor da variável.

### Uso/Exemplos

```js
let contador = 5;
contador++; // agora contador é 6
```

7. **Decremento (--):**

   - Subtrai 1 do valor da variável.

### Uso/Exemplos

```js
let contador = 5;
contador--; // agora contador é 4
```

- Esses operadores são essenciais para realizar cálculos e manipulações numéricas em JavaScript.

## JAVASCRIPT - ATRIBUIÇÕES

- Em JavaScript, os operadores de atribuição são utilizados para associar valores a variáveis. Aqui estão alguns dos operadores de atribuição em JavaScript:

1. **Atribuição Simples (=):**
   - Atribui um valor à variável.

### Uso/Exemplos

```js
let numero = 42; // A variável 'numero' agora tem o valor 42
```

2. **Atribuição com Adição (+=):**

   - Adiciona o valor do lado direito ao valor da variável e atribui o resultado à variável.

### Uso/Exemplos

```js
let soma = 10;
soma += 5; // Agora, 'soma' é igual a 15
```

3. **Atribuição com Subtração (-=):**

   - Subtrai o valor do lado direito do valor da variável e atribui o resultado à variável.

### Uso/Exemplos

```js
let subtracao = 20;
subtracao -= 8; // Agora, 'subtracao' é igual a 12
```

4. **Atribuição com Multiplicação (\*=):**

   - Multiplica o valor da variável pelo valor do lado direito e atribui o resultado à variável.

### Uso/Exemplos

```js
let multiplicacao = 3;
multiplicacao *= 4; // Agora, 'multiplicacao' é igual a 12
```

5. **Atribuição com Divisão (/=):**

   - Divide o valor da variável pelo valor do lado direito e atribui o resultado à variável.

### Uso/Exemplos

```js
let divisao = 15;
divisao /= 3; // Agora, 'divisao' é igual a 5
```

- Esses operadores de atribuição são fundamentais para manipular valores em variáveis, facilitando a atualização e modificação dos dados ao longo do código JavaScript.

## JAVASCRIPT - OPERADORES DE COMPARAÇÃO

- Os operadores de comparação em JavaScript são utilizados para avaliar a relação entre dois valores e retornam um resultado booleano (verdadeiro ou falso). Aqui estão alguns dos operadores de comparação em JavaScript:

1. **Igual (==):**

   - Verifica se dois valores são iguais, realizando coerção de tipo, se necessário.

### Uso/Exemplos

```js
5 == "5"; // true (coerção de tipo)
```

2. **Estritamente Igual (===):**

   - Verifica se dois valores são iguais, sem realizar coerção de tipo. Compara valor e tipo de dado.

### Uso/Exemplos

```js
5 === "5"; // false (sem coerção de tipo)
```

3. **Diferente (!=):**

   - Verifica se dois valores não são iguais, realizando coerção de tipo, se necessário.

### Uso/Exemplos

```js
10 != "10"; // false (coerção de tipo)
```

4. **Estritamente Diferente (!==):**

   - Verifica se dois valores não são iguais, sem realizar coerção de tipo. Compara valor e tipo de dado.

### Uso/Exemplos

```js
10 !== "10"; // true (sem coerção de tipo)
```

5. **Maior que (>):**

   - Verifica se o valor do operando esquerdo é maior que o valor do operando direito.

### Uso/Exemplos

```js
15 > 10; // true
```

6.  **Menor que (<):**

    - Verifica se o valor do operando esquerdo é menor que o valor do operando direito.

### Uso/Exemplos

```js
5 < 8; // true
```

7. **Maior ou Igual (>=):**

   - Verifica se o valor do operando esquerdo é maior ou igual ao valor do operando direito.

### Uso/Exemplos

```js
20 >= 20; // true
```

8. **Menor ou Igual (<=):**

   - Verifica se o valor do operando esquerdo é menor ou igual ao valor do operando direito.

### Uso/Exemplos

```js
30 <= 25; // false
```

- Esses operadores são fundamentais para condicionais e estruturas de controle de fluxo em JavaScript, permitindo avaliar condições e tomar decisões com base nas comparações realizadas.

## JAVASCRIPT - OPERADORES LOGICOS

- Os operadores lógicos em JavaScript são utilizados para combinar ou modificar valores booleanos, produzindo um resultado booleano. Aqui estão os principais operadores lógicos:

1. **AND lógico (&&):**

   - Retorna verdadeiro (true) se ambos os operandos forem verdadeiros.

### Uso/Exemplos

```js
5 > 3 && 10 < 20; // true
```

2. **OR lógico (||):**

   - Retorna verdadeiro (true) se pelo menos um dos operandos for verdadeiro.

### Uso/Exemplos

```js
5 > 3 || 10 > 20; // true
```

3. **NOT lógico (!):**

   - Inverte o valor do operando, transformando verdadeiro em falso e vice-versa.

### Uso/Exemplos

```js
!(5 > 3); // false
```

- Esses operadores são frequentemente utilizados em expressões condicionais, estruturas de controle de fluxo e tomada de decisões em JavaScript. Eles permitem a criação de lógicas mais complexas ao combinar condições simples. Por exemplo, ao verificar múltiplas condições e decidir se um bloco de código deve ser executado com base nessas condições.

## JAVASCRIPT - STRING'S

- Em JavaScript, uma string é uma sequência de caracteres que representa texto. As strings podem ser definidas utilizando aspas simples **(')** ou duplas **(")**, e podem conter letras, números, símbolos e espaços. Para criar uma string:

### Uso/Exemplos

```js
let exemploString = "Isso é uma string";
```

- Operações comuns em strings incluem concatenação, obtenção do comprimento, acesso a caracteres individuais e métodos específicos para manipulação de texto. Exemplo de concatenação:

### Uso/Exemplos

```js
let nome = "John";
let sobrenome = "Doe";
let nomeCompleto = nome + " " + sobrenome; // "John Doe"
```

- As strings em JavaScript são imutáveis, o que significa que uma vez criadas, não podem ser alteradas. No entanto, é possível criar novas strings com base nas operações desejadas.

## JAVASCRIPT - ESTRUTURAS CONDICIONAIS

- As estruturas condicionais em JavaScript permitem controlar o fluxo do programa com base em condições específicas. As principais construções condicionais são:

1. **if:**

   - A estrutura `if` permite executar um bloco de código se uma condição for avaliada como verdadeira.

### Uso/Exemplos

```js
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}
```

2. **else:**

   - O bloco else é utilizado em conjunto com o `if` para fornecer um código alternativo a ser executado quando a condição do `if` for falsa.

### Uso/Exemplos

```js
let idade = 16;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

3. **else if:**

   - Permite adicionar condições adicionais caso a primeira condição (`if`) seja falsa.

### Uso/Exemplos

```js
let nota = 75;

if (nota >= 90) {
  console.log("Excelente!");
} else if (nota >= 70) {
  console.log("Bom trabalho!");
} else {
  console.log("Você precisa melhorar.");
}
```

4. switch:

   - A estrutura switch é utilizada para realizar múltiplas comparações em uma expressão.

### Uso/Exemplos

```js
let diaDaSemana = 3;

switch (diaDaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  // ... outros casos ...
  default:
    console.log("Dia inválido");
}
```

- Essas estruturas condicionais permitem que o código JavaScript tome decisões dinâmicas com base em diferentes condições, fornecendo flexibilidade e controle sobre o fluxo de execução do programa.

## JAVASCRIPT - TRANSFORMANDO STRING EM NUMEROS

- Em JavaScript, as funções parseInt e parseFloat são utilizadas para converter strings em números, permitindo operações matemáticas e facilitando a manipulação numérica.

1. `parseInt`:

   - Converte uma string em um número inteiro. Se a string começa com um número, ele será extraído; caso contrário, a conversão resultará em NaN (Not a Number).

### Uso/Exemplos

```js
let numeroString = "42";
let numeroInteiro = parseInt(numeroString);

console.log(numeroInteiro); // Saída: 42
```

2. `parseFloat`:

   - Converte uma string em um número de ponto flutuante. Esta função é útil quando se lida com números que têm parte decimal.

### Uso/Exemplos

```js
let numeroString = "3.14";
let numeroDecimal = parseFloat(numeroString);

console.log(numeroDecimal); // Saída: 3.14
// Saída: 42
```

- Ambas as funções são cruciais para transformar dados de entrada do usuário, frequentemente fornecidos como strings, em formatos numéricos para realizar cálculos ou comparações.
- Lembre-se de que, se a string não for completamente numérica, pode ocorrer um NaN, e é importante validar ou verificar os dados antes de realizar conversões.

## JAVASCRIPT - ALERT E PROMPT

1. `alert`:

   - A função `alert` é utilizada para exibir uma mensagem em uma caixa de diálogo na página da web. É comumente usada para fornecer informações ou alertar o usuário sobre alguma ação.

### Uso/Exemplos

```js
alert("Bem-vindo à minha página!");
```

2. `prompt`:

   - A função `prompt` exibe uma caixa de diálogo que solicita ao usuário que insira uma entrada. O conteúdo inserido pelo usuário é então retornado pela função.

### Uso/Exemplos

```js
let nomeUsuario = prompt("Digite seu nome:");
console.log("Olá, " + nomeUsuario + "!");
/*
Neste exemplo, o prompt solicita ao usuário que digite seu nome, e o valor inserido é armazenado na variável nomeUsuario para ser utilizado posteriormente.
*/
```

- Ambas as funções são métodos simples de interação com o usuário, sendo úteis para comunicação e obtenção de informações em scripts JavaScript incorporados em páginas da web. Contudo, para interfaces de usuário mais avançadas, frameworks modernos ou bibliotecas podem ser preferíveis.

### Uso/Exemplos

```js
var numero = parseInt(prompt("Digite um número: "));

var dobro = numero * 2;

alert("O dobro de " + numero + " é " + dobro);
```

## JAVASCRIPT - OPERADOR TERNARIO

- O operador ternário em JavaScript é uma forma compacta de escrever uma expressão condicional, permitindo a atribuição de valores com base em uma condição específica. Sua sintaxe é a seguinte:
- **condicao ? valorSeVerdadeiro : valorSeFalso;**

* `condicao`: Uma expressão avaliada como verdadeira ou falsa.
* `valorSeVerdadeiro`: Valor atribuído se a condição for verdadeira.
* `valorSeFalso`: Valor atribuído se a condição for falsa.

### Uso/Exemplos

```js
let idade = 20;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status); // Saída: "Maior de idade"
```

Neste exemplo, a variável `status` recebe o valor "Maior de idade" se a `idade` for maior ou igual a 18, caso contrário, recebe o valor "Menor de idade". O operador ternário é uma maneira concisa de expressar estruturas condicionais simples em uma única linha de código.

## JAVASCRIPT - REPETIÇÕES FOR, FOREACH E WHILE

1. `for`:

   - O laço `for` é uma estrutura de repetição que permite executar um bloco de código um número específico de vezes. Consiste em três partes: inicialização, condição de continuação e expressão de iteração.

### Uso/Exemplos

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
/*Neste exemplo, o bloco de código dentro do for é executado cinco vezes, imprimindo os números de 0 a 4.*/
```

2. `forEach`:

   - O método `forEach` é utilizado em arrays para iterar sobre cada elemento, facilitando a execução de uma função para cada item do array.

### Uso/Exemplos

```js
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(function (numero) {
  console.log(numero);
});
/*
Aqui, a função é chamada para cada elemento do array numeros.
*/
```

3. `while`:

   - O laço `while` executa um bloco de código enquanto uma condição especificada for verdadeira.

### Uso/Exemplos

```js
let contador = 0;
while (contador < 3) {
  console.log(contador);
  contador++;
}
/*O código acima imprimirá os números de 0 a 2 enquanto a condição contador < 3 for verdadeira.*/
```

- Essas estruturas de repetição são fundamentais para controlar fluxos de execução e realizar tarefas repetitivas em JavaScript, cada uma adequada a diferentes contextos e necessidades.

## JAVASCRIPT - ARRAY'S

- um array é uma estrutura de dados que armazena uma coleção ordenada de elementos. Abaixo estão alguns dos principais métodos utilizados para manipular arrays.

1. `push`:

   - Adiciona um elemento ao final do array.

### Uso/Exemplos

```js
let frutas = ["maçã", "banana"];
frutas.push("laranja"); // frutas agora é ["maçã", "banana", "laranja"]
```

2. `pop`:

   - Remove o último elemento do array.

### Uso/Exemplos

```js
let frutas = ["maçã", "banana", "laranja"];
frutas.pop(); // frutas agora é ["maçã", "banana"]
```

3. `shift`:

   - Remove o primeiro elemento do array.

### Uso/Exemplos

```js
let frutas = ["maçã", "banana", "laranja"];
frutas.shift(); // frutas agora é ["banana", "laranja"]
```

4. `unshift`:

   - Adiciona um elemento ao início do array.

### Uso/Exemplos

```js
let frutas = ["banana", "laranja"];
frutas.unshift("maçã"); // frutas agora é ["maçã", "banana", "laranja"]
```

5. `indexOf`:

   - Retorna o índice da primeira ocorrência de um elemento no array, ou -1 se não encontrado.

### Uso/Exemplos

```js
let frutas = ["maçã", "banana", "laranja"];
let indice = frutas.indexOf("banana"); // indice é 1
```

6. `slice`:

   - Retorna uma cópia de parte do array, especificada pelos índices de início e fim.

### Uso/Exemplos

```js
let frutas = ["maçã", "banana", "laranja", "morango"];
let novaArray = frutas.slice(1, 3); // novaArray é ["banana", "laranja"]
```

7. `splice`:

   - Altera o conteúdo de um array removendo ou substituindo elementos existentes e/ou adicionando novos elementos.

### Uso/Exemplos

```js
let frutas = ["maçã", "banana", "laranja", "morango"];
frutas.splice(1, 2, "uva", "pêra"); // frutas agora é ["maçã", "uva", "pêra", "morango"]
```

- Esses métodos são apenas uma amostra das muitas operações que podem ser realizadas em arrays em JavaScript. Eles proporcionam flexibilidade e poder para manipular dados de forma eficiente.

## JAVASCRIPT - FUNÇÕES

- Em JavaScript, as funções são blocos de código reutilizáveis, projetados para realizar uma tarefa específica. Elas são fundamentais para a modularidade e organização do código. Uma função é declarada usando a palavra-chave function seguida por um nome e um conjunto de parâmetros entre parênteses. Aqui estão alguns conceitos importantes relacionados a funções:

1. **Declaração de Função**:

   - Definir uma função envolve especificar seu nome, parâmetros e corpo.

### Uso/Exemplos

```js
function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}
```

2. **Chamada de Função**:

   - Executar uma função é chamá-la, fornecendo os valores necessários para seus parâmetros.

### Uso/Exemplos

```js
saudacao("João"); // Saída: "Olá, João!"
```

3. **Parâmetros e Argumentos**:

   - Parâmetros são variáveis listadas na definição da função, enquanto argumentos são os valores reais fornecidos quando a função é chamada.

### Uso/Exemplos

```js
function soma(a, b) {
  return a + b;
}

let resultado = soma(3, 5); // resultado é 8
```

4. **Retorno de Valor**:

   - A palavra-chave return é usada para especificar o valor que uma função deve retornar

### Uso/Exemplos

```js
function quadrado(x) {
  return x * x;
}

let resultadoQuadrado = quadrado(4); // resultadoQuadrado é 16
```

5. **Funções Anônimas e Expressões de Função**:

   - Funções podem ser definidas sem um nome (funções anônimas) e atribuídas a variáveis.

### Uso/Exemplos

```js
let saudacao = function (nome) {
  console.log("Olá, " + nome + "!");
};

saudacao("Maria"); // Saída: "Olá, Maria!"
```

6. **Funções de Flecha (Arrow Functions)**:

   - Uma sintaxe mais curta para funções anônimas, introduzida no ECMAScript 6.

### Uso/Exemplos

```js
let dobrar = (x) => x * 2;
```

7. **Escopo de Variáveis**:

   - Variáveis declaradas dentro de uma função têm escopo local, o que significa que só são visíveis dentro da função.

### Uso/Exemplos

```js
function exemplo() {
  let variavelLocal = "Esta é uma variável local.";
  console.log(variavelLocal);
}

// console.log(variavelLocal); // Isso resultaria em um erro
```

- Esses conceitos formam a base para a criação e uso de funções em JavaScript, proporcionando modularidade, reutilização de código e melhor organização do programa.

## JAVASCRIPT - OBJETOS

- Em JavaScript, objetos são estruturas de dados que permitem armazenar e organizar informações de maneira mais complexa do que os tipos de dados simples. Um objeto é uma coleção de pares chave-valor, onde cada valor é acessado através de uma chave única. Aqui estão alguns conceitos importantes relacionados a objetos:

1. **Criação de Objetos**:

   - Um objeto é criado usando a notação de chaves `{}`.

### Uso/Exemplos

```js
let pessoa = {
  nome: "João",
  idade: 25,
  cidade: "Exemploville",
};
```

2. **Acesso a Propriedades**:

   - Propriedades de objetos são acessadas usando a notação de ponto (`objeto.propriedade`) ou a notação de colchetes (`objeto["propriedade"]`).

### Uso/Exemplos

```js
console.log(pessoa.nome); // Saída: "João"
console.log(pessoa["idade"]); // Saída: 25
```

3. **Adição e Atualização de Propriedades**:

   - Novas propriedades podem ser adicionadas ou propriedades existentes podem ser atualizadas.

### Uso/Exemplos

```js
pessoa.profissao = "Desenvolvedor";
pessoa.idade = 26;
// Saída: 25
```

4. **Métodos**:

   - Funções dentro de objetos são chamadas de métodos.

### Uso/Exemplos

```js
let carro = {
  modelo: "Fusca",
  cor: "Azul",
  ligar: function () {
    console.log("O carro está ligado.");
  },
};

carro.ligar(); // Saída: "O carro está ligado."
```

5. **Remoção de Propriedades**:

   - O operador delete pode ser usado para remover uma propriedade de um objeto.

### Uso/Exemplos

```js
delete pessoa.cidade;
```

6. **Iteração em Propriedades**:

   - O loop `for...in` pode ser usado para iterar sobre as propriedades de um objeto.

### Uso/Exemplos

```js
for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}
```

7. **Objetos Aninhados**:

   - Objetos podem conter outros objetos, criando estruturas de dados mais complexas.

### Uso/Exemplos

```js
let livro = {
  titulo: "JavaScript 101",
  autor: {
    nome: "Alice",
    idade: 30,
  },
  ano: 2022,
};
```

- Os objetos em JavaScript são uma parte fundamental da linguagem, permitindo a criação de estruturas de dados complexas e a representação de entidades do mundo real de forma eficiente.

## JAVASCRIPT - OBJETOS - CONSTRUTOR

- Construtores em JavaScript são funções especiais utilizadas para criar e inicializar objetos. Eles são frequentemente usados em conjunto com a palavra-chave new para criar instâncias de um tipo de objeto específico. Aqui estão os principais conceitos relacionados a construtores:

1. **Definição de Construtor**:

   - Um construtor é uma função que serve como modelo para criar objetos. É comum começar o nome do construtor com letra maiúscula.

### Uso/Exemplos

```js
function Pessoa(nome, idade, cidade) {
  this.nome = nome;
  this.idade = idade;
  this.cidade = cidade;
}
```

2. **`new` Keyword**:

   - A palavra-chave `new` é usada para criar uma nova instância do objeto a partir do construtor.

### Uso/Exemplos

```js
let pessoa1 = new Pessoa("João", 25, "Exemploville");
let pessoa2 = new Pessoa("Maria", 30, "Cidadelandia");

/*Neste exemplo, pessoa1 e pessoa2 são instâncias do objeto Pessoa, cada uma com suas próprias propriedades.*/
```

3. **`this` Keyword**:

   - Dentro de um construtor, a palavra-chave this refere-se ao objeto que está sendo criado. É usada para associar propriedades ao objeto.

### Uso/Exemplos

```js
function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
}
```

4. **Métodos em Construtores**:

   - Métodos (funções) podem ser associados aos objetos criados por construtores, da mesma forma que as propriedades.

### Uso/Exemplos

```js
function Carro(modelo, cor) {
  this.modelo = modelo;
  this.cor = cor;
  this.ligar = function () {
    console.log("O carro está ligado.");
  };
}
```

5. **Protótipo**:

   - Para economizar memória e compartilhar métodos entre todas as instâncias, é comum adicionar métodos ao protótipo do construtor.

### Uso/Exemplos

```js
Pessoa.prototype.cumprimentar = function () {
  console.log("Olá, meu nome é " + this.nome + ".");
};
/*Agora, todas as instâncias de Pessoa terão acesso ao método cumprimentar.*/
```

- Os construtores são uma maneira eficiente de criar objetos em JavaScript, especialmente quando você precisa criar várias instâncias do mesmo tipo de objeto. Eles ajudam na organização do código e na reutilização de lógica comum.

## JAVASCRIPT - DATAS

- Em JavaScript, o objeto `Date` é utilizado para trabalhar com datas e horas. Ele fornece métodos e propriedades que permitem a manipulação, obtenção e representação de informações temporais. Aqui estão alguns conceitos fundamentais relacionados a datas em JavaScript:

1. **Criação de Objetos Date**:

   - Um objeto `Date` pode ser criado utilizando a palavra-chave new seguida do construtor `Date()`.

### Uso/Exemplos

```js
let dataAtual = new Date();
```

2. **Representação de Data e Hora**:

   - O objeto `Date` pode ser utilizado para representar uma data específica e a hora correspondente.

### Uso/Exemplos

```js
let nascimento = new Date(1990, 5, 15, 12, 30, 0); // 15 de junho de 1990, 12:30 PM
```

3. **Métodos e Propriedades**:

   - O objeto `Date` possui diversos métodos para manipulação, como `getMonth()`, `getFullYear()`, `getHours()`, entre outros, para obter partes específicas de uma data.

### Uso/Exemplos

```js
let ano = dataAtual.getFullYear();
let hora = dataAtual.getHours();
```

4. **Operações com Datas**:

   - O objeto `Date` suporta operações matemáticas, permitindo calcular diferenças entre datas e realizar ajustes temporais.

### Uso/Exemplos

```js
let dataFutura = new Date();
dataFutura.setDate(dataFutura.getDate() + 7);
// Adiciona 7 dias à data atual
```

5. **Formato de Saída**:

   - A representação textual de uma data pode ser obtida utilizando métodos específicos ou bibliotecas externas.

### Uso/Exemplos

```js
console.log(dataAtual.toDateString());
// Saída: "Thu Jan 12 2024"
```

6. **Tempo Unix (Timestamp)**:

   - O tempo Unix é frequentemente utilizado para representar datas como um número de milissegundos desde 1 de janeiro de 1970 (época).

### Uso/Exemplos

```js
let timestampAtual = Date.now();
```

- O objeto `Date` em JavaScript é versátil e permite realizar diversas operações relacionadas a datas e horas. No entanto, para manipulações mais complexas e formatação avançada, bibliotecas como `moment.js` podem ser úteis.
