## JAVASCRIPT AVANÇADO - STRICT MODE

- O modo estrito, ou strict mode em inglês, é uma funcionalidade do JavaScript que introduz um conjunto de regras adicionais para a execução de código, visando tornar o JavaScript mais seguro, evitar erros comuns e desencorajar o uso de práticas consideradas problemáticas.

- Ao ativar o modo estrito em um script ou em uma função, o interpretador do JavaScript irá operar em um contexto mais restrito, impondo regras adicionais de boas práticas e tornando mais fácil detectar e evitar erros de programação.

**Principais vantagens do modo estrito**:

1. Impede o uso de variáveis não declaradas.
2. Impede a atribuição a propriedades somente leitura.
3. Impede a exclusão de variáveis ou funções.
4. Força o uso de parâmetros únicos em funções.
5. Proíbe a declaração de variáveis com nomes reservados, como eval ou arguments.

**Exemplo Funcional**

```javascript
// Modo estrito ativado para o script inteiro
"use strict";

// Exemplo de código que causa erro em modo estrito
x = 10; // Erro: variável 'x' não foi declarada

// Exemplo de função com modo estrito ativado apenas para ela
function minhaFuncao() {
  "use strict";
  y = 20; // Erro: variável 'y' não foi declarada
}
```

- Neste exemplo, ao usar o modo estrito, o JavaScript irá lançar um erro caso encontre variáveis não declaradas, como `x` e `y`. Isso ajuda a evitar comportamentos inesperados e facilita a detecção de erros durante o desenvolvimento. O modo estrito é uma prática recomendada para todos os projetos JavaScript, pois promove código mais seguro e robusto.

## JAVASCRIPT AVANÇADO - THIS E BIND

- Em JavaScript, a palavra-chave `this` é uma referência dinâmica que se refere ao objeto no qual uma função está sendo chamada. O valor de `this` pode mudar dependendo do contexto de execução da função. Às vezes, pode ser útil vincular explicitamente uma função a um determinado objeto, garantindo que `this` seja consistente, independentemente de como a função é chamada. Para isso, podemos usar o método `bind()`.

**Exemplos Funcionais**

1. `this` sem `bind`

```javascript
const objeto = {
  nome: "Maria",
  cumprimentar: function () {
    console.log("Olá, " + this.nome);
  },
};

objeto.cumprimentar(); // Saída: Olá, Maria

const cumprimento = objeto.cumprimentar;
cumprimento(); // Erro: 'this' é undefined
```

- Neste exemplo, quando chamamos `objeto.cumprimentar()`, o `this` dentro da função aponta para o objeto `objeto`, portanto, imprime "Olá, Maria". No entanto, quando atribuímos a função a `cumprimento`, o `this` é perdido, e ocorre um erro.

2. `this` com `bind`

```javascript
const objeto = {
  nome: "Maria",
  cumprimentar: function () {
    console.log("Olá, " + this.nome);
  },
};

const cumprimento = objeto.cumprimentar.bind(objeto);
cumprimento(); // Saída: Olá, Maria
```

- Ao usar `bind(objeto)`, estamos criando uma nova função chamada `cumprimento` onde `this` será sempre o objeto `objeto`, independentemente de como a função é chamada. Dessa forma, a chamada `cumprimento()` imprime corretamente "Olá, Maria".

## JAVASCRIPT AVANÇADO - ARROW FUNCTIONS

- As arrow functions, ou funções de seta, são uma forma mais concisa de escrever funções em JavaScript, introduzidas no ECMAScript 6 (também conhecido como ES6). Elas oferecem uma sintaxe mais curta e algumas diferenças de comportamento em relação às funções tradicionais, principalmente no que diz respeito ao valor de `this`.

**Sintaxe**

```javascript
const minhaFuncao = (param1, param2) => {
  // corpo da função
};
```

**Diferenças chave**

1. **Sintaxe concisa**: Se a função tiver apenas uma instrução no corpo, as chaves `{}` podem ser omitidas.

