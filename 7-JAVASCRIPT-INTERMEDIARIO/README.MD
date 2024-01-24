## JAVASCRIPT INTERMEDIARIO - WINDOW

- Em JavaScript, o objeto `Window` representa uma janela do navegador e serve como o ponto de entrada para interações com o ambiente de navegação. O objeto `Window` inclui propriedades e métodos que fornecem controle sobre a janela do navegador e seu conteúdo.

### Propriedades:

- **closed:** Retorna um valor booleano indicando se a janela foi fechada ou não.
- **console:** Retorna uma referência ao objeto Console, permitindo métodos para registrar informações no console do navegador.
- **defaultStatus:** Define ou retorna o texto padrão na barra de status da janela.
- **document:** Retorna o objeto Document associado à janela, permitindo manipulação do conteúdo da página.
- **frameElement:** Retorna o elemento `<iframe>` no qual a janela atual está inserida, útil quando a janela é um iframe.
- **frames:** Retorna todos os elementos `<iframe>` na janela atual.
- **history:** Retorna o objeto History associado à janela, permitindo navegação na história do navegador.
- **innerHeight:** Retorna a altura da área de conteúdo (viewport) da janela, incluindo barras de rolagem.
- **innerWidth:** Retorna a largura da área de conteúdo (viewport) da janela, incluindo barras de rolagem.
- **length:** Retorna o número de elementos `<iframe>` na janela atual.
- **localStorage:** Permite armazenar pares chave/valor no navegador sem data de expiração.
- **location:** Retorna o objeto Location associado à janela, permitindo manipulação da URL da página.
- **name:** Define ou retorna o nome da janela.
- **navigator:** Retorna o objeto Navigator associado à janela, fornecendo informações sobre o navegador.
- **opener:** Retorna uma referência à janela que criou a janela atual.
- **outerHeight:** Retorna a altura da janela do navegador, incluindo barras de ferramentas/barras de rolagem.
- **outerWidth:** Retorna a largura da janela do navegador, incluindo barras de ferramentas/barras de rolagem.
- **pageXOffset:** Retorna os pixels pelos quais o documento atual foi rolado horizontalmente em relação ao canto superior esquerdo da janela.
- **pageYOffset:** Retorna os pixels pelos quais o documento atual foi rolado verticalmente em relação ao canto superior esquerdo da janela.
- **parent:** Retorna a janela pai da janela atual.
- **screen:** Retorna o objeto Screen associado à janela, fornecendo informações sobre a tela.
- **screenLeft, screenTop, screenX, screenY:** Coordenadas da janela em relação à tela.
- **sessionStorage:** Permite armazenar pares chave/valor no navegador com dados válidos apenas para uma sessão.
- **scrollX, scrollY:** Aliases para pageXOffset e pageYOffset.
- **self:** Retorna a janela atual.
- **status:** Define ou retorna o texto na barra de status da janela.
- **top:** Retorna a janela do navegador no topo.

### Métodos:

- **alert():** Exibe uma caixa de alerta com uma mensagem e um botão OK.
- **atob():** Decodifica uma string codificada em base64.
- **blur():** Remove o foco da janela atual.
- **btoa():** Codifica uma string em base64.
- **clearInterval():** Limpa um temporizador definido com setInterval().
- **clearTimeout():** Limpa um temporizador definido com setTimeout().
- **close():** Fecha a janela atual.
- **confirm():** Exibe uma caixa de diálogo com uma mensagem e botões OK e Cancelar.
- **focus():** Define o foco na janela atual.
- **getComputedStyle():** Obtém os estilos CSS computados aplicados a um elemento.
- **getSelection():** Retorna um objeto Selection representando a seleção de texto feita pelo usuário.
- **matchMedia():** Retorna um objeto MediaQueryList representando a string de consulta de mídia CSS especificada.
- **moveBy():** Move uma janela em relação à sua posição atual.
- **moveTo():** Move uma janela para a posição especificada.
- **open():** Abre uma nova janela do navegador.
- **print():** Imprime o conteúdo da janela atual.
- **prompt():** Exibe uma caixa de diálogo que solicita ao visitante uma entrada.
- **requestAnimationFrame():** Solicita ao navegador que chame uma função para atualizar uma animação antes do próximo repintar.
- **resizeBy():** Redimensiona a janela pelo número de pixels especificado.
- **resizeTo():** Redimensiona a janela para a largura e altura especificadas.
- **scroll():** Obsoleto. Este método foi substituído pelo método scrollTo().
- **scrollBy():** Rola o documento pelo número especificado de pixels.
- **scrollTo():** Rola o documento para as coordenadas especificadas.
- **setInterval():** Chama uma função ou avalia uma expressão em intervalos especificados (em milissegundos).
- **setTimeout():** Chama uma função ou avalia uma expressão após um número especificado de milissegundos.
- **stop():** Interrompe o carregamento da janela.

## JAVASCRIPT INTERMEDIARIO - DOCUMENT

- Em JavaScript, o objeto `Document` representa a estrutura de um documento HTML. Ele fornece acesso aos elementos e conteúdos da página, bem como métodos para manipular o documento.

- O objeto `Document` é fundamental para interações com o HTML através do JavaScript.

* O objeto `Document` possui propriedades como `body`, `head`, e métodos como `getElementById()`, `querySelector()`, que permitem manipular elementos HTML e interagir dinamicamente com o conteúdo da página.

* O `Document` também fornece informações sobre a codificação, título e estado de carregamento do documento.

### Propriedades

