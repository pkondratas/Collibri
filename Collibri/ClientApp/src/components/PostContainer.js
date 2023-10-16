import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/PostAPI';
import { Box, List, ListItem } from '@mui/material';
import Post from './Post';

const PostContainer = (props) => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(props.sectionId, setPosts);
  }, [props.sectionId]);
  
  return (
    <>
     <Box>
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