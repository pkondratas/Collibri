import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/PostAPI';
import { Box, List, ListItem } from '@mui/material';
import Post from './Post';
import { containerStyle } from "../styles/PostContainerStyle";

const PostContainer = (props) => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(props.sectionId, setPosts);
  }, [props.sectionId]);
  
  return (
    <>
     <Box sx={containerStyle}>
       <List>
         {posts.map(item => (
           <ListItem key={item.postId}>
             <Post post={item} {...item} setPosts={setPosts}/>
           </ListItem>
         ))}
       </List>
     </Box>
    </>
  );
}

export default PostContainer;