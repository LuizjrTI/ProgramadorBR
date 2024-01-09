## CSS - DISPLAY

- Responsavel por cada apresentação dos elementos na tela do usuario.
  - inline
  - block
  - inline block
  - none

* Quando temos um elemento inline não conseguimos mudar nem a altura e nem a largura dele.
* Evite ao maximo usar elementos com propriedades block dentro do inline e vice versa.

### Uso/Exemplos

```html
 <body>
    <div style="background-color: blue;">
      <div>Está é uma div normal</div>
      <div>
        E aqui a historia
        <div style="background-color: red; width: 500px;">Div de dentro</div>
        continua
      </div>
    </div>
    <div>
      <p style="margin: 0;">Este é um paragrafo normal</p>
      <p style="margin: 0;">E aqui a historia continua</p>
    </div>

    <p>
      Aqui eu tenho um inicio de um paragrafo <span style="background-color: green; width: 500px; display: inline-block;">Um SPAM no meio</span> E o
      fim do paragrafo
    </p>
    <p style="background-color: red;">
        Aqui eu tenho o inicio de um paragrafo <div> uma div no meio</div> e o fim do paragrafo
    </p>
    <p> Aqui eu tenho o inicio de um paragrafo <img src="#" alt="#" style="width: 400px; display: none;">  e o fim do paragrafo</p>
  </body>
```

## CSS - OVERFLOW

- É quando temos um elemento maior que o elemento onde ele está inserido. Quando eu quiser ter um elemento delimitado pelo pai eu posso lançar mão desta propriedade.

### Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        font-size: 1.2rem;
      }
      #container {
        color: yellow;
        background-color: blue;
        width: 300px;
        height: 100px;
        /* overflow: visible; */
        /* overflow: hidden; */
        /* overflow: scroll; */
        /* overflow: auto; */
        /* overflow-y: scroll; */
        overflow: auto;
      }
    </style>
  </head>
  <body>
    <div id="container">
      Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
      IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
      IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
      IpsumLorem Ipsum
    </div>
  </body>
</html>
```

## CSS - ALINHAMENTO HORIZONTAL

- Uma forma de fazer o alinhamento horizontal do elemento e utilizando `margin:auto;`.
- Outro ponto a se atentar é que para fazer o alinhamento de imagens ele deve ter o `display:block` ou está inseria em outro elemento e usar a propriedade de `text-align`.

### Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        font-size: 1.2rem;
      }
      #quadrado {
        width: 50px;
        height: 50px;
        background-color: blue;
        /* margin: auto; */
        margin-left: auto;
      }
      img {
        /* display: inline;
        display: inline-block; 
        Nessas duas propriedades o margin auto não funciona*/
        margin: auto;
      }
      #container {
        text-align: right;
      }
    </style>
  </head>
  <body>
    <div id="quadrado"></div>
    <div id="container">
      <img src="#" alt="#" />
    </div>
  </body>
</html>
```

## CSS - POSITION

- Position é uma propriedade fundamental que determina o método de posicionamento de um elemento em relação ao seu contêiner pai ou à própria página. Existem cinco valores principais: "static" (posicionamento padrão), "relative" (posicionamento relativo ao seu posicionamento normal), "absolute" (posicionamento em relação ao contêiner pai mais próximo com posição diferente de "static"), "fixed" (posicionamento fixo em relação à janela de visualização) e "sticky" (posicionamento inicialmente relativo, mas torna-se fixo à medida que o usuário rola a página). Essa propriedade é crucial para o layout e design responsivo em desenvolvimento web.

### Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        font-size: 1.2rem;
      }
      .static {
        position: static;
      }
      .relative {
        position: relative;
        /* top: 15px;
        left: 20px; */
      }
      .fixed {
        position: fixed;
      }
      .absolute {
        position: absolute;
      }
      .sticky {
        position: sticky;
        top: 0;
      }
      .ret {
        width: 200px;
        height: 500px;
        margin-top: 10px;
        overflow: auto;
      }
      .quadrado {
        width: 100px;
        height: 100px;
        /* display: inline-block; */
        /* position: static; */
      }
      .red {
        background-color: red;
      }
      .blue {
        background-color: blue;
      }
      .green {
        background-color: green;
      }
    </style>
  </head>
  <body>
    <div class="static quadrado blue"></div>
    <!-- <div class="static quadrado blue"></div>
    <div class="static quadrado blue"></div>
    <div class="static quadrado blue"></div> -->
    <div class="relative quadrado red"></div>
    <!-- <div class="fixed quadrado red"></div> -->
    <!-- <div class="absolute quadrado red"></div> -->
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div class="blue ret">
      <div class="quadrado red"></div>
      <div class="quadrado red"></div>
      <div class="quadrado green sticky"></div>
      <div class="quadrado red"></div>
      <div class="quadrado red"></div>
      <div class="quadrado red"></div>
      <div class="quadrado red"></div>
      <div class="quadrado red"></div>
      <div class="quadrado red"></div>
      <div class="quadrado red"></div>
    </div>
  </body>
