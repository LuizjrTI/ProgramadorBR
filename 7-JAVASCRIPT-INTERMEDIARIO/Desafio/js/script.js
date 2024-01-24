function adicionarTarefa() {
  let recuperaListaTarefas = localStorage.getItem("listaTarefas");
  let nomeNovaTarefa = document.getElementById("tarefa").value;

  if (recuperaListaTarefas !== null) {
    let tarefas = JSON.parse(recuperaListaTarefas);
    tarefas.listaTarefas.push(nomeNovaTarefa);
    localStorage.setItem("listaTarefas", JSON.stringify(tarefas));
  } else {
    let tarefas = { listaTarefas: [] };
    tarefas.listaTarefas.push(nomeNovaTarefa);
    localStorage.setItem("listaTarefas", JSON.stringify(tarefas));
  }
  this.exbirListarTarefa();
}

function limparListarTarefa() {
  let listaTarefas = localStorage.getItem("listaTarefas");
  if (listaTarefas != null) {
    localStorage.removeItem("listaTarefas");
  }
  this.exbirListarTarefa();
}

function exbirListarTarefa() {
  let elementoAnterior = document.getElementById("Container-input");
  console.log(elementoAnterior);
  let tarefas = JSON.parse(localStorage.getItem("listaTarefas"));
  document.write(
    elementoAnterior +
      "<div>" +
      "<ol>" +
      tarefas.listaTarefas.forEach((element) => {
        document.write("<li>" + element + "</li>");
      }) +
      "</ol>" +
      "</div>"
  );
}
