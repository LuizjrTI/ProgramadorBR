## CSS AVANÇADO - PSEUDO ELEMENTOS

- Os pseudo-elementos no CSS permitem estilizar partes específicas de um elemento sem a necessidade de adicionar marcação extra no HTML. Abaixo estão alguns dos pseudo-elementos avançados mais comuns:

1. `::first-letter`

   - O pseudo-elemento `::first-letter` seleciona a primeira letra de um elemento.

### USO/ EXEMPLOS

```css
p::first-letter {
  font-size: 150%;
  font-weight: bold;
  color: #3366cc;
}
```

2. `::first-line`

   - O pseudo-elemento `::first-line` seleciona a primeira linha de um bloco de texto.

### USO/ EXEMPLOS

```css
p::first-line {
  font-style: italic;
  color: #993333;
}
```

3. `::before` e `::after`

   - Os pseudo-elementos `::before` e `::after` inserem conteúdo antes e depois do conteúdo real do elemento, respectivamente.

### USO/ EXEMPLOS

```css
blockquote::before {
  content: "“";
  color: #669900;
}

blockquote::after {
  content: "”";
  color: #669900;
}
```

4. `::selection`

   - O pseudo-elemento `::selection` permite estilizar o texto selecionado pelo usuário.

### USO/ EXEMPLOS

```css
::selection {
  background-color: #ffeeba;
  color: #86592d;
}
```

- Esses pseudo-elementos avançados oferecem maneiras flexíveis e criativas de estilizar diferentes partes dos elementos HTML, adicionando uma camada extra de design às páginas da web.

### USO/ EXEMPLOS

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Css Avançado</title>
    <link rel="stylesheet" href="./css/style.css" />
  </head>
  <body>
    <h1>Titulo</h1>
    <p>
      Um texto qualquer.Um texto qualquer.Um texto qualquer.Um texto qualquer.Um
      texto qualquer.Um texto qualquer.Um texto qualquer.Um texto qualquer.Um
      texto qualquer.Um texto qualquer.Um texto qualquer.
    </p>

    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>
  </body>
</html>
```

**CSS**

```js
p::first-line {
  color: red;
}

p::first-letter {
  color: red;
  font-size: 5rem;
}

li {
  list-style: none;
}

