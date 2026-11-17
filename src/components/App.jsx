import { useState } from "react";

import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      date: "December 10, 2020",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ]);

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");

  function addPost(e) {
    e.preventDefault();

    if (!title.trim() || !preview.trim()) return;

    const newPost = {
      id: Date.now(),
      title,
      date: new Date().toLocaleDateString(),
      preview,
      minutes: 3,
    };

    setPosts([newPost, ...posts]);

    setTitle("");
    setPreview("");
  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header />

      <div className="layout">
        <About />

        <main>
          <h2>Latest Articles</h2>

          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <form onSubmit={addPost}>
            <h3>Create a post</h3>

            <input
              type="text"
              placeholder="Post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Write your post preview..."
              value={preview}
              onChange={(e) => setPreview(e.target.value)}
            />

            <button type="submit">Publish Post</button>
          </form>

          <ArticleList posts={filteredPosts} />
        </main>
      </div>
    </div>
  );
}

export default App;