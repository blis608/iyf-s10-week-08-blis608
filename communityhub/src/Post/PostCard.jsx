function PostCard({ post, onLike, onDelete }) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>

      <small>
        {post.author} • {post.date}
      </small>

      <div className="post-actions">
        <button onClick={() => onLike(post.id)}>
          ❤️ {post.likes}
        </button>

        <button onClick={() => onDelete(post.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default PostCard;