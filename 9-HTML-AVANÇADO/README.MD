## HTML AVANÇADO - ATRIBUTOS PERSONALIZADOS

- Os atributos personalizados permitem que desenvolvedores criem atributos específicos para suas necessidades, fornecendo uma maneira flexível de estender a semântica de elementos HTML. Esses atributos geralmente começam com "data-" seguido por um nome descritivo.

### Definição:

- Atributos Personalizados:
  - São atributos adicionados a elementos HTML para fornecer informações personalizadas e estender a funcionalidade.
  - Iniciam com "data-" seguido por um nome descritivo.
  - Podem ser acessados via JavaScript e CSS.

### Exemplos

**HTML**

```html
<div data-user-id="123" data-analytics="page-view">Conteúdo da Div</div>
<!--Neste exemplo, data-user-id e data-analytics são atributos personalizados-->
```

**JS**

```js
const div = document.getElementByTagName("div");
const userId = div.dataset.userId;
const analyticsType = div.dataset.analytics;
console.log(userId, analyticsType);
//Aqui, você pode acessar os valores dos atributos personalizados usando a propriedade dataset em JavaScript.
```

**CSS**

```css
div[data-analytics="page-view"] {
  background-color: lightblue;
}
/*CSS pode ser usado para estilizar elementos com base em valores de atributos personalizados.*/
```

- Os atributos personalizados são úteis quando você precisa armazenar metadados específicos do aplicativo no código HTML, facilitando a comunicação entre HTML, JavaScript e CSS de uma maneira mais organizada e semântica.

## HTML AVANÇADO - VIDEO

- A tag `<video>` em HTML é usada para incorporar vídeos diretamente em uma página da web. Ela suporta vários atributos que permitem personalizar a reprodução do vídeo. Aqui estão alguns atributos comuns:

1. **`controls`**: Adiciona controles de reprodução padrão, como play, pause, e barra de progresso.

```html
<video width="640" height="360" controls>
  <source src="exemplo.mp4" type="video/mp4" />
  Seu navegador não suporta o elemento de vídeo.
</video>
```

2. **`autoplay`**: Inicia a reprodução automática do vídeo assim que a página é carregada.

```html
<video width="640" height="360" autoplay>
  <source src="exemplo.mp4" type="video/mp4" />
  Seu navegador não suporta o elemento de vídeo.
</video>
```

3. **`muted`**: Inicia o vídeo sem áudio. É comumente usado em vídeos que devem ser reproduzidos automaticamente, mas sem som.

```html
<video width="640" height="360" autoplay muted>
  <source src="exemplo.mp4" type="video/mp4" />
  Seu navegador não suporta o elemento de vídeo.
</video>
```

4. **`poster`**: Define uma imagem de capa que é exibida antes de o vídeo ser reproduzido.

```html
<video width="640" height="360" poster="capa.jpg">
  <source src="exemplo.mp4" type="video/mp4" />
  Seu navegador não suporta o elemento de vídeo.
</video>
```

5. **`preload`**: Especifica como o vídeo deve ser carregado. Os valores comuns são `"none"`, `"metadata"`, e `"auto"`.

```html
<video width="640" height="360" preload="auto">
  <source src="exemplo.mp4" type="video/mp4" />
  Seu navegador não suporta o elemento de vídeo.
</video>
```

- Certifique-se de substituir "exemplo.mp4" pelos caminhos reais dos seus arquivos de vídeo e "capa.jpg" pela imagem de capa desejada. Lembre-se de que a reprodução automática, especialmente com som, pode ser intrusiva e é desativada em muitos navegadores por padrão. Use com cautela.

