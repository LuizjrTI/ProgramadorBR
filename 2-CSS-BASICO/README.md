# CSS

- CSS, que significa Cascading Style Sheets (Folhas de Estilo em Cascata), é uma linguagem de estilo utilizada para descrever a apresentação de um documento escrito em HTML ou XML (incluindo várias linguagens XML como SVG, MathML, etc.). O principal objetivo do CSS é separar a estrutura do documento da sua apresentação, permitindo que os desenvolvedores controlem o layout, as cores, as fontes e outros aspectos visuais de uma página da web.

- Com o CSS, é possível aplicar estilos consistentes em várias páginas de um site, tornando a manutenção e a atualização mais eficientes. O CSS utiliza uma sintaxe simples e usa seletores para escolher os elementos HTML aos quais aplicar estilos, permitindo uma maior flexibilidade e controle sobre o design de uma página da web.

## Uso/Exemplos

```css
seletor {
  propriedade: valor;
}
```

## CSS INLINE

- Seria basicamente usar o css dentro de uma tag HTML.

## Uso/Exemplos

```html
<body>
  <p style="color: red">
    Lorem ipsum ultrices sed suscipit felis sociosqu pretium facilisis, platea
    mi euismod sem condimentum eget nostra cras quam, lectus massa ipsum
    suspendisse augue nec ante.
  </p>
</body>
```

## CSS INTERNO

- É usar o css dentro do html, você declara a tag `<style>` dentro da tag `<head>`. Aqui voce passa todas as propriedades.

## Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aulas CSS</title>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>
      Lorem ipsum ultrices sed suscipit felis sociosqu pretium facilisis, platea
      mi euismod sem condimentum eget nostra cras quam, lectus massa ipsum
      suspendisse augue nec ante.
    </p>
  </body>
</html>
```

- Só para exemplificar nesse caso anterior todos os paragrafos serão vermelhos.

## CSS - EXTERNO

- Em projetos do dia a dia será dessa maneira que encontraremos o css, em arquivo separado do HTML. Dentro da tag `<head>`, usamos a tag `<link>`.

## Uso/Exemplos

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <title>Aulas CSS</title>
</head>
```

```css
p {
  color: red;
}
```

- Nesse caso novamente todos os paragrafos serão coloridos com a cor vermelha.

## CSS - CLASSES E ID'S

- Classes -> Pode ser usada em mais de um elemento html.
- Id's -> Só pode ser usado em um unico elemento html.

## Uso/Exemplos

HTML

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Aulas CSS</title>
  </head>
  <body>
    <h1 id="titulo">Titulo 1</h1>

    <p id="principal">
      Lorem ipsum ultrices sed suscipit felis sociosqu pretium facilisis, platea
      mi euismod sem condimentum eget nostra cras quam, lectus massa ipsum
      suspendisse augue nec ante.
    </p>

    <p>
      Litora aptent facilisis congue pellentesque at iaculis aptent fames,
      porttitor cursus porta feugiat curabitur ultrices imperdiet ut
      scelerisque, sollicitudin risus donec consequat etiam tempus sodales.
    </p>

    <p class="texto_verde">texto para o teste de class 1</p>
    <p class="texto_verde">texto para o teste de class 2</p>
    <p class="texto_verde">texto para o teste de class 3</p>
  </body>
</html>
```

CSS

```css
#principal {
  color: red;
}

#titulo {
  color: blue;
}

.texto_verde {
  color: green;
}
```

- Outra funcionalidade de Id's é a ancoragem de elementos no HTML, onde é possivel atraves de um link fazer uma rolagem de tela para o elemento identificado.

## Uso/Exemplos

```html
<a href="#nome_do_identificador">Algum texto</a>
<!-- No momento que clicar no link ocorrera a rolagem da tela para aquele elemento. -->
```

## CSS - CORES

- A primeira forma de usar cores no CSS é atraves do RGB ou RGBA, onde o **R** seria **RED**, vermelho em inglês, **G** seria **GREEN**, verde em inglês e **B** seria **BLUE**, azul em inglês. No caso do **RGBA** a letra seria o alfa, onde esse valor determinará a transparencia do elemento.

## Uso/Exemplos

```css
#titulo {
  color: rgb(0, 0, 255);
}
```

- No **RGB** e **RGBA** inicia-se no 0 até 255, dando um total de **16.581.375** de cores possiveis. No caso do **RGBA** o alfa inicia-se no 0 até 1.

## Uso/Exemplos

```css
#titulo {
  color: rgba(0, 0, 255, 0.6);
}
```

- A segunda forma para usar cores no CSS é atraves do Hexadecimal.

## Uso/Exemplos

```css
#titulo {
  color: #ffff00;
}
```

## CSS - BACKGROUND

- Essa prorpiedade trata sobre o fundo dos elementos html.

## Uso/Exemplos

```css
#principal {
  color: red;
  background-color: #00ffff;
}
```

- Nesse primeiro exemplo o fundo do identificador ficará com a cor ciano.

* Outra forma de uso do backgroud é com imagens.

## Uso/Exemplos

```css
#principal {
  color: red;
  /* background-color: #00ffff; */
  background-image: url(../img/fundo.jpeg);
  background-repeat: no-repeat;
  /* background-repeat: repeat;
  background-repeat: repeat-x;
  background-repeat: repeat-y; */
  background-size: cover;
  /* background-size: contain;
  background-size: auto; */

  /* background-attachment: fixed; */
  background-attachment: scroll; /*Por padrão já é esse!!!*/
  /* background-attachment: local; */

  background-position: center;
  /* background-position: right;
  background-position: left;
  background-position: top;
  background-position: bottom; */
}
```

## CSS - DIV

- São uma forma de agrupar elementos html na tela.

## Uso/Exemplos

```html
<body>
  <div id="div1">
    <h1 id="titulo">Titulo 1</h1>

    <p id="principal">
      Lorem ipsum ultrices sed suscipit felis sociosqu pretium facilisis, platea
      mi euismod sem condimentum eget nostra cras quam, lectus massa ipsum
      suspendisse augue nec ante.
    </p>
    <div id="subdiv1">
      <p>
        Litora aptent facilisis congue pellentesque at iaculis aptent fames,
        porttitor cursus porta feugiat curabitur ultrices imperdiet ut
        scelerisque, sollicitudin risus donec consequat etiam tempus sodales.
      </p>

      <p class="texto_verde">texto para o teste de class 1</p>
      <p class="texto_verde">texto para o teste de class 2</p>
      <p class="texto_verde">texto para o teste de class 3</p>
    </div>
  </div>
</body>
```

```css
#principal {
  color: black;
}

#titulo {
  color: blue;
}

.texto_verde {
  color: green;
}

#div1 {
  background-color: red;
}

#subdiv1 {
  background-color: yellow;
}
```

## CSS - FERRAMENTAS DO NAVEGADOR

- Use e abuse do inspecionar, ele tras informações relevantes do seu codigo html e css.
