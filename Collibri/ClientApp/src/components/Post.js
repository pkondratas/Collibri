import React, { useEffect, useState } from 'react';
import {Box, Card, CardContent, Typography, Button, CardActionArea} from '@mui/material';
import {
  ThumbUp,
  ThumbUpAltOutlined,
  ThumbDown,
  ThumbDownOffAltOutlined,
  DeleteOutline,
  EditOutlined
} from '@mui/icons-material';
import {
  postCardStyle,
  postContentBoxStyle,
  postEditingBox,
  postEditingButtons,
  postNoteStyle, postReactionButtons
} from '../styles/PostStyle';
import { deletePost, updatePost } from '../api/PostAPI';
import '../styles/post.css';
import UpdatePostModal from "./Modals/UpdatePostModal";
import DeleteModal from "./Modals/DeleteModal";
import PostModal from "./Modals/PostModal";


const Post = (props) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [post, setPost] = useState(props.post);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [postModal, setPostModal] = useState(false);
    
  const handleDelete = (postId) => {
    deletePost(postId)
      .then(deletedData => {
        props.setPosts((prevPosts) => prevPosts.filter((x) => x.id !== deletedData.id));
      })
  }

  const updatePostContent = (propertyToUpdate, value) => {
    const updatedPost = {
      ...post,
      [propertyToUpdate]: value
    };
    updatePost(post.id, updatedPost);
    setPost(updatedPost);
  }
  
  const updateReactionCounts = (likes, dislikes) => {
    const updatedPost = {
      ...post,
      "likeCount": likes,
      "dislikeCount": dislikes
    };
    updatePost(post.id, updatedPost);
    setPost(updatedPost);
  }

  const handleLike = (event) => {
    event.stopPropagation();
    
    let likes = post.likeCount;
    let dislikes = post.dislikeCount;
    
    if(disliked) {
      dislikes = post.dislikeCount - 1;
      setDisliked(!disliked);
    }
    
    if(!liked) {
      likes = post.likeCount + 1;
    } else {
      likes = post.likeCount - 1;
    }
    updateReactionCounts(likes, dislikes);
    setLiked(!liked);
  }

  const handleDislike = (event) => {
    event.stopPropagation();
    
    let likes = post.likeCount;
    let dislikes = post.dislikeCount;
    
    if(liked) {
      likes = post.likeCount - 1;
      setLiked(!liked);
    }

    if(!disliked) {
      dislikes = post.dislikeCount + 1;
    } else {
      dislikes = post.dislikeCount - 1;
    }
    updateReactionCounts(likes, dislikes);
    setDisliked(!disliked);
  }
  
  return(
    <>
      <Card hover className="Card" sx={postCardStyle}>
        <CardActionArea disableRipple onClick={() => {
          setPostModal(true);
        }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {props.title}
            </Typography>
            <Box sx={postContentBoxStyle}>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={postNoteStyle}
              >
                {post.description}
              </Typography>
              <Box sx={postEditingBox}>
                <Button sx={postEditingButtons} className="Button" onClick={(event) => {
                  event.stopPropagation();
                  setDeleteModal(true);
                }}>
                  <DeleteOutline fontSize="small" />
                </Button>
                <Button sx={postEditingButtons} className="Button" onClick={(event) => {
                  event.stopPropagation();
                  setUpdateModal(true);
                }}>
                  <EditOutlined fontSize="small" />
                </Button>
              </Box>
            </Box>
            <Typography>
              <Button onClick={handleLike}>
                {post.likeCount} {liked ? <ThumbUp fontSize="small" sx={postReactionButtons} /> : <ThumbUpAltOutlined fontSize="small" sx={postReactionButtons}/>}
              </Button>
              <Button onClick={handleDislike}>
                {post.dislikeCount} {disliked ? <ThumbDown fontSize="small" sx={postReactionButtons} /> : <ThumbDownOffAltOutlined fontSize="small" sx={postReactionButtons} />}
              </Button>
              <Typography variant="caption">
                Last edited: {post.lastUpdatedDate ? post.lastUpdatedDate.toLocaleString() : 'Loading...'}
              </Typography>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <UpdatePostModal post={post} {...post} updateModal={updateModal} setUpdateModal={setUpdateModal} updatePost={updatePost} updatePostContent={updatePostContent} />
      <DeleteModal id={props.id} deleteModal={deleteModal} setDeleteModal={setDeleteModal} handleDelete={handleDelete} />
      <PostModal 
        post={post} 
        {...post} 
        postModal={postModal} 
        setPostModal={setPostModal} 
        liked={liked}
        disliked={disliked}
        handleLike={handleLike}
        handleDislike={handleDislike}
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
      />
    </>
  )
}

export default Post;