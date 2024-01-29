// let tela = document.getElementById("tela");

// let ctx = tela.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(250, 250);
// ctx.lineTo(500, 0);
// ctx.strokeStyle("#FF0000");
// ctx.linewidth = 5;
// ctx.stroke();

// let tela = document.getElementById("tela");

// let ctx = tela.getContext("2d");

// // ctx.fillStyle = "blue";
// // ctx.fillRect(0, 0, 250, 250)

// // ctx.strokeStyle = "red";
// // ctx.strokeRect(0, 0, 250, 250);

// ctx.rect(0, 0, 250, 250);
// ctxfillStyle = "blue";
// ctx.lineWidth = 5;
// ctx.strokeStyle = "red";
// ctx.fill();
// ctx.strokeStyle();

// //Limpar o retangulo
// ctx.clearRect(20, 20, 30, 30);

// let tela = document.getElementById("tela");

// let ctx = tela.getContext("2d");

// ctx.beginPath();
// ctx.linewidth = 4;
// ctx.strokeStyle = "red";
// ctx.moveTo(10, 10);
// ctx.lineTo(400, 300);
// ctx.stroke();

// ctx.beginPath();

// ctx.lineWidth = 7;
// ctx.strokeStyle = "blue";
// ctx.fillStyle = "green";
// ctx.moveTo(50, 10);
// ctx.lineTo(300, 300);
// ctx.lineTo(200, 300);
// // ctx.closePath()
// ctx.fillStyle();
// ctx.stroke();

// let tela = document.getElementById("tela");

// let ctx = tela.getContext("2d");

// let x = 250;

// let y = 250;

// let raio = 100;

// let incio = 0;

// let fim = 2 * Math.PI;

// ctx.beginPath();
// ctx.strokeStyle = "red";
// ctx.fillStyle = "blue";
// ctx.arc(x, y, raio, inicio, fim);
// ctx.fill();
// ctx.stroke();

// let tela = document.getElementById("tela");

// let ctx = tela.getContext("2d");

// let circulo = {
//   x: 250,
//   y: 250,
//   raio: 100,
//   inicio: 0,
//   fim: 2 * Math.PI,
//   antiHor: false,
// };

// function desenhaCirculo(circulo) {
//   ctx.beginPath();
//   ctx.rect(0, 0, 500, 500);
//   ctx.fillStyle = "beige";
//   ctx.fill();

//   ctx.beginPath();
//   ctx.strokeStyle = "red";
//   ctx.fillStyle = "blue";
//   ctx.arc(circulo.x, circulo.y, circulo.raio, circulo.inicio, circulo.fim);
//   ctx.fill();
//   ctx.stroke();
// }

// setInterval(() => {
//   if (circulo.fim < 2 * Math.PI()) {
//     circulo.fim += 0.3;
//     circulo.x += 3;
//   }
//   desenhaCirculo(circulo);
// }, 50);

let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let img = document.getElementById("suaImagem");

ctx.drawImage(img, 20, 20);