- **activeElement:** Retorna o elemento atualmente focado no documento.
- **addEventListener():** Anexa um manipulador de eventos ao documento.
- **adoptNode():** Adota um nó de outro documento.
- **anchors:** Retorna uma coleção de todos os elementos `<a>` no documento que têm um atributo name.
- **applets:** Retorna uma coleção de todos os elementos `<applet>` no documento.
- **baseURI:** Retorna o URI base absoluto do documento.
- **body:** Define ou retorna o corpo do documento (o elemento `<body>`).
- **close():** Fecha o fluxo de saída previamente aberto com document.open().
- **cookie:** Retorna todos os pares de nome/valor dos cookies no documento.
- **charset:** Depreciado. Use characterSet em seu lugar. Retorna a codificação de caracteres para o documento.
- **characterSet:** Retorna a codificação de caracteres para o documento.
- **createAttribute():** Cria um nó de atributo.
- **createComment():** Cria um nó de Comentário com o texto especificado.
- **createDocumentFragment():** Cria um nó DocumentFragment vazio.
- **createElement():** Cria um nó Element.
- **createEvent():** Cria um novo evento.
- **createTextNode():** Cria um nó Texto.
- **defaultView:** Retorna o objeto window associado a um documento, ou null se nenhum estiver disponível.
- **designMode:** Controla se o documento inteiro deve ser editável ou não.
- **doctype:** Retorna a Declaração de Tipo de Documento associada ao documento.
- **documentElement:** Retorna o Elemento de Documento do documento (o elemento `<html>`).
- **documentMode:** Retorna o modo usado pelo navegador para renderizar o documento.
- **documentURI:** Define ou retorna a localização do documento.
- **domain:** Retorna o nome de domínio do servidor que carregou o documento.
- **domConfig:** Obsoleto. Retorna a configuração DOM do documento.
- **embeds:** Retorna uma coleção de todos os elementos `<embed>` no documento.
- **execCommand():** Invoca a operação de área de transferência especificada no elemento que está atualmente com foco.
- **forms:** Retorna uma coleção de todos os elementos `<form>` no documento.
- **fullscreenElement:** Retorna o elemento atualmente exibido no modo de tela cheia.
- **fullscreenEnabled():** Retorna um valor booleano indicando se o documento pode ser visualizado no modo de tela cheia.
- **getElementById():** Retorna o elemento que possui o atributo ID com o valor especificado.
- **getElementsByClassName():** Retorna um NodeList contendo todos os elementos com o nome de classe especificado.
- **getElementsByName():** Retorna um NodeList contendo todos os elementos com um nome especificado.
- **getElementsByTagName():** Retorna um NodeList contendo todos os elementos com o nome de tag especificado.
- **hasFocus():** Retorna um valor booleano indicando se o documento tem foco.
- **head:** Retorna o elemento `<head>` do documento.
- **images:** Retorna uma coleção de todos os elementos `<img>` no documento.
- **implementation:** Retorna o objeto DOMImplementation que manipula este documento.
- **importNode():** Importa um nó de outro documento.
- **inputEncoding:** Retorna a codificação usada para o documento.
- **lastModified:** Retorna a data e hora em que o documento foi modificado pela última vez.
- **links:** Retorna uma coleção de todos os elementos `<a>` e `<area>` no documento que têm um atributo href.
- **normalize():** Remove nós de Texto vazios e une nós adjacentes.
- **normalizeDocument():** Remove nós de Texto vazios e une nós adjacentes.
- **open():** Abre um fluxo de saída HTML para coletar a saída de document.write().
- **querySelector():** Retorna o primeiro elemento que corresponde a um seletor CSS específico no documento.
- **querySelectorAll():** Retorna um NodeList estático contendo todos os elementos que correspondem a um seletor CSS específico no documento.
- **readyState:** Retorna o estado de carregamento do documento.
- **referrer:** Retorna a URL do documento que carregou o documento atual.
- **removeEventListener():** Remove um manipulador de eventos do documento (anexado com o método addEventListener()).
- **renameNode():** Renomeia o nó especificado.
- **scripts:** Retorna uma coleção de elementos `<script>` no documento.
- **strictErrorChecking:** Define ou retorna se a verificação de erros está ativada ou desativada.
- **title:** Define ou retorna o título do documento.
- **URL:** Retorna a URL completa do documento HTML.
- **write():** Escreve expressões HTML ou código JavaScript em um documento.
- **writeln():** Mesmo que write(), mas adiciona um caractere de nova linha após cada instrução.

## JAVASCRIPT INTERMEDIARIO - ACESSANDO ELEMENTO HTML COM JS

### getElementById()

- O método `getElementById()` é uma função do objeto `Document` em JavaScript, usada para obter uma referência a um elemento HTML com base no valor do atributo `id`. Ele retorna o primeiro elemento encontrado com o ID especificado ou `null` se nenhum elemento for encontrado.

**Exemplo:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo getElementById</title>
  </head>
  <body>
    <h1 id="titulo">Olá, Mundo!</h1>

    <script>
      // Obtendo o elemento com o ID "titulo"
      var elementoTitulo = document.getElementById("titulo");

      // Modificando o conteúdo do elemento
      elementoTitulo.innerHTML = "Bem-vindo ao meu site!";
    </script>
  </body>
</html>
```

### getElementsByClassName()

- O método `getElementsByClassName()` retorna uma coleção de elementos no documento que possuem uma determinada classe.
- A coleção é uma NodeList, que pode ser iterada para acessar cada elemento individualmente.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo getElementsByClassName</title>
    <style>
      .destaque {
        color: red;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <p class="destaque">Este é um parágrafo destacado.</p>
    <p>Este é um parágrafo normal.</p>

    <script>
      // Obtendo elementos com a classe "destaque"
      var elementosDestaque = document.getElementsByClassName("destaque");

      // Modificando o estilo dos elementos
      for (var i = 0; i < elementosDestaque.length; i++) {
        elementosDestaque[i].style.backgroundColor = "yellow";
      }
    </script>
  </body>
</html>
```

### getElementsByTagName()

- O método getElementsByTagName() retorna uma NodeList de elementos no documento com o nome da tag especificada.
- Ele permite selecionar e manipular todos os elementos com a mesma tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo getElementsByTagName</title>
  </head>
  <body>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <script>
      // Obtendo elementos <li> dentro de <ul>
      var elementosLi = document.getElementsByTagName("li");

      // Modificando o conteúdo dos elementos
      for (var i = 0; i < elementosLi.length; i++) {
        elementosLi[i].innerHTML = "Novo Item " + (i + 1);
      }
    </script>
  </body>
</html>
```

- Esses métodos são úteis para selecionar elementos específicos no DOM e manipulá-los dinamicamente usando JavaScript.

## JAVASCRIPT INTERMEDIARIO - MODIFICANDO ELEMENTOS

### **`innerHTML`**

- A propriedade `innerHTML` em JavaScript é utilizada para obter ou definir o conteúdo HTML de um elemento.
- Quando usada para definir o conteúdo, ela substitui todo o HTML dentro do elemento.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo innerHTML</title>
  </head>
  <body>
    <div id="meuElemento"></div>

    <script>
      // Definindo o conteúdo HTML do elemento
      document.getElementById("meuElemento").innerHTML =
        "<p>Este é um parágrafo criado dinamicamente.</p>";
    </script>
  </body>
</html>
```

### **`innerText`**