</html>
```

## CSS - FLOAT

- Float é uma propriedade que permite que um elemento seja retirado do fluxo normal do documento e seja movido para a esquerda ou direita do seu contêiner. Geralmente utilizado para criar layouts de colunas, o float posiciona elementos de forma que o texto e outros elementos fluam ao redor deles. No entanto, é importante notar que o uso excessivo de float pode resultar em desafios de layout e é frequentemente substituído por técnicas modernas como Flexbox e Grid. A propriedade float ainda é relevante, mas é recomendado considerar alternativas para construções de layout mais robustas e flexíveis.

### Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        font-size: 1.2rem;
      }
      p {
        /* display: inline; */
        /* clear: left; */
        /* clear: right; */
        /* clear: both; */
        clear: none;
      }
      #i1 {
        float: left;
        /* float: right; */
      }

      div {
        border: 1px solid black;
        overflow: auto;
      }
    </style>
  </head>
  <body>
    <div>
      <img id="i1" src="../../assets/img/pc.jpeg" alt="PC" />
      <p>
        Texto qualquerTexto qualquerTexto qualquerTexto qualquerTexto
        qualquerTexto qualquerTexto qualquerTexto qualquerTexto qualquerTexto
        qualquerTexto qualquerTexto qualquerTexto qualquerTexto qualquerTexto
        qualquer
      </p>
    </div>
  </body>
</html>
```

## CSS - ALINHAMENTO VERTICAL

### Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        font-size: 1.2rem;
      }
      .card {
        position: relative;
        width: 400px;
        height: 200px;
        border: 2px solid green;
        text-align: center;
      }
      .card2 {
        clear: left;
        float: left;
        border: 2px solid green;
        padding-left: 150px;
        padding-right: 150px;
        padding-top: 100px;
        padding-bottom: 100px;
      }
      .c1 {
        line-height: 200px;
      }

      .c2 {
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: blue;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="c1">Dev. Luiz Jr</div>
    </div>

    <div class="card">
      <div class="c2">Dev. Luiz Jr(2)</div>
    </div>
    <div class="card2">
      <div class="c3">Dev. Luiz Jr(2)</div>
    </div>
  </body>
</html>
```

## CSS - VIEWPORT

- A viewport em CSS refere-se à área visível de uma página da web em um navegador. A meta tag `<meta name="viewport">` é usada para controlar como a página se adapta à tela do dispositivo. Ao definir propriedades como largura, escala e zoom inicial, os desenvolvedores podem otimizar a experiência do usuário em dispositivos móveis e desktops.
- A manipulação da viewport é crucial para criar layouts responsivos e garantir que o conteúdo seja exibido de maneira adequada, independentemente do tamanho da tela, proporcionando uma experiência consistente e amigável ao usuário.

* `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`

## CSS - Responsividade

### Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        font-size: 1.2rem;
      }

      .header {
        position: relative;
        background-color: gray;
        height: 100px;
        /* width: 500px; */
        width: 80%;
        margin: auto;
      }

      .content {
        width: 70%;
        height: 70%;
        background-color: blue;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-align: center;
        font-size: 6vw;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="content">Hello World</div>
    </div>
  </body>
</html>
```

## CSS - MEDIA QUERIES

- Media Queries em CSS são utilizadas para aplicar estilos específicos com base nas características do dispositivo ou das condições de exibição, como largura de tela, tipo de dispositivo ou orientação.
- Essas consultas permitem criar layouts responsivos, adaptando o design da página de acordo com o ambiente de visualização.
- Ao utilizar Media Queries, os desenvolvedores podem criar interfaces que se ajustam dinamicamente, proporcionando uma experiência de usuário otimizada em uma variedade de dispositivos, desde telas grandes de desktop até smartphones.
- Essa técnica é essencial para o desenvolvimento web moderno e para garantir uma apresentação consistente em diferentes contextos.

### Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        margin: 0;
        padding: 0;
      }
      .header {
        overflow: hidden;
        margin: auto;
        width: 80%;
        background-color: #5c57a4;
        padding: 15px;
        font-size: 18px;
      }

      .menu {
        list-style: none;
        margin: 0;
        padding: 0;
        float: right;
      }

      li {
        float: left;
        color: white;
        margin-left: 15px;
      }

      .logo {
        float: left;
        color: white;
      }
      /*Order de tamanho importa*/
      /* @media screen and(min-width:700px) {
        .header {
          background-color: gray;
        }
      } */
      @media screen and(max-width:700px) {
        .header {
          background-color: gray;
        }
      }

      @media screen and(max-width:500px) {
        /* .header {
          background-color: gray;
        } */

        .logo {
          float: none;
          text-align: center;
        }
        .menu {
          margin-top: 20px;
          float: none;
          text-align: center;
        }
        li {
          float: none;
          margin-bottom: 5px;
          padding: 10px;
        }
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="logo">logo</div>
      <ul class="menu">
        <li>Home</li>
        <li>Cursos</li>
        <li>Contato</li>
        <li>Escritorios</li>
      </ul>
    </div>
  </body>
</html>
```
