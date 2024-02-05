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