2) Sem `this` próprio: Arrow functions não têm seu próprio `this`, elas herdam o `this` do contexto léxico em que foram definidas.

**Exemplos Funcionais**

1. **Arrow function com uma instrução**

```javascript
const dobrar = (num) => num * 2;
console.log(dobrar(5)); // Saída: 10
```

2. **Arrow function com múltiplas instruções**

```javascript
const soma = (a, b) => {
  const resultado = a + b;
  return resultado;
};
console.log(soma(3, 4)); // Saída: 7
```

3. **Arrow function em um array map**

```javascript
const numeros = [1, 2, 3, 4];
const quadrados = numeros.map((num) => num * num);
console.log(quadrados); // Saída: [1, 4, 9, 16]
```

4. **Arrow function como retorno de outra função**

```javascript
const criarSomador = (valor) => {
  return (outroValor) => valor + outroValor;
};
const somar3 = criarSomador(3);
console.log(somar3(7)); // Saída: 10
```

- As arrow functions são úteis para escrever código mais conciso e legível, especialmente em situações onde a função é curta e precisa de acesso ao `this` do contexto onde foi definida. No entanto, é importante ter em mente as diferenças de comportamento em relação às funções tradicionais, especialmente em relação ao `this`.

## JAVASCRIPT AVANÇADO - CALLBACK

- Em JavaScript, um callback é uma função que é passada como argumento para outra função e é executada após a conclusão de uma operação assíncrona ou de uma determinada ação.
- Os callbacks são uma parte fundamental da programação assíncrona em JavaScript, permitindo que o código continue executando enquanto aguarda a conclusão de operações como requisições AJAX, leitura de arquivos, eventos de temporizadores, entre outros.

**Exemplo Funcional:**

```javascript
// Função que simula uma operação assíncrona
function operacaoAssincrona(callback) {
  // Simula um tempo de espera (por exemplo, uma requisição AJAX)
  setTimeout(function () {
    const resultado = "Dados da operação assíncrona";
    // Chamada ao callback com o resultado da operação
    callback(resultado);
  }, 2000); // 2 segundos de espera
}

// Função de callback que será executada após a operação assíncrona
function callbackOperacao(resultado) {
  console.log("A operação assíncrona foi concluída:");
  console.log(resultado);
}

// Chamada à função de operação assíncrona, passando o callback
operacaoAssincrona(callbackOperacao);
```

- Neste exemplo, a função `operacaoAssincrona` simula uma operação assíncrona com `setTimeout`, que espera 2 segundos antes de chamar o callback passado como argumento. Quando a operação assíncrona é concluída, o callback `callbackOperacao` é executado, exibindo o resultado no console.

- Os callbacks são essenciais para lidar com operações assíncronas em JavaScript, permitindo que o código continue executando de forma eficiente enquanto aguarda a conclusão de tarefas demoradas. Eles também são amplamente utilizados em eventos de manipulação de DOM, requisições HTTP, tratamento de erros, entre outras.

**Outro Exemplo**

```javascript
let usuarios = ["Luiz", "Ardriano", "Teste"];

function inserirUsuarios(usuarios, callback) {
  setTimeout(() => {
    usuarios.push(nome);
    callback();
  }, 1000);
}

function listarUsuarios() {
  console.log(usuarios);
}

inserirUsuarios("Teste de insersão", listarUsuarios);
```

## JAVASCRIPT AVANÇADO - PROMISES

- Promises são objetos JavaScript que representam o sucesso ou a falha eventual de uma operação assíncrona.
- Elas foram introduzidas no ECMAScript 6 (ES6) para simplificar o tratamento de código assíncrono e ajudar a evitar o "callback hell" (aninhamento excessivo de callbacks).
- Uma promise pode estar em um de três estados: pendente (pending), resolvida (fulfilled) ou rejeitada (rejected).

**Sintaxe**

