import React, { useState, useEffect } from "react";
import axios from "axios";

export function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // Fetch all posts
  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/posts", config);
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Create or Update post
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(
          `http://localhost:5000/api/posts/${editingId}`,
          { title, content },
          config
        );
        setEditingId(null);
      } else {
        await axios.post(
          "http://localhost:5000/api/posts",
          { title, content },
          config
        );
      }
      setTitle("");
      setContent("");
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };


  // Edit post
  const handleEdit = (post) => {
    setEditingId(post._id);
    setTitle(post.title);
    setContent(post.content);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // Filtered posts
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="form-section">
        <h2>{editingId ? "Edit Post" : "New Post"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit">{editingId ? "Update" : "Add"} Post</button>
        </form>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="posts-section">
        {filteredPosts.map((post) => (
          <div className="post-card" key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="post-actions">
              <button onClick={() => handleEdit(post)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