- A propriedade `innerText` retorna ou define o texto visível de um elemento, excluindo qualquer formatação HTML.
- Se o conteúdo contiver apenas texto, `innerText` e `textContent` geralmente retornam o mesmo valor.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo innerText</title>
  </head>
  <body>
    <div id="meuTexto">Texto de exemplo.</div>

    <script>
      // Obtendo e exibindo o texto do elemento
      var textoElemento = document.getElementById("meuTexto").innerText;
      console.log(textoElemento); // Saída: Texto de exemplo.

      // Modificando o texto do elemento
      document.getElementById("meuTexto").innerText = "Novo texto.";
    </script>
  </body>
</html>
```

### **`textContent`**

- A propriedade `textContent` é semelhante a `innerText`, mas retorna o texto de todos os elementos, incluindo `<script>` e `<style>`, enquanto `innerText` ignora esses elementos.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo textContent</title>
  </head>
  <body>
    <div id="meuConteudo">Este é um <span>texto</span> de exemplo.</div>

    <script>
      // Obtendo e exibindo o conteúdo do elemento
      var conteudoElemento = document.getElementById("meuConteudo").textContent;
      console.log(conteudoElemento); // Saída: Este é um texto de exemplo.

      // Modificando o conteúdo do elemento
      document.getElementById("meuConteudo").textContent = "Novo conteúdo.";
    </script>
  </body>
</html>
```

- Em resumo, `innerHTML` manipula o conteúdo HTML, `innerText` manipula o texto visível, e `textContent` manipula todo o conteúdo textual, incluindo o texto dentro de elementos aninhados.

## JAVASCRIPT INTERMEDIARIO - EVENTOS

- Os eventos DOM HTML permitem que o JavaScript registre diferentes manipuladores de eventos em elementos em um documento HTML.

- Normalmente, os eventos são usados em combinação com funções, e a função não será executada antes que o evento ocorra (como quando um usuário clica em um botão).

| Evento             | Descrição                                                                                                                      | Tipo de Evento                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| abort              | Ocorre quando o carregamento de uma mídia é abortado                                                                           | UiEvent, Event                |
| afterprint         | Ocorre quando uma página começou a ser impressa                                                                                | Event                         |
| animationend       | Ocorre quando uma animação CSS é concluída                                                                                     | AnimationEvent                |
| animationiteration | Ocorre quando uma animação CSS é repetida                                                                                      | AnimationEvent                |
| animationstart     | Ocorre quando uma animação CSS é iniciada                                                                                      | AnimationEvent                |
| beforeprint        | Ocorre quando uma página está prestes a ser impressa                                                                           | Event                         |
| beforeunload       | Ocorre antes do descarregamento do documento                                                                                   | UiEvent, Event                |
| blur               | Ocorre quando um elemento perde o foco                                                                                         | FocusEvent                    |
| canplay            | Ocorre quando o navegador pode começar a reproduzir a mídia                                                                    | Event                         |
| canplaythrough     | Ocorre quando o navegador pode reproduzir a mídia sem parar para buffering                                                     | Event                         |
| change             | Ocorre quando o conteúdo de um elemento de formulário, a seleção, ou o estado marcado mudam                                    | Event                         |
| click              | Ocorre quando o usuário clica em um elemento                                                                                   | MouseEvent                    |
| contextmenu        | Ocorre quando o usuário clica com o botão direito em um elemento para abrir um menu de contexto                                | MouseEvent                    |
| copy               | Ocorre quando o usuário copia o conteúdo de um elemento                                                                        | ClipboardEvent                |
| cut                | Ocorre quando o usuário corta o conteúdo de um elemento                                                                        | ClipboardEvent                |
| dblclick           | Ocorre quando o usuário clica duas vezes em um elemento                                                                        | MouseEvent                    |
| drag               | Ocorre quando um elemento está sendo arrastado                                                                                 | DragEvent                     |
| dragend            | Ocorre quando o usuário termina de arrastar um elemento                                                                        | DragEvent                     |
| dragenter          | Ocorre quando o elemento arrastado entra na área de destino                                                                    | DragEvent                     |
| dragleave          | Ocorre quando o elemento arrastado deixa a área de destino                                                                     | DragEvent                     |
| dragover           | Ocorre quando o elemento arrastado está sobre a área de destino                                                                | DragEvent                     |
| dragstart          | Ocorre quando o usuário inicia o processo de arrastar um elemento                                                              | DragEvent                     |
| drop               | Ocorre quando o elemento arrastado é solto na área de destino                                                                  | DragEvent                     |
| durationchange     | Ocorre quando a duração da mídia é alterada                                                                                    | Event                         |
| ended              | Ocorre quando a mídia atinge o final (útil para mensagens como "obrigado por ouvir")                                           | Event                         |
| error              | Ocorre quando ocorre um erro durante o carregamento de um arquivo externo                                                      | ProgressEvent, UiEvent, Event |
| focus              | Ocorre quando um elemento recebe foco                                                                                          | FocusEvent                    |
| focusin            | Ocorre quando um elemento está prestes a receber foco                                                                          | FocusEvent                    |
| focusout           | Ocorre quando um elemento está prestes a perder o foco                                                                         | FocusEvent                    |
| fullscreenchange   | Ocorre quando um elemento é exibido no modo de tela cheia                                                                      | Event                         |
| fullscreenerror    | Ocorre quando um elemento não pode ser exibido no modo de tela cheia                                                           | Event                         |
| hashchange         | Ocorre quando há alterações na parte de âncora de uma URL                                                                      | HashChangeEvent               |
| input              | Ocorre quando um elemento recebe entrada do usuário                                                                            | InputEvent, Event             |
| invalid            | Ocorre quando um elemento é inválido                                                                                           | Event                         |
| keydown            | Ocorre quando o usuário pressiona uma tecla                                                                                    | KeyboardEvent                 |
| keypress           | Ocorre quando o usuário pressiona uma tecla (caractere gerado)                                                                 | KeyboardEvent                 |
| keyup              | Ocorre quando o usuário libera uma tecla                                                                                       | KeyboardEvent                 |
| load               | Ocorre quando um objeto foi carregado                                                                                          | UiEvent, Event                |
| loadeddata         | Ocorre quando os dados da mídia são carregados                                                                                 | Event                         |
| loadedmetadata     | Ocorre quando metadados (como dimensões e duração) da mídia são carregados                                                     | Event                         |
| loadstart          | Ocorre quando o navegador começa a procurar a mídia especificada                                                               | ProgressEvent                 |
| message            | Ocorre quando uma mensagem é recebida através da fonte do evento                                                               | Event                         |
| mousedown          | Ocorre quando o usuário pressiona um botão do mouse sobre um elemento                                                          | MouseEvent                    |
| mouseenter         | Ocorre quando o ponteiro é movido sobre um elemento                                                                            | MouseEvent                    |
| mouseleave         | Ocorre quando o ponteiro é movido para fora de um elemento                                                                     | MouseEvent                    |
| mousemove          | Ocorre quando o ponteiro está se movendo enquanto está sobre um elemento                                                       | MouseEvent                    |
| mouseover          | Ocorre quando o ponteiro é movido sobre um elemento ou um de seus filhos                                                       | MouseEvent                    |
| mouseout           | Ocorre quando o ponteiro do mouse é movido para fora de um elemento ou um de seus filhos                                       | MouseEvent                    |
| mouseup            | Ocorre quando o usuário libera um botão do mouse sobre um elemento                                                             | MouseEvent                    |
| mousewheel         | Depreciado. Use o evento wheel em vez disso                                                                                    | WheelEvent                    |
| offline            | Ocorre quando o navegador começa a trabalhar offline                                                                           | Event                         |
| online             | Ocorre quando o navegador começa a trabalhar online                                                                            | Event                         |
| open               | Ocorre quando uma conexão com a fonte do evento é aberta                                                                       | Event                         |
| pagehide           | Ocorre quando o usuário navega para longe de uma página                                                                        | PageTransitionEvent           |
| pageshow           | Ocorre quando o usuário navega para uma página                                                                                 | PageTransitionEvent           |
| paste              | Ocorre quando o usuário cola algum conteúdo em um elemento                                                                     | ClipboardEvent                |
| pause              | Ocorre quando a mídia é pausada, seja pelo usuário ou programaticamente                                                        | Event                         |
| play               | Ocorre quando a mídia foi iniciada ou não está mais pausada                                                                    | Event                         |
| playing            | Ocorre quando a mídia está tocando após ter sido pausada ou interrompida para buffering                                        | Event                         |
| popstate           | Ocorre quando o histórico do navegador muda                                                                                    | PopStateEvent                 |
| progress           | Ocorre quando o navegador está no processo de obter dados da mídia (baixando a mídia)                                          | Event                         |
| ratechange         | Ocorre quando a velocidade de reprodução da mídia é alterada                                                                   | Event                         |
| resize             | Ocorre quando a visualização do documento é redimensionada                                                                     | UiEvent, Event                |
| reset              | Ocorre quando um formulário é resetado                                                                                         | Event                         |
| scroll             | Ocorre quando a barra de rolagem de um elemento está sendo rolada                                                              | UiEvent, Event                |
| search             | Ocorre quando o usuário escreve algo em um campo de pesquisa (para `<input="search">`)                                         | Event                         |
| seeked             | Ocorre quando o usuário termina de mover/pular para uma nova posição na mídia                                                  | Event                         |
| seeking            | Ocorre quando o usuário começa a mover/pular para uma nova posição na mídia                                                    | Event                         |
| select             | Ocorre após o usuário selecionar algum texto (para `<input>` e `<textarea>`)                                                   | UiEvent, Event                |
| show               | Ocorre quando um elemento `<menu>` é exibido como um menu de contexto                                                          | Event                         |
| stalled            | Ocorre quando o navegador está tentando obter dados da mídia, mas os dados não estão disponíveis                               | Event                         |
| storage            | Ocorre quando uma área de armazenamento da Web é atualizada                                                                    | StorageEvent                  |
| submit             | Ocorre quando um formulário é enviado                                                                                          | Event                         |
| suspend            | Ocorre quando o navegador está intencionalmente não obtendo dados da mídia                                                     | Event                         |
| timeupdate         | Ocorre quando a posição de reprodução foi alterada (como quando o usuário avança rapidamente para um ponto diferente na mídia) | Event                         |
| toggle             | Ocorre quando o usuário abre ou fecha o elemento `<details>`                                                                   | Event                         |
| touchcancel        | Ocorre quando o toque é interrompido                                                                                           | TouchEvent                    |
| touchend           | Ocorre quando um dedo é removido de uma tela sensível ao toque                                                                 | TouchEvent                    |
| touchmove          | Ocorre quando um dedo é arrastado pela tela sensível ao toque                                                                  | TouchEvent                    |
| touchstart         | Ocorre quando um dedo é colocado em uma tela sensível ao toque                                                                 | TouchEvent                    |
| transitionend      | Ocorre quando uma transição CSS é concluída                                                                                    | TransitionEvent               |
| unload             | Ocorre quando uma página é descarregada (para `<body>`)                                                                        | UiEvent, Event                |
| volumechange       | Ocorre quando o volume da mídia é alterado (inclui definir o volume como "mudo")                                               | Event                         |
| waiting            | Ocorre quando a mídia está pausada, mas espera-se que retome (como quando a mídia pausa para buffer mais dados)                | Event                         |
| wheel              | Ocorre quando a roda do mouse rola para cima ou para baixo sobre um elemento                                                   | WheelEvent                    |

### PROPRIEDADES E METODOS DE EVENTOS HTML DOM