```javascript
const minhaPromise = new Promise((resolve, reject) => {
  // lógica assíncrona
  if (/* operação bem-sucedida */) {
    resolve('Dados da operação assíncrona');
  } else {
    reject('Erro ocorrido durante a operação assíncrona');
  }
});

minhaPromise.then(resultado => {
  console.log('Operação bem-sucedida:', resultado);
}).catch(erro => {
  console.error('Erro:', erro);
});

```

**Exemplos Funcionais:**

1. Promise resolvida:

```javascript
const promessaBemSucedida = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operação assíncrona bem-sucedida");
  }, 2000); // 2 segundos de espera
});

promessaBemSucedida
  .then((resultado) => {
    console.log(resultado); // Saída: Operação assíncrona bem-sucedida
  })
  .catch((erro) => {
    console.error(erro);
  });
```

2.Promise rejeitada:

```javascript
const promessaRejeitada = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Erro ocorrido durante a operação assíncrona");
  }, 2000); // 2 segundos de espera
});

promessaRejeitada
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.error("Erro:", erro); // Saída: Erro ocorrido durante a operação assíncrona
  });
```

3.Encadeamento de Promises:

```javascript
const primeiraPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Primeira promise resolvida");
  }, 1000); // 1 segundo de espera
});

const segundaPromise = primeiraPromise.then((resultado) => {
  console.log(resultado); // Saída: Primeira promise resolvida
  return "Segunda promise resolvida";
});

segundaPromise.then((resultado) => {
  console.log(resultado); // Saída: Segunda promise resolvida
});
```

- Promises são uma maneira poderosa de lidar com operações assíncronas em JavaScript, permitindo que você trate o sucesso e a falha de uma operação de forma mais estruturada e legível.
- Elas são amplamente utilizadas em chamadas de API, manipulação de eventos assíncronos, requisições AJAX, entre outros.

**Outro Exemplo**

```javascript
let usuarios = ["Luiz", "Ardriano", "Teste"];

function inserirUsuarios(usuarios) {
  let promise = new Promise(resolve, reject);
  setTimeout(() => {
    usuarios.push(nome);
    let error = false;
    if (!error) {
      resolve(usuarios);
    } else {
      reject({ msg: "Erro qualquer" });
    }
  }, 1000);
  return promise;
}

function listarUsuarios() {
  console.log(usuarios);
}

inserirUsuarios("Teste de insersão")
  .then(listarUsuarios)
  .catch((error) => {
    console.log(error);
  });
```

## JAVASCRIPT AVANÇADO - ASYNC - AWAIT

- Async/Await é uma funcionalidade introduzida no ECMAScript 2017 (ES8) que simplifica ainda mais o tratamento de operações assíncronas em JavaScript, especialmente quando se trabalha com Promises.
- Ela permite escrever código assíncrono de forma mais sequencial e legível, evitando o uso excessivo de callbacks ou encadeamento de Promises.

**Sintaxe**

- A palavra-chave `async` é usada para declarar uma função como assíncrona, permitindo o uso de `await` dentro dela.
- A palavra-chave `await` é usada para pausar a execução de uma função assíncrona até que uma Promise seja resolvida ou rejeitada.

**Exemplo Funcional**

```javascript
// Função assíncrona que retorna uma Promise após 2 segundos
async function operacaoAssincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dados da operação assíncrona");
    }, 2000); // 2 segundos de espera
  });
}

// Função que utiliza async/await para esperar o resultado da operação assíncrona
async function executarOperacao() {
  try {
    const resultado = await operacaoAssincrona();
    console.log("Operação assíncrona concluída:", resultado);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

// Chamada à função que executa a operação assíncrona
executarOperacao();
```

- Neste exemplo, a função `operacaoAssincrona` retorna uma Promise que é resolvida após 2 segundos. A função `executarOperacao` é marcada como assíncrona com a palavra-chave `async`, o que permite o uso de `await` dentro dela para esperar o resultado da operação assíncrona. Quando `await operacaoAssincrona()` é chamado, a execução da função é pausada até que a Promise seja resolvida ou rejeitada.
- Após a conclusão da operação assíncrona, o resultado é exibido no console. O bloco `try/catch` é utilizado para lidar com possíveis erros durante a execução da operação assíncrona.

