// src/api/posts.jsx
import axios from "axios";

// Make sure this PORT/PATH matches your backend (json-server, Express, etc.)
const API_URL = "http://localhost:3000/posts";

export async function fetchPosts() {
  const res = await axios.get(API_URL);
  return res.data;           // should be an array
}

export async function createPost(post) {
  const res = await axios.post(API_URL, post);
  return res.data;
}

export async function deletePost(id) {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
}