| Propriedade/ Método        | Descrição                                                                                                                                                  | Tipos de Evento                 |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| altKey                     | Retorna se a tecla "ALT" estava pressionada quando o evento do mouse foi acionado                                                                          | MouseEvent                      |
| altKey                     | Retorna se a tecla "ALT" estava pressionada quando o evento da tecla foi acionado                                                                          | KeyboardEvent, TouchEvent       |
| animationName              | Retorna o nome da animação                                                                                                                                 | AnimationEvent                  |
| bubbles                    | Retorna se um evento específico é um evento de borbulhamento                                                                                               | Event                           |
| button                     | Retorna qual botão do mouse foi pressionado quando o evento do mouse foi acionado                                                                          | MouseEvent                      |
| buttons                    | Retorna quais botões do mouse foram pressionados quando o evento do mouse foi acionado                                                                     | MouseEvent                      |
| cancelable                 | Retorna se um evento pode ter sua ação padrão impedida                                                                                                     | Event                           |
| charCode                   | Retorna o código do caractere Unicode da tecla que acionou o evento onkeypress                                                                             | KeyboardEvent                   |
| changeTouches              | Retorna uma lista de todos os objetos de toque cujo estado mudou entre o toque anterior e este toque                                                       | TouchEvent                      |
| clientX                    | Retorna a coordenada horizontal do ponteiro do mouse, relativa à janela atual, quando o evento do mouse foi acionado                                       | MouseEvent, TouchEvent          |
| clientY                    | Retorna a coordenada vertical do ponteiro do mouse, relativa à janela atual, quando o evento do mouse foi acionado                                         | MouseEvent, TouchEvent          |
| clipboardData              | Retorna um objeto contendo os dados afetados pela operação de área de transferência                                                                        | ClipboardData                   |
| code                       | Retorna o código da tecla que acionou o evento                                                                                                             | KeyboardEvent                   |
| composed                   | Retorna se o evento é composto ou não                                                                                                                      | Event                           |
| createEvent()              | Cria um novo evento                                                                                                                                        | Event                           |
| ctrlKey                    | Retorna se a tecla "CTRL" estava pressionada quando o evento do mouse foi acionado                                                                         | MouseEvent                      |
| ctrlKey                    | Retorna se a tecla "CTRL" estava pressionada quando o evento da tecla foi acionado                                                                         | KeyboardEvent, TouchEvent       |
| currentTarget              | Retorna o elemento cujos ouvintes de evento acionaram o evento                                                                                             | Event                           |
| data                       | Retorna os caracteres inseridos                                                                                                                            | InputEvent                      |
| dataTransfer               | Retorna um objeto contendo os dados sendo arrastados/soltos ou inseridos/removidos                                                                         | DragEvent, InputEvent           |
| defaultPrevented           | Retorna se o método preventDefault() foi chamado para o evento                                                                                             | Event                           |
| deltaX                     | Retorna a quantidade de rolagem horizontal de uma roda de mouse (eixo x)                                                                                   | WheelEvent                      |
| deltaY                     | Retorna a quantidade de rolagem vertical de uma roda de mouse (eixo y)                                                                                     | WheelEvent                      |
| deltaZ                     | Retorna a quantidade de rolagem de uma roda de mouse para o eixo z                                                                                         | WheelEvent                      |
| deltaMode                  | Retorna um número que representa a unidade de medida para os valores delta (pixels, linhas ou páginas)                                                     | WheelEvent                      |
| detail                     | Retorna um número que indica quantas vezes o mouse foi clicado                                                                                             | UiEvent                         |
| elapsedTime                | Retorna o número de segundos que uma animação está sendo executada                                                                                         | AnimationEvent                  |
| elapsedTime                | Retorna o número de segundos que uma transição está sendo executada                                                                                        |                                 |
| eventPhase                 | Retorna qual fase do fluxo de eventos está sendo avaliada no momento                                                                                       | Event                           |
| getTargetRanges()          | Retorna uma matriz contendo intervalos de destino que serão afetados pela inserção/remoção                                                                 | InputEvent                      |
| getModifierState()         | Retorna uma matriz contendo intervalos de destino que serão afetados pela inserção/remoção                                                                 | MouseEvent                      |
| inputType                  | Retorna o tipo da alteração (ou seja, "inserção" ou "remoção")                                                                                             | InputEvent                      |
| isComposing                | Retorna se o estado do evento está em composição ou não                                                                                                    | InputEvent, KeyboardEvent       |
| isTrusted                  | Retorna se um evento é confiável ou não                                                                                                                    | Event                           |
| key                        | Retorna o valor da tecla representada pelo evento                                                                                                          | KeyboardEvent                   |
| key                        | Retorna a chave do item de armazenamento alterado                                                                                                          | StorageEvent                    |
| keyCode                    | Retorna o código do caractere Unicode da tecla que acionou o evento onkeypress, ou o código Unicode da tecla que acionou o evento onkeydown ou onkeyup     | KeyboardEvent                   |
| location                   | Retorna a localização de uma tecla no teclado ou dispositivo                                                                                               | KeyboardEvent                   |
| lengthComputable           | Retorna se o comprimento do progresso pode ser computado ou não                                                                                            | ProgressEvent                   |
| loaded                     | Retorna quanto trabalho foi carregado                                                                                                                      | ProgressEvent                   |
| metaKey                    | Retorna se a tecla "META" estava pressionada quando o evento foi acionado                                                                                  | MouseEvent                      |
| metaKey                    | Retorna se a tecla "meta" estava pressionada quando o evento da tecla foi acionado                                                                         | KeyboardEvent, TouchEvent       |
| MovementX                  | Retorna a coordenada horizontal do ponteiro do mouse em relação à posição do último evento mousemove                                                       | MouseEvent                      |
| MovementY                  | Retorna a coordenada vertical do ponteiro do mouse em relação à posição do último evento mousemove                                                         | MouseEvent                      |
| newValue                   | Retorna o novo valor do item de armazenamento alterado                                                                                                     | StorageEvent                    |
| newURL                     | Retorna o URL do documento, após a alteração do hash                                                                                                       | HasChangeEvent                  |
| offsetX                    | Retorna a coordenada horizontal do ponteiro do mouse em relação à posição da borda do elemento de destino                                                  | MouseEvent                      |
| offsetY                    | Retorna a coordenada vertical do ponteiro do mouse em relação à posição da borda do elemento de destino                                                    | MouseEvent                      |
| oldValue                   | Retorna o valor antigo do item de armazenamento alterado                                                                                                   | StorageEvent                    |
| oldURL                     | Retorna o URL do documento, antes da alteração do hash                                                                                                     | HasChangeEvent                  |
| onemptied                  | O evento ocorre quando algo ruim acontece e o arquivo de mídia está subitamente indisponível                                                               |                                 |
| pageX                      | Retorna a coordenada horizontal do ponteiro do mouse, relativa ao documento, quando o evento do mouse foi acionado                                         | MouseEvent                      |
| pageY                      | Retorna a coordenada vertical do ponteiro do mouse, relativa ao documento, quando o evento do mouse foi acionado                                           | MouseEvent                      |
| persisted                  | Retorna se a página da web foi armazenada em cache pelo navegador                                                                                          | PageTransitionEvent             |
| preventDefault()           | Cancela o evento se for cancelável, o que significa que a ação padrão pertencente ao evento não ocorrerá                                                   | Event                           |
| propertyName               | Retorna o nome da propriedade CSS associada à animação ou transição                                                                                        | AnimationEvent, TransitionEvent |
| pseudoElement              | Retorna o nome do pseudo-elemento da animação ou transição                                                                                                 | AnimationEvent, TransitionEvent |
| region                     | MouseEvent                                                                                                                                                 |                                 |
| relatedTarget              | Retorna o elemento relacionado ao elemento que acionou o evento do mouse                                                                                   | MouseEvent                      |
| relatedTarget              | Retorna o elemento relacionado ao elemento que acionou o evento                                                                                            | FocusEvent                      |
| repeat                     | Retorna se uma tecla está sendo pressionada repetidamente ou não                                                                                           | KeyboardEvent                   |
| screenX                    | Retorna a coordenada horizontal do ponteiro do mouse, relativa à tela, quando um evento foi acionado                                                       | MouseEvent                      |
| screenY                    | Retorna a coordenada vertical do ponteiro do mouse, relativa à tela, quando um evento foi acionado                                                         | MouseEvent                      |
| shiftKey                   | Retorna se a tecla "SHIFT" estava pressionada quando um evento foi acionado                                                                                | MouseEvent                      |
| shiftKey                   | Retorna se a tecla "SHIFT" estava pressionada quando o evento da tecla foi acionado                                                                        | KeyboardEvent, TouchEvent       |
| state                      | Retorna um objeto contendo uma cópia das entradas de histórico                                                                                             | PopStateEvent                   |
| stopImmediatePropagation() | Impede que outros ouvintes do mesmo evento sejam chamados                                                                                                  | Event                           |
| stopPropagation()          | Impede a propagação adicional de um evento durante o fluxo de eventos                                                                                      | Event                           |
| storageArea                | Retorna um objeto representando o objeto de armazenamento afetado                                                                                          | StorageEvent                    |
| target                     | Retorna o elemento que acionou o evento                                                                                                                    | Event                           |
| targetTouches              | Retorna uma lista de todos os objetos de toque que estão em contato com a superfície e onde o evento touchstart ocorreu no mesmo elemento de destino atual | TouchEvent                      |
| timeStamp                  | Retorna o tempo (em milissegundos em relação à época) em que o evento foi criado                                                                           | Event                           |
| total                      | Retorna a quantidade total de trabalho que será carregada                                                                                                  | ProgressEvent                   |
| touches                    | Retorna uma lista de todos os objetos de toque que estão atualmente em contato com a superfície                                                            | TouchEvent                      |
| transitionend              | O evento ocorre quando uma transição CSS é concluída                                                                                                       | TransitionEvent                 |
| type                       | Retorna o nome do evento                                                                                                                                   | Event                           |
| url                        | Retorna o URL do documento do item alterado                                                                                                                | StorageEvent                    |
| which                      | Retorna qual botão do mouse foi pressionado quando o evento do mouse foi acionado                                                                          | MouseEvent                      |
| which                      | Retorna o código Unicode do caractere da tecla que acionou o evento onkeypress, ou o código Unicode da tecla que acionou o evento onkeydown ou onkeyup     | KeyboardEvent                   |
| view                       | Retorna uma referência ao objeto Window onde o evento ocorreu                                                                                              | UiEvent                         |