li::after {
  content: "";
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url(./suaImagem.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

p::selection {
  background-color: green;
  color: white;
}

```

## CSS AVANÇADO - SELETORES

- Os seletores avançados no CSS oferecem maior flexibilidade para direcionar elementos específicos com base em critérios mais complexos. Aqui estão alguns seletores avançados:

1. Seletor de Filho Direto ( > )
   - O seletor de filho direto seleciona elementos que são filhos diretos de um elemento pai.

### USO/ EXEMPLOS

```css
ul > li {
  list-style-type: square;
}
```

2. Seletor Adjacente ( + )
   - O seletor adjacente seleciona o elemento que é imediatamente precedido por um determinado elemento.

### USO/ EXEMPLOS

```css
h2 + p {
  font-style: italic;
}
```

3. Seletor de Irmão Gêmeo ( ~ )
   - O seletor de irmão gêmeo seleciona todos os elementos irmãos que compartilham um ancestral comum.

### USO/ EXEMPLOS

```css
h2 ~ p {
  color: #555;
}
```

4. Seletor pelo Atributo ( [] )
   - O seletor pelo atributo seleciona elementos com base em seus atributos.

### USO/ EXEMPLOS

```css
input[type="text"] {
  border: 1px solid #3498db;
}
```

5. Seletor por Atributo que Começa com ( ^= )
   - O seletor por atributo que começa com seleciona elementos cujo atributo começa com um valor específico.

### USO/ EXEMPLOS

```css
a[href^="https"] {
  color: #4caf50;
}
```

6. Seletor por Atributo que Termina com ( $= )
   - O seletor por atributo que termina com seleciona elementos cujo atributo termina com um valor específico.

### USO/ EXEMPLOS

```css
a[href$=".pdf"] {
  text-decoration: none;
}
```

7. Seletor por Atributo que Contém ( \*= )
   - O seletor por atributo que contém seleciona elementos cujo atributo contém um valor específico.

### USO/ EXEMPLOS

```css
input[name*="user"] {
  background-color: #f0f0f0;
}
```

- Esses seletores avançados proporcionam maior controle e precisão ao estilizar elementos em uma página HTML, permitindo uma estilização mais seletiva e específica.

## CSS AVANÇADO - PSEUDO CLASSES

### Pseudo-Classes CSS

- As pseudo-classes CSS são seletores adicionados a elementos com base em seu estado ou posição no DOM.

| Seletor                | Exemplo                 | Descrição do Exemplo                                                                                     |
| ---------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------- |
| `:active`              | `a:active`              | Seleciona o link ativo                                                                                   |
| `:checked`             | `input:checked`         | Seleciona todos os elementos `<input>` marcados                                                          |
| `:disabled`            | `input:disabled`        | Seleciona todos os elementos `<input>` desativados                                                       |
| `:empty`               | `p:empty`               | Seleciona todos os elementos `<p>` que não têm filhos                                                    |
| `:enabled`             | `input:enabled`         | Seleciona todos os elementos `<input>` ativados                                                          |
| `:first-child`         | `p:first-child`         | Seleciona todos os elementos `<p>` que são o primeiro filho de seu pai                                   |
| `:first-of-type`       | `p:first-of-type`       | Seleciona todos os elementos `<p>` que são o primeiro elemento `<p>` de seu pai                          |
| `:focus`               | `input:focus`           | Seleciona o elemento `<input>` que está com foco                                                         |
| `:hover`               | `a:hover`               | Seleciona links quando o mouse passa sobre eles                                                          |
| `:in-range`            | `input:in-range`        | Seleciona `<input>` com um valor dentro de uma faixa especificada                                        |
| `:invalid`             | `input:invalid`         | Seleciona todos os `<input>` com um valor inválido                                                       |
| `:lang(language)`      | `p:lang(it)`            | Seleciona todos os elementos `<p>` com um valor de atributo lang começando com "it"                      |
| `:last-child`          | `p:last-child`          | Seleciona todos os elementos `<p>` que são o último filho de seu pai                                     |
| `:last-of-type`        | `p:last-of-type`        | Seleciona todos os elementos `<p>` que são o último elemento `<p>` de seu pai                            |
| `:link`                | `a:link`                | Seleciona todos os links não visitados                                                                   |
| `:not(selector)`       | `:not(p)`               | Seleciona todos os elementos que não são `<p>`                                                           |
| `:nth-child(n)`        | `p:nth-child(2)`        | Seleciona todos os elementos `<p>` que são o segundo filho de seu pai                                    |
| `:nth-last-child(n)`   | `p:nth-last-child(2)`   | Seleciona todos os elementos `<p>` que são o segundo filho de seu pai, contando do último filho          |
| `:nth-last-of-type(n)` | `p:nth-last-of-type(2)` | Seleciona todos os elementos `<p>` que são o segundo elemento `<p>` de seu pai, contando do último filho |
| `:nth-of-type(n)`      | `p:nth-of-type(2)`      | Seleciona todos os elementos `<p>` que são o segundo elemento `<p>` de seu pai                           |
| `:only-of-type`        | `p:only-of-type`        | Seleciona todos os elementos `<p>` que são o único elemento `<p>` de seu pai                             |
| `:only-child`          | `p:only-child`          | Seleciona todos os elementos `<p>` que são o único filho de seu pai                                      |
| `:optional`            | `input:optional`        | Seleciona `<input>` sem o atributo "required"                                                            |
| `:out-of-range`        | `input:out-of-range`    | Seleciona `<input>` com um valor fora de uma faixa especificada                                          |
| `:read-only`           | `input:read-only`       | Seleciona `<input>` com o atributo "readonly" especificado                                               |
| `:read-write`          | `input:read-write`      | Seleciona `<input>` sem o atributo "readonly"                                                            |
| `:required`            | `input:required`        | Seleciona `<input>` com o atributo "required" especificado                                               |
| `:root`                | `root`                  | Seleciona o elemento raiz do documento                                                                   |
| `:target`              | `#news:target`          | Seleciona o elemento #news atualmente ativo (clicado em um URL contendo esse nome de âncora)             |
| `:valid`               | `input:valid`           | Seleciona todos os `<input>` com um valor válido                                                         |
| `:visited`             | `a:visited`             | Seleciona todos os links visitados                                                                       |

## CSS AVANÇADO - FUNÇÃO CALC CSS

- A função `calc()` é uma função matemática incorporada no CSS que permite realizar cálculos para definir valores de propriedades. Ela é especialmente útil quando se precisa realizar operações matemáticas diretamente nas declarações de estilo.

  **Exemplo:**
  Suponha que você queira definir a largura de um elemento como 50% da largura da tela mais 20 pixels. Você pode usar `calc()` para isso:

```css
.element {
  width: calc(50% + 20px);
}
```

- Neste exemplo, o valor de calc() é avaliado como "50% da largura da tela + 20 pixels", resultando em uma largura final para o elemento.

**Sintaxe Geral:**

```css
property: calc(expressão);
```

**Exemplos Adicionais:**

css

```css
/* Calculando altura com porcentagem e pixels */
.element {
  height: calc(100% - 30px);
}

/* Calculando largura com porcentagem e viewport width (vw) */
.container {
  width: calc(50% + 5vw);
}

/* Usando calc() para calcular a largura e a margem */
.box {
  width: calc(25% - 10px);
  margin-right: 10px;
}
```

- A função calc() proporciona flexibilidade na definição de valores de propriedades, tornando mais fácil criar layouts responsivos e dinâmicos.

## CSS AVANÇADO - TRANFORMAÇÕES `rotate`, `scale` e `skew`

- As transformações em CSS são técnicas poderosas para manipular a aparência de elementos HTML. Aqui estão algumas das transformações mais comuns: `rotate`, `scale` e `skew`.

1. **`rotate` - Rotacionar:**

   - A propriedade `rotate` permite girar um elemento em um determinado ângulo. O valor é especificado em graus.

```css
.rotated-box {
  transform: rotate(45deg);
}
```

2.  **`scale` - Escalonar:**
    - A propriedade scale é usada para aumentar ou diminuir o tamanho de um elemento. Um valor de scale(2) dobrará o tamanho, enquanto scale(0.5) o reduzirá pela metade.

```css
.scaled-element {
  transform: scale(1.5);
}
```

3.  **`skew` - Inclinar:**
    - skew inclina o elemento ao longo dos eixos X e Y. O valor padrão é em graus.

```css
.skewed-box {
  transform: skew(20deg, 10deg);
}
```

**Exemplo Combinado:**

```css
.transformed-element {
  transform: rotate(45deg) scale(1.2) skew(10deg, 5deg);
}
```

- Neste exemplo, o elemento será rotacionado em 45 graus, aumentado em 20%, e inclinado ao longo dos eixos X e Y.

* Essas transformações são ferramentas essenciais para criar animações e layouts mais dinâmicos no CSS.

## CSS AVANÇADO - COMPATIBILIDADE DE NAVEGADORES

- A compatibilidade de navegadores é uma consideração essencial ao desenvolver estilos CSS avançados, pois diferentes navegadores podem interpretar regras de estilo de maneiras ligeiramente diferentes. O objetivo é garantir uma experiência consistente para os usuários, independentemente do navegador que estão utilizando.

```css
/* Exemplo de uso de prefixos de fornecedores para compatibilidade com navegadores */
div {
  display: -webkit-box; /* Para navegadores baseados no motor WebKit (como Chrome e Safari) */
  display: -ms-flexbox; /* Para o Internet Explorer 10 */
  display: flex; /* Padrão */
}

/* Exemplo de uso de @supports para aplicar estilos condicionalmente */
@supports (display: grid) {
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@supports not (display: grid) {
  /* Fallback para navegadores que não suportam grid layout */
  section {
    float: left;
    width: 50%;
  }
}
```

- No exemplo acima, usamos prefixos de fornecedores para garantir que propriedades CSS específicas sejam interpretadas corretamente por diferentes navegadores. Além disso, o bloco `@supports` é utilizado para aplicar estilos condicionalmente, dependendo se o navegador suporta ou não determinada funcionalidade.

* Manter-se atualizado sobre as versões mais recentes dos navegadores e suas capacidades é crucial para lidar efetivamente com a compatibilidade de navegadores ao criar folhas de estilo avançadas.

### SITES PARA VERFICAR COMPATIBILIDADE

- [shouldiprefix](<[https://](https://shouldiprefix.com)>)

- [caniuse](<[https://](https://caniuse.com)>)

## CSS AVANÇADO - VARIAVEIS EM CSS

- Variáveis em CSS são um recurso poderoso que permite a definição e reutilização de valores em diferentes partes de uma folha de estilo. Elas facilitam a manutenção do código e a aplicação consistente de estilos em um projeto.

```css
/* Definindo variáveis */
:root {
  --cor-destaque: #3498db;
  --espacamento: 1em;
}

/* Utilizando variáveis */
body {
  background-color: var(--cor-destaque);
  margin: var(--espacamento);
}

header {
  color: var(--cor-destaque);
}

/* Alterando o valor da variável dinamicamente com JavaScript */
document.documentElement.style.setProperty('--cor-destaque', '#e74c3c');

```

- No exemplo acima, usamos `:root` para definir variáveis globais, que podem ser acessadas em qualquer lugar do documento. As variáveis são então usadas em diferentes seletores para aplicar estilos de forma consistente.

- Além disso, é possível alterar o valor de uma variável dinamicamente usando JavaScript, permitindo a adaptação de estilos com base em interações do usuário ou outros eventos.

## CSS AVANÇADO - FLEXBOX E FLEXDIRECTION

- O Flexbox é um modelo de layout em CSS projetado para facilitar a criação de layouts complexos e a distribuição de espaço entre itens de uma interface, mesmo quando o tamanho dos itens é desconhecido ou dinâmico.

### Exemplo de uso básico:

```css
.container {
  display: flex; /* Ativa o modelo flexbox no contêiner */
}

.item {
  flex: 1; /* Distribui espaço igualmente entre os itens */
  margin: 10px;
}
```

**Flex Direction**

- É uma propriedade do Flexbox que define a direção principal do contêiner flexível. Ela determina se os itens devem ser colocados em linhas ou colunas.

```css
.container {
  display: flex;
  flex-direction: row; /* Itens dispostos em linha (o padrão) */
}

.container-reverse {
  display: flex;
  flex-direction: row-reverse; /* Itens dispostos em linha reversa */
}

.column-container {
  display: flex;
  flex-direction: column; /* Itens dispostos em coluna */
}

.column-reverse-container {
  display: flex;
  flex-direction: column-reverse; /* Itens dispostos em coluna reversa */
}
```

- Estas são opções para a propriedade `flex-direction`, permitindo a criação de layouts flexíveis e responsivos.

## CSS AVANÇADO - FLEXBOX WRAP

- A propriedade `flex-wrap` no Flexbox determina se os itens devem ser dispostos em uma única linha ou em várias linhas no contêiner flexível.

**Exemplo de uso básico:**

```css
.container {
  display: flex;
  flex-wrap: wrap; /* Itens podem ser dispostos em várias linhas */
}

.item {
  flex: 1; /* Os itens ocupam o espaço disponível no contêiner */
  margin: 10px;
}
```

- No exemplo acima, se os itens não couberem em uma única linha, eles serão movidos para a próxima linha.

**Exemplo de uso com `flex-wrap: wrap-reverse`:**

```css
.container-reverse {
  display: flex;
  flex-wrap: wrap-reverse; /* Itens podem ser dispostos em várias linhas, mas em ordem reversa */
}
```

- A propriedade `flex-wrap` oferece controle adicional sobre como os itens são dispostos em relação ao tamanho do contêiner flexível.

## CSS AVANÇADO - FLEXBOX - FLEX FLOW

- A propriedade `flex-flow` no Flexbox é uma propriedade abreviada que combina as propriedades `flex-direction` e `flex-wrap`, permitindo que você defina a direção principal e o comportamento de quebra de linha em um único valor.

```css
.container {
  display: flex;
  flex-flow: row wrap; /* Itens dispostos em uma linha, com quebra de linha quando necessário */
}

.item {
  flex: 1; /* Os itens ocupam o espaço disponível no contêiner */
  margin: 10px;
}
```

- Neste exemplo, `flex-flow: row wrap` especifica que os itens devem ser dispostos em uma linha principal (horizontal) com quebra de linha quando necessário.

**Exemplo de uso com `column` e `nowrap`:**

```css
.container-column {
  display: flex;
  flex-flow: column nowrap; /* Itens dispostos em uma coluna, sem quebra de linha */
}
```

- A propriedade `flex-flow` simplifica a definição da direção principal e do comportamento de quebra de linha, tornando o código mais conciso e fácil de entender.

## CSS AVANÇADO - FLEXBOX - JUSTINFY CONTENT + ALIGN ITENS

- As propriedades `justify-content` e `align-items` são fundamentais para o layout flexível usando Flexbox no CSS.

* **`justify-content`**

- A propriedade `justify-content` define como os itens flexíveis são distribuídos ao longo do eixo principal do contêiner flexível. Aqui estão alguns valores comuns:

1. **`flex-start`**
   - Alinha os itens ao início do contêiner flexível ao longo do eixo principal.

```css
.container {
  display: flex;
  justify-content: flex-start;
}
```

2. **`flex-end`**
   - Alinha os itens ao final do contêiner flexível ao longo do eixo principal.

```css
.container {
  display: flex;
  justify-content: flex-end;
}
```

3. **`center`**
   - Centraliza os itens ao longo do eixo principal do contêiner flexível.

```css
.container {
  display: flex;
  justify-content: center;
}
```

4. **`space-between`**
   - Distribui os itens uniformemente no contêiner, com espaços entre eles.

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

5. **`space-around`**
   - Distribui os itens uniformemente no contêiner, com espaços em torno deles.

```css
.container {
  display: flex;
  justify-content: space-around;
}
```

6. **`space-evenly`**
   - Distribui os itens uniformemente no contêiner, com espaços iguais em torno deles.

```css
.container {
  display: flex;
  justify-content: space-evenly;
}
```

7. **`start, end, left`**
   - Variantes de `flex-start` e `flex-end` que podem ser usadas para suportar layouts RTL (Right-to-Left).

```css
.container {
  display: flex;
  justify-content: start;
}
```

- **`align-items`**

1. **`stretch`**
   - Estica os itens para preencher o contêiner flexível ao longo do eixo transversal.

```css
.container {
  display: flex;
  align-items: stretch;
}
```

2.**`flex-start`**

- Alinha os itens ao início do contêiner flexível ao longo do eixo transversal.

```css
.container {
  display: flex;
  align-items: flex-start;
}
```

3. **`flex-end`**
   - Alinha os itens ao final do contêiner flexível ao longo do eixo transversal.

```css
.container {
  display: flex;
  align-items: flex-end;
}
```

4. **`center`**
   - Centraliza os itens ao longo do eixo transversal do contêiner flexível.

```css
.container {
  display: flex;
  align-items: center;
}
```

5. **`baseline`**
   - Alinha os itens pela linha de base.

```css
.container {
  display: flex;
  align-items: baseline;
}
```

6. **`first baseline, last baseline`**
   - Variantes de `baseline` que alinham os itens pela primeira ou última linha de base do texto dentro deles.

```css
.container {
  display: flex;
  align-items: first baseline;
}
```

7. **`start, end, self-start, self-end`**
   - Variantes de `flex-start` e `flex-end` que podem ser usadas para suportar layouts RTL (Right-to-Left).

```css
.container {
  display: flex;
  align-items: self-start;
}
```

- Essas propriedades proporcionam controle preciso sobre o posicionamento dos itens em contêineres flexíveis.

## CSS AVANÇADO - FLEXBOX ALIGN CONTENT

- A propriedade `align-content` no modelo de layout Flexbox é usada para alinhar as linhas flexíveis dentro do contêiner flexível quando há espaço extra ao longo do eixo transversal. Esta propriedade tem efeito apenas quando há várias linhas flexíveis no contêiner.

1. **`stretch`**
   - Estica as linhas flexíveis para ocupar todo o espaço disponível no contêiner

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
}
```

2.  **`flex-start`**
    Alinha as linhas flexíveis ao início do contêiner.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
```

3.  **`flex-end`**

- Alinha as linhas flexíveis ao final do contêiner.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
}
```

4.  **`center`**

- Centraliza as linhas flexíveis verticalmente dentro do contêiner.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
```

5.  **`space-between`**

- Distribui uniformemente o espaço entre as linhas flexíveis.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
```

6.  **`space-around`**

- Distribui uniformemente o espaço em torno das linhas flexíveis.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}
```

7.  **`space-evenly`**

- Distribui uniformemente o espaço, incluindo antes e depois das linhas flexíveis.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-evenly;
}
```

- Esses valores permitem controlar como as linhas flexíveis são posicionadas dentro do contêiner flexível em relação ao eixo transversal.

## CSS AVANÇADO - FLEXBOX GROW-SHIRINK

- As propriedades `flex-grow` e `flex-shrink` fazem parte do modelo de layout Flexbox e são usadas para controlar o comportamento de crescimento e encolhimento dos itens flexíveis dentro de um contêiner flexível.

* **`flex-grow`**
  - A propriedade `flex-grow` define a capacidade de um item flexível crescer em relação aos outros itens flexíveis no mesmo contêiner. Ela aceita um valor numérico que representa a proporção de espaço disponível a ser atribuído ao item. Quanto maior o valor, mais espaço ele ocupará em relação aos outros itens.

```css
.item {
  flex-grow: 2; /* Este item terá o dobro do espaço para crescer em relação aos outros */
}
```

- **`flex-shrink`**
  - A propriedade `flex-shrink` define a capacidade de um item flexível encolher em relação aos outros itens flexíveis no mesmo contêiner. Ela aceita um valor numérico que representa a proporção de espaço disponível a ser reduzido do item. Quanto maior o valor, mais espaço ele perderá em relação aos outros itens.

```css
.item {
  flex-shrink: 1; /* Este item pode encolher, mas com a mesma proporção que os outros itens */
}
```

- Ambas as propriedades são opcionais e têm o valor padrão de 1. Se todos os itens tiverem `flex-grow` e `flex-shrink` iguais a 1, eles compartilharão o espaço disponível de maneira igual. Ajustando esses valores, você pode controlar como os itens se expandem ou encolhem em relação uns aos outros.

## CSS AVANÇADO - FLEXBOX ORDER

- A propriedade `order` em Flexbox permite controlar a ordem de exibição dos itens dentro de um contêiner flexível. Ela afeta a ordem em que os itens são renderizados no layout, independentemente da ordem no código HTML.

```html
<div class="container">
  <div class="item" style="order: 2;">Item 1</div>
  <div class="item" style="order: 1;">Item 2</div>
  <div class="item" style="order: 3;">Item 3</div>
</div>
```

- Neste exemplo, os itens serão renderizados na ordem especificada pela propriedade `order`. O "Item 2" será renderizado primeiro, seguido pelo "Item 1" e, finalmente, o "Item 3".

```css
.item {
  order: valor; /* valor pode ser um número positivo, negativo ou zero */
}
```

- A propriedade `order` aceita valores numéricos. Itens com valores menores são renderizados primeiro, enquanto itens com valores maiores são renderizados posteriormente. Se dois itens têm o mesmo valor `order`, a ordem no código HTML determinará qual será renderizado primeiro.

- O uso cuidadoso da propriedade `order` pode ser útil para reorganizar visualmente os itens em um layout Flexbox sem a necessidade de alterar a estrutura do HTML.

## CSS AVANÇADO - FLEXBOX ALIGNSELF

- A propriedade `align-self` em Flexbox permite ajustar a posição de um item específico em relação à propriedade `align-items` do contêiner flexível. Essa propriedade substitui a configuração padrão do `align-items` para o item específico.

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item" style="align-self: flex-end;">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

- Neste exemplo, o "Item 2" será alinhado na extremidade inferior do eixo transversal, enquanto os "Item 1" e "Item 3" seguirão o alinhamento padrão especificado pelo `align-items` do contêiner.

```css
.item {
  align-self: valor; /* valor pode ser auto, flex-start, flex-end, center, baseline ou stretch */
}
```

- A propriedade `align-self` aceita os mesmos valores que `align-items` e pode ser usada para anular o alinhamento padrão para um item específico no contêiner flexível. Isso oferece maior controle sobre a posição vertical de itens individuais em relação aos outros itens no mesmo contêiner flexível.

## CSS AVANÇADO - GRID TEMPLATE

- As propriedades `grid-template-rows` e `grid-template-columns` são usadas no sistema de grid do CSS para definir explicitamente as dimensões das linhas e colunas em um layout de grade. Essas propriedades oferecem controle preciso sobre a estrutura da grade, permitindo a criação de layouts complexos.

**EXEMPLOS:**

```css
.container {
  display: grid;
  grid-template-rows: 100px 200px; /* Duas linhas com alturas específicas */
  grid-template-columns: 1fr 2fr; /* Duas colunas com larguras proporcionais */
}
/*Neste exemplo, a grade tem duas linhas com alturas de 100px e 200px, respectivamente. As colunas têm larguras proporcionais, sendo a segunda coluna o dobro da largura da primeira.*/
```

**EXEMPLOS:**

```css
.container {
  display: grid;
  grid-template-rows: 100px auto 50px; /* Três linhas com alturas diferentes */
  grid-template-columns: repeat(3, 1fr); /* Três colunas com larguras iguais */
}
/*As propriedades grid-template-rows e grid-template-columns aceitam valores como comprimentos, porcentagens, fr (frações), "auto", "min-content", "max-content", etc. O uso dessas propriedades proporciona flexibilidade no design de layouts responsivos.*/
```

**EXEMPLOS:**

```css
.container {
  display: grid;
  grid-template: 100px 100px / 1fr 2fr 3fr;
}
```

## CSS AVANÇADO - GRID GAP

- As propriedades `grid-gap`, `grid-row-gap` e `grid-column-gap` são utilizadas no sistema de grid do CSS para controlar o espaçamento entre as linhas e colunas de uma grade. Elas oferecem uma maneira conveniente de definir a distância entre os elementos da grade, proporcionando uma estrutura visualmente organizada.

**EXEMPLOS:**

```css
.container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px; /* Espaçamento uniforme entre linhas e colunas */
}
/* Neste exemplo, o grid-gap define um espaçamento uniforme de 10 pixels entre todas as linhas e colunas da grade. */
```

**EXEMPLOS:**

```css
.container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 10px; /* Espaçamento apenas entre as linhas */
  grid-column-gap: 20px; /* Espaçamento apenas entre as colunas */
}
```

- Se preferir, você pode utilizar `grid-row-gap` e `grid-column-gap` separadamente para especificar espaçamentos diferentes nas linhas e colunas, respectivamente. Isso proporciona maior controle sobre o layout da grade.

## CSS AVANÇADO - GRID JUSTIFY ITEMS E GRID ALIGN ITEMS

- As propriedades `justify-items` e `align-items` no sistema de grid do CSS são utilizadas para alinhar os itens (elementos filho) dentro das células da grade, proporcionando controle sobre o posicionamento horizontal e vertical.

```css
.container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center; /* Alinha os itens horizontalmente no centro */
  align-items: end; /* Alinha os itens verticalmente na extremidade inferior */
}
/*
Neste exemplo, os itens dentro das células da grade serão centralizados horizontalmente devido à propriedade justify-items: center, e serão alinhados na extremidade inferior verticalmente devido à propriedade align-items: end.
*/
```

**Sintaxe Alternativa:**

```css
.container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: start; /* Alinha os itens horizontalmente no início */
  align-items: stretch; /* Faz os itens ocuparem toda a altura vertical da célula */
}
```

- Você pode utilizar diferentes valores, como `start`, `end`, `center`, `stretch`, etc., para personalizar o alinhamento conforme necessário.

## CSS AVANÇADO - GRID JUSTIFY CONTENT E GRID ALIGN CONTENT

- As propriedades `justify-content` e `align-content` no sistema de grid do CSS são utilizadas para alinhar as linhas (ou colunas, dependendo do contexto) da grade dentro do contêiner, proporcionando controle sobre o posicionamento horizontal e vertical da grade como um todo.

```css
.container {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around; /* Distribui uniformemente o espaço ao redor das linhas horizontalmente */
  align-content: space-between; /* Distribui uniformemente o espaço entre as linhas verticalmente */
}
/*
Neste exemplo, as linhas da grade serão distribuídas uniformemente ao redor horizontalmente (justify-content: space-around) e verticalmente entre elas (align-content: space-between).
*/
```

**Sintaxe Alternativa:**

```css
.container {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(2, 1fr);
  justify-content: center; /* Centraliza as linhas horizontalmente */
  align-content: space-evenly; /* Distribui uniformemente o espaço entre as linhas verticalmente */
}
```

- Você pode utilizar diferentes valores, como `start`, `end`, `center`, `stretch`, etc., para personalizar o alinhamento conforme necessário.

* Em resumo, enquanto `justify-content` e `align-content` alinham as linhas da grade, `justify-items` e `align-items` controlam o alinhamento dos itens dentro de cada célula da grade. As primeiras afetam a grade como um todo, enquanto as segundas afetam o conteúdo dentro das células da grade.

## CSS AVANÇADO - GRID TEMPLATE AREA

- O CSS Grid Template Area é uma técnica avançada de layout fornecida pelo módulo Grid do CSS, permitindo que os desenvolvedores criem layouts complexos e responsivos de maneira eficiente. Ele oferece um controle preciso sobre a disposição de elementos em uma grade, permitindo a definição de áreas específicas e o posicionamento de conteúdo de forma mais intuitiva.

**Exemplo Funcional:**

- Considere a seguinte estrutura HTML básica:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Grid Template Area</title>
  </head>
  <body>
    <div class="grid-container">
      <div class="header">Header</div>
      <div class="sidebar">Sidebar</div>
      <div class="main-content">Main Content</div>
      <div class="footer">Footer</div>
    </div>
  </body>
</html>
```

