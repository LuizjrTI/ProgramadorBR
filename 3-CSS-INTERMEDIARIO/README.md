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