- O Async/Await é uma abordagem muito poderosa e legível para lidar com código assíncrono em JavaScript, tornando o código mais claro e fácil de entender, especialmente em situações onde várias operações assíncronas precisam ser realizadas de forma sequencial.

**Outro Exemplo**

```javascript
let usuarios = ["Luiz", "Ardriano", "Teste"];

function inserirUsuarios(usuarios) {
  let promise = new Promise(resolve, reject);
  setTimeout(() => {
    usuarios.push(nome);
    let error = false;
    if (!error) {
      resolve(usuarios);
    } else {
      reject({ msg: "Erro qualquer" });
    }
  }, 1000);
  return promise;
}

function listarUsuarios() {
  console.log(usuarios);
}

async function executar() {
  await inserirUsuarios("Teste de insersão");
  listarUsuarios();
}

executar();
```

## JAVASCRIPT AVANÇADO - FILTER

- O método `filter()` em JavaScript é utilizado para filtrar os elementos de um array com base em uma determinada condição, retornando um novo array contendo apenas os elementos que satisfazem essa condição.
- Ele não modifica o array original, apenas cria um novo array com os elementos filtrados.

**Sintaxe**

```javascript
const newArray = arrayOriginal.filter(callback(elemento, índice, array) {
  // Retorna true se o elemento deve ser incluído no novo array, caso contrário retorna false
});
```

- `callback`: Uma função que é chamada para cada elemento do array. Recebe três argumentos: o elemento atual, o índice do elemento e o próprio array.

- `elemento`: O elemento atual sendo processado no array.
- `índice` (opcional): O índice do elemento atual sendo processado no array.
- `array` (opcional): O array original ao qual filter() foi chamado.

**Exemplos Funcionais**

1. Filtrar números pares de um array

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares); // Saída: [2, 4, 6, 8, 10]
```

2. Filtrar usuários com idade superior a 18 anos

```javascript
const usuarios = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 30 },
  { nome: "Ana", idade: 20 },
];
const maioresDeIdade = usuarios.filter((usuario) => usuario.idade > 18);
console.log(maioresDeIdade);
/* Saída:
[
  { nome: 'João', idade: 25 },
  { nome: 'Pedro', idade: 30 },
  { nome: 'Ana', idade: 20 }
]
*/
```

3. Filtrar strings com mais de 5 caracteres

```javascript
const palavras = ["casa", "carro", "bicicleta", "livro", "caneta"];
const palavrasComMaisDe5Caracteres = palavras.filter(
  (palavra) => palavra.length > 5
);
console.log(palavrasComMaisDe5Caracteres); // Saída: ['bicicleta']
```

- O método `filter()` é uma ferramenta muito útil para filtrar elementos de um array de acordo com critérios específicos.
- Ele é amplamente utilizado em situações onde é necessário extrair um subconjunto de elementos de um array com base em uma determinada condição, sem modificar o array original.

**Outro Exemplo**

```javascript
function usuarios(nome, idade) {
  return { nome, idade };
}

let dadosUsuarios = [
  usuarios("José", 30),
  usuarios("Maria", 20),
  usuarios("Pedro", 15),
  usuarios("João", 25),
];

function temMenos30(usuario) {
  return usuario.idade < 30;
}
function temMais30(usuario) {
  return usuario.idade > 30;
}

