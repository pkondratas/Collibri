import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/PostAPI';
import {Box, List, ListItem, Typography} from '@mui/material';
import Post from './Post';
import { containerStyle } from "../styles/PostContainerStyle";

const PostContainer = (props) => {

  useEffect(() => {
    fetchPosts(props.sectionId, props.setPosts);
  }, [props.sectionId]);
  
  if(props.sectionId === 0) {
      return (
          <>
              <Box sx={containerStyle}>
                  <Typography>
                      No section selected.
                  </Typography>
              </Box>
          </>
      );
  }
  else if (props.posts.length === 0) {
      return (
          <>
              <Box sx={containerStyle}>
                  <Typography>
                      No posts created.
                  </Typography>
              </Box>
          </>
      );
  }
  else {
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
  
}

export default PostContainer;