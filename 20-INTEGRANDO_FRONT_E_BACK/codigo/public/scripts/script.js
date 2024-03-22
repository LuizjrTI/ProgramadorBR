const URL = "http://192.168.101.2:3000";
const GETURL = "/api/all";
const POSTURL = "/api/new";

document.addEventListener("DOMContentLoaded", () => {
  atualizarPosts();
});

function atualizarPosts() {
  fetch(`${URL}${GETURL}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let listaPosts = "";
      let posts = JSON.parse(json);
      posts.forEach((post) => {
        let elemento = `<div id=${post.id} class="card mb-4">
        <div class="card-header d-flex justify-content-between">
            <h5 class="card-title">${post.title}</h5>
            <button id="lixeira" onclick="deletarPost()"><img src="./assets/trash.svg" alt="lixeira"></button>
        </div>
        <div class="card-body">
            <div class="card-text">${post.description}</div>
        </div>
    </div>`;
        listaPosts += elemento;
      });
      document.getElementById("posts").innerHTML = listaPosts;
    });
}

function inserirPost() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  let post = { title, description };

  const opt = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(post),
  };
  console.log("🚀 ~ fetch ~ `${URL}${POSTURL}`:", `${URL}${POSTURL}`);
  fetch(`${URL}${POSTURL}`, opt).then((res) => {
    atualizarPosts();

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  });
}
