import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/PostAPI';
import { Box, List, ListItem } from '@mui/material';
import Post from './Post';
import { containerStyle } from "../styles/PostContainerStyle";

const PostContainer = (props) => {

  useEffect(() => {
    fetchPosts(props.sectionId, props.setPosts);
  }, [props.sectionId]);
  
  return (
    <>
     <Box sx={containerStyle}>
       <List>
         {props.posts.map(item => (
           <ListItem key={item.id}>
             <Post post={item} {...item} setPosts={props.setPosts}/>
           </ListItem>
         ))}
       </List>
     </Box>
    </>
  );
}

export default PostContainer;