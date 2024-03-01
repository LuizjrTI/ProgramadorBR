## JQUERY - CONHENCENDO O JQUERY

- [w3schools](https://www.w3schools.com/jquery/jquery_get_started.asp)
- [jquery](https://jquery.com)

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>jquery</title>
  </head>
  <body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  </body>
</html>
```

## JQUERY - EVENTOS

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>jquery</title>
  </head>
  <body>
    <h1>Esse é meu titulo H1</h1>
    <h1 id="sair" style="display: none">Não saia agora</h1>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script>
      $(document).mouseenter(() => {
        $("#sair").hide();
      });
      $(document).mouseleave(() => {
        $("#sair").show();
      });
    </script>
  </body>
</html>

```

## JQUERY - CALLBACK

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../codigo/css/style.css" />
    <title>jquery</title>
  </head>
  <body>
    <button id="button">hide</button>
    <div id="green"></div>
    <div id="red"></div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="../codigo/js/script.js"></script>
  </body>
</html>
```

```css
<!DOCTYPE html > #green {
  width: 500px;
  height: 500px;
  background-color: green;
  position: absolute;
}

#red {
  width: 500px;
  height: 500px;
  background-color: red;
  position: absolute;
  display: none;
}
```

```javascript
function callBack() {
  $("#red").show(2000);
}

$("#button").click((e) => {
  $("#green").hide(2000, callBack);
});
```

## JQUERY - SELECIONANDO ELEMENTOS FILHOS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../codigo/css/style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <title>jquery</title>
  </head>
  <body>
    <h1>LISTA 1</h1>
    <ul id="lista1">
      <li class="item1">Item 1</li>
      <li class="item2">Item 2</li>
      <li class="item3">Item 3</li>
      <li class="item4">Item 4</li>
      <li class="item5">Item 5</li>
    </ul>
    <h1>LISTA 2</h1>
    <ul id="lista2">
      <li class="item1">Item 1</li>
      <li class="item2">Item 2</li>
      <li class="item3">Item 3</li>
      <li class="item4">Item 4</li>
      <li class="item5">Item 5</li>
    </ul>

    <script src="../codigo/js/script.js"></script>
  </body>
</html>
```

```javascript
let lista1 = $("#lista1");
console.log("🚀 ~ lista1:", lista1);

lista1.find(".item2").hide();
lista1.children(".item4").hide();

let body = $("body");

console.log(body.children(".item2"));
console.log(body.find(".item2"));
```

## JQUERY - LENDO O CONTEUDO E CARACTERISTICAS DOS ELEMENTOS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../codigo/css/style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <title>jquery</title>
  </head>
  <body>
    <h1>LISTA 1</h1>
    <ul id="lista1">
      <input id="novo" name="novo" value="NovoItem" />
      <li class="item1">Item 1</li>
      <li class="item2">Item 2</li>
      <li class="item3">Item 3</li>
      <li class="item4">Item 4</li>
      <li class="item5">Item 5</li>
    </ul>

    <script src="../codigo/js/script.js"></script>
  </body>
</html>
```

```javascript
console.log($("#lista1").text());
console.log($("#lista1").html());
console.log($("#novo").val());
console.log($("#novo").attr("name"));
```

## JQUERY - MODIFICANDO O CONTEUDO E CARACTERISTICAS DOS ELEMENTOS

```javascript
console.log($("#lista1").text("Lista de Compras"));
console.log($("#lista1").attr("novo", "novoItemCompra"));
```

## JQUERY - SELECIONANDO ELEMENTOS POR ATRIBUTOS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../codigo/css/style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <title>jquery</title>
  </head>

  <body>
    <h1>LISTA 1</h1>
    <ul id="lista1">
      <input id="novo" name="novo" value="NovoItem" />
      <li key="1" class="item">Item 1</li>
      <li key="2" class="item">Item 2</li>
      <li key="3" class="item">Item 3</li>
      <li key="4" class="item">Item 4</li>
      <li key="5" class="item">Item 5</li>
    </ul>

    <script src="../codigo/js/script.js"></script>
  </body>
</html>
```

```javascript
$("#lista1").find("[key = 2]").remove();
```

## JQUERY - REMOVENDO ELEMENTOS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../codigo/css/style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <title>jquery</title>
  </head>

  <body>
    <h1>LISTA 1</h1>
    <ul id="lista1">
      <input id="novo" name="novo" value="NovoItem" />
      <li class="item1">Item 1</li>
      <li class="item2">Item 2</li>
      <li class="item3">Item 3</li>
      <li class="item4">Item 4</li>
      <li class="item5">Item 5</li>
    </ul>

    <script src="../codigo/js/script.js"></script>
  </body>
