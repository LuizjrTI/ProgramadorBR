## CSS ANIMAÇÕES - PRIMEIRA ANIMAÇÃO - KEYFRAMES

- As animações em CSS proporcionam uma maneira eficaz de criar transições e movimentos suaves em elementos HTML, trazendo vida aos layouts da web. A criação de animações começa com a definição de conjuntos de regras-chave conhecidos como **keyframes**. Os keyframes permitem especificar estilos para um elemento em diferentes estágios da animação, possibilitando transições fluídas e personalizadas.

**Exemplo Funcional:**

Considere o seguinte HTML básico:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>CSS Animações - Primeira Animação</title>
  </head>
  <body>
    <div class="animated-box"></div>
  </body>
</html>
```

```css
@keyframes moveRight {
  0% {
    transform: translateX(0);
    background-color: #3498db;
  }
  50% {
    transform: translateX(200px);
    background-color: #2ecc71;
  }
  100% {
    transform: translateX(400px);
    background-color: #e74c3c;
  }
}

.animated-box {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  animation: moveRight 3s ease-in-out infinite;
}
```

**Neste exemplo:**

- `@keyframes moveRight` define a animação chamada "moveRight".

- `0%, 50%, e 100%` especificam os diferentes estágios da animação.

- As propriedades dentro de cada estágio definem o estilo do elemento em um determinado momento.

- `.animated-box` recebe a animação através da propriedade animation que aponta para os keyframes "moveRight". A animação terá uma duração de 3 segundos, um efeito de suavização in-out e será repetida infinitamente.

Este exemplo cria uma animação simples onde um quadrado se move para a direita e muda de cor ao longo do processo. O poder dos keyframes reside na capacidade de controlar os estilos em vários pontos da animação, proporcionando uma ampla gama de efeitos visuais dinâmicos.

**Outro Exemplo**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS ANIMAÇÕES</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <div id="container"></div>
  </body>
</html>
```

```css
#container {
  width: 200px;
  height: 200px;
  border-style: solid;
  animation-name: mudancaCor;
  animation-duration: 3s;
}

@keyframes mudancaCor {
  from {
    background-color: red;
  }
  to {
    background-color: blue;
  }
}
```

## CSS ANIMAÇÕES - ADCIONANDO ESTADOS A ANIMAÇÕES

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS ANIMAÇÕES</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <div id="container"></div>
  </body>
</html>
```

```css
#container {
  width: 200px;
  height: 200px;
  border-style: solid;
  animation-name: mudancaCor;
  animation-duration: 3s;
}

@keyframes mudancaCor {
  0% {
    background-color: red;
  }
  25% {
    background-color: orange;
  }
  50% {
    background-color: green;
  }
  100% {
    background-color: black;
  }
}
```

## CSS ANIMAÇÕES - PROPRIEDADES

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS ANIMAÇÕES</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <div id="container"></div>
  </body>
</html>
```

```css
#container {
  width: 200px;
  height: 200px;
  border-style: solid;
  border-color: black;
  animation-name: mudancaCor;
  animation-duration: 3s;
}

@keyframes mudancaCor {
  0% {
    background-color: red;
    width: 100px;
  }
  25% {
    background-color: orange;
  }
  50% {
    background-color: green;
    width: 400px;
  }
  100% {
    background-color: black;
    width: 100px;
  }
}
```

## CSS ANIMAÇÕES - DELAY

- O atraso (delay) em animações CSS é uma propriedade que permite especificar um período de tempo antes que uma animação comece. Isso é útil para criar efeitos de temporização precisos em elementos HTML, permitindo que as animações sejam sincronizadas com outros elementos da página ou eventos específicos.

**Exemplo Funcional:**

Considere o seguinte exemplo de HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>CSS Animações - Delay</title>
  </head>
  <body>
    <div class="animated-box"></div>
  </body>
