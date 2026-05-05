import { useState } from "react";

function CreatePost({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    onAdd({
      title: title.trim(),
      content: content.trim(),
      author: "Irene",
      date: new Date().toLocaleDateString(),
    });

    setTitle("");
    setContent("");
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePost;