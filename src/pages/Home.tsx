import React, { useState, useReducer, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios, { AxiosResponse, AxiosError } from 'axios';
const Axios = axios.defaults;

interface postProps {
  title: String;
  body: String
}

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts" 
});
export const Home = () => {
  const [post, setPost] = useState<postProps>();
  
  useEffect(() => {
    async function getPost() {
      const response: AxiosResponse<any> = await axios.get("/1");
      setPost(response.data);
    }
    getPost();
  }, []);

  async function deletePost() {
    await client.delete("/1");
    alert("Post deleted!");
  }

  if (!post) return "No post!"
  return (
    <>
      <Header />
      <img
        src="/assets/homepage.jpg"
        alt="Homepage image"
        height="919px"
        />
      <br />

      {/* <div>
        <h3> Create post </h3>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <button onClick={createPost}>Create Post</button>
      </div> */}
      <div>
      <h3> Get posts </h3>
        <ul>
          <li>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </li>
          <li>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </li>
          <li>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </li>
        </ul>
      </div>
      <br />
      {/* <div>
        <h3> Update post </h3>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <button onClick={updatePost}>Update Post</button>
      </div> */}
      <div>
        <h3> Delete post </h3>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={deletePost}>Delete Post</button>
      </div>

      <br />
      <Footer />
    </>
  );
}


