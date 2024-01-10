## HTML - FORMULARIO

- Formulários em desenvolvimento web são elementos interativos que permitem aos usuários inserir e enviar dados para uma aplicação ou site. Construídos com HTML, os formulários consistem em campos de entrada, como caixas de texto, botões de opção e menus suspensos, juntamente com o elemento `<form>` para encapsular e estruturar esses elementos.
- Além disso, os formulários frequentemente envolvem a utilização de linguagens como CSS para estilização e JavaScript para validação e interatividade dinâmica. Essenciais para interações online, os formulários desempenham um papel crucial na coleta de informações, registros de usuários e em diversas outras interações entre o usuário e o sistema.

### Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Módulo HTML Intermediario</title>
  </head>
  <body>
    <form action="/cadastro" method="get">
      <input type="text" name="email" id="" />
      <input type="text" name="nome" id="" />
      <input type="submit" value="" />
    </form>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Módulo HTML Intermediario</title>
  </head>
  <body>
    <form action="https://www.youtube.com/results" method="get">
      <input type="text" name="search_query" id="" />
      <input type="submit" value="" />
    </form>
  </body>
</html>
```

- Buscador de videos no google.

## HTML - INPUT'S

### Uso/Exemplos

```html
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Módulo HTML Intermediario</title>
  </head>
  <body>
    <form action="" method="get">
      <input type="text" name="search_query" id="" />
      <input type="password" name="senha" id="" />
      <input type="checkbox" name="curso" value="op1" id="" /> teste1
      <input type="checkbox" name="curso" id="" value="op2" /> teste2
      <input type="radio" name="genero" value="m" id="" checked /> Masculino
      <br />
      <input type="radio" name="genero" value="f" id="" /> Feminino <br />
      <input type="reset" value="Limpar" />
      <input type="submit" value="Enviar" />
    </form>
  </body>
</html>
```

## HTML - TEXT AREA

- O `<textarea>` é um elemento HTML utilizado para criar campos de texto multi-linha em formulários web. Diferentemente das caixas de texto simples, as áreas de texto permitem que os usuários insiram informações extensas, como comentários ou mensagens mais longas.
- O tamanho da `<textarea>` pode ser definido usando atributos como "rows" e "cols". Comumente estilizado com CSS para se integrar ao design da página, as áreas de texto são essenciais para coletar dados significativos em formulários, proporcionando aos usuários uma maneira conveniente de expressar informações mais extensas.

### Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Módulo HTML Intermediario</title>
  </head>
  <body>
    <form action="" method="get">
      <input type="text" name="assunto" />
      <textarea name="mensagem" id="" cols="30" rows="10"></textarea>
      <input type="submit" value="" />
    </form>
  </body>
</html>
```

## HTML - HTML5 INTRO

- HTML5 é a quinta versão da linguagem de marcação Hypertext Markup Language, amplamente utilizada para estruturar conteúdo na web. Introduzido para melhorar a experiência do usuário na internet, o HTML5 trouxe novos elementos semânticos, como `<header>`, `<nav>`, `<article>`, e `<footer>`, proporcionando uma estrutura mais significativa para os desenvolvedores. Além disso, incorpora recursos avançados, como áudio e vídeo nativos, gráficos com a API Canvas, armazenamento local e suporte a aplicativos offline.
- Essa evolução do HTML tornou-se a base para o desenvolvimento web moderno, oferecendo maior acessibilidade, interoperabilidade e suporte para dispositivos diversos.

* Um site para se checar [caniuse](<[https://](https://caniuse.com)>)

## HTML - INPUT HTML5

- O HTML5 introduziu vários novos tipos de elementos `<input>` para oferecer mais funcionalidades e opções aos desenvolvedores. Alguns dos principais inputs incluem:

  1. `<input type="date">`: Permite aos usuários selecionar uma data em um calendário.
  2. `<input type="time">`: Permite aos usuários escolher uma hora.
  3. `<input type="datetime-local">`: Combina data e hora para seleção simultânea.
  4. `<input type="email">`: Projetado para coletar endereços de e-mail e fornece validação específica para esse formato.
  5. `<input type="url">`: Utilizado para coletar URLs e realiza validação específica para URLs.
  6. `<input type="number">`: Permite a entrada apenas de valores numéricos.
  7. `<input type="range">`: Cria um controle deslizante (slider) para seleção de um valor em uma faixa específica.
  8. `<input type="color">`: Permite aos usuários escolher uma cor por meio de um seletor de cores.

* Esses novos tipos de inputs proporcionam uma variedade de opções para melhorar a experiência do usuário e fornecer formas mais eficazes de coletar diferentes tipos de dados.

### Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Módulo HTML Intermediario</title>
  </head>
  <body>
    <form action="" method="get">
      <input type="color" name="cor" id="" /><br />
      <input type="date" name="data" id="" max="2018-12-31" /> <br />
      <input type="datetime-local" name="dataHora" id="" /> <br />
      <input type="file" name="arquivo" id="" /> <br />
      <input type="number" name="numerico" id="" min="5" max="10" /> <br />
      <input type="range" name="intervalo" id="" min="5" max="10" value="6" />
      <br />
      <input type="tel" name="telefone" id="" /><br />
      <input type="email" name="email" id="" /><br />
      <input type="submit" value="" />
    </form>
  </body>
</html>
```

## HTML - TAG'S SEMANTICAS

- HTML5 introduziu várias tags semânticas para melhorar a estrutura e a significância do conteúdo em páginas web. Algumas das principais tags semânticas incluem:

  1. `<header>`: Define a cabeça de uma seção ou página, muitas vezes contendo elementos como logotipo, título e navegação.
  2. `<nav>`: Indica uma seção de navegação, geralmente contendo links para outras páginas ou seções.
  3. `<article>`: Utilizada para encapsular um conteúdo autônomo e distribuível, como um post de blog ou um artigo de notícia.
  4. `<section>`: Agrupa conteúdo tematicamente relacionado e ajuda a organizar a página.
  5. `<aside>`: Representa conteúdo relacionado, mas que está fora do contexto principal, como barras laterais.
  6. `<footer>`: Define a parte final de uma seção ou página, frequentemente contendo informações como direitos autorais, links de contato ou créditos.
  7. `<main>`: Indica o conteúdo principal da página, excluindo cabeçalho, rodapé e barras laterais.
  8. `<figure>` e `<figcaption>`: Utilizados para incorporar e descrever conteúdo multimídia, como imagens e gráficos.
  9. `<time>`: Define uma data ou um período de tempo, ajudando na máquina de leitura e na acessibilidade.
  10. `<mark>`: Destaca partes de texto para fins de referência ou destaque visual.

* A utilização dessas tags semânticas não apenas melhora a estrutura do HTML, mas também fornece informações mais precisas para os motores de busca e melhora a acessibilidade do conteúdo.

### Uso/Exemplos

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Módulo HTML Intermediario</title>
  </head>
  <body>
    <header>
      <nav></nav>
    </header>
    <main>
      <section></section>
      <article></article>
    </main>
  </body>
</html>
```
