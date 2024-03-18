## NODE - PRIMEIROS PASSOS

- Instalando NODE

  - [Node JS](https://nodejs.org/en)

- Instalando Cmder
  - [Cmder](https://cmder.app)

## NODE - JS PARA NAVEGADOR **VS** JS PARA NODE

- Basicamente alguns metodos que existem no navegador não existe no contexto do node e vice versa.

Ex: `document`, `window`

## NODE - INSERINDO ARGUMENTOS

- No caso usei `node script.js 50 30`

**script.js**

```javascript
let args = process.argv;
console.log("🚀 ~ args-1:", args);

args = process.argv.slice(2);
console.log("🚀 ~ args-2:", args);
```

**Saida**

```
~ args-1: [
  'C:\\Program Files\\node\\node.exe',
  'D:\\Material\\ProgramadorBR\\18-NODE\\codigo\\script.js',
  '50',
  '30'
]
~ args-2: [ '50', '30' ]
```

## NODE - MODULOS

- No caso usei `node script.js s 5 3`

**script.js**

```javascript
const calc = require("./calc");

let args = process.argv.slice(2);

let a = Number(args[1]);
let b = Number(args[2]);
let c = "";

if (args[0] == "s") {
  c = calc.soma(a, b);
} else if (args[0] == "m") {
  c = calc.multi(a, b);
} else {
  c = "Opção Inválida";
}
console.log("🚀 ~  c :", c);
```

**calc.js**

```javascript
const calc = {
  soma: (x, y) => {
    return x + y;
  },
  multi: (x, y) => {
    return x * y;
  },
};

module.export = calc;
```

## NODE - Trabalhando com Arquivos usando o Pacote "fs" no Node.js

O pacote "fs" é um módulo integrado do Node.js que permite interagir com o sistema de arquivos do sistema operacional. Ele fornece uma variedade de métodos para realizar operações como leitura, gravação, exclusão e manipulação de arquivos e diretórios.

### Leitura de Arquivos:

- O método `fs.readFile()` é usado para ler o conteúdo de um arquivo de forma assíncrona.
- O método `fs.readFileSync()` é usado para ler o conteúdo de um arquivo de forma síncrona.

### Escrita de Arquivos:

- O método `fs.writeFile()` é usado para gravar dados em um arquivo de forma assíncrona.
- O método `fs.writeFileSync()` é usado para gravar dados em um arquivo de forma síncrona.

### Exclusão de Arquivos:

- O método `fs.unlink()` é usado para excluir um arquivo de forma assíncrona.
- O método `fs.unlinkSync()` é usado para excluir um arquivo de forma síncrona.

### Verificação de Existência de Arquivos:

- O método `fs.exists()` é usado para verificar se um arquivo ou diretório existe de forma assíncrona.
- O método `fs.existsSync()` é usado para verificar se um arquivo ou diretório existe de forma síncrona.

### Listagem de Arquivos em um Diretório:

- O método `fs.readdir()` é usado para listar os arquivos em um diretório de forma assíncrona.
- O método `fs.readdirSync()` é usado para listar os arquivos em um diretório de forma síncrona.

### Exemplo de Código:

```javascript
const fs = require("fs");

// Escrevendo em um arquivo de forma assíncrona
fs.writeFile("arquivo.txt", "Conteúdo do arquivo", (err) => {
  if (err) {
    console.error("Erro ao escrever no arquivo:", err);
  } else {
    console.log("Arquivo gravado com sucesso!");
  }
});

// Lendo um arquivo de forma assíncrona
fs.readFile("arquivo.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
  } else {
    console.log("Conteúdo do arquivo:", data);
  }
});
```
