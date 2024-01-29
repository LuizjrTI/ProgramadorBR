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
  let resultadoTarefas = document.getElementById("resultado");
  if (listaTarefas != null) {
    localStorage.removeItem("listaTarefas");
    resultadoTarefas.innerHTML = "";
  }
}

function exbirListarTarefa() {
  let resultadoTarefas = document.getElementById("resultado");
  let retornolistaTarefas = JSON.parse(localStorage.getItem("listaTarefas"));
  console.log(retornolistaTarefas.listaTarefas);
  retornolistaTarefas.listaTarefas.forEach((element) => {
    resultadoTarefas.innerHTML += `<li>${element}</li>`;
  });
}