</html>
```

```css
@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.animated-box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  animation: fadeInOut 2s ease-in-out infinite;
  animation-delay: 1s; /* Atraso de 1 segundo antes da animação começar */
}
```

**Neste exemplo:**

- `@keyframes fadeInOut` define a animação que faz com que o elemento apareça, mantenha a opacidade e depois desapareça.

- `.animated-box` recebe a animação através da propriedade `animation` que aponta para os keyframes "fadeInOut". A animação tem uma duração de 2 segundos, um efeito de suavização in-out e é repetida infinitamente.

- A propriedade ` animation-delay`` com um valor de  `1s` especifica um atraso de 1 segundo antes que a animação comece a ser reproduzida.

* Este exemplo cria um efeito de fadeIn/out em um elemento HTML com um atraso de 1 segundo antes que a animação comece. Isso pode ser útil para sincronizar a aparência de elementos na página com outros eventos ou para criar uma sequência de animação mais complexa.

**Outros exemplo**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS ANIMAÇÕES</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <div id="container"></div>
  </body>
</html>
```

```css
#container {
  width: 200px;
  height: 200px;
  border-style: solid;
  border-color: black;
  animation-name: mudancaCor;
  animation-duration: 6s;
  animation-delay: -3s; /*Nesse caso a animação starta em 50%*/
}

@keyframes mudancaCor {
  0% {
    background-color: red;
    width: 100px;
  }
  25% {
    background-color: orange;
  }
  50% {
    background-color: green;
    width: 400px;
  }
  100% {
    background-color: black;
    width: 100px;
  }
}
```

## CSS ANIMAÇÕES - LOOP

- O loop em animações CSS é uma propriedade que determina quantas vezes uma animação será repetida. Isso permite controlar o número de vezes que a animação é executada, seja um número finito ou infinito, adicionando um elemento de repetição ao efeito visual desejado.

**Exemplo Funcional:**

Considere o seguinte exemplo de HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>CSS Animações - Loop</title>
  </head>
  <body>
    <div class="animated-box"></div>
  </body>
</html>
```

```css
@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(0);
  }
}

.animated-box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  animation: moveUpDown 2s ease-in-out infinite;
  animation-iteration-count: 3; /* A animação será repetida 3 vezes */
}
```

**Neste exemplo:**

- `@keyframes moveUpDown` define a animação que faz com que o elemento se mova para cima e para baixo.

* `animated-box` recebe a animação através da propriedade `animation` que aponta para os keyframes "moveUpDown". A animação tem uma duração de 2 segundos, um efeito de suavização in-out e é repetida infinitamente.

- A propriedade `animation-iteration-count` com um valor de `3` especifica que a animação será repetida três vezes.

* Este exemplo cria um efeito de movimento ascendente e descendente em um elemento HTML que é repetido três vezes. Isso demonstra como a propriedade `animation-iteration-count` pode ser usada para controlar o número de vezes que uma animação é executada, adicionando variações e dinamismo ao layout da página.

**Outro Exemplo**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS ANIMAÇÕES</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <div id="container"></div>
  </body>
</html>
```

```css
#container {
  width: 200px;
  height: 200px;
  border-style: solid;
  border-color: black;
  animation-name: mudancaCor;
  animation-duration: 6s;
  animation-iteration-count: infinite;
}

@keyframes mudancaCor {
  0% {
    background-color: red;
    width: 100px;
  }
  25% {
    background-color: orange;
  }
  50% {
    background-color: green;
    width: 400px;
  }
  100% {
    background-color: black;
    width: 100px;
  }
}
```

## CSS ANIMAÇÕES - DIRECTION

- A propriedade `animation-direction` em animações CSS determina a direção na qual a animação é reproduzida. Ela oferece quatro valores principais: `normal`, `reverse`, `alternate` e `alternate-reverse`. Isso permite controlar se a animação avança, retrocede ou alterna entre os dois.

  - **`normal`**: A animação é reproduzida do início ao fim.
  - **`reverse`**: A animação é reproduzida do fim ao início.
  - **`alternate`**: A animação é reproduzida do início ao fim e depois do fim ao início, alternando.
  - **`alternate-reverse`**: A animação é reproduzida do fim ao início e depois do início ao fim, alternando.

**Exemplos Funcionais:**

1. `normal`

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
  }
}

.animated-box {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  animation: moveRight 2s ease-in-out infinite;
  animation-direction: normal; /* Direção normal da animação */
}
```

