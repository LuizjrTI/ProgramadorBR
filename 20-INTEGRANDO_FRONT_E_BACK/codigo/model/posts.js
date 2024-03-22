module.exports = {
  posts: [],
  inserirPost(title, description) {
    this.posts.push({ id: gerarID(), title, description });
  },
  obterTodosPosts() {
    return this.posts;
  },
  removerPost(id) {
    for (let index = 0; index < this.posts.length; index++) {
      if (this.posts[index].id == id) {
        this.posts.splice(index, 1);
        return;
      }
    }
  },
};

function gerarID() {
  return Math.random().toString(36).substring(2, 9);
}
