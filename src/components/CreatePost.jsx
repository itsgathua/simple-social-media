import React, { useState } from "react";

function CreatePost({ addPost }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addPost(content);
      setContent("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginBottom: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "10px" }}
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        style={{
          width: "100%",
          height: "80px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Post
      </button>
    </form>
  );
}

export default CreatePost;