### OUTROS EVENTOS

1. `onclick`:

   - Descrição: O evento onclick ocorre quando um elemento é clicado pelo mouse.

```html
<button onclick="alert('Botão clicado!')">Clique em mim</button>
<!--Neste exemplo, uma caixa de diálogo de alerta será exibida quando o botão for clicado.-->
```

2. `onchange`:

   - Descrição: O evento onchange é acionado quando o valor de um elemento de formulário, como `<input>`, `<select>` ou `<textarea>`, é alterado e o elemento perde o foco.

```html
<select onchange="mostrarSelecao()">
  <option value="opcao1">Opção 1</option>
  <option value="opcao2">Opção 2</option>
</select>
<script>
  function mostrarSelecao() {
    var selecionado = document.querySelector("select").value;
    alert("Opção selecionada: " + selecionado);
  }
</script>

<!--Neste exemplo, uma caixa de diálogo de alerta será exibida quando a opção no menu suspenso for alterada.-->
```

3. `oninput`:

   - Descrição: O evento oninput ocorre imediatamente quando o valor de um elemento de entrada (`<input>`, `<textarea>`, etc.) é alterado, antes de perder o foco ou ser confirmado.

```html
<input type="text" oninput="mostrarInput(this.value)" />
<script>
  function mostrarInput(valor) {
    console.log("Texto digitado: " + valor);
  }
</script>

<!--Neste exemplo, a cada digitação no campo de texto, a função mostrarInput é chamada, exibindo o texto no console.
-->
```

- Esses eventos são frequentemente utilizados para melhorar a interatividade em páginas da web, permitindo que ações específicas sejam executadas em resposta às interações do usuário.

4. `onload`:

   - Descrição: O evento `onload` é acionado quando um elemento ou toda a página é completamente carregado.

```html
<body onload="carregouPagina()">
  <h1>Página Carregada</h1>
</body>
<script>
  function carregouPagina() {
    alert("A página foi completamente carregada!");
  }
</script>

<!--Neste exemplo, uma caixa de diálogo de alerta será exibida assim que a página for totalmente carregada.
-->
```

5. `onmouseover`:

   - Descrição: O evento `onmouseover` é acionado quando o cursor do mouse entra na área de um elemento

```html
<button onmouseover="destacarBotao(this)" onmouseout="restaurarBotao(this)">
  Passe o mouse sobre mim
</button>
<script>
  function destacarBotao(elemento) {
    elemento.style.backgroundColor = "yellow";
  }

  function restaurarBotao(elemento) {
    elemento.style.backgroundColor = "";
  }
</script>

<!--Neste exemplo, o botão terá um destaque amarelo quando o cursor do mouse estiver sobre ele e voltará ao estado normal quando o mouse sair.
-->
```

6. `onmouseout`:

   - Descrição: O evento `onmouseout` é acionado quando o cursor do mouse deixa a área de um elemento.

```html
<img
  src="imagem.jpg"
  onmouseover="exibirLegenda(this)"
  onmouseout="ocultarLegenda(this)"
/>
<div id="legenda"></div>
<script>
  function exibirLegenda(imagem) {
    document.getElementById("legenda").innerHTML = "Clique para ampliar";
  }

  function ocultarLegenda() {
    document.getElementById("legenda").innerHTML = "";
  }
</script>

<!--
  Neste exemplo, uma legenda será exibida quando o mouse estiver sobre a imagem e será ocultada quando o mouse sair.
-->
```

7. `addEventListener`:

   - Descrição: `addEventListener` é um método utilizado em JavaScript para anexar um ouvinte de evento a um elemento HTML, permitindo que você trate eventos, como cliques de mouse, teclas pressionadas, entre outros. Ele oferece mais flexibilidade do que os atributos de evento tradicionais (`onclick`, `onmouseover`, etc.), pois permite a adição de vários ouvintes para o mesmo tipo de evento em um único elemento.

### Uso / Exemplo

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="./js/script.js"></script>
  </head>
  <body onload="loaded()">
    <h1 id="titulo">Teste</h1>
  </body>
