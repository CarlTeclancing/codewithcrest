import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ title: "", body: "" });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data.slice(0, 5)); // Just load first 5 for demo
  };

  const createPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    const newPost = await res.json();
    setPosts([newPost, ...posts]);
    setFormData({ title: "", body: "" });
  };
 
  const updatePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ title: "Updated Title" }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    const updated = await res.json();
    setPosts(posts.map(post => (post.id === id ? { ...post, ...updated } : post)));
  };


  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });

    setPosts(posts.filter(post => post.id !== id));
  };


  return (
    <div>
      <h2>CRUD Example</h2>

      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Body"
        value={formData.body}
        onChange={(e) => setFormData({ ...formData, body: e.target.value })}
      />
      <button onClick={createPost}>Add Post</button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <button onClick={() => updatePost(post.id)}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