```css
.grid-container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main-content"
    "footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr 2fr;
  height: 100vh;
}

.header {
  grid-area: header;
  background-color: #3498db;
  color: white;
  padding: 10px;
}

.sidebar {
  grid-area: sidebar;
  background-color: #2ecc71;
  color: white;
  padding: 10px;
}

.main-content {
  grid-area: main-content;
  background-color: #ecf0f1;
  padding: 10px;
}

.footer {
  grid-area: footer;
  background-color: #e74c3c;
  color: white;
  padding: 10px;
}
```

Neste exemplo:

- `grid-template-areas` define as áreas da grade, indicando onde cada elemento deve ser colocado.

- `grid-template-rows` e `grid-template-columns` especificam o tamanho das linhas e colunas da grade.

- `grid-area` é usado para associar cada elemento à sua área correspondente.

* Este é apenas um exemplo simples. O Grid Template Area realmente brilha em layouts mais complexos, permitindo uma gestão clara e concisa das áreas da grade, facilitando a manutenção e a compreensão do código.

## CSS AVANÇADO - GRID COLUMN E ROW START E END

- O uso das propriedades `grid-column-start`, `grid-column-end`, `grid-row-start` e `grid-row-end` no módulo Grid do CSS permite um controle preciso sobre o posicionamento de elementos em uma grade. Essas propriedades permitem especificar o início e o fim das linhas e colunas ocupadas por um item na grade, proporcionando uma flexibilidade significativa no design do layout.

**Exemplo Funcional:**

Considere o seguinte exemplo de HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Grid Column e Row Start e End</title>
  </head>
  <body>
    <div class="grid-container">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>
      <div class="item4">4</div>
    </div>
  </body>
</html>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}

.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: #3498db;
  color: white;
  text-align: center;
  padding: 10px;
}

.item2 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: #2ecc71;
  color: white;
  text-align: center;
  padding: 10px;
}

.item3 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: #e74c3c;
  color: white;
  text-align: center;
  padding: 10px;
}

.item4 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: #ecf0f1;
  color: #333;
  text-align: center;
  padding: 10px;
}
```

Neste exemplo:

- `grid-column-start` e `grid-column-end` definem as colunas inicial e final ocupadas por um item.
- `grid-row-start` e `grid-row-end especificam` as linhas inicial e final ocupadas por um item.

* Isso permite posicionar e dimensionar cada item individualmente na grade, proporcionando um controle preciso sobre o layout. Este é apenas um exemplo básico, e essas propriedades podem ser combinadas de maneiras mais complexas para criar layouts sofisticados e responsivos.
