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
