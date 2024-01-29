## HTML - TAG

- `<nomeDaTag>` Meu Titulo `</nomeDaTag>` -> Esse conjunto é um Elemento HTML, Sendo necessario para interpretação do navegador.

- `<tag>` -> Tag de Abertura
- `</tag>` -> Tag de Fechamento

## HTML - ESTRUTURA BÁSICA

site para referencias: ![w3schools](https://www.w3schools.com)

## Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <title>Minha primeira página</title>
  </head>
  <body></body>
</html>
```

## HTML - TITULO E PARAGRAFOS

- Titulos vão de `<h1></h1>` a `<h6></h6>`, sendo o `<h1>` o titulo mais importante para uma pagina web.
- Para usar paragrafos usamos a tag `<p>`

## Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <title>Minha primeira página</title>
  </head>
  <body>
    <h1>Titulo 1</h1>
    <h2>Titulo 2</h2>
    <h3>Titulo 3</h3>
    <h4>Titulo 4</h4>
    <h5>Titulo 5</h5>
    <h6>Titulo 6</h6>

    <h1>Titulo 1</h1>
    <h2>sub-titulo</h2>

    <p>
      Lorem ipsum quisque auctor tellus ut dapibus erat nostra netus, ut
      torquent vivamus aptent luctus eu vehicula a sapien mi, ligula cursus sed
      varius sit lectus adipiscing semper. orci elementum nisl integer aptent
      eros proin sapien fermentum donec phasellus, ad mattis habitasse neque
      euismod faucibus facilisis commodo justo, integer fusce vestibulum aenean
      non orci hac vel senectus. etiam hac torquent mi cras euismod dictum
      habitasse sit lacinia fringilla interdum, tincidunt curabitur erat
      curabitur litora curabitur imperdiet donec vivamus ad vel primis, mollis
      ullamcorper diam fringilla accumsan donec proin mattis platea habitant.
    </p>
  </body>
</html>
```

## HTML - COMENTARIOS

- use `<!-- -->`, o trecho de codigo inserido não será executado pelo navegador

## Uso/Exemplos

```html
<body>
  <!-- comentarios -->
</body>
```

## HTML - FORMATAÇÃO DE TEXTOS

### Negrito

- Para se formartar um texto em negrito, devido a questões de semantica e rankeamento do site no google você até pode usar a tag `<b>`, mas sempre por padrão procure usar a tag `<strong>`.

### Uso/Exemplos

```html
<p>Esse é um <b>texto em negrito</b></p>
<!-- ================================ -->
<p>Esse é um <strong>texto em negrito</strong></p>
```

### Italico

- Para se formartar um texto em italico, devido a questões de semantica e rankeamento do site no google você até pode usar a tag `<i>`, mas sempre por padrão procure usar a tag `<em>`.

### Uso/Exemplos

```html
<p>Esse é um <i>texto em italico</i></p>
<!-- ================================ -->
<p>Esse é um <em>texto em italico</em></p>
```

### Marcação

- Para marcar um texto use a tag `<mark>`

### Uso/Exemplos

```html
<p>Esse é um <mark>texto marcado</mark></p>
```

### SMALL

- Para diminuir um texto você pode usar a tag `<small>`.

### Uso/Exemplos

```html
<p>Esse é um texto <mark> com a tag small</mark></p>
```

### TEXTO EXCLUIDO / RISCADO AO MEIO

- Para riscar um texto você pode usar a tag `<del>`. Outra tag usada é `<s>`, entrtando devido a regra de semantica. Use sempre a tag `<del>`

### Uso/Exemplos

```html
<p>Esse é um <s> texto que foi removido</s> e substituido por esse</p>
<!-- ==================================================== -->
<p>Esse é um <del> texto que foi removido</del> e substituido por esse</p>
```

### TEXTO INSERIDO / SUBLINHANDO

- Para sublinhar um texto você pode usar a tag `<ins>`. Outra tag usada é `<u>`, entrtando devido a regra de semantica. Use sempre a tag `<ins>`

### Uso/Exemplos

```html
<p>Esse é um <u> texto que foi inserido </u></p>
<!-- ==================================================== -->
<p>Esse é um <ins> texto que foi inserido </ins></p>
```

### TEXTO ABAIXO DO NORMAL

- Para inserir um texto ligeiramente abaixo da linha normal você pode usar a tag `<sub>`

### Uso/Exemplos

```html
<p>Esse é um <sub>texto subscript </sub>Alguma coisa<sub>2</sub></p>
```

### TEXTO ACIMA DO NORMAL

- Para inserir um texto ligeiramente acima da linha normal você pode usar a tag `<sup>`

### Uso/Exemplos

```html
<p>Esse é um <sup>texto superscript;</sup>Alguma coisa<sup>2</sup></p>
```

## HTML - LINK

- Basicamente para fazer um redirecionamento você usa a tag `<a>`, passando um link ou diretorio de um arquivo html.

### Uso/Exemplos

```html
<a href="sobre.html">Sobre Nós</a>
```

## HTML - IMAGENS

- Para trabalhar com imagens usamos a tag `<img>`. Use o atributo "src" para indicar o local da imagem sendo ou uma imagem já na web ou em um repsoitorio local, outro atributo que deve ser utilizado é o "alt" que serve com uma alternativa caso o navegador não consiga renderizar a imagem passada. outra função desse atributo está em dizer ao navegador do que se trata aquele conteudo.

### Uso/Exemplos

```html
<img src="URL ou endereço local" alt="Descrição da imagem" />
```

- Podemos ainda utilizar imagens como links para isso basta envolver a tag `img` com a tag `a`.

### Uso/Exemplos

```html
<a href=""><img src="URL ou endereço local" alt="Descrição da imagem" /></a>
```

## HTML - QUEBRA DE LINHA

- Para realizar uma simples quebra de linha, podemos usar a tag `<br>`

## HTML - LISTAS

### Lista não ordenada

- Para criação de uma lista sem ordenação use a tag `<ul>` e para criar um item dentro da lista use a tag `<li>`.

### Uso/Exemplos

```html
<h2>Lista de Compras</h2>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Lista ordenada

- Para criação de uma lista ordenada use a tag `<ol>` e para criar um item dentro da lista use a tag `<li>`.

### Uso/Exemplos

```html
<h2>Ranking dos melhores vendedores</h2>
<ol>
  <li>Marcos</li>
  <li>João</li>
  <li>Luiz</li>
</ol>
```

## HTML - TABELAS

- Para criação de uma tabela usamos a tag `<table>`.
- Para criação de uma linha dentro da tabela usamos a tag `<tr>`.
- Para criação do cabeçalho da tabela use a tag `<th>`.
- Para criação de um dado use a tag `<td>`.

### Uso/Exemplos

```html
<table>
  <tr>
    <th>Nome</th>
    <th>Telefone</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>Luiz Jr</td>
    <td>(31)9 9999-9999</td>
    <td>email@email.com</td>
  </tr>
  <tr>
    <td>Luiz Jr 2</td>
    <td>(31)9 8888-8888</td>
    <td>email2@email.com</td>
  </tr>
</table>
```
