import PostCard from "./PostCard";

function PostList({ posts = [], onLike, onDelete }) {
  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={onLike}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default PostList;