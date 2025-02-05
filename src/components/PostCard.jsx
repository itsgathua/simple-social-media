import React, { useState } from "react";

function PostCard({ post, onLike, onAddComment }) {
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment(comment);
      setComment("");
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "15px",
      }}
    >
      <h3>@{post.username}</h3>
      <p>{post.content}</p>
      <small style={{ color: "gray" }}>{post.time}</small>
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={onLike}
          style={{
            padding: "5px 10px",
            marginRight: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Like ({post.likes})
        </button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <h4>Comments</h4>
        {post.comments.length > 0 ? (
          <ul style={{ paddingLeft: "20px" }}>
            {post.comments.map((c, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>
                {c}
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
        <form onSubmit={handleCommentSubmit} style={{ marginTop: "10px" }}>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            style={{
              width: "80%",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginRight: "5px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "5px 10px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostCard;