</html>
```

```javascript
/**
 * Primeira forma de remover
 */
$("#lista1").remove();
/**
 * Segunda forma de remover
 */
$("#lista1").empty();

/**
 * Terceira forma de remover
 */

$("li").remove(".item2 , .item4");
```

## JQUERY - INSERINDO ELEMENTOS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../codigo/css/style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <title>jquery</title>
  </head>

  <body>
    <div id="quadrado">Texto</div>

    <script src="../codigo/js/script.js"></script>
  </body>
</html>
```

```javascript
$("#quadrado").prepend("Texto com prepend -> ");
$("#quadrado").append(" <- Texto com append");
$("#quadrado").before("Texto com Before");
$("#quadrado").after("Texto com After");
```

## JQUERY - MODIFICANDO O CSS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../codigo/css/style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <title>jquery</title>
  </head>

  <body>
    <h1 class="titulo">Lista de Compras</h1>

    <script src="../codigo/js/script.js"></script>
  </body>
</html>
```

```css
.bg-blue {
  background-color: blue;
}
```

```javascript
$("h1").addClass("bg-blue");

$("h1").removeClass("bg-blue");

// setInterval(() => {
//   $("h1").toggleClass("bg-blue");
// }, 5000);

$("h1").css({ "background-color": "red", "font-size": "80px" });
```

## JQUERY - DIMENSÕES

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../codigo/css/style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <title>jquery</title>
  </head>

  <body>
    <div class="box"></div>

    <script src="../codigo/js/script.js"></script>
  </body>
</html>
```

```css
.box {
  /* box-sizing: border-box; */
  width: 500px;
  background-color: gray;
  padding: 10px;
  border: 5px solid black;
  margin: 15px;
  font-size: 20px;
}
```

```javascript
let box = $(".box");
//box.width(600);
box.append(
  "Largura: ",
  box.width(),
  "<br>",
  "Largura + padding: ",
  box.innerWidth(),
  "<br>",
  "Largura + padding + borda: ",
  box.outerWidth(),
  "<br>",
  "Largura + padding + borda + margem: ",
  box.outerWidth(true),
  "<br>"
);
```

## JQUERY - ELEMENTOS IRMÃOS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../codigo/css/style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <title>jquery</title>
  </head>

  <body>
    <div id="div1">Div1</div>
    <div id="div2">Div2</div>
    <div id="div3">Div3</div>
    <div id="div4">Div4</div>
    <div id="div5">Div5</div>

    <script src="../codigo/js/script.js"></script>
  </body>
</html>
```

```javascript
console.log($("#div3").prev());
console.log($("#div3").prevAll());
console.log($("#div5").prevUntil("#div2"));
console.log($("#div3").next());
console.log($("#div3").nextAll());
console.log($("#div1").nextUntil("#div4"));
console.log($("#div3").siblings());
```

## JQUERY - FILTER, LAST, FIRST E EQ

1. **Filter:**

   - O método `filter()` é usado para reduzir o conjunto de elementos correspondentes a um seletor específico. Ele retorna os elementos que correspondem ao seletor fornecido.

   ```javascript
   $("p").filter(".destaque").css("color", "red");
   ```

2. **last:**

   - O método `last()` é usado para selecionar o último elemento correspondente ao seletor especificado.

   ```javascript
   $("ul li").last().css("font-weight", "bold");
   ```

3. **first:**

   - O método `first()` é usado para selecionar o primeiro elemento correspondente ao seletor especificado.

   ```javascript
   $("div.box").first().css("border", "2px solid black");
   ```

4. **not:**

   - O método `not()` é usado para selecionar elementos que não correspondem ao seletor especificado.

   ```javascript
   $("a").not(".externo").css("background-color", "lightblue");
   ```

5. **eq:**
   - O método `eq()` é usado para selecionar um elemento específico com base no índice dentro do conjunto de elementos correspondentes.
   ```javascript
   $("ul li").eq(2).css("color", "green");
   ```

- Esses métodos do jQuery são poderosos para selecionar e manipular elementos HTML de maneira eficiente. Eles fornecem uma maneira fácil e concisa de interagir com o DOM e aplicar estilos ou comportamentos específicos a elementos selecionados.
