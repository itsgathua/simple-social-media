import React, { useState } from "react";
import PostCard from "./PostCard";
import CreatePost from "./CreatePost";

function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "JaneDoe",
      content: "Just finished my React project!",
      time: "2 hours ago",
      likes: 5,
      comments: [],
    },
    {
      id: 2,
      username: "JohnDoe",
      content: "Loving the weather today 🌞",
      time: "5 hours ago",
      likes: 3,
      comments: ["Beautiful day indeed!", "Enjoy it!"],
    },
  ]);

  const addPost = (content) => {
    const newPost = {
      id: posts.length + 1,
      username: "JohnDoe", // Default user
      content,
      time: "Just now",
      likes: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  const toggleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  const addComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <div>
      <CreatePost addPost={addPost} />
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={() => toggleLike(post.id)}
          onAddComment={(comment) => addComment(post.id, comment)}
        />
      ))}
    </div>
  );
}

export default Feed;