</html>
```

**JS**

```js
function loaded() {
  let t = document.getElementById("titulo");
  // t.onclick = mudarTexto;
  t.addEventListener("mouseover", mudarTexto);
  t.addEventListener("mouseout", mouseout);
}

function mudarTexto() {
  this.innerHTML = "novo Texto";
}

function mouseout() {
  this.innerHTML = "Mouse fora do elemento";
}
```

## JAVASCRIPT INTERMEDIARIO - COMPARANDO AS MANEIRAS DE CRIAR UM EVENTO

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="./js/script.js"></script>
  </head>
  <body>
    <h1 onclick="f(this)">Teste</h1>
  </body>
</html>
```

**JS**

```js
function f(e) {
  console.log("teste");
  console.log(e);
  console.log(this);
}

function f1(e) {
  console.log("teste f1");
  console.log(e);
  console.log(e.target);
  console.log(this);
}

window.onload = function () {
  let h1 = document.getElementById("h1")[0];
  h1.addEventListener("click", f);
};
```

## JAVASCRIPT INTERMEDIARIO - ELEMNTOS PAI E filhos

1. **`children`**:
   - **Descrição**: A propriedade `children` em JavaScript é utilizada em elementos do DOM para obter uma coleção de todos os elementos filhos que são nós Element, ignorando nós de texto e comentário. Esta propriedade retorna uma coleção `HTMLCollection`.

```html
<div id="pai">
  <p>Filho 1</p>
  <p>Filho 2</p>
  <p>Filho 3</p>
</div>

<script>
  // Seleciona o elemento pai
  var elementoPai = document.getElementById("pai");

  // Obtém a coleção de elementos filhos
  var filhos = elementoPai.children;

  // Itera sobre os elementos filhos e exibe seus textos
  for (var i = 0; i < filhos.length; i++) {
    console.log(filhos[i].textContent);
  }
</script>
<!-- Neste exemplo, a propriedade children é utilizada para obter os elementos filhos do elemento pai (div) e, em seguida, um loop é usado para exibir o texto de cada elemento filho. -->
```

2. `parentElement`:

   - **Descrição**: A propriedade `parentElement` é usada para obter o nó pai de um determinado elemento no DOM.

```html
<div id="pai">
  <p id="filho">Eu sou um filho</p>
</div>

<script>
  // Seleciona o elemento filho
  var elementoFilho = document.getElementById("filho");

  // Obtém o elemento pai
  var elementoPai = elementoFilho.parentElement;

  // Exibe o ID do elemento pai
  console.log("ID do pai:", elementoPai.id);
</script>

<!-- Neste exemplo, a propriedade parentElement é usada para obter o elemento pai do parágrafo (<p>), e então o ID desse elemento pai é exibido no console. -->
```

### MAIS UM Exemplo

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="./js/script.js"></script>
  </head>
  <body>
    <div id="d1">
      <h1>Titulo 1</h1>
      <p>qualquer texto 1</p>
    </div>
    <div id="d2">
      <h1>Titulo 2</h1>
      <p>qualquer texto 2</p>
    </div>
  </body>
</html>
```

**JS**

```js
window.onload = function () {
  let h1 = document.getElementsByTagName("h1");
  for (h of h1) {
    console.log(h);
    h.addEventListener("click", qop);
  }

  function qop() {
    let t = e.target;
    console.log(t.parentElement);
  }
};
```

## JAVASCRIPT INTERMEDIARIO - BIBLIOTECA MATH

- A biblioteca `Math` em JavaScript fornece um conjunto de funções matemáticas e constantes pré-definidas para realizar operações matemáticas comuns. Essas funções estão incorporadas na linguagem e podem ser usadas para realizar cálculos numéricos. Abaixo estão algumas das principais funções e constantes oferecidas pela biblioteca `Math`:

### MÉTODOS DO OBJETO MATH

| Método             | Descrição                                                                |
| ------------------ | ------------------------------------------------------------------------ |
| `Math.abs(x)`      | Retorna o valor absoluto de x.                                           |
| `Math.acos(x)`     | Retorna o arco cosseno de x em radianos.                                 |
| `Math.asin(x)`     | Retorna o arco seno de x em radianos.                                    |
| `Math.atan(x)`     | Retorna a arcotangente de x como um valor entre -PI/2 e PI/2 radianos.   |
| `Math.atan2(y, x)` | Retorna a arcotangente do quociente de seus argumentos.                  |
| `Math.ceil(x)`     | Retorna o valor de x arredondado para cima para o inteiro mais próximo.  |
| `Math.cos(x)`      | Retorna o cosseno de x (onde x está em radianos).                        |
| `Math.exp(x)`      | Retorna o valor de E elevado à potência de x.                            |
| `Math.floor(x)`    | Retorna o valor de x arredondado para baixo para o inteiro mais próximo. |
| `Math.log(x)`      | Retorna o logaritmo natural (base E) de x.                               |
| `Math.max(...)`    | Retorna o número com o valor mais alto entre os argumentos.              |
| `Math.min(...)`    | Retorna o número com o valor mais baixo entre os argumentos.             |
| `Math.pow(x, y)`   | Retorna o valor de x elevado à potência de y.                            |
| `Math.random()`    | Retorna um número aleatório entre 0 e 1.                                 |
| `Math.round(x)`    | Retorna o valor de x arredondado para o inteiro mais próximo.            |
| `Math.sin(x)`      | Retorna o seno de x (onde x está em radianos).                           |
| `Math.sqrt(x)`     | Retorna a raiz quadrada de x.                                            |
| `Math.tan(x)`      | Retorna a tangente de um ângulo x.                                       |

### PROPRIEDADES DO OBJETO MATH

| Propriedade | Descrição                                                    |
| ----------- | ------------------------------------------------------------ |
| `E`         | Retorna o número de Euler (aproximadamente 2.718).           |
| `LN2`       | Retorna o logaritmo natural de 2 (aproximadamente 0.693).    |
| `LN10`      | Retorna o logaritmo natural de 10 (aproximadamente 2.302).   |
| `LOG2E`     | Retorna o logaritmo na base 2 de E (aproximadamente 1.442).  |
| `LOG10E`    | Retorna o logaritmo na base 10 de E (aproximadamente 0.434). |
| `PI`        | Retorna o valor de PI (aproximadamente 3.14).                |
| `SQRT1_2`   | Retorna a raiz quadrada de 1/2 (aproximadamente 0.707).      |
| `SQRT2`     | Retorna a raiz quadrada de 2 (aproximadamente 1.414).        |

## JAVASCRIPTION INTERMEDIARIONS - JSON

- O JSON (JavaScript Object Notation) é um formato de dados leve e de fácil leitura. Ele é usado para representar dados estruturados como pares chave/valor e arrays em texto. JSON é comumente usado para transmitir dados entre um servidor e um cliente, como uma alternativa mais leve ao XML.

```json
{
  "nome": "John Doe",
  "idade": 30,
  "cidade": "Exemploville",
  "ativo": true,
  "hobbies": ["leitura", "esportes", "programação"]
}
```

```json
[
  {
    "titulo": "Livro A",
    "autor": "Autor A",
    "ano": 2020
  },
  {
    "titulo": "Livro B",
    "autor": "Autor B",
    "ano": 2019
  },
  {
    "titulo": "Livro C",
    "autor": "Autor C",
    "ano": 2021
  }
]
```

Principais características do JSON:

- **Leitura Simples**: Os dados no formato JSON são fáceis de ler e escrever para humanos.

- **Independente de Linguagem**: Pode ser interpretado por qualquer linguagem de programação que tenha suporte para manipulação de strings.

- **Estrutura Chave/Valor**: Os dados são representados como pares chave/valor, proporcionando uma estrutura hierárquica.

* **Suporte para Tipos de Dados Primitivos**: Suporta strings, números, objetos, arrays, booleanos e valores nulos.

O JSON é amplamente utilizado na comunicação entre cliente e servidor na web, armazenamento de configurações e troca de dados entre diferentes sistemas.

## JAVASCRIPT INTERMEDIARIO - LOCAL STORAGE - PERSISTENCIA DE DADOS

- O Local Storage é uma forma de armazenamento de dados no navegador da web, permitindo que os dados persistam mesmo após a página ser recarregada ou fechada. Ele fornece uma interface simples de chave-valor para armazenar dados localmente no navegador do usuário.

```js
// Salvando dados no Local Storage
localStorage.setItem("usuario", "JohnDoe");
localStorage.setItem("pontuacao", 1500);