### EXEMPLO DE VIDEO COM CONTROLE CUSTOMIZADO

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      /* Estilizando a área do vídeo */
      .video-container {
        position: relative;
        max-width: 800px;
        margin: auto;
      }

      /* Estilizando o vídeo em si */
      video {
        width: 100%;
        height: auto;
        display: block;
      }

      /* Estilizando os controles personalizados */
      .custom-controls {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.7);
        padding: 10px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        width: 80%;
        opacity: 0; /* Inicialmente invisível */
        transition: opacity 0.3s ease;
      }

      /* Exibindo os controles quando o vídeo está em foco */
      .video-container:hover .custom-controls {
        opacity: 1;
      }

      /* Estilizando os botões de controle */
      .custom-controls button {
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="video-container">
      <video id="custom-video" controls>
        <source src="exemplo.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>

      <!-- Controles Personalizados -->
      <div class="custom-controls">
        <button onclick="skipBackward()">&lt;&lt;</button>
        <button onclick="togglePlay()">Play</button>
        <button onclick="togglePause()">Pause</button>
        <button onclick="skipForward()">&gt;&gt;</button>
      </div>
    </div>

    <script>
      const video = document.getElementById("custom-video");

      function togglePlay() {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }

      function togglePause() {
        video.pause();
      }

      function skipBackward() {
        video.currentTime -= 5; // Retrocede 5 segundos
      }

      function skipForward() {
        video.currentTime += 5; // Avança 5 segundos
      }
    </script>
  </body>
</html>
```

- Neste exemplo, o JavaScript adicionado controla a reprodução, pausa, avanço e retrocesso do vídeo. Os botões de controle agora têm funções associadas que manipulam o estado do vídeo.

### Métodos de áudio/vídeo HTML

| Método         | Descrição                                                                |
| -------------- | ------------------------------------------------------------------------ |
| addTextTrack() | Adiciona uma nova faixa de texto ao áudio/vídeo                          |
| canPlayType()  | Verifica se o navegador pode reproduzir o tipo específico de áudio/vídeo |
| load()         | Recarrega o elemento de áudio/vídeo                                      |
| play()         | Inicia a reprodução do áudio/vídeo                                       |
| pause()        | Pausa o áudio/vídeo que está sendo reproduzido                           |

### Propriedades de áudio/vídeo HTML

| Propriedade         | Descrição                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| audioTracks         | Retorna um objeto AudioTrackList representando as faixas de áudio disponíveis                                  |
| autoplay            | Define ou retorna se o áudio/vídeo deve começar a ser reproduzido assim que for carregado                      |
| buffered            | Retorna um objeto TimeRanges representando as partes em buffer do áudio/vídeo                                  |
| controller          | Retorna o objeto MediaController representando o controlador de mídia atual do áudio/vídeo                     |
| controls            | Define ou retorna se o áudio/vídeo deve exibir controles (como play/pause etc.)                                |
| crossOrigin         | Define ou retorna as configurações de CORS do áudio/vídeo                                                      |
| currentSrc          | Retorna a URL do áudio/vídeo atual                                                                             |
| currentTime         | Define ou retorna a posição atual de reprodução no áudio/vídeo (em segundos)                                   |
| defaultMuted        | Define ou retorna se o áudio/vídeo deve estar silenciado por padrão                                            |
| defaultPlaybackRate | Define ou retorna a velocidade padrão de reprodução do áudio/vídeo                                             |
| duration            | Retorna o comprimento do áudio/vídeo atual (em segundos)                                                       |
| ended               | Retorna se a reprodução do áudio/vídeo terminou ou não                                                         |
| error               | Retorna um objeto MediaError representando o estado de erro do áudio/vídeo                                     |
| loop                | Define ou retorna se o áudio/vídeo deve começar novamente quando terminar                                      |
| mediaGroup          | Define ou retorna o grupo ao qual o áudio/vídeo pertence (usado para vincular vários elementos de áudio/vídeo) |
| muted               | Define ou retorna se o áudio/vídeo está silenciado ou não                                                      |
| networkState        | Retorna o estado de rede atual do áudio/vídeo                                                                  |
| paused              | Retorna se o áudio/vídeo está pausado ou não                                                                   |
| playbackRate        | Define ou retorna a velocidade de reprodução do áudio/vídeo                                                    |
| played              | Retorna um objeto TimeRanges representando as partes reproduzidas do áudio/vídeo                               |
| preload             | Define ou retorna se o áudio/vídeo deve ser carregado quando a página é carregada                              |
| readyState          | Retorna o estado de pronto atual do áudio/vídeo                                                                |
| seekable            | Retorna um objeto TimeRanges representando as partes navegáveis do áudio/vídeo                                 |
| seeking             | Retorna se o usuário está atualmente buscando no áudio/vídeo                                                   |
| src                 | Define ou retorna a fonte atual do elemento de áudio/vídeo                                                     |
| startDate           | Retorna um objeto Date representando o deslocamento de tempo atual                                             |
| textTracks          | Retorna um objeto TextTrackList representando as faixas de texto disponíveis                                   |
| videoTracks         | Retorna um objeto VideoTrackList representando as faixas de vídeo disponíveis                                  |
| volume              | Define ou retorna o volume do áudio/vídeo                                                                      |

## HTML AVANÇADO - IFRAME

- A tag `<iframe>` (Inline Frame) é usada para incorporar outra página HTML dentro de uma página atual. Essa tag é útil para incluir conteúdo de outras fontes, como vídeos do YouTube, mapas do Google, ou qualquer outra página da web.

### USO/ EXEMPLOS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Iframe</title>
  </head>
  <body>
    <h1>Página Principal</h1>

    <!-- Exemplo de iframe incorporando o Google Maps -->
    <iframe
      width="600"
      height="450"
      frameborder="0"
      style="border:0"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22418.635212704047!2d-0.12548722084847155!3d51.50853081957701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b090baf20c5%3A0x41bbfd49c06823d!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1632905388993!5m2!1sen!2suk"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    <!--Neste exemplo, um iframe está incorporando um mapa do Google Maps. Os atributos width e height definem as dimensões do iframe, e o atributo src especifica a URL da página que será incorporada. O exemplo mostra um mapa do Big Ben em Londres.-->
  </body>
</html>
```

- Lembre-se de substituir o valor do atributo src pelo URL do conteúdo que você deseja incorporar.

### USO/ EXEMPLOS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Iframe para Vídeo do YouTube</title>
  </head>
  <body>
    <h1>Página Principal</h1>

    <!-- Exemplo de iframe incorporando um vídeo do YouTube -->
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <!--Neste exemplo, o iframe está incorporando um vídeo do YouTube. O atributo src contém o URL incorporável do vídeo desejado. Certifique-se de substituir o valor desse atributo pelo URL do vídeo do YouTube que você deseja incorporar.;-->
  </body>
</html>
```

- Os atributos width e height definem as dimensões do iframe, e os atributos allow especificam permissões extras para o conteúdo do iframe, como reprodução automática e visualização em tela cheia.

- Este é apenas um exemplo básico, e você pode personalizar os atributos conforme necessário para atender aos requisitos específicos do seu projeto.

## HTML AVANÇADO - AUDIO

- O elemento `<audio>` em HTML é utilizado para incorporar arquivos de áudio diretamente nas páginas web. Ele oferece suporte a vários formatos de áudio e pode ser personalizado com diferentes atributos para atender às necessidades específicas.

### USO/ EXEMPLOS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Elemento &lt;audio&gt;</title>
  </head>
  <body>
    <h1>Reprodução de Áudio</h1>

    <!-- Exemplo de uso do elemento <audio> -->
    <audio controls>
      <source src="exemplo.mp3" type="audio/mp3" />
      Seu navegador não suporta o elemento de áudio.
    </audio>
  </body>
</html>
```

- O atributo controls adiciona controles de reprodução padrão (play, pause, volume, etc.) ao elemento `<audio>`.

- O elemento `<source>` é usado para especificar diferentes formatos de áudio para navegadores que suportam tipos de arquivo diferentes. Certifique-se de substituir "exemplo.mp3" pelo caminho do seu próprio arquivo de áudio.

- O texto dentro do elemento `<audio>` será exibido se o navegador não suportar o elemento de áudio.

## HTML AVANÇADO - ANIMAÇÕES HTML

### USO/ EXEMPLOS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      /* Estilizando o elemento a ser animado */
      .rotacionar {
        width: 100px;
        height: 100px;
        background-color: lightblue;
      }
    </style>
    <title>Exemplo de Animação</title>
  </head>
  <body>
    <h1>Animação com JavaScript</h1>

    <!-- Elemento que será animado -->
    <div class="rotacionar"></div>

    <script>
      // Selecionando o elemento
      const elementoRotacionar = document.querySelector(".rotacionar");

      // Função para animar a rotação
      function animarRotacao(graus) {
        elementoRotacionar.style.transform = `rotate(${graus}deg)`;
      }

      // Função para animação contínua
      function iniciarAnimacao() {
        let graus = 0;
        setInterval(() => {
          graus += 1;
          animarRotacao(graus);
        }, 16); // Atualizar a cada 16 milissegundos para obter uma animação suave (aproximadamente 60 FPS)
      }

      // Iniciar a animação quando a página carregar
      window.onload = iniciarAnimacao;
    </script>
  </body>
</html>
```

- Neste exemplo, a função animarRotacao é chamada a cada intervalo de tempo, alterando gradualmente o ângulo de rotação do elemento. A animação continua indefinidamente, dando a ilusão de rotação contínua.

## HTML AVANÇADO - CANVAS - INTRO + LINHAS

- O elemento `<canvas>` HTML fornece uma superfície gráfica onde você pode desenhar gráficos, animações e outros elementos visuais usando JavaScript. Aqui está uma introdução básica ao uso de `<canvas>` para desenhar linhas.

### USO/ EXEMPLOS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Canvas Example</title>
    <style>
      canvas {
        border: 1px solid #000;
      }
    </style>
  </head>
  <body>
    <canvas id="myCanvas" width="300" height="150"></canvas>

    <script>
      // Obtendo o contexto 2D do canvas
      const canvas = document.getElementById("myCanvas");
      const context = canvas.getContext("2d");

      // Desenhando uma linha simples
      context.beginPath();
      context.moveTo(50, 50); // Move para as coordenadas (50, 50)
      context.lineTo(250, 100); // Desenha uma linha até as coordenadas (250, 100)
      context.stroke(); // Aplica o contorno

      // Adicionando outra linha
      context.beginPath();
      context.moveTo(50, 100);
      context.lineTo(250, 50);
      context.stroke();
    </script>
  </body>
</html>
```

### Colors, Styles, and Shadows

| **Propriedade** | **Descrição**                                                                 |
| --------------- | ----------------------------------------------------------------------------- |
| `fillStyle`     | Define ou retorna a cor, gradiente, ou padrão usado para preencher o desenho. |
| `strokeStyle`   | Define ou retorna a cor, gradiente, ou padrão usado para contornos.           |
| `shadowColor`   | Define ou retorna a cor a ser usada para sombras.                             |
| `shadowBlur`    | Define ou retorna o nível de desfoque para sombras.                           |
| `shadowOffsetX` | Define ou retorna a distância horizontal da sombra a partir da forma.         |
| `shadowOffsetY` | Define ou retorna a distância vertical da sombra a partir da forma.           |

#### Métodos:

| **Método**               | **Descrição**                                                       |
| ------------------------ | ------------------------------------------------------------------- |
| `createLinearGradient()` | Cria um gradiente linear (para uso no conteúdo do canvas).          |
| `createPattern()`        | Repete um elemento especificado na direção especificada.            |
| `createRadialGradient()` | Cria um gradiente radial/circular (para uso no conteúdo do canvas). |
| `addColorStop()`         | Especifica as cores e posições de parada em um objeto de gradiente. |

### Line Styles

| **Propriedade** | **Descrição**                                                              |
| --------------- | -------------------------------------------------------------------------- |
| `lineCap`       | Define ou retorna o estilo das extremidades de uma linha.                  |
| `lineJoin`      | Define ou retorna o tipo de junção criada quando duas linhas se encontram. |
| `lineWidth`     | Define ou retorna a largura atual da linha.                                |
| `miterLimit`    | Define ou retorna o comprimento máximo do chanfro.                         |

### Rectangles

#### Método:

| **Método**     | **Descrição**                                              |
| -------------- | ---------------------------------------------------------- |
| `rect()`       | Cria um retângulo.                                         |
| `fillRect()`   | Desenha um retângulo "preenchido".                         |
| `strokeRect()` | Desenha um retângulo (sem preenchimento).                  |
| `clearRect()`  | Limpa os pixels especificados dentro de um retângulo dado. |

### Paths

#### Método:

| **Método**           | **Descrição**                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| `fill()`             | Preenche o desenho atual (caminho).                                                                      |
| `stroke()`           | Desenha efetivamente o caminho que você definiu.                                                         |
| `beginPath()`        | Inicia um caminho ou redefine o caminho atual.                                                           |
| `moveTo()`           | Move o caminho para o ponto especificado no canvas, sem criar uma linha.                                 |
| `closePath()`        | Cria um caminho do ponto atual de volta ao ponto inicial.                                                |
| `lineTo()`           | Adiciona um novo ponto e cria uma linha para esse ponto a partir do último ponto especificado no canvas. |
| `clip()`             | Recorta uma região de qualquer forma e tamanho do canvas original.                                       |
| `quadraticCurveTo()` | Cria uma curva Bézier quadrática.                                                                        |
| `bezierCurveTo()`    | Cria uma curva Bézier cúbica.                                                                            |
| `arc()`              | Cria um arco/curva (usado para criar círculos ou partes de círculos).                                    |
| `arcTo()`            | Cria um arco/curva entre duas tangentes.                                                                 |
| `isPointInPath()`    | Retorna verdadeiro se o ponto especificado estiver no caminho atual, caso contrário, falso.              |

### Transformations

#### Método:

| **Método**       | **Descrição**                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| `scale()`        | Dimensiona o desenho atual para maior ou menor.                                                  |
| `rotate()`       | Gira o desenho atual.                                                                            |
| `translate()`    | Remapeia a posição (0,0) no canvas.                                                              |
| `transform()`    | Substitui a matriz de transformação atual para o desenho.                                        |
| `setTransform()` | Redefine a transformação atual para a matriz de identidade. Em seguida, executa a transformação. |

### Text

| **Propriedade** | **Descrição**                                                               |
| --------------- | --------------------------------------------------------------------------- |
| `font`          | Define ou retorna as propriedades atuais da fonte para o conteúdo de texto. |
| `textAlign`     | Define ou retorna o alinhamento atual para o conteúdo de texto.             |
| `textBaseline`  | Define ou retorna a linha de base de texto atual usada ao desenhar texto.   |

#### Métodos:

| **Método**      | **Descrição**                                                 |
| --------------- | ------------------------------------------------------------- |
| `fillText()`    | Desenha texto "preenchido" no canvas.                         |
| `strokeText()`  | Desenha texto no canvas (sem preenchimento).                  |
| `measureText()` | Retorna um objeto que contém a largura do texto especificado. |

### Image Drawing

#### Método:

| **Método**    | **Descrição**                                  |
| ------------- | ---------------------------------------------- |
| `drawImage()` | Desenha uma imagem, canvas ou vídeo no canvas. |

### Pixel Manipulation

| **Propriedade** | **Descrição**                                                        |
| --------------- | -------------------------------------------------------------------- |
| `width`         | Retorna a largura de um objeto ImageData.                            |
| `height`        | Retorna a altura de um objeto ImageData.                             |
| `data`          | Retorna um objeto que contém dados de imagem de um objeto ImageData. |

#### Métodos:

| **Método**          | **Descrição**                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| `createImageData()` | Cria um novo objeto ImageData em branco.                                                            |
| `getImageData()`    | Retorna um objeto ImageData que copia os dados de pixel para o retângulo especificado em um canvas. |
| `putImageData()`    | Coloca os dados de imagem (de um objeto ImageData especificado) de volta no canvas.                 |

### Compositing

| **Propriedade**            | **Descrição**                                                                  |
| -------------------------- | ------------------------------------------------------------------------------ |
| `globalAlpha`              | Define ou retorna o valor atual de alfa ou transparência do desenho.           |
| `globalCompositeOperation` | Define ou retorna como uma nova imagem é desenhada sobre uma imagem existente. |

### Outros

#### Método:

| **Método**      | **Descrição**                                                                  |
| --------------- | ------------------------------------------------------------------------------ |
| `save()`        | Salva o estado do contexto atual.                                              |
| `restore()`     | Retorna ao estado de caminho e atributos salvos anteriormente.                 |
| `createEvent()` | Cria um novo objeto de evento.                                                 |
| `getContext()`  | Retorna o contexto de desenho em 2D do canvas.                                 |
| `toDataURL()`   | Retorna uma representação da imagem no formato especificado (por padrão, PNG). |

### USO/ EXEMPLOS

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #tela {
        background-color: beige;
        width: 500px;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <canvas id="tela" width="500" height="500"></canvas>
    <script src="./js/script.js"></script>
  </body>
</html>
```

- É de extrema importancia determinar largura e altura diretamente na tag `<canvas>`.

**JS**

```js
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(250, 250);
ctx.lineTo(500, 0);
ctx.strokeStyle("#FF0000");
ctx.linewidth = 5;
ctx.stroke();
```

### Colors, Styles, and Shadows

| **Propriedade** | **Descrição**                                                                 |
| --------------- | ----------------------------------------------------------------------------- |
| `fillStyle`     | Define ou retorna a cor, gradiente, ou padrão usado para preencher o desenho. |
| `strokeStyle`   | Define ou retorna a cor, gradiente, ou padrão usado para contornos.           |
| `shadowColor`   | Define ou retorna a cor a ser usada para sombras.                             |
| `shadowBlur`    | Define ou retorna o nível de desfoque para sombras.                           |
| `shadowOffsetX` | Define ou retorna a distância horizontal da sombra a partir da forma.         |
| `shadowOffsetY` | Define ou retorna a distância vertical da sombra a partir da forma.           |

#### Métodos:

| **Método**               | **Descrição**                                                       |
| ------------------------ | ------------------------------------------------------------------- |
| `createLinearGradient()` | Cria um gradiente linear (para uso no conteúdo do canvas).          |
| `createPattern()`        | Repete um elemento especificado na direção especificada.            |
| `createRadialGradient()` | Cria um gradiente radial/circular (para uso no conteúdo do canvas). |
| `addColorStop()`         | Especifica as cores e posições de parada em um objeto de gradiente. |

### Line Styles

| **Propriedade** | **Descrição**                                                              |
| --------------- | -------------------------------------------------------------------------- |
| `lineCap`       | Define ou retorna o estilo das extremidades de uma linha.                  |
| `lineJoin`      | Define ou retorna o tipo de junção criada quando duas linhas se encontram. |
| `lineWidth`     | Define ou retorna a largura atual da linha.                                |
| `miterLimit`    | Define ou retorna o comprimento máximo do chanfro.                         |

### Rectangles

#### Método:

| **Método**     | **Descrição**                                              |
| -------------- | ---------------------------------------------------------- |
| `rect()`       | Cria um retângulo.                                         |
| `fillRect()`   | Desenha um retângulo "preenchido".                         |
| `strokeRect()` | Desenha um retângulo (sem preenchimento).                  |
| `clearRect()`  | Limpa os pixels especificados dentro de um retângulo dado. |

### Paths

#### Método:

| **Método**           | **Descrição**                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| `fill()`             | Preenche o desenho atual (caminho).                                                                      |
| `stroke()`           | Desenha efetivamente o caminho que você definiu.                                                         |
| `beginPath()`        | Inicia um caminho ou redefine o caminho atual.                                                           |
| `moveTo()`           | Move o caminho para o ponto especificado no canvas, sem criar uma linha.                                 |
| `closePath()`        | Cria um caminho do ponto atual de volta ao ponto inicial.                                                |
| `lineTo()`           | Adiciona um novo ponto e cria uma linha para esse ponto a partir do último ponto especificado no canvas. |
| `clip()`             | Recorta uma região de qualquer forma e tamanho do canvas original.                                       |
| `quadraticCurveTo()` | Cria uma curva Bézier quadrática.                                                                        |
| `bezierCurveTo()`    | Cria uma curva Bézier cúbica.                                                                            |
| `arc()`              | Cria um arco/curva (usado para criar círculos ou partes de círculos).                                    |
| `arcTo()`            | Cria um arco/curva entre duas tangentes.                                                                 |
| `isPointInPath()`    | Retorna verdadeiro se o ponto especificado estiver no caminho atual, caso contrário, falso.              |

### Transformations

#### Método:

| **Método**       | **Descrição**                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| `scale()`        | Dimensiona o desenho atual para maior ou menor.                                                  |
| `rotate()`       | Gira o desenho atual.                                                                            |
| `translate()`    | Remapeia a posição (0,0) no canvas.                                                              |
| `transform()`    | Substitui a matriz de transformação atual para o desenho.                                        |
| `setTransform()` | Redefine a transformação atual para a matriz de identidade. Em seguida, executa a transformação. |

### Text

| **Propriedade** | **Descrição**                                                               |
| --------------- | --------------------------------------------------------------------------- |
| `font`          | Define ou retorna as propriedades atuais da fonte para o conteúdo de texto. |
| `textAlign`     | Define ou retorna o alinhamento atual para o conteúdo de texto.             |
| `textBaseline`  | Define ou retorna a linha de base de texto atual usada ao desenhar texto.   |

#### Métodos:

| **Método**      | **Descrição**                                                 |
| --------------- | ------------------------------------------------------------- |
| `fillText()`    | Desenha texto "preenchido" no canvas.                         |
| `strokeText()`  | Desenha texto no canvas (sem preenchimento).                  |
| `measureText()` | Retorna um objeto que contém a largura do texto especificado. |

### Image Drawing

#### Método:

| **Método**    | **Descrição**                                  |
| ------------- | ---------------------------------------------- |
| `drawImage()` | Desenha uma imagem, canvas ou vídeo no canvas. |

### Pixel Manipulation

| **Propriedade** | **Descrição**                                                        |
| --------------- | -------------------------------------------------------------------- |
| `width`         | Retorna a largura de um objeto ImageData.                            |
| `height`        | Retorna a altura de um objeto ImageData.                             |
| `data`          | Retorna um objeto que contém dados de imagem de um objeto ImageData. |

#### Métodos:

| **Método**          | **Descrição**                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| `createImageData()` | Cria um novo objeto ImageData em branco.                                                            |
| `getImageData()`    | Retorna um objeto ImageData que copia os dados de pixel para o retângulo especificado em um canvas. |
| `putImageData()`    | Coloca os dados de imagem (de um objeto ImageData especificado) de volta no canvas.                 |

### Compositing

| **Propriedade**            | **Descrição**                                                                  |
| -------------------------- | ------------------------------------------------------------------------------ |
| `globalAlpha`              | Define ou retorna o valor atual de alfa ou transparência do desenho.           |
| `globalCompositeOperation` | Define ou retorna como uma nova imagem é desenhada sobre uma imagem existente. |

### Outros

#### Método:

| **Método**      | **Descrição**                                                                  |
| --------------- | ------------------------------------------------------------------------------ |
| `save()`        | Salva o estado do contexto atual.                                              |
| `restore()`     | Retorna ao estado de caminho e atributos salvos anteriormente.                 |
| `createEvent()` | Cria um novo objeto de evento.                                                 |
| `getContext()`  | Retorna o contexto de desenho em 2D do canvas.                                 |
| `toDataURL()`   | Retorna uma representação da imagem no formato especificado (por padrão, PNG). |

## HTML AVANÇADO - CANVAS - RETANGULO

- No HTML5, o elemento `<canvas>` proporciona uma área de desenho para gráficos e elementos visuais usando JavaScript. Vamos explorar como desenhar retângulos básicos em um canvas.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Canvas Rectangle Example</title>
    <style>
      canvas {
        border: 1px solid #000;
      }
    </style>
  </head>
  <body>
    <canvas id="myCanvas" width="300" height="150"></canvas>

    <script>
      // Obtendo o contexto 2D do canvas
      const canvas = document.getElementById("myCanvas");
      const context = canvas.getContext("2d");

      // Desenhando um retângulo preenchido
      context.fillStyle = "#3498db"; // Cor de preenchimento
      context.fillRect(50, 25, 200, 100); // (x, y, largura, altura)

      // Desenhando um retângulo contornado
      context.strokeStyle = "#e74c3c"; // Cor do contorno
      context.lineWidth = 3; // Largura do contorno
      context.strokeRect(30, 10, 240, 130);
    </script>
  </body>
</html>
```

- Neste exemplo, usamos o método `fillRect()` para desenhar um retângulo preenchido e `strokeRect()` para desenhar um retângulo contornado. Podemos ajustar as propriedades, como cor e tamanho, para personalizar a aparência dos retângulos. Essas operações são realizadas usando o contexto 2D do canvas.

### USO/ EXEMPLOS

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #tela {
        background-color: beige;
        width: 500px;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <canvas id="tela" width="500" height="500"></canvas>
    <script src="./js/script.js"></script>
  </body>
</html>
```

**JS**

```js
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

// ctx.fillStyle = "blue";
// ctx.fillRect(0, 0, 250, 250)

// ctx.strokeStyle = "red";
// ctx.strokeRect(0, 0, 250, 250);

ctx.rect(0, 0, 250, 250);
ctxfillStyle = "blue";
ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.fill();
ctx.strokeStyle();

//Limpar o retangulo
ctx.clearRect(20, 20, 30, 30);
```

## HTML AVANÇADO - CANVAS - INICIO E FIM DO CAMINHO

- Em HTML5 Canvas, `beginPath` e `closePath` são métodos que ajudam a definir e fechar um caminho para desenho de formas complexas. O método `beginPath` inicia um novo caminho, enquanto `closePath` fecha o caminho atual, criando uma forma fechada. Vamos explorar esses conceitos com exemplos.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Canvas BeginPath and ClosePath Example</title>
    <style>
      canvas {
        border: 1px solid #000;
      }
    </style>
  </head>
  <body>
    <canvas id="myCanvas" width="300" height="150"></canvas>

    <script>
      // Obtendo o contexto 2D do canvas
      const canvas = document.getElementById("myCanvas");
      const context = canvas.getContext("2d");

      // Iniciando um novo caminho
      context.beginPath();

      // Desenhando um retângulo no novo caminho
      context.rect(50, 25, 200, 100); // (x, y, largura, altura)

      // Fechando o caminho
      context.closePath();

      // Preenchendo o retângulo com uma cor
      context.fillStyle = "#3498db";
      context.fill();
    </script>
  </body>
</html>
```

- Neste exemplo, `beginPath` é usado para iniciar um novo caminho, e `rect` é usado para desenhar um retângulo nesse caminho. Em seguida, `closePath` é usado para fechar o caminho. A cor de preenchimento é definida usando `fillStyle`, e a forma é preenchida usando `fill()`. Esses métodos são fundamentais para desenhar formas mais complexas no canvas.

### USO/ EXEMPLOS

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #tela {
        background-color: beige;
        width: 500px;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <canvas id="tela" width="500" height="500"></canvas>
    <script src="./js/script.js"></script>
  </body>
</html>
```

**JS**

```js
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

ctx.beginPath();
ctx.linewidth = 4;
ctx.strokeStyle = "red";
ctx.moveTo(10, 10);
ctx.lineTo(400, 300);
ctx.stroke();

ctx.beginPath();

ctx.lineWidth = 7;
ctx.strokeStyle = "blue";
ctx.fillStyle = "green";
ctx.moveTo(50, 10);
ctx.lineTo(300, 300);
ctx.lineTo(200, 300);
// ctx.closePath()
ctx.fillStyle();
ctx.stroke();
```

## HTML AVANÇADO - CANVAS - CIRCULO

- Em HTML5 Canvas, desenhar um círculo envolve o uso do método `arc()`. Este método cria um arco/curva, que, quando combinado, forma um círculo. Vamos explorar como desenhar um círculo no canvas com um exemplo prático.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Canvas Circle Example</title>
    <style>
      canvas {
        border: 1px solid #000;
      }
    </style>
  </head>
  <body>
    <canvas id="myCanvas" width="300" height="150"></canvas>

    <script>
      // Obtendo o contexto 2D do canvas
      const canvas = document.getElementById("myCanvas");
      const context = canvas.getContext("2d");

      // Desenhando um círculo
      context.beginPath();
      context.arc(150, 75, 50, 0, 2 * Math.PI); // (x, y, raio, ponto inicial, ponto final)
      context.closePath();

      // Preenchendo o círculo com uma cor
      context.fillStyle = "#e74c3c";
      context.fill();
    </script>
  </body>
</html>
```

- Neste exemplo, `arc` é usado para definir um arco que forma um círculo. Os parâmetros para `arc` incluem as coordenadas do centro do círculo `(x, y)`, o raio do círculo e os ângulos inicial e final (em radianos) que determinam a extensão do círculo. `fillStyle` define a cor de preenchimento e `fill()` preenche o círculo.

### USO/ EXEMPLOS

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #tela {
        background-color: beige;
        width: 500px;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <canvas id="tela" width="500" height="500"></canvas>
    <script src="./js/script.js"></script>
  </body>
</html>
```

**JS**

```js
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let x = 250;

let y = 250;

let raio = 100;

let incio = 0;

let fim = 2 * Math.PI;

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "blue";
ctx.arc(x, y, raio, inicio, fim);
ctx.fill();
ctx.stroke();
```

## HTML AVANÇADO - CANVAS - ANIMAÇÕES

- Em HTML5 Canvas, é possível criar animações fluidas, aproveitando a natureza dinâmica do JavaScript. As animações no canvas envolvem desenhar quadros consecutivos em intervalos regulares para criar a ilusão de movimento. Aqui está um exemplo básico de uma animação que move um quadrado no canvas.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Canvas Animation Example</title>
    <style>
      canvas {
        border: 1px solid #000;
      }
    </style>
  </head>
  <body>
    <canvas id="myCanvas" width="400" height="200"></canvas>

    <script>
      const canvas = document.getElementById("myCanvas");
      const context = canvas.getContext("2d");
      let squareX = 50;

      function drawSquare() {
        context.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
        context.fillRect(squareX, 50, 50, 50); // Desenha um quadrado
        squareX += 2; // Move o quadrado para a direita
        requestAnimationFrame(drawSquare); // Próximo quadro
      }

      drawSquare(); // Inicia a animação
    </script>
  </body>
</html>
```

- Neste exemplo, a função `drawSquare` é chamada repetidamente usando `requestAnimationFrame`. A cada quadro, o canvas é limpo, um quadrado é desenhado em uma nova posição e, em seguida, o quadrado é movido para a direita. Isso cria uma animação contínua de deslocamento do quadrado no canvas.

### USO/ EXEMPLOS

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #tela {
        background-color: beige;
        width: 500px;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <canvas id="tela" width="500" height="500"></canvas>
    <script src="./js/script.js"></script>
  </body>
</html>
```

**JS**

```js
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let circulo = {
  x: 250,
  y: 250,
  raio: 100,
  inicio: 0,
  fim: 2 * Math.PI,
  antiHor: false,
};

function desenhaCirculo(circulo) {
  ctx.beginPath();
  ctx.rect(0, 0, 500, 500);
  ctx.fillStyle = "beige";
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.fillStyle = "blue";
  ctx.arc(circulo.x, circulo.y, circulo.raio, circulo.inicio, circulo.fim);
  ctx.fill();
  ctx.stroke();
}

setInterval(() => {
  if (circulo.fim < 2 * Math.PI()) {
    circulo.fim += 0.3;
    circulo.x += 3;
  }
  desenhaCirculo(circulo);
}, 50);
```

## HTML AVANÇADO - CANVAS - IMAGENS

- O elemento Canvas em HTML5 permite a fácil manipulação e exibição de imagens no contexto gráfico do navegador. Você pode desenhar imagens diretamente no canvas, redimensioná-las, cortá-las e até mesmo aplicar transformações. Abaixo, temos um exemplo simples de como desenhar uma imagem em um canvas.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Canvas Image Example</title>
  </head>
  <body>
    <canvas id="myCanvas" width="400" height="200"></canvas>

    <script>
      const canvas = document.getElementById("myCanvas");
      const context = canvas.getContext("2d");
      const img = new Image();

      img.onload = function () {
        context.drawImage(img, 50, 50, 100, 100); // Desenha a imagem no canvas
      };

      img.src = "path/to/your/image.jpg"; // Substitua pelo caminho da sua imagem
    </script>
  </body>
</html>
```

- Neste exemplo, uma imagem é carregada usando o elemento Image. Quando a imagem é totalmente carregada, a função drawImage é chamada para desenhá-la no canvas. Você pode ajustar as coordenadas e dimensões conforme necessário para posicionar e redimensionar a imagem no canvas.

- Lembre-se de substituir 'path/to/your/image.jpg' pelo caminho real da sua imagem.

### USO/ EXEMPLOS

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #tela {
        background-color: beige;
        width: 500px;
        height: 500px;
      }
    </style>
  </head>
  <body>
    <img
      id="suaImagem"
      alt="suaImagem"
      src="./imagens/suaImagem.png"
      style="display: none"
    />
    <canvas id="tela" width="500" height="500"></canvas>
    <script src="./js/script.js"></script>
  </body>
</html>
```

**JS**

```js
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let img = document.getElementById("suaImagem");

ctx.drawImage(img, 20, 20);
```