2. `reverse`

```css
@keyframes moveRight {
  from {
    transform: translateX(200px);
  }
  to {
    transform: translateX(0);
  }
}

.animated-box {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  animation: moveRight 2s ease-in-out infinite;
  animation-direction: reverse; /* Direção reversa da animação */
}
```

3. `alternate`

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
  }
}

.animated-box {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  animation: moveRight 2s ease-in-out infinite;
  animation-direction: alternate; /* Direção alternada da animação */
}
```

4. `Alternate-reverse`

```css
@keyframes moveRight {
  from {
    transform: translateX(200px);
  }
  to {
    transform: translateX(0);
  }
}

.animated-box {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  animation: moveRight 2s ease-in-out infinite;
  animation-direction: alternate-reverse; /* Direção alternada reversa da animação */
}
```

- Esses exemplos demonstram como a propriedade `animation-direction` pode ser usada para controlar a direção da animação, permitindo uma variedade de efeitos visuais dinâmicos em elementos HTML.

## CSS ANIMAÇÕES - FILL MODE

- O fill mode em animações CSS determina o comportamento dos estilos aplicados antes e depois da animação. Existem três valores principais para a propriedade `animation-fill-mode`: `forwards`, `backwards` e `both`. Esses valores controlam se os estilos aplicados durante a animação devem ser mantidos após a conclusão, e se os estilos aplicados antes da animação devem ser aplicados antes que ela comece.

  - **`forwards`**: Os estilos aplicados durante a última etapa da animação são mantidos após a conclusão da animação.
  - **`backwards`**: Os estilos aplicados antes da animação são aplicados antes que ela comece, e mantidos até que a animação comece.
  - **`both`**: Combina o comportamento de forwards e backwards, aplicando os estilos antes da animação começar e mantendo os estilos aplicados durante a última etapa da animação após a conclusão.

**Exemplos Funcionais:**

1. `Forwards`

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
  }
}

.animated-box {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  animation: moveRight 2s ease-in-out forwards;
}
```

2. `Backwards`

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
  }
}

.animated-box {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  animation: moveRight 2s ease-in-out backwards;
}
```

3. `Both`

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
  }
}

.animated-box {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  animation: moveRight 2s ease-in-out both;
}
```

- Nos exemplos acima, `moveRight` é uma animação que move um elemento para a direita. A propriedade `animation-fill-mode` controla como os estilos são aplicados antes e depois da animação. Dependendo do valor definido, os estilos aplicados durante a animação serão mantidos após sua conclusão, e os estilos aplicados antes da animação podem ser aplicados antes dela começar. Essas configurações podem ser ajustadas para criar efeitos visuais precisos e desejados em elementos HTML durante animações.

## CSS ANIMAÇÕES - TIMING FUNCTION

- A função de temporização (timing function) em animações CSS determina como a transição entre os diferentes estados de uma animação é interpolada ao longo do tempo. Existem várias funções de temporização disponíveis, cada uma criando um efeito visual único.

  - **`Linear`**: A animação ocorre com uma taxa de mudança constante ao longo do tempo. Isso significa que a velocidade da animação é uniforme e não há aceleração ou desaceleração.

  - **`Ease`**: Esta é uma função de temporização padrão, onde a animação começa lentamente, acelera no meio e desacelera novamente no final, criando um efeito de movimento natural.

  - **`Ease-in`**: A animação começa devagar e acelera à medida que progride.

  - **`Ease-out`**: A animação começa rapidamente e desacelera à medida que se aproxima do fim.

  * **`Ease-in-out`**: A animação começa devagar, acelera no meio e desacelera novamente no final.

1. `Linear`

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
  }
}

.animated-box {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  animation: moveRight 2s linear infinite;
}
```

2. `Ease`

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
  }
}

.animated-box {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  animation: moveRight 2s ease infinite;
}
```

2. `Ease-in`

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
  }
}

.animated-box {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  animation: moveRight 2s ease-in infinite;
}
```

2. `Ease-out`

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
  }
}

.animated-box {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  animation: moveRight 2s ease-out infinite;
}
```

2. `Ease-in-out`

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
  }
}