// Recuperando dados do Local Storage
const usuario = localStorage.getItem("usuario");
const pontuacao = localStorage.getItem("pontuacao");
```

```js
// Salvando um objeto JSON no Local Storage
const config = {
  tema: "escuro",
  idioma: "pt-BR",
  notificacoes: true,
};
localStorage.setItem("configuracao", JSON.stringify(config));

// Recuperando e convertendo o objeto JSON
const configSalva = localStorage.getItem("configuracao");
const configuracao = JSON.parse(configSalva);
```

### PRINCIPAIS CARACTERISTICAS DO LOCAL STRORAGE;

1. **Persistência de Dados**: Os dados armazenados no Local Storage permanecem disponíveis mesmo quando a página é fechada e reaberta.

2. **Limite de Armazenamento**: O Local Storage tem um limite significativo de armazenamento, geralmente em torno de 5 a 10 MB por domínio.

3. **Interface Simples**: O acesso ao Local Storage é feito por meio de uma interface simples de chave-valor, sem a necessidade de bibliotecas adicionais.

4) **Origem do Domínio**: Os dados do Local Storage são específicos para o protocolo, domínio e porta do site de origem.

O Local Storage é comumente usado para armazenar configurações de usuário, dados de preferências e outras informações que devem persistir localmente no navegador.

### PRINCIPAIS METODOS DO LOCAL STORAGE

- O Local Storage fornece uma interface simples de chave-valor para armazenar dados localmente no navegador. Aqui estão alguns dos principais métodos do Local Storage:

1. `setItem(key, value)`
   - Armazena um par chave-valor no Local Storage.

```js
localStorage.setItem("usuario", "JohnDoe");
```

2. `getItem(key)`
   - Recupera o valor associado à chave especificada no Local Storage.

```js
const usuario = localStorage.getItem("usuario");
```

3. `removeItem(key)`
   - Remove o par chave-valor associado à chave especificada do Local Storage.

```js
localStorage.removeItem("usuario");
```

4. `clear()`
   - Remove todos os pares chave-valor do Local Storage, esvaziando-o.

```js
localStorage.clear();
```

5. `key(index)`
   - Retorna o nome da chave no índice especificado. Útil para iterar sobre todas as chaves no Local Storage.

```js
const primeiraChave = localStorage.key(0);
```

- É importante notar que os valores armazenados no Local Storage são sempre tratados como strings. Se você precisar armazenar objetos JavaScript, é comum usar `JSON.stringify` para converter o objeto em uma string antes de armazená-lo e `JSON.parse` para convertê-lo de volta para um objeto ao recuperá-lo.

## JAVASCRIPT INTERMEDIARIO - CRIANDO UMA PAGINA DE SORTEIO

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="./js/script.js"></script>
  </head>
  <body>
    <h1 id="d"></h1>
    <button onclick="sortear()">Sortear</button>
  </body>
</html>
```

**JS**

```js
let pessoas = ["a", "b", "c", "d", "e"];

function sortear() {
  let np = pessoas.length;
  let ns = Math.floor(Math.random() * np);
  document.getElementById("d").innerHTML = pessoas[ns];
}
```

## JAVASCRIPT INTERMEDIARIO - TIMER E INTERVALO

- Em JavaScript, você pode usar os seguintes métodos para lidar com timers e intervalos:

1. **`setTimeout(callback, delay)`**

   - Executa a função de retorno de chamada após um determinado atraso, especificado em milissegundos.

```js
setTimeout(function () {
  console.log("Executou após 2 segundos");
}, 2000);
```

2. **`setInterval(callback, interval)`**

   - Executa a função de retorno de chamada repetidamente em intervalos fixos, especificados em milissegundos.

```js
setInterval(function () {
  console.log("Executará a cada 3 segundos");
}, 3000);
```

3. **`clearTimeout(timeoutId)`**

   - Cancela a execução de um `setTimeout` antes que o código seja executado.

```js
const timeoutId = setTimeout(function () {
  console.log("Isso não será executado");
}, 2000);

clearTimeout(timeoutId);
```

3. **`clearInterval(intervalId)`**

   - Cancela a execução de um `setInterval`, interrompendo a repetição..

```js
const intervalId = setInterval(function () {
  console.log("Isso será executado a cada 3 segundos");
}, 3000);

clearInterval(intervalId);
```

- Esses métodos são úteis para criar animações, atualizações periódicas e lidar com tarefas assíncronas em JavaScript. Certifique-se de compreender como funcionam os timers e intervalos para evitar problemas como vazamento de memória e execução não desejada de código.
