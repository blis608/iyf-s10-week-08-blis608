import { useState } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Sidebar from "./components/Layout/Sidebar";
import PostList from "./components/Post/PostList";
import CreatePost from "./components/Post/CreatePost";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      content: "Hello world",
      author: "Irene",
      date: "May 4",
      likes: 0,
    },
    {
      id: 2,
      title: "React is fun",
      content: "Learning React step by step",
      author: "Irene",
      date: "May 5",
      likes: 0,
    },
  ]);

  const [search, setSearch] = useState("");

  // ✅ ADD POST (correct)
  const addPost = (newPost) => {
    setPosts((prev) => [
      ...prev,
      {
        ...newPost,
        id: Date.now(),
        likes: 0,
      },
    ]);
  };

  // ✅ LIKE POST (correct)
  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  // ✅ DELETE POST (correct)
  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  // ✅ FILTER POSTS (safe)
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />

      {/* Search */}
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Create Post */}
      <CreatePost onAdd={addPost} />

      <div className="layout">
        <PostList
          posts={filteredPosts}
          onLike={handleLike}
          onDelete={deletePost}
        />
        <Sidebar />
      </div>

      <Footer />
    </div>
  );
}

export default App;