.animated-box {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  animation: moveRight 2s ease-in-out infinite;
}
```

- Esses exemplos demonstram diferentes funções de temporização que podem ser usadas em animações CSS para criar uma variedade de efeitos visuais. Experimente essas funções para encontrar a que melhor se adapta ao seu design e estilo desejados.

**Outro Exemplos**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS ANIMAÇÕES</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <div class="container div1">linear</div>
    <div class="container div2">ease</div>
    <div class="container div3">ease-in</div>
    <div class="container div4">ease-out</div>
    <div class="container div5">ease-in-out</div>
  </body>
</html>
```

```css
.container {
  position: relative;
  width: 200px;
  height: 200px;
  border-style: solid;
  border-color: black;
  animation-name: mudancaCor;
  animation-duration: 6s;
  animation-fill-mode: forwards;
}

@keyframes mudancaCor {
  0% {
    background-color: red;
    width: 100px;
  }
  25% {
    background-color: orange;
  }
  50% {
    background-color: green;
    width: 400px;
  }
  100% {
    background-color: black;
    width: 100px;
  }
}

@keyframes movimentar {
  0% {
    left: 0px;
  }
  100% {
    left: 300px;
  }
}

.div1 {
  animation-timing-function: linear;
}
.div2 {
  animation-timing-function: ease;
}
.div3 {
  animation-timing-function: ease-in;
}
.div4 {
  animation-timing-function: ease-out;
}
.div5 {
  animation-timing-function: ease-in-out;
}
```

## CSS ANIMAÇÕES - TRANSITIONS

- As transições em CSS permitem que você defina como as propriedades de um elemento mudam de um estado para outro, criando efeitos suaves de transição entre eles. As transições são aplicadas a uma ou mais propriedades, especificam a duração da transição, o atraso antes que ela comece e a função de temporização para controlar como a transição progride.

  - **`transition-property`**: Determina quais propriedades CSS serão afetadas pela transição.
  - **`transition-duration`**: Define a duração da transição, ou seja, quanto tempo levará para a transição ocorrer.
  - **`transition-delay`**: Especifica um atraso antes que a transição comece.
  - **`transition-timing-function`**: Controla como a transição progride ao longo do tempo, permitindo ajustar a velocidade da transição.

**Exemplos Funcionais:**

1. `transition-property`

```css
/* Quando a cor de fundo mudar, haverá uma transição suave */
.element {
  background-color: #3498db;
  transition-property: background-color;
  transition-duration: 1s;
}
.element:hover {
  background-color: #2ecc71;
}
```

2. `transition-duration`

```css
/* A largura da borda mudará com uma transição de 2 segundos */
.element {
  border: 1px solid #3498db;
  transition-property: border;
  transition-duration: 2s;
}
.element:hover {
  border-width: 5px;
}
```

3. `transition-delay`

```css
/* A cor do texto mudará 1 segundo após o início da transição */
.element {
  color: #3498db;
  transition-property: color;
  transition-duration: 1s;
  transition-delay: 1s;
}
.element:hover {
  color: #2ecc71;
}
```

4. `transition-timing-function`

```css
/* A transição será mais rápida no início e no final, mas mais lenta no meio */
.element {
  transform: scale(1);
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}
.element:hover {
  transform: scale(1.5);
}
```

- Estes exemplos ilustram como as transições podem ser aplicadas em diferentes propriedades CSS para criar efeitos visuais suaves e agradáveis em resposta a interações do usuário, como `:hover`, `:focus` ou mudanças de estado. Experimente diferentes configurações para alcançar o efeito desejado em seus elementos HTML.

**Outro Exemplo**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS ANIMAÇÕES</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <button type="button" class="btn">click</button>
  </body>
</html>
```

```css
.btn {
  display: inline-block;
  padding: 20px;
  background: #428bca;
  color: white;
  font-size: 30px;
  transition-property: background-color, padding;
  transition-duration: 500ms, 1s;
  transition-timing-function: ease-out;
  transition-delay: 100ms;
}

.btn:hover {
  background-color: #2248ca;
  padding-left: 30px;
  padding-right: 30px;
}
```
