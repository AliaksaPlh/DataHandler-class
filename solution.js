class DataHandler {
  posts;

  constructor() {
    this.posts = [];
  }

  async fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // server request and response as result
    const data = await response.json();
    this.posts = data;
  }

  listPosts() {
    this.posts.sort((a, b) => (a.title > b.title ? 1 : -1));
    return this.posts;
  }

  getPost(id) {
    return this.posts.find((post) => post.id === id);
  }

  clearPosts() {
    this.posts = [];
  }
}

const dataHandler = new DataHandler();

dataHandler.fetchPosts().then(() => console.log(dataHandler.listPosts()));
// console.log(dataHandler.listPosts());