console.log(usuarios.filter(temMais30));
```

## JAVASCRIPT AVANÇADO - MAP

- O método `map()` em JavaScript é usado para iterar sobre os elementos de um array e aplicar uma função a cada elemento, criando um novo array com os resultados das chamadas de função.
- Ele não modifica o array original, apenas retorna um novo array com os resultados das operações aplicadas a cada elemento.

**Sintaxe**

```javascript
const newArray = arrayOriginal.map(callback(elemento, índice, array) {
  // Retorna o valor resultante após a aplicação da função ao elemento
});
```

- `callback`: Uma função que é chamada para cada elemento do array. Recebe três argumentos: o elemento atual, o índice do elemento e o próprio array.
- `elemento`: O elemento atual sendo processado no array.
- `índice (opcional)`: O índice do elemento atual sendo processado no array.
- `array (opcional)`: O array original ao qual map() foi chamado.

**Exemplos Funcionais**

1. Duplicar os elementos de um array

```javascript
const numeros = [1, 2, 3, 4, 5];
const numerosDuplicados = numeros.map(numero => numero * 2);
console.log(numerosDuplicados); // Saída: [2, 4, 6, 8, 10]
); // Saída: ['HELLO', 'WORLD', 'JAVASCRIPT']
```

2. Converter strings em maiúsculas

```javascript
const palavras = ["hello", "world", "javascript"];
const palavrasMaiusculas = palavras.map((palavra) => palavra.toUpperCase());
console.log(palavrasMaiusculas); // Saída: ['HELLO', 'WORLD', 'JAVASCRIPT']
```

3. Extrair valores de objetos em um array

```javascript
const usuarios = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Pedro", idade: 35 },
];
const nomesDosUsuarios = usuarios.map((usuario) => usuario.nome);
console.log(nomesDosUsuarios); // Saída: ['João', 'Maria', 'Pedro']
```

- O método `map()` é uma ferramenta poderosa para transformar os elementos de um array de acordo com uma determinada lógica, criando um novo array com os resultados das transformações.
- Ele é amplamente utilizado em situações onde é necessário aplicar uma operação a cada elemento de um array e criar um novo array com os resultados.

**Outro Exemplo**

```javascript
function usuarios(nome, idade) {
  return { nome, idade };
}

let dadosUsuarios = [
  usuarios("José", 30),
  usuarios("Maria", 20),
  usuarios("Pedro", 15),
  usuarios("João", 25),
];

function usuariosMais5(usuario) {
  return {
    idade: usuario.idade + 5,
  };
}

console.log(usuarios.filter(temMais30));
```

## JAVASCRIPT AVANÇADO - VALOR OU REFERENCIA

- Atribuição por valor, faz uma cópia do elemento original, e qualquer alteração na copia não vai refletir no original.
- Atribuição por referência,não faz copia, e como se desse um novo apelido para o objeto original. Qualquer modificação no novo elemento altera tambem o original.

No caso de um `array`

**Exemplo por referência**

```javascript
let turmaA = ["a", "b", "c", "d", "e"];

let turmaB = turmaA;

turmaB.push("f");

console.log(turmaA);
console.log(turmaB);
```

**Exemplo por valor**

```javascript
let turmaA = ["a", "b", "c", "d", "e"];

let turmaB = [...turmaA];

turmaB.push("f");

console.log(turmaA);
console.log(turmaB);
```

No caso de um `objeto`

**Exemplo por referência**

```javascript
let alunoA = { nome: "Luiz", idade: 15 };

let alunoB = alunoA;

alunoB.idade = 30;

console.log(alunoA);
console.log(alunoB);
```

**Exemplo por valor**

```javascript
let alunoA = { nome: "Luiz", idade: 15 };

let alunoB = Object.assign({}, alunoA);

alunoB.idade = 30;

console.log(alunoA);
console.log(alunoB);
```

**Outra forma**

```javascript
let alunoA = { nome: "Luiz", idade: 15 };

let alunoB = { ...alunoA };

alunoB.idade = 30;

console.log(alunoA);
console.log(alunoB);
```

## JAVASCRIPT AVANÇADO - SPREAD OPERATOR

- O spread operator é basicamente os `...` .

**Exemplo**

```javascript
var notas_turma1 = [10, 9, 8, 7];

