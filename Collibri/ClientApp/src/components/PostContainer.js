import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from 'axios';

const PostContainer = () => {
  
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios.get('/v1/posts?sectionId=2')
      .then(response => setPosts(response.data))
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  
  return (
    <div>
      <ul>
        {posts.map(item => (
          <Post key={item.postId} post={item} {...item} setPosts={setPosts}/>
        ))}
      </ul>
    </div>
  );
}

export default PostContainer;