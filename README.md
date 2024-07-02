# DataHandler-class

Create a DataHandler class.
Required methods:

- fetchPosts() - fetches the data and stores it internally. Returns a promise to let the
  consumer code know the operation is done. (Data -
  https://jsonplaceholder.typicode.com/posts)
- listPosts() - returns the whole set of posts sorted alphabetically by titles
- getPost(id) - returns the post object with given id
- clearPosts() - deletes all the stored posts
  Optionally: use Map for storing the posts.