var notas_turma2 = [10, 9, 10, 7];

var todas_notas = [...notas_turma1, ...notas_turma2];

console.log(todas_notas);
```

## JAVASCRIPT AVANÇADO - DESESTRUTURANDO UM OBJETO

- A desestruturação de objetos em JavaScript é uma técnica que permite extrair valores de objetos e atribuí-los a variáveis de forma concisa e direta. Ela é útil quando você deseja acessar propriedades de um objeto de maneira mais conveniente, sem a necessidade de acessar cada propriedade individualmente.

**Exemplo**

```javascript
let aluno = {
  nome: "Luiz Jr",
  idade: 25,
  telefone: "+552199999-9999",
  cidade: "Rio de Janeiro",
};

var { nome } = aluno;

console.log(nome);
```

## JAVASCRIPT AVANÇADO - REDUCE

- O método reduce() em JavaScript é utilizado para reduzir um array a um único valor, aplicando uma função acumuladora a cada elemento do array, da esquerda para a direita. Ele recebe dois parâmetros: uma função de callback e um valor inicial opcional para o acumulador.

```javascript
array.reduce(callback(acumulador, elemento, índice, array), valorInicial);
```

- `callback`: Uma função que é chamada para cada elemento do array. Recebe quatro argumentos: o acumulador, o elemento atual, o índice do elemento e o próprio array.
- `acumulador`: O valor acumulado retornado pela função de callback em cada iteração, que será o valor final retornado por reduce().
- `elemento`: O elemento atual sendo processado no array.
- `índice (opcional)`: O índice do elemento atual sendo processado no array.
- `array (opcional):` O array original ao qual reduce() foi chamado.
- `valorInicial (opcional):` Um valor inicial para o acumulador. Se não for fornecido, o primeiro elemento do array será usado como valor inicial e a primeira chamada da função de callback começará no segundo elemento do array.

**Exemplos Funcionais:**

1. **Somando todos os elementos de um array**

```javascript
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma); // Saída: 15 (1 + 2 + 3 + 4 + 5)
```

2. **Concatenando strings de um array**

```javascript
const palavras = ["Olá", "mundo", "!"];
const frase = palavras.reduce(
  (acumulador, palavra) => acumulador + " " + palavra
);
console.log(frase); // Saída: 'Olá mundo !'
```

3. **Calculando o valor máximo de um array**

```javascript
const numeros = [10, 5, 20, 15, 30];
const maximo = numeros.reduce(
  (acumulador, numero) => Math.max(acumulador, numero),
  numeros[0]
);
console.log(maximo); // Saída: 30
```

4. **Contando a ocorrência de cada elemento em um array**

```javascript
const palavras = ["hello", "world", "hello", "javascript", "world"];
const contagem = palavras.reduce((acumulador, palavra) => {
  acumulador[palavra] = (acumulador[palavra] || 0) + 1;
  return acumulador;
}, {});
console.log(contagem); // Saída: { hello: 2, world: 2, javascript: 1 }
```

- O método `reduce()` é uma ferramenta poderosa para realizar operações de redução em arrays, como soma, concatenação, encontrar o máximo, contar ocorrências, entre outros. Ele é amplamente utilizado em situações onde é necessário computar um único valor com base em todos os elementos de um array.

## JAVASCRIPT AVANÇADO - FETCH

- O método `fetch()` em JavaScript é utilizado para fazer requisições HTTP assíncronas para recursos na web, como arquivos JSON, imagens, vídeos, entre outros. Ele é uma maneira moderna e poderosa de lidar com requisições AJAX (Asynchronous JavaScript and XML) e substitui o antigo `XMLHttpRequest`.

**Sintaxe**

```javascript
fetch(url, opções)
  .then((response) => {
    // lógica para lidar com a resposta
  })
  .catch((error) => {
    // lógica para lidar com erros de requisição
  });
```

- `url`: O URL do recurso a ser solicitado.
- `opções (opcional)`: Um objeto contendo opções para a requisição, como método HTTP, cabeçalhos, corpo da requisição, etc.
- O método `fetch()` retorna uma Promise que resolve para o objeto `Response` representando a resposta à requisição.

**Exemplos Funcionais:**

1. **Obtendo dados JSON de uma API:**

```javascript
fetch("https://api.exemplo.com/dados")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Erro ao obter os dados:", error));
```

2. **Enviando dados para um servidor:**

```javascript
const dados = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
};

fetch("https://api.exemplo.com/salvar", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(dados),
})
  .then((response) => {
    if (response.ok) {
      console.log("Dados enviados com sucesso!");
    } else {
      console.error("Erro ao enviar os dados:", response.status);
    }
  })
  .catch((error) => console.error("Erro ao enviar os dados:", error));
```

3. **Carregando uma imagem:**

```javascript
fetch("imagem.jpg")
  .then((response) => response.blob())
  .then((blob) => {
    const url = URL.createObjectURL(blob);
    const imagem = document.createElement("img");
    imagem.src = url;
    document.body.appendChild(imagem);
  })
  .catch((error) => console.error("Erro ao carregar a imagem:", error));
```

O método `fetch()` é amplamente utilizado em desenvolvimento web para interagir com APIs, carregar recursos externos, enviar dados para servidores e muito mais. Ele fornece uma maneira simples e poderosa de lidar com requisições HTTP assíncronas em JavaScript.

## JAVASCRIPT AVANÇADO - TRY/CATCH - TRATAMENTO DE ERROS

- O bloco `try/catch` em JavaScript é utilizado para lidar com exceções (erros) que podem ocorrer durante a execução do código. Ele permite que você escreva um bloco de código que pode gerar uma exceção e capture essa exceção para tratá-la de forma adequada, evitando que o programa quebre abruptamente.

**Sintaxe:**

```javascript
try {
  // Bloco de código onde uma exceção pode ocorrer
} catch (erro) {
  // Bloco de código para lidar com a exceção
}
```

- `try`: Este bloco de código é o que será monitorado quanto a exceções.
- `catch`: Se uma exceção for lançada dentro do bloco `try`, ela será capturada aqui. O parâmetro `erro` contém informações sobre o erro capturado.

**Exemplos Funcionais:**

1. Tratando uma exceção específica:

```javascript
try {
  const resultado = numeroNaoExistente / 0;
  console.log(resultado); // Esta linha não será alcançada
} catch (erro) {
  console.error("Ocorreu um erro:", erro.message); // Saída: Ocorreu um erro: numeroNaoExistente is not defined
}
```

2.Tratando exceções genéricas:

```javascript
try {
  const resultado = numero / 0;
  console.log(resultado); // Esta linha não será alcançada
} catch (erro) {
  console.error("Ocorreu um erro:", erro.message); // Saída: Ocorreu um erro: Division by zero
}
```

3.Tratando múltiplos tipos de exceções:

```javascript
try {
  const data = JSON.parse(dadosInvalidos);
  console.log(data); // Esta linha não será alcançada
} catch (SyntaxError) {
  console.error('Erro de sintaxe ao analisar JSON');
} catch (erro) {
  console.error('Ocorreu um erro:', erro.message);
}
```

4.Tratando exceções assíncronas com Promises::

```javascript
try {
  fetch("recurso_invalido.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      throw new Error("Erro ao carregar os dados");
    });
} catch (erro) {
  console.error("Ocorreu um erro:", erro.message); // Esta linha não será alcançada
}
```

- O bloco `try/catch` é uma ferramenta essencial para lidar com erros de forma controlada em JavaScript.
- Ele permite que você escreva código mais robusto, capturando exceções e realizando tratamento adequado para que o programa continue a executar sem interrupções indesejadas.
- No entanto, é importante usar o `try/catch` com sabedoria e evitar englobar grandes blocos de código, focando no tratamento específico de exceções esperadas.